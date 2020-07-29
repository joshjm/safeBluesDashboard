<template>
  <div class="my-dashboard-container">
    <Header />

    <div class="table">
    <v-card class="mx-auto" max-width="344" v-for="item in safeBluesData.stats" :key="item.strandId" > 
      <v-card-text>
        <h3> Strain Id: {{item.strandId}} </h3>
        <p>Times: {{item.times}}</p>
        <p>Total incubating strands: {{item.totalIncubatingStrands}}</p>
        <p>Total infected strands: {{item.totalInfectedStrands}}</p>
        <p>Total removed strands: {{item.totalRemovedStrands}}</p>
      </v-card-text>
      </v-card>
      </div>
    <!-- {{ this.jsonCovidAPIData }} -->
    <h2>John Hopkins Covid data: (to compare)</h2>
    <v-data-table 
      :headers="headers"
      :items="jsonCovidAPIData"
      :items-per-page="20"
      class="elevation-1"
    > 
    </v-data-table>

    
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
      safeBluesData: [],
      headers: [
        // {text: 'Country', value: 'Country'},
        // {text: "Country Code", value: "CountryCode"},
        {text: "Province", value: "Province"},
        // {text: "City", value: "City"},
        // {text: "City Code", value: "CityCode"},
        // {text: "Latitude", value: "Lat"},
        // {text: "Longitude", value: "Lon"},
        {text: "Confirmed", value: "Confirmed"},
        {text: "Deaths", value: "Deaths"},
        {text: "Recovered", value: "Recovered"},
        {text: "Active", value: "Active"},
        {text: "Date", value: "Date"}
      ]
    }
  },
  methods: {
   
  },
  computed: {
    qldData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Queensland")
    },
    vicData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Victoria")
    },
    nswData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "New South Wales")
    },
    saData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "South Australia")
    },
    ntData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Northern Territory")
    },
    waData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Western Australia")
    }
    

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
