<template>
  <v-dialog v-model="driverReport.dialogDelete.open" class="dialog">
    <v-card class="text-v-green">
      <v-card-title class="text-center text-wrap px-5 py-5">¿Estás seguro de que quieres eliminar este piloto?</v-card-title>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn class="text-v-light-green" variant="outlined" @click="deleteCancel">Cancelar</v-btn>
        <v-btn class="text-white bg-v-light-green" @click="driverReport.deleteConfirm">Confirmar</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useDriverReportStore } from '@/stores/driver-report';

  const driverReport = useDriverReportStore();

  const deleteCancel = () => {
    driverReport.dialogDelete.open = false;
    driverReport.dialogDelete.docId = '';
  }
</script>

<style scoped lang="scss">
  .dialog {
    max-width: 600px;
  }
</style>
