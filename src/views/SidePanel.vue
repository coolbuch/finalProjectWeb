<template>
  <div>
    <router-link to="/"><v-btn text color="primary darken-2" class="item mb-3" >Профиль</v-btn></router-link>
    <router-link to="/courses"><v-btn text color="primary darken-2"  class="item  mb-3"> Курсы </v-btn></router-link>
    <router-link to="/marks"><v-btn text color="primary darken-2" class="item  mb-3">Успеваемость</v-btn></router-link>
    <router-link to="/schedule"><v-btn text color="primary darken-2" class="item  mb-3">Расписание </v-btn> </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.item{
    display: block;
    width: 100%;
}
</style>