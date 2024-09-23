<template>
  <v-col cols="12" class="d-flex justify-end ga-2">
    <Button
      text="Invitado"
      :loading="false"
      @click="guestDriver"
    />
    <v-sheet class="btn-new">
      <v-select
        chips
        :hide-details="true"
        label="Agregar Piloto"
        class="bg-v-light-green"
        v-model="driverReport.selectedDriver"
        :items="driverReport.driversName"
      ></v-select>
    </v-sheet>
  </v-col>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useDriverReportStore } from '@/stores/driver-report';
  import Button from '@/common/components/Button.vue';

  const driverReport = useDriverReportStore();
  const { selectedDriver } = storeToRefs(driverReport);

  const guestDriver = () => {
    driverReport.dialog.open = true;
    driverReport.dialog.name = 'Agregar Piloto de Invitado';
    driverReport.dialog.action = 'add';
    driverReport.dialog.inputField = Object.assign({});
  }

  watch(selectedDriver, (newValue) => {
    if (newValue) {
      driverReport.newDriverReport(newValue);
    }
    driverReport.selectedDriver = null;
  });
  onMounted(() => {
    driverReport.getDriversName();
  });
</script>

<style scoped lang="scss">
  .btn-new {
    width: 200px;
  }
</style>
