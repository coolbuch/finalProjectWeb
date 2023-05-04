<template>
  <v-container fluid>
    <profile/>
    <portfolio />
  </v-container>
</template>

<script>
import Profile from "@/components/info/profileComponent.vue"
import Portfolio from "@/components/info/portfolioComponent.vue"

export default {
    components:{
        Profile, Portfolio
    }
}
</script>

<style>

</style>