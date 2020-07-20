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
import Vue from "vue"
import { gamma } from "mathjs"
export default Vue.extend({
  name: "DistributionGamma",
  data: () => {
    return {
      alpha: 5,
      theta: 5,
      x: [],
      y: [],
    }
  },
  watch: {
    alpha() {
      this.updateData();
      Plotly.react('plot', [{x: this.x, y: this.y}]);
      // Plotly.newPlot('plot', this.data);
      console.log("WATCHING alpha ")
    },
    theta() {
      this.updateData();
      Plotly.react('plot', [{x: this.x, y: this.y}]);
      console.log("WATCHING theta")
      // Plotly.react('plot', this.data);
    }
  },
  methods: {
    gammaDist: function(x, alpha, theta) {
      const value =
        (Math.pow(theta, alpha) / gamma(x)) *
        Math.pow(x, alpha - 1) *
        Math.pow(Math.E, -x * theta)
      return value
    },
    updateData: function(){
      this.x = [...Array(140).keys()].map(val => val / 10)
      this.y = this.x.map((val) => this.gammaDist(val, this.alpha, this.theta))
    }
  },

  mounted() {
    // this.x = [...Array(140).keys()].map(val => val / 10)
    // this.y = this.x.map((val) => this.gammaDist(val, this.alpha, this.theta))
    this.updateData();
    Plotly.newPlot("plot", [{x: this.x, y: this.y}])
  }
})
</script>
