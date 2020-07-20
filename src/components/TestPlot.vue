<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <DistributionGamma></DistributionGamma>
        <!-- <div id="myDiv"></div> -->
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="center">New Virus Parameters</h3>
            <InputSingle title="Strand ID" id="StrandID" />
            <InputSingle title="Start Time" id="startTime" />
            <InputSingle title="End Time" id="endTime" />
            <InputSingle title="Seeding Probability" id="seedingProbability" />
            <InputSingle
              title="Infection Probability Map"
              id="infectionProbabilityMap"
            />
            <InputSingle
              title="Incubation Period Distribution"
              id="incubationPeriodDistribution"
            />
            <InputSingle
              title="Infectious Period Distribution"
              id="infectiousPeriodDistribution"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as d3 from "d3";
// import Plotly from "plotly.js-dist"
import DistributionGamma from "@/components/DistributionGamma.vue"
import Plotly from "plotly.js"
import InputSingle from "./InputSingle"
export default {
  name: "TestPlot",
  components: {
    InputSingle, // locally register, consider making global later
    DistributionGamma
  },
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
    const layout = {
      title: {
        text: "Strain PDF"
      },
      xaxis: {
        title: {
          text: "x Axis"
        }
      },
      yaxis: {
        title: {
          text: "y Axis"
        }
      }
    }
    const data = [trace1, trace2]

    // Plotly.newPlot("myDiv", data, layout)
    const data2 = [
      {
        x: this.gdp.map(val => val.country),
        y: this.gdp.map(val => val.value),
        type: "bar"
      }
    ]
    // Plotly.newPlot("myDiv2", data2, layout)
  }
}
</script>
