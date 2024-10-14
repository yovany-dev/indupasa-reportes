<template>
  <v-container>
    <v-row no-gutters>
      <Title text="Reporte del día" />
      <DriverReportExportActions />
      <v-col cols="12">
        <v-sheet class="mt-5 mt-md-10">
          <v-data-table
            id="table-d"
            :headers="driverReportHeaders"
            :items="ascendingItems"
            :mobile="driverReport.isMobileTable"
            :loading="driverReport.loadingTable"
            :hide-default-header="driverReport.isMobileTable && true"
            loading-text="Cargando... Por favor espere"
            no-data-text="No hay reporte el día de hoy."
            item-value="id"
          >
          <template v-slot:top>
            <DriverReportDialog />
            <DriverReportDialogDelete />
          </template>
          <template v-slot:item.index="{ item }">
            <div v-for="(i, index) in ascendingItems">
              <p v-if="i.docId === item.docId">{{ index + 1 }}</p>
            </div>
          </template>
          <template v-slot:item.checkOut="{ item }">
            <p v-if="item.checkOut === 'Pendiente'" class="font-italic">No especificado</p>
            <p v-else>{{ item.checkOut }}</p>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-sheet class="d-flex justify-start align-center">
              <v-icon
                class="text-v-light-green me-2"
                icon="mdi-pencil"
                size="large"
                @click="updateDriverReport(item)"
              ></v-icon>
              <v-icon
                color="v-light-green"
                icon="mdi-delete"
                size="large"
                @click="deleteDriverReport(item.docId)"
              ></v-icon>
            </v-sheet>
          </template>
          </v-data-table>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { DriverReport } from '@/types/driverTypes';
  import { useDriverReportStore } from '@/stores/driver-report';
  import { driverReportHeaders } from '@/constants/data-table-headers';

  import Title from '@/common/components/Title.vue'
  import DriverReportExportActions from '@/components/driver-report/DriverReportExportActions.vue';
  import DriverReportDialog from '@/components/driver-report/DriverReportDialog.vue';
  import DriverReportDialogDelete from '@/components/driver-report/DriverReportDialogDelete.vue';

  const driverReport = useDriverReportStore();
  const ascendingItems = computed(() => driverReport.sortedItems(false));
  let intervalId: number | undefined;

  const updateDriverReport = (item: DriverReport) => {
    driverReport.dialog.open = true;
    driverReport.dialog.name = 'Editar Piloto';
    driverReport.dialog.action = 'update';
    driverReport.driverExists(item.documentNumber);
    driverReport.dialog.inputField = Object.assign({}, item);
  }
  const deleteDriverReport = (docId: string) => {
    driverReport.dialogDelete.open = true;
    driverReport.dialogDelete.docId = docId;
  }
  const onResize = () => {
    if (window.innerWidth > 950) {
      driverReport.isMobileTable = false;
    } else {
      driverReport.isMobileTable = true;
    }
  }

  onMounted(() => {
    onResize();
    driverReport.checkDate();
    intervalId = setInterval(driverReport.checkDayChange, 60000);
  });
  onUnmounted(() => {
    clearInterval(intervalId);
    intervalId = undefined;
  });
  window.addEventListener('resize', onResize);
</script>

<style scoped lang="scss">
</style>
