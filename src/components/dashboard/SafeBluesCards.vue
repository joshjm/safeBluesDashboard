<template>
    <div class="table">
        <v-card
          class="mx-auto"
          max-width="344"
          v-for="item in $store.state.safeBluesData.stats"
          :key="item.strandId"
        >
          <v-card-text>
            <h3>Strain Id: {{ item.strandId }}</h3>
            <p>Times: {{ item.times }}</p>
            <p>Total incubating strands: {{ item.totalIncubatingStrands }}</p>
            <p>Total infected strands: {{ item.totalInfectedStrands }}</p>
            <p>Total removed strands: {{ item.totalRemovedStrands }}</p>
          </v-card-text>
        </v-card>
      </div>
</template>

<script>
export default {
    name: "SafeBluesCards"
}
</script>

<style>

</style>