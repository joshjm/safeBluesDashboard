<template>
  <div class="container">
    <!-- display for debugging -->
    shape {{$store.state.virusParameters.shape}}
    rate {{$store.state.virusParameters.rate}}
    shape: {{ Math.round(100 * shape) / 100 }}, rate:
    {{ Math.round(100 * rate) / 100 }}, mean: {{ mean }}, var: {{ variance }}
    <div class="row">
      <input type="text" class="form-control w-25" v-model="mean" />
      <input
        type="range"
        v-model="mean"
        min="0"
        max="20"
        class="custom-range"
        step="0.5"
        id="customRange1"
      />
    </div>
    <div class="row">
      <input type="text" class="form-control w-25" v-model="variance" />
      <input
        type="range"
        v-model="variance"
        min="0"
        max="25"
        class="custom-range"
        step="0.1"
        id="customRange2"
      />
    </div>
    <div id="plot"></div>
    <p v-if="overflow">Shape has grown too large to display graph.</p>
  </div>
</template>

<script>
import Plotly from "plotly.js"
import { gamma } from "mathjs"
export default {
  name: "DistributionGamma",
  data: () => {
    return {
      mean: 14,
      variance: 2,
      x: [],
      y: [],
      overflow: false,
      layout: {
        title: "Incubation Period",
        autosize: true,
        xaxis: {
          title: "days"
        },
        yaxis: {
          range: [0, 1]
        },

        width: 500
      },
      config: { responsive: true }
    }
  },
  computed: {
    shape: function() {
      return  this.mean ** 2 / this.variance
    },
    rate: function() {
      return this.mean / this.variance
    }
  },
  watch: {
    shape() {
      this.updateData()
<<<<<<< HEAD
      this.$store.state.virusParameters.shape = this.shape
      Plotly.react("plot", [{ x: this.x, y: this.y }], this.layout)
    },
    rate() {
      this.updateData()
      this.$store.state.virusParameters.rate = this.rate
      Plotly.react("plot", [{ x: this.x, y: this.y }], this.layout)
=======
      Plotly.react("plot", [{ x: this.x, y: this.y }], this.layout, this.config)
    },
    rate() {
      this.updateData()
      Plotly.react("plot", [{ x: this.x, y: this.y }], this.layout, this.config)
>>>>>>> 7f5a7ecbf9b92a7ba0f1abeb6d7a843dda889123
    }
  },
  methods: {
    gammaDist: function(x, shape, rate) {
      if (gamma(shape) == Infinity) {
        // gamma(shape) can grow to E300, and cause NaNs.
        this.overflow = true
        return 0
      }
      this.overflow = false
      const value =
        (Math.pow(rate, shape) / gamma(shape)) *
        Math.pow(x, shape - 1) *
        Math.pow(Math.E, -x * rate)
      return value
    },
    updateData: function() {
      this.x = [...Array(25 * 10).keys()].map(val => val / 10)
      this.y = this.x.map(val => this.gammaDist(val, this.shape, this.rate))
    }
  },

  mounted() {
    this.updateData()
    Plotly.newPlot("plot", [{ x: this.x, y: this.y }], this.layout, this.config)
  }
}
</script>
