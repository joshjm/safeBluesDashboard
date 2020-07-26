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
            <div class=" form-group">
              <label>Strand ID</label>
              <input type="text" v-model="strandID" class="form-control" />
            </div>
            <div class="form-group">
              <label>Start Time</label>
              <input type="text" v-model="startTime" class="form-control" />
            </div>
            <div class="form-group">
              <label>End time</label>
              <input type="text" v-model="endTime" class="form-control" />
            </div>
            <div class="form-group">
              <label>Seeding Probability</label>
              <input type="text" v-model="seedingProbability" class="form-control" />
            </div>
            <div class="form-group">
              <label>Infection Probability Map</label>
              <input
                type="text"
                v-model="infectionProbabilityMap"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>incubationPeriodDistribution</label>
              <input
                type="text"
                v-model="incubationPeriodDistribution"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label>infectiousPeriodDistribution</label>
              <input
                type="text"
                v-model="infectiousPeriodDistribution"
                class="form-control"
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
      safeBluesURL: "api.safeblues.org:5000/stats/1",
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
