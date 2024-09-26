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
            append-inner-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            v-model.trim="user.password"
            :rules="passwordRules"
            label="Contraseña"
            type="password"
            append-inner-icon="mdi-lock"
          ></v-text-field>
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
  const state = reactive({
    loading: false,
    errorMessage: false
  });
  const user = reactive({
    email: '',
    password: ''
  });

  const onSubmit = () => {
    if (!form.value) return;
    state.loading = true;

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        router.push('/herramientas');
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
