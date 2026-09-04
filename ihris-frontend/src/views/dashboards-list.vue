<template>
  <v-container grid-list-xs>
    <v-card elevation="1">
      <v-card-title class="primary darken-1 white--text font-weight-bold justify-center">
        {{ $t('App.hardcoded-texts.Dashboards') }}
        <v-spacer></v-spacer>
        <v-btn
          class="ma-2"
          outlined
          color="white"
          @click="$router.push('/build-dashboard')"
        >
          {{ $t('App.hardcoded-texts.Build Dashboards') }}
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-alert
          v-if="dashboardsLoadError"
          type="error"
          dense
          outlined
          class="mb-3"
        >
          {{ $t('App.hardcoded-texts.Unable to load dashboards. Please try again.') }}
        </v-alert>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="mb-4"
        ></v-text-field>

        <v-data-iterator
          :items="sortedDashboards"
          :search="search"
          :loading="loading"
          :items-per-page="12"
          :footer-props="{ 'items-per-page-options': [8, 12, 24, 48] }"
        >
          <template v-slot:default="{ items }">
            <v-row dense>
              <v-col
                v-for="item in items"
                :key="item.id"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card
                  class="dashboard-card"
                  outlined
                  hover
                  @click="$router.push('/dashboard/' + item.id)"
                >
                  <v-card-text class="d-flex align-start">
                    <v-icon color="primary" size="28" class="mr-3 mt-1">
                      mdi-monitor-dashboard
                    </v-icon>
                    <div class="flex-grow-1" style="min-width: 0">
                      <div class="text-subtitle-1 font-weight-bold text-truncate">
                        {{ item.title }}
                      </div>
                      <div
                        v-if="item.description"
                        class="text-body-2 grey--text text--darken-1 dashboard-card__description"
                      >
                        {{ item.description }}
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </template>
          <template v-slot:no-data>
            <div class="text-center pa-6">
              <v-icon size="40" color="grey lighten-1">mdi-monitor-dashboard</v-icon>
              <div class="text-subtitle-1 mt-2">
                {{ $t('App.hardcoded-texts.No dashboards yet') }}
              </div>
              <v-btn
                text
                color="primary"
                class="mt-2"
                @click="$router.push('/build-dashboard')"
              >
                {{ $t('App.hardcoded-texts.Build Dashboards') }}
              </v-btn>
            </div>
          </template>
          <template v-slot:no-results>
            <div class="text-center pa-6 text-subtitle-1">
              {{ $t('App.hardcoded-texts.No dashboards match your search') }}
            </div>
          </template>
        </v-data-iterator>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { kibana } from "@/mixins/kibana"

export default {
  name: "dashboard",
  props: [ "id" ],
  mixins: [kibana],
  data() {
    return {
      loading: false,
      search: ''
    }
  },
  computed: {
    sortedDashboards() {
      return [...this.dashboards].sort((a, b) => {
        return (a.title || '').localeCompare(b.title || '')
      })
    }
  }
}
</script>

<style scoped>
.dashboard-card {
  cursor: pointer;
  height: 100%;
  transition: box-shadow 0.15s ease;
}
.dashboard-card__description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
