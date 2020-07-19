<template>
  <div class="container">
    <h3>gamma distribution coming soon</h3>
    {{ alpha }}, {{ theta }}
    <div id="plot"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js"
import Vue from "vue"
import {gamma} from "mathjs" 
export default Vue.extend({
  name: "DistributionGamma",
  props: {
    alpha: {
      type: Number,
      default: 2
    },
    theta: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    
    const gammaDist =function(x, alpha, theta){
      const value = (Math.pow(theta,alpha)/gamma(x))*Math.pow(x,alpha-1)*Math.pow(Math.E, -x*theta);
      return (value)
    }

    const x = [...Array(140).keys()].map(val => val/10)
    const y = x.map(val => gammaDist(val, this.alpha, this.theta));

    const trace1 = {
      x: x,
      y: y
    }
    const data = [trace1]

    Plotly.newPlot("plot", data)
  }
})
</script>
