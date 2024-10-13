<template>
  <v-container>
    <v-row no-gutters>
      <Title text="Configurar pilotos" />
      <DriverActions />
      <v-col cols="12">
        <v-sheet class="mt-5 mt-md-10">
          <v-data-table
            :headers="staffHeaders"
            :items="driver.items"
            :search="driver.search"
            :mobile="driver.isMobileTable"
            :loading="driver.loadingTable"
            :hide-default-header="driver.isMobileTable && true"
            loading-text="Cargando... Por favor espere"
            no-data-text="No se encontraron coincidencias"
            item-value="id"
            items-per-page="50"
            show-select
            return-object
            v-model="driver.selected"
          >
          <template v-slot:top>
            <DriverDialog />
            <DriverDialogDelete />
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="text-v-green me-2"
              icon="mdi-pencil"
              size="large"
              @click="updateDriver(item)"
            ></v-icon>
            <v-icon
              color="v-green"
              icon="mdi-delete"
              size="large"
              @click="deleteDriver(item)"
            ></v-icon>
          </template>
          </v-data-table>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { useDriverStore } from '@/stores/driver';
  import { staffHeaders } from '@/constants/data-table-headers';
  import { Driver } from '@/types/driverTypes';

  import Title from '@/common/components/Title.vue'
  import DriverActions from '@/components/driver/DriverActions.vue';
  import DriverDialog from '@/components/driver/DriverDialog.vue';
  import DriverDialogDelete from '@/components/driver/DriverDialogDelete.vue';

  const driver = useDriverStore();

  const updateDriver = (item: Driver) => {
    driver.dialog.open = true;
    driver.dialog.name = 'Editar Piloto';
    driver.dialog.action = 'update';
    driver.dialog.inputField = Object.assign({}, item);
  }
  const deleteDriver = (item: Driver) => {
    driver.dialogDelete.open = true;
    driver.dialogDelete.message = driver.message;
    driver.docIds = [item.docId];
  }
  const onResize = () => {
    if (window.innerWidth > 950) {
      driver.isMobileTable = false;
    } else {
      driver.isMobileTable = true;
    }
  }

  onMounted(() => {
    onResize();
    driver.getDrivers();
  });
  window.addEventListener('resize', onResize);
</script>

<style scoped lang="scss">
</style>
