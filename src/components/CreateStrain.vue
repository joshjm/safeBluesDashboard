<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <DistributionGamma/>
      </v-col>
      <v-col cols="6">
        <v-form>
          <v-text-field
            v-model="virusParameters.strandID"
            label="Strand ID"
            required
          ></v-text-field>
          <v-text-field
            v-model="virusParameters.startDate"
            label="startDate"
            type="date"
            required
          ></v-text-field>
          <v-text-field
            v-model="virusParameters.startTime"
            label="startTime"
            type="time"
            required
          ></v-text-field>
          <v-text-field
            v-model="virusParameters.endDate"
            label="endDate"
            type="date"
            required
          ></v-text-field>
          <v-text-field
            v-model="virusParameters.endTime"
            label="endTime"
            type="time"
            required
          ></v-text-field>

          <v-text-field
            v-model="virusParameters.seedingProbability"
            label="Seeding Probability"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            v-model="virusParameters.infectionProbabilityMap"
            label="Infection Probability Map"
            required
          ></v-text-field>
          <v-text-field
            v-model="virusParameters.incubationPeriodDistribution"
            label="incubationPeriodDistribution"
            required
          ></v-text-field>

          <button type="button" v-on:click="sendData" class="btn btn-success">
            Infect {{ virusParameters.strandID }}
          </button>
          <p>virus params: {{ this.virusParameters }}</p>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DistributionGamma from "@/components/DistributionGamma.vue"
import axios from "axios"
import { mapState } from "vuex"

export default {
  name: "CreateStrain",
  components: {
    DistributionGamma
  },
  data: () => {
    return {
      distributions: ["Gamma", "other"],
      safeBluesURL: "api.safeblues.org:5000/stats/1"
    }
  },
  computed: {
    // mapping data from the vuex store into the component

    ...mapState(["virusParameters"])
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
