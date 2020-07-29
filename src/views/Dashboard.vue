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

    <div id="active-plot"></div>


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
import Plotly from "plotly.js"
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
      ],
      layout: {
        title: 'Active cases',
        
      }
    }
  },
  methods: {
   
  },
  computed: {
    qldData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Queensland").map(item => [item.Date, item.Active])
    },
    vicData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Victoria").map(item => [item.Date, item.Active])
    },
    nswData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "New South Wales").map(item => [item.Date, item.Active])
    },
    saData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "South Australia").map(item => [item.Date, item.Active])
    },
    ntData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Northern Territory").map(item => [item.Date, item.Active])
    },
    waData: function(){
      return this.jsonCovidAPIData.filter(data => data.Province === "Western Australia").map(item => [item.Date, item.Active])
    },
    qldTrace: function(){
      return({
        name: "QLD",
        x: this.qldData.map(item => item[0]),
        y: this.qldData.map(item => item[1]),
      })
    }, 
    vicTrace: function(){
      return({
        name: "VIC",
        x: this.vicData.map(item => item[0]),
        y: this.vicData.map(item => item[1]),
      })
    },
    nswTrace: function(){
      return({
        name: "NSW",
        x: this.nswData.map(item => item[0]),
        y: this.nswData.map(item => item[1]),
      })
    },
    saTrace: function(){
      return({
        name: "SA",
        x: this.saData.map(item => item[0]),
        y: this.saData.map(item => item[1]),
      })
    },
    ntTrace: function(){
      return({
        name: "NT",
        x: this.ntData.map(item => item[0]),
        y: this.ntData.map(item => item[1]),
      })
    },
    waTrace: function(){
      return({
        name: "WA",
        x: this.waData.map(item => item[0]),
        y: this.waData.map(item => item[1]),
      })
    },
    data: function(){
      return(
        [this.qldTrace, this.vicTrace, this.nswTrace, this.saTrace, this.ntTrace, this.waTrace]
      )
    }
  },
  
  watch: {
    qldTrace(){
      Plotly.react("active-plot", this.data, this.layout)
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
    
    Plotly.newPlot('active-plot', this.data, this.layout)
  }

}
</script>
