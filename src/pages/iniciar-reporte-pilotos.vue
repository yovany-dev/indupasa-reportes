<template>
  <v-container>
    <v-row no-gutters>
      <Title text="Iniciar Reporte de Pilotos" />
      <DriverReportActions />
      <v-col cols="12">
        <v-sheet class="mt-5 mt-md-10">
          <v-data-table
            :headers="driverReportHeaders"
            :items="driverReport.items"
            :mobile="driverReport.isMobileTable"
            :loading="driverReport.loadingTable"
            loading-text="Cargando... Por favor espere"
            no-data-text="No hay reporte el día de hoy."
            item-value="id"
          >
          <template v-slot:top>
            <DriverReportDialog />
            <DriverReportDialogDelete />
          </template>
          <template v-slot:item.checkOut="{ item }">
            <v-chip v-if="item.checkOut === 'Pendiente'" color="red">{{ item.checkOut }}</v-chip>
            <p v-else>{{ item.checkOut }}</p>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-sheet class="d-flex justify-start align-center">
              <v-icon
                class="text-v-green-secondary me-2"
                icon="mdi-pencil"
                size="large"
                @click="updateDriverReport(item)"
              ></v-icon>
              <v-icon
                color="v-green-secondary"
                icon="mdi-delete"
                size="large"
                @click="deleteDriverReport(item.docId)"
              ></v-icon>
              <v-checkbox
                hide-details
                @change="checkboxUpdated"
                color="v-green-secondary"
              ></v-checkbox>
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
  import DriverReportActions from '@/components/driver-report/DriverReportActions.vue';
  import DriverReportDialog from '@/components/driver-report/DriverReportDialog.vue';
  import DriverReportDialogDelete from '@/components/driver-report/DriverReportDialogDelete.vue';

  const driverReport = useDriverReportStore();
  const updateDriverReport = (item: DriverReport) => {
    driverReport.dialog.open = true;
    driverReport.dialog.name = 'Editar Piloto';
    driverReport.dialog.action = 'update';
    driverReport.driverExists(item.docId);
    driverReport.dialog.inputField = Object.assign({}, item);
  }
  const checkboxUpdated = (evt: Event) => {
    // code here...
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
    driverReport.getDriversReport();
  });
  window.addEventListener('resize', onResize);
</script>

<style scoped lang="scss">
  .v-sheet .v-input__control .v-selection-control .v-selection-control__wrapper .v-selection-control__input {
    justify-content: end !important;
  }
</style>
