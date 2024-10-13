<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" class="mt-5 mt-md-10 mb-5 mb-md-10">
        <v-container class="pa-0">
          <v-row>
            <v-col
              v-for="(tool, index) in tools"
              :key="index"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card elevation="0" :to="tool.path">
                <v-card-text class="pa-0">
                  <v-sheet :style="tool.bg" class="pa-6 d-flex align-center justify-space-between text-white card">
                    <div class="d-flex flex-column ga-2">
                      <p v-if="tool.amountId" class="text-h4 font-weight-medium">{{ driverReport.dashboard[tool.amountId] }}</p>
                      <p class="text-body-1">{{ tool.name }}</p>
                    </div>
                    <v-icon class="text-h3">{{ tool.icon }}</v-icon>
                  </v-sheet>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { tools } from '@/constants/tools';
  import { useDriverReportStore } from '@/stores/driver-report';

  const driverReport = useDriverReportStore();

  onMounted(() => {
    driverReport.getDashboard();
  });
</script>

<style scoped lang="scss">
  .card {
    height: 125px;
  }
</style>
