<template>
  <div class="container">
    <!-- display for debugging -->
    alpha: {{ alpha }}, theta: {{ theta }}
    <div class="row">
      <input type="text" class="form-control w-25" v-model="alpha" />
      <input
        type="range"
        v-model="alpha"
        min="0"
        max="10"
        class="custom-range"
        step="0.1"
        id="customRange1"
      />
    </div>
    <div class="row">
      <input type="text" class="form-control w-25" v-model="theta" />
      <input
        type="range"
        v-model="theta"
        min="0"
        max="10"
        class="custom-range"
        step="0.1"
        id="customRange2"
      />
    </div>
    <div id="plot"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js"
import Vue from "vue"
import { gamma } from "mathjs"
export default Vue.extend({
  name: "DistributionGamma",
  data: () => {
    return {
      alpha: 5,
      theta: 5,
      x: [...Array(140).keys()].map(val => val / 10),
      y: this.x.map(val => this.gammaDist(val, this.alpha, this.theta))
    }
  },
  methods: {
    gammaDist: function(x, alpha, theta) {
      const value =
        (Math.pow(theta, alpha) / gamma(x)) *
        Math.pow(x, alpha - 1) *
        Math.pow(Math.E, -x * theta)
      return value
    }
  },
  watch: {
    alpha: Plotly.react("plot", this.data),
    theta: Plotly.react("plot", this.data)
  },
  mounted() {
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
    const x = [...Array(140).keys()].map(val => val / 10)
    const y = x.map(val => this.gammaDist(val, this.alpha, this.theta))

    Plotly.newPlot("plot", [[x, y]], layout);
  }
})
</script>
