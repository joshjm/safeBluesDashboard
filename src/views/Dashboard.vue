<template>
  <div class="my-dashboard-container">
    <Header />
    <!-- {{ this.jsonCovidAPIData }} -->
    {{ this.arrayCovidApiData }}
  
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
      jsonCovidAPIData: []
    }
  },
  methods: {
    parseCovidApiJsonToArray: function (jsonData) {
      const array = ["Country", "Province", "Date", "Confirmed", "Deaths", "Recovered", "Active"]
      jsonData.map(entryObject => array.push([entryObject.Country, entryObject.Province, entryObject.Date,entryObject.Confirmed, entryObject.Deaths, entryObject.Recovered, entryObject.Active]) )
       return array
    }
  },
  computed:{
    arrayCovidApiData: function(){
      return this.parseCovidApiJsonToArray(this.jsonCovidAPIData)
    }
  },
  
  mounted() {
    axios
      .get("https://api.covid19api.com/dayone/country/australia")
      .then(response => (this.jsonCovidAPIData = response.data))
    }
  }

</script>
