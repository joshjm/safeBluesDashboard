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
            <InputSingle title="Strand ID" id="StrandID" />
            <InputSingle title="Start Time" id="startTime" />
            <InputSingle title="End Time" id="endTime" />
            <InputSingle title="Seeding Probability" id="seedingProbability" />
            <InputSingle
              title="Infection Probability Map"
              id="infectionProbabilityMap"
            />
            <InputSingle
              title="Incubation Period Distribution"
              id="incubationPeriodDistribution"
            />
            <InputSingle
              title="Infectious Period Distribution"
              id="infectiousPeriodDistribution"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DistributionGamma from "@/components/DistributionGamma.vue"
import InputSingle from "./InputSingle"
export default {
  name: "CreateStrain",
  components: {
    InputSingle, // locally register, consider making global later
    DistributionGamma
  }
  // mounted() {
  // }
}
</script>
