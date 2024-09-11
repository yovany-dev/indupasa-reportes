<template>
  <v-dialog v-model="driver.dialogDelete.open" class="dialog">
    <v-card class="text-v-green">
      <v-card-title class="text-center text-wrap px-5 py-5">{{ driver.dialogDelete.message }}</v-card-title>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn class="text-v-light-green" variant="outlined" @click="deleteCancel">Cancelar</v-btn>
        <v-btn class="text-white bg-v-light-green" @click="driver.deleteConfirm">Confirmar</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useDriverStore } from '@/stores/driver';

  const driver = useDriverStore();

  const deleteCancel = () => {
    driver.dialogDelete.open = false;
    driver.dialogDelete.message = '';
    driver.selected = [];
  }
</script>

<style scoped lang="scss">
  .dialog {
    max-width: 600px;
  }
</style>
