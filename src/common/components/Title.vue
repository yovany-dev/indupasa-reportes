<template>
  <v-col cols="12">
    <v-sheet class="mt-5 mt-md-10 mb-5 mb-md-10 bg-gray">
      <h2 class="text-v-green text-h5 text-sm-h4 text-md-h3">{{ props.text }}</h2>
    </v-sheet>
  </v-col>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
</script>
