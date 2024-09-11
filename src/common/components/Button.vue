<template>
  <v-btn
    :loading="props.loading"
    :size="isMobile ? 'small' : 'default'"
    type="submit"
    class="button text-white bg-v-light-green"
  >
    {{ props.text }}
  </v-btn>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify';

  const props = defineProps<{
    text: string
    loading: boolean,
  }>()

  const display = useDisplay();
  const isMobile = computed(() => display.smAndDown.value);
</script>

<style scoped lang="scss">
  .button {
    height: 56px !important;
  }
</style>
