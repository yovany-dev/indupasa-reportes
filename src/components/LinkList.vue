<template>
  <v-list
    v-for="(link, index) in links"
    :key="index"
  >
    <v-list-item
      class="px-6"
      :title="link.header.title"
      :to="link.path"
      :prepend-icon="link.header.icon"
    ></v-list-item>
  </v-list>
</template>

<script setup lang="ts">
  import { links } from '@/constants/links';
</script>
