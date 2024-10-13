<template>
  <v-app>
    <AppBar />
    <v-navigation-drawer
      class="text-white bg-v-dark-green"
      :width="320"
      v-model="appBar.drawer"
      temporary
    >
      <template v-slot:prepend>
        <div class="py-5 d-flex justify-center align-center">
          <LogoIndupasaReportes class="logo-indupasa-reportes" />
        </div>
      </template>
      <v-divider color="white"></v-divider>
      <LinkList />
    </v-navigation-drawer>
    <v-main class="bg-gray">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { useAppBarStore } from '@/stores/app-bar';
  import AppBar from '@/components/AppBar.vue';
  import LinkList from '@/components/LinkList.vue';
  import LogoIndupasaReportes from '@/components/LogoIndupasaReportes.vue';

  const appBar = useAppBarStore();
</script>

<style scoped lang="scss">
  .logo-indupasa-reportes {
    width: 280px;
  }
</style>
