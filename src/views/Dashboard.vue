<template>
  <div class="my-dashboard-container">
    <Header />
    <CreateStrain />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"
import CreateStrain from "@/components/CreateStrain.vue"
export default {
  name: "Dashboard",
  components: {
    Header,
    CreateStrain
  }
}
</script>
