<template>
  <div class="home">
    <div id="bigLogo">
      <img alt="SafeBlues logo" src="../assets/logo.svg" />
    </div>
    <h1>SafeBlues</h1>
    <HelloWorld msg="Welcome to SafeBlues Dashboard" />
  </div>
</template>

<style scoped>
#bigLogo {
  width: 15%;
  margin: 0 auto;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
