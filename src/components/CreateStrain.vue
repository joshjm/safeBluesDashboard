<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <DistributionGamma></DistributionGamma>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="center">New Virus Parameters</h3>
            <div class="row">
              <label>Strand ID</label>
              <input type="text" v-model="strandID" class="w-25" />
            </div>
            <div class="row">
              <label>Start Time</label>
              <input type="text" v-model="startTime" class="w-25" />
            </div>
            <div class="row">
              <label>End time</label>
              <input type="text" v-model="endTime" class="w-25" />
            </div>
            <div class="row">
              <label>Seeding Probability</label>
              <input type="text" v-model="seedingProbability" class="w-25" />
            </div>
            <div class="row">
              <label>Infection Probability Map</label>
              <input
                type="text"
                v-model="infectionProbabilityMap"
                class="w-25"
              />
            </div>
            <div class="row">
              <label>incubationPeriodDistribution</label>
              <input
                type="text"
                v-model="incubationPeriodDistribution"
                class="w-25"
              />
            </div>

            <div class="row">
              <label>infectiousPeriodDistribution</label>
              <input
                type="text"
                v-model="infectiousPeriodDistribution"
                class="w-25"
              />
            </div>

            <button type="button" v-on:click="sendData" class="btn btn-success">
              Infect
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DistributionGamma from "@/components/DistributionGamma.vue"
import axios from "axios"
export default {
  name: "CreateStrain",
  components: {
    DistributionGamma
  },
  data: () => {
    return {
      safeBluesURL: "http://safeblues.org/5000",
      strandID: "this is the id",
      startTime: "",
      endTime: "",
      seedingProbability: "",
      infectionProbabilityMap: "",
      incubationPeriodDistribution: "",
      infectiousPeriodDistribution: ""
    }
  },
  methods: {
    sendData: function() {
      axios
        .post(this.safeBluesURL, {
          strandID: this.strandID,
          startTime: this.startTime,
          endTime: this.endTime,
          seedingProbability: this.seedingProbability,
          infectionProbabilityMap: this.infectionProbabilityMap,
          incubationPeriodDistribution: this.incubationPeriodDistribution,
          infectiousPeriodDistribution: this.infectiousPeriodDistribution
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
