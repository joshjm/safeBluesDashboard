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
            <InputSingle title="Strand ID" id="strandID" value="strandID"  />
            <InputSingle
              v-model="startTime"
              title="Start Time"
              id="startTime"
            />
            <InputSingle v-model="endTime" title="End Time" id="endTime" />
            <InputSingle
              v-model="seedingProbability"
              title="Seeding Probability"
              id="seedingProbability"
            />
            <InputSingle
              v-model="infectionProbabilityMap"
              title="Infection Probability Map"
              id="infectionProbabilityMap"
            />
            <InputSingle
              v-model="incubationPeriodDistribution"
              title="Incubation Period Distribution"
              id="incubationPeriodDistribution"
            />
            <InputSingle
              v-model="infectiousPeriodDistribution"
              title="Infectious Period Distribution"
              id="infectiousPeriodDistribution"
            />
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
import InputSingle from "./InputSingle"
import axios from "axios"
export default {
  name: "CreateStrain",
  components: {
    InputSingle, // locally register, consider making global later
    DistributionGamma
  },
  data: () => {
    return {
      safeBluesURL: "http://testsite.com",
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
