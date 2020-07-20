<template>
  <div>
    <h3>Manage Strains</h3>
    <h4> Create New Strain </h4>
    <create-strain />
  </div>
</template>

<script>
import CreateStrain from "@/components/CreateStrain.vue"
export default {
  name: "Admin",
  components: {
    CreateStrain
  }
}
</script>
