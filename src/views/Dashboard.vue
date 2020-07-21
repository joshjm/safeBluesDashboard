<template>
  <div class="my-dashboard-container">
    <Header />
    {{ this.covidAPIData }}
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
      covidAPIData: []
    }
  },
  // methods: {
    
  // },
  // computed:{
    
  // },
  
  mounted() {
      axios
        .get("https://api.covid19api.com/dayone/country/australia")
        .then(function(res) {
          console.log(res)
          // this.covidAPIData = res

        })
     
    }
  }

</script>
