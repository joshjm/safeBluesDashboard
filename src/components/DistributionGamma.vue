<template>
  <div class="container">
    <!-- display for debugging -->
    shape: {{ shape }}, rate: {{ rate }}
    <div class="row">
      <input type="text" class="form-control w-25" v-model="shape" />
      <input
        type="range"
        v-model="shape"
        min="0"
        max="10"
        class="custom-range"
        step="0.1"
        id="customRange1"
      />
    </div>
    <div class="row">
      <input type="text" class="form-control w-25" v-model="rate" />
      <input
        type="range"
        v-model="rate"
        min="0"
        max="1"
        class="custom-range"
        step="0.01"
        id="customRange2"
      />
    </div>
    <div id="plot"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js"
import { gamma } from "mathjs"
export default {
  name: "DistributionGamma",
  data: () => {
    return {
      shape: 5,
      rate: 5,
      x: [],
      y: []
    }
  },
  watch: {
    shape() {
      this.updateData()
      Plotly.react("plot", [{ x: this.x, y: this.y }])
    },
    rate() {
      this.updateData()
      Plotly.react("plot", [{ x: this.x, y: this.y }])
    }
  },
  methods: {
    gammaDist: function(x, shape, rate) {
      const value =
        (Math.pow(rate, shape) / gamma(shape)) *
        Math.pow(x, shape - 1) *
        Math.pow(Math.E, -x * rate)
      return value
    },
    updateData: function() {
      this.x = [...Array(140).keys()].map(val => val / 10)
      this.y = this.x.map(val => this.gammaDist(val, this.shape, this.rate))
    }
  },

  mounted() {
    this.updateData()
    Plotly.newPlot("plot", [{ x: this.x, y: this.y }])
  }
}
</script>
