<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      {{this.$router.currentRoute.name}}
    </v-app-bar>

    <v-main>
      <div class="main">
        <side-panel class="side-panel"></side-panel>
        <router-view class="main-content"/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import SidePanel from "@/views/SidePanel.vue"
export default {
  name: 'App',
  components:{SidePanel},

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "@/styles/index.scss"
</style>