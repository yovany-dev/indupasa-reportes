<template>
  <h1>Home</h1>
  <v-btn color="primary" @click="handleLogout">Logout</v-btn>
</template>

<script lang="ts" setup>
  import { useFirebaseAuth } from 'vuefire';
  import { signOut } from "firebase/auth";
  import { useRouter } from 'vue-router';

  const auth = useFirebaseAuth()!;
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('Logout successful.')
      router.push('/login')
    }).catch((error) => {
      throw new Error(error);
    });
  }
</script>
