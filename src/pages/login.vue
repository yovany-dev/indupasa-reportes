<template>
  <v-container class="content pa-0 bg-white rounded">
    <v-row no-gutters justify="center">
      <v-col class="d-flex justify-center bg-gray">
        <img :src="logoIndupasaReportes" alt="Logo Indupasa">
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="line bg-green"></v-sheet>
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
          class="px-5 py-10"
        >
          <v-text-field
            v-model="username"
            :rules="rules"
            label="Usuario"
            append-inner-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="rules"
            label="Contraseña"
            append-inner-icon="mdi-lock"
          ></v-text-field>
          <p class="text-error text-center my-2">Usuario o contraseña incorrectos.</p>
          <v-btn
            :loading="loading"
            size="large"
            type="submit"
            class="button text-white bg-green"
            block
          >
            Ingresar
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import logoIndupasaReportes from '@/assets/logo-indupasa-reportes.svg';

  const form = ref(false)
  const username = ref(null)
  const password = ref(null)
  const loading = ref(false)

  const rules = [
    (value: any) => {
      if (value && value.length > 0) {
        return true
      }
      return 'Campo requerido.'
    }
  ]

  const onSubmit = () => {
    // code here...
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
