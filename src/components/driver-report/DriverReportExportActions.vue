<template>
  <DriverReportCalendar />
  <v-col cols="12" sm="6" class="d-flex justify-sm-end ga-2 mt-10 mt-sm-0">
    <Button
      text="Imprimir"
      class="flex-fill flex-sm-0-1"
      :loading="false"
    />
    <Button
      text="Exportar a Excel"
      class="flex-fill flex-sm-0-1"
      :loading="driverReport.loadingTable"
      @click="exportTableToExcel(dataTable, filename)"
    />
  </v-col>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { ExcelSheet } from '@/types/driverTypes';
  import { generateFilename } from '@/utils/filename';
  import { exportTableToExcel } from '@/utils/exceljs';
  import { useDriverReportStore } from '@/stores/driver-report';
  import DriverReportCalendar from './DriverReportCalendar.vue';
  import Button from '@/common/components/Button.vue';

  const driverReport = useDriverReportStore();
  const ascendingItems = computed(() => driverReport.sortedItems(false));
  const { loadingTable } = storeToRefs(driverReport);
  const { items } = storeToRefs(driverReport);
  const filename = generateFilename();
  const dataTable = ref<ExcelSheet[]>([]);

  const updateDataTable = () => {
    const newItems = ascendingItems.value.map((item, index) => ({
      index: (index + 1).toString(),
      date: item.date,
      checkIn: item.checkIn,
      checkOut: item.checkOut,
      name: item.name,
      documentNumber: item.documentNumber,
      company: item.company,
      motive: item.motive
    }));
    dataTable.value = newItems;
  }

  watch([loadingTable, items], () => {
    updateDataTable();
  });
</script>

<style scoped lang="scss">
</style>
