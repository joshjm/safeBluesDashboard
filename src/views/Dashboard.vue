<template>
  <div class="my-dashboard-container">
    <Header />
    <div v-show="(jsonCovidAPIData.length ==0) || (safeBluesData.length==0) ">
      <h3>Loading...</h3>
      <img alt="SafeBlues logo" class="loading-spinner" src="../assets/logo.svg" />
    </div>
    <div v-show="(jsonCovidAPIData.length !==0) && (safeBluesData.length!==0) ">
      <!-- TODO: refactor the table into a component -->
      <div class="table">
        <v-card
          class="mx-auto"
          max-width="344"
          v-for="item in safeBluesData.stats"
          :key="item.strandId"
        >
          <v-card-text>
            <h3>Strain Id: {{ item.strandId }}</h3>
            <p>Times: {{ item.times }}</p>
            <p>Total incubating strands: {{ item.totalIncubatingStrands }}</p>
            <p>Total infected strands: {{ item.totalInfectedStrands }}</p>
            <p>Total removed strands: {{ item.totalRemovedStrands }}</p>
          </v-card-text>
        </v-card>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h2>John Hopkins Covid data: (to compare)</h2>
            <data-table v-bind:jsonCovidAPIData="this.jsonCovidAPIData" />
          </v-col>
          <v-row>
            <v-col cols="6">
              <active-cases-plot v-bind:jsonCovidAPIData="this.jsonCovidAPIData" />
            </v-col>
            <v-col cols="6">
              <confirmed-cases-plot v-bind:jsonCovidAPIData="this.jsonCovidAPIData" />
            </v-col>
          </v-row>
        </v-row>
      </v-container>
      <!-- <v-data-table
      :headers="headers"
      :items="jsonCovidAPIData"
      :items-per-page="20"
      class="elevation-1"
    >
      </v-data-table>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"
import ActiveCasesPlot from "@/components/dashboard/ActiveCasesPlot.vue"
import ConfirmedCasesPlot from "@/components/dashboard/ConfirmedCasesPlot.vue"
import DataTable from "@/components/dashboard/DataTable.vue"
const axios = require("axios").default
export default {
  name: "Dashboard",
  components: {
    Header,
    ActiveCasesPlot,
    ConfirmedCasesPlot,
    DataTable
  },
  data: () => {
    return {
      jsonCovidAPIData: [],
      safeBluesData: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  created() {
    // get data from covid19 api
    // NOTE: keeping out of the active-plot component as other components may need this data
    axios
      .get("https://api.covid19api.com/dayone/country/australia")
      .then(response => (this.jsonCovidAPIData = response.data))

    // get data from safe blues AWS
    const safeBluesURL = "https://api.safeblues.org/stats"
    axios
      .get(safeBluesURL)
      .then(response => (this.safeBluesData = response.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>
@keyframes rotation {
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.loading-spinner {
  max-width: 60px;
  animation: rotation 2s infinite linear;
}
</style>