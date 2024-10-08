<template>
    <v-dialog v-model="driver.dialog.open" class="dialog">
    <v-card
      prepend-icon="mdi-card-account-details"
      :title="driver.dialog.name"
      class="text-v-green"
    >
      <v-card-text>
        <v-row dense>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              label="Nombre"
              required
              :rules="rules"
              v-model.trim="driver.dialog.inputField.name"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              label="Número de documento"
              required
              :rules="rules"
              v-model.trim="driver.dialog.inputField.documentNumber"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              label="Empresa"
              required
              :rules="rules"
              v-model.trim="driver.dialog.inputField.company"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              label="Motivo"
              required
              :rules="rules"
              v-model.trim="driver.dialog.inputField.motive"
            ></v-text-field>
          </v-col>
        </v-row>
        <small class="text-caption text-medium-emphasis">*indica campos requeridos.</small>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-v-light-green"
          text="Cancelar"
          variant="outlined"
          @click="driver.dialog.open = false"
        ></v-btn>
        <v-btn
          class="text-white bg-v-light-green"
          text="Guardar"
          type="submit"
          @click="driver.confirm"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useDriverStore } from '@/stores/driver';

  const driver = useDriverStore();
  const rules = [
    (value: any): string|boolean => {
      const trimmedValue = (value && typeof value === 'string') ? value.trim() : '';
      if (trimmedValue) {
        driver.dialog.required = false;
        return true
      }
      return 'Campo requerido.'
  },
];

</script>

<style scoped lang="scss">
  .dialog {
    max-width: 600px;
  }
</style>
