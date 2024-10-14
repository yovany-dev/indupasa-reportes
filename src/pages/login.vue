<template>
  <v-container class="content pa-0 bg-white rounded">
    <v-row no-gutters justify="center">
      <v-col>
        <v-sheet class="d-flex justify-center bg-gray">
          <img class="w-100" :src="logoIndupasaReportes" alt="Logo Indupasa">
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="line bg-v-light-green"></v-sheet>
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
          class="px-5 py-10"
        >
          <v-text-field
            v-model.trim="user.email"
            :rules="emailRules"
            label="Correo electrónico"
            type="email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            v-model.trim="user.password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            label="Contraseña"
            prepend-inner-icon="mdi-lock"
          >
            <template v-slot:append-inner>
              <v-icon
                v-if="showPassword"
                @click="handleShowAndHide"
              >mdi-eye</v-icon>
              <v-icon
                v-else
                @click="handleShowAndHide"
              >mdi-eye-off</v-icon>
            </template>
          </v-text-field>
          <p v-show="state.errorMessage" class="text-error text-center my-2">Usuario o contraseña incorrectos.</p>
          <Button
            text="Ingresar"
            :loading="state.loading"
            class="mt-4 w-100"
          />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useFirebaseAuth } from 'vuefire';
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { emailRules, passwordRules } from "@/common/inputRules";
  import logoIndupasaReportes from '@/assets/logo-indupasa-reportes.svg';
  import Button from "@/common/components/Button.vue";

  const auth = useFirebaseAuth()!;
  const router = useRouter();
  const form = ref(false);
  const showPassword = ref(false);
  const state = reactive({
    loading: false,
    errorMessage: false
  });
  const user = reactive({
    email: '',
    password: ''
  });

  const handleShowAndHide = () => {
    showPassword.value = !showPassword.value;
  }
  const onSubmit = () => {
    if (!form.value) return;
    state.loading = true;

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        router.push('/');
      })
      .catch((error) => {
        state.loading = false;
        state.errorMessage = true;
        throw new Error(error);
      });
  }
</script>

<style scoped lang="scss">
  .content {
    max-width: 500px;
    height: min-content;
  }
  .line {
    width: 100%;
    height: 10px;
  }
  .button {
    height: 56px !important;
  }
</style>

<route lang="yaml">
  meta:
    layout: login
</route>
