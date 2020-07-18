<template>
  <div>
    <div id="myDiv"></div>
    <div id="myDiv2"></div>
  </div>
</template>

<script>
// import * as d3 from "d3";
// import Plotly from "plotly.js-dist"
import Plotly from "plotly.js"

export default {
  name: "App",
  data() {
    return {
      gdp: [
        { country: "USA", value: 20.5 },
        { country: "China", value: 13.4 },
        { country: "Germany", value: 4.0 },
        { country: "Japan", value: 4.9 },
        { country: "France", value: 2.8 }
      ]
    }
  },
  mounted() {
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter"
    }

    const trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter"
    }

    const data = [trace1, trace2]

    Plotly.newPlot("myDiv", data)
    const data2 = [
      {
        x: this.gdp.map(val => val.country),
        y: this.gdp.map(val => val.value),
        type: "bar"
      }
    ]

    console.log(data2)
    Plotly.newPlot("myDiv2", data2)
  }
}
</script>
