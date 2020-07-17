<template>
  <div class="my-dashboard-container">
    <Header />
    <TestPlot />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TestPlot from "@/components/TestPlot.vue"
export default {
  name: "Dashboard",
  components: {
    Header,
    TestPlot
  }
};
</script>