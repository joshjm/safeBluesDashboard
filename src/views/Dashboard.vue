<template>
  <div class="my-dashboard-container">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue"
export default {
  name: "Dashboard",
  components: {
    Header
  }
}
</script>
