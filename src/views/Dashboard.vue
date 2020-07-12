<template>
  <div class="dashboard">
    <Header />
    <h2>Hello world</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "Dashboard",
  components: {
    Header
  }
};
</script>
