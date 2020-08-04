<template>
  <div>
    <h3>Current Strain Info</h3>
    <v-data-table
      :headers="headers"
      :items="$store.state.safeBluesData.strands"
      :items-per-page="10"
      :sort-by.sync="sortBy"
      :sort-desc.sync="descending"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "StrandDataTable",
  data: () => {
    return {
      sortBy: "Date",
      descending: true,
      // TODO: generate headers programatically based on what is in the strand. 
      headers: [
        { text: "strandId", value: "strandId" },
        { text: "endTime", value: "endTime" },
        { text: "incubationPeriodDays", value: "incubationPeriodDays" },
        { text: "infectionProbability", value: "infectionProbability" },
        { text: "infectiousPeriodDays", value: "infectiousPeriodDays" },
        { text: "seedingProbability", value: "seedingProbability" },
        { text: "startTime", value: "startTime" }
      ]
    }
  }
}
</script>

<style></style>
