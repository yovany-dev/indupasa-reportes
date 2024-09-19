<template>
  <v-container>
    <v-row no-gutters>
      <Title text="Herramientas" />
      <v-col cols="12">
        <v-container class="pa-0">
          <v-row>
            <v-col
              v-for="(tool, index) in tools"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card elevation="6" :to="tool.path">
                <v-card-text>
                  <v-sheet class="circle mx-auto d-flex align-center justify-center rounded-circle bg-v-light-green">
                    <v-icon class="text-h4 text-white">{{ tool.icon }}</v-icon>
                  </v-sheet>
                </v-card-text>
                <v-card-title class="text-center text-subtitle-1 text-lg-h6 text-v-green">{{ tool.name }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import Title from '@/common/components/Title.vue'
  import { tools } from '@/constants/tools';

</script>

<style scoped lang="scss">
  .circle {
    width: 80px;
    height: 80px;
  }
</style>
