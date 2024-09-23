<template>
  <v-dialog v-model="driverReport.dialog.open" class="dialog">
    <v-card
      prepend-icon="mdi-card-account-details"
      :title="driverReport.dialog.name"
      class="text-v-green"
    >
      <v-card-text>
        <v-row dense>
          <v-col
            cols="12"
          >
            <v-text-field
              label="Fecha"
              required
              :rules="rules"
              v-model.trim="driverReport.dialog.inputField.date"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
          >
            <v-text-field
              label="Hora de Entrada"
              required
              :rules="rules"
              v-model.trim="driverReport.dialog.inputField.checkIn"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
          >
            <v-text-field
              label="Hora de Salida"
              required
              :rules="rules"
              v-model.trim="driverReport.dialog.inputField.checkOut"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
          >
            <v-text-field
              label="Motivo"
              required
              :rules="rules"
              v-model.trim="driverReport.dialog.inputField.motive"
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
          @click="driverReport.dialog.open = false"
        ></v-btn>
        <v-btn
          class="text-white bg-v-light-green"
          text="Guardar"
          type="submit"
          @click="driverReport.confirm"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useDriverReportStore } from '@/stores/driver-report';

  const driverReport = useDriverReportStore();
  const rules = [
    (value: any): string|boolean => {
      const trimmedValue = (value && typeof value === 'string') ? value.trim() : '';
      if (trimmedValue) {
        driverReport.dialog.required = false;
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
