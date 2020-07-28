<template>
  <div class="my-dashboard-container">
    <Header />
    <!-- {{ this.jsonCovidAPIData }} -->

    
    <!-- {{ safeBluesData.stats }} -->
    <div v-for="item in safeBluesData.stats" :key="item.strandId" > 
      <h3> Strain Id: {{item.strandId}} </h3>
      <p>Times: {{item.times}}</p>
      <p>Total incubating strands: {{item.totalIncubatingStrands}}</p>
      <p>Total infected strands: {{item.totalInfectedStrands}}</p>
      <p>Total removed strands: {{item.totalRemovedStrands}}</p>

      </div>
    <!-- {{ this.arrayCovidApiData }} -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"
const axios = require("axios").default
export default {
  name: "Dashboard",
  components: {
    Header
  },
  data: () => {
    return {
      jsonCovidAPIData: [],
      safeBluesData: []
    }
  },
  methods: {
    // parseCovidApiJsonToArray: function(jsonData) {
    //   const array = [
    //     "Country",
    //     "Province",
    //     "Date",
    //     "Confirmed",
    //     "Deaths",
    //     "Recovered",
    //     "Active"
    //   ]
    //   jsonData.map(entryObject =>
    //     array.push([
    //       entryObject.Country,
    //       entryObject.Province,
    //       entryObject.Date,
    //       entryObject.Confirmed,
    //       entryObject.Deaths,
    //       entryObject.Recovered,
    //       entryObject.Active
    //     ])
    //   )
    //   return array
    // }
  },
  computed: {
    // arrayCovidApiData: function() {
    //   return this.parseCovidApiJsonToArray(this.jsonCovidAPIData)
    // },
    // arraySafeBluesApiData: function() {
    //   return this.parseCovidApiJsonToArray(this.safeBluesData)
    // }
  },

  mounted() {
    // get data from covid19 api
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
