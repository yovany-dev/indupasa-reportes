<template>
    <v-app-bar class="text-white bg-v-green" :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon v-if="!appBar.drawer" @click.stop="appBar.drawer = !appBar.drawer"></v-app-bar-nav-icon>
        <v-btn v-if="appBar.drawer" icon="mdi-close" @click.stop="appBar.drawer = !appBar.drawer"></v-btn>
      </template>
      <v-spacer></v-spacer>
      <v-app-bar-title>{{ route.path }}</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-bell-outline"></v-btn>
        <v-div class="d-flex align-center">
          <v-btn icon="mdi-account-circle"></v-btn>
          <p class="d-none d-sm-block mr-4">Admin</p>
        </v-div>
        <div class="d-flex align-center">
          <v-btn icon="mdi-logout" @click="logout"></v-btn>
          <p class="d-none d-sm-block mr-4">Cerrar sesión</p>
        </div>
      </template>
    </v-app-bar>
</template>

<script setup lang="ts">
  import { signOut } from "firebase/auth";
  import { useFirebaseAuth } from 'vuefire';
  import { useRoute, useRouter } from 'vue-router';
  import { useAppBarStore } from '@/stores/app-bar';

  const route = useRoute();
  const router = useRouter();
  const auth = useFirebaseAuth()!;
  const appBar = useAppBarStore();

  const logout = () => {
    signOut(auth).then(() => {
      router.push('/login')
    }).catch((error) => {
      throw new Error(error);
    });
  }
</script>
