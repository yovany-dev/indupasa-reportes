<template>
  <v-col cols="12" sm="6">
    <v-text-field
      class="input-search"
      v-model="driver.search"
      label="Buscar piloto"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      single-line
    ></v-text-field>
  </v-col>
  <v-col cols="12" sm="6" class="d-flex justify-sm-end">
    <v-sheet class="mt-10 mt-sm-0 d-flex ga-2 bg-gray">
      <v-fade-transition>
        <Button
          v-if="driver.selectedLen > 0"
          :text="`Eliminar ${driver.selectedLen}`"
          :loading="false"
          @click="deleteDrivers"
          class="order-3 order-sm-0"
        />
      </v-fade-transition>
      <Button
        text="Agregar piloto"
        :loading="false"
        @click="addDriver"
      />
    </v-sheet>
  </v-col>
</template>

<script setup lang="ts">
  import { useDriverStore } from '@/stores/driver';
  import Button from '@/common/components/Button.vue';

  const driver = useDriverStore();

  const addDriver = () => {
    driver.dialog.open = true;
    driver.dialog.name = 'Agregar Piloto';
    driver.dialog.action = 'add';
    driver.dialog.inputField = Object.assign({});
  }
  const deleteDrivers = () => {
    driver.dialogDelete.open = true;
    driver.dialogDelete.message = driver.message;

    const docIds: string[] = [];
    driver.selected.forEach(c => {
      docIds.push(String(c.docId));
    });
    driver.docIds = docIds;
  }
</script>

<style scoped lang="scss">
  .input-search {
    max-width: 300px;
  }
</style>
