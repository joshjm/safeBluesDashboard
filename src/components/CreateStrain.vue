<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <DistributionGamma />
        <p>Payload: {{ this.$store.state.virusParameters }}</p>
      </v-col>
      <v-col cols="6">
        <v-form>
          <h4>Create New Strain</h4>

          <v-text-field
            v-model="virusParameters.strandID"
            label="Strand ID"
            required
          ></v-text-field>
          <h5>Experimental Conditions</h5>

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
          <h5>Virus Phenotype</h5>
          <v-text-field
            v-model="virusParameters.infectionProbabilityMap"
            label="Infection Probability"
            required
          ></v-text-field>

          <v-layout row justify-space-between>
            <v-col cols="6">
              <v-text-field
                v-model="virusParameters.incubationShape"
                label="Incubation Shape"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="virusParameters.incubationRate"
                label="Incubation Rate"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="virusParameters.infectiousShape"
                label="infectious Shape"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="virusParameters.infectiousRate"
                label="infectious Rate"
                required
              ></v-text-field>
            </v-col>
          </v-layout>

          <button
            type="button"
            @click="sendData"
            class="btn x-large  btn-success w-100"
          >
            ☣INFECT☣ {{ virusParameters.strandId }}
          </button>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DistributionGamma from "@/components/DistributionGamma.vue"
import axios from "axios"
import { mapState } from "vuex"
import Schema from "@/pb/sb_pb"
import proto from "google-protobuf"
export default {
  name: "CreateStrain",
  components: {
    DistributionGamma
  },
  data: () => {
    return {
      distributions: ["Gamma", "other"],
      safeBluesURL: "api.safeblues.org:5000/stats",
      safeBluesPostURL: "https://api.safeblues.org/admin/new"
    }
  },
  computed: {
    // mapping data from the vuex store into the component

    ...mapState(["virusParameters"])
    // startTimestamp: function() {

    // }
  },
  methods: {
    sendData: function() {
      axios
        .post(this.safeBluesPostURL, this.virusParameters)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        //then update the data store
        .then(
          axios
            .get(this.$store.state.safeBluesURL)
            .then(response =>
              this.$store.commit("storeSafeBluesData", response.data)
            )
        )
        .catch(error => console.log(error))
    },

    dateStringToTimestampConverter: function(dateString, timeString) {
      const dateArr = dateString.split("-")
      const timeArr = timeString.split(":")
      const seconds = 0
      const milliseconds = 0
      const dateGenerationArray = [
        ...dateArr,
        ...timeArr,
        seconds,
        milliseconds
      ]
      const date = new Date(...dateGenerationArray)
      const timestamp = new proto.google.protobuf.Timestamp()
      timestamp.fromDate(date)
      return timestamp
    }
  }
}
</script>
