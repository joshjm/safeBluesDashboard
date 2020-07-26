<template>
  <div class="my-dashboard-container">
    <Header />
    <!-- {{ this.jsonCovidAPIData }} -->
    {{ this.arraySafeBluesApiData }}

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
    parseCovidApiJsonToArray: function(jsonData) {
      const array = [
        "Country",
        "Province",
        "Date",
        "Confirmed",
        "Deaths",
        "Recovered",
        "Active"
      ]
      jsonData.map(entryObject =>
        array.push([
          entryObject.Country,
          entryObject.Province,
          entryObject.Date,
          entryObject.Confirmed,
          entryObject.Deaths,
          entryObject.Recovered,
          entryObject.Active
        ])
      )
      return array
    }
  },
  computed: {
    arrayCovidApiData: function() {
      return this.parseCovidApiJsonToArray(this.jsonCovidAPIData)
    },
    arraySafeBluesApiData: function() {
      return this.parseCovidApiJsonToArray(this.safeBluesData)
    }
  },

  mounted() {
    // get data from covid19 api
    axios
      .get("https://api.covid19api.com/dayone/country/australia")
      .then(response => (this.jsonCovidAPIData = response.data))

    // get data from safe blues AWS
    const safeBluesURL = "api.safeblues.org:5000/stats/1"
    axios
      .get(safeBluesURL)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
}
</script>
