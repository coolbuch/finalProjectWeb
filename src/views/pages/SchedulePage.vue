<template>
    <v-container fluid>
      Schedule page
      <schedule/>
    </v-container>
  </template>
  
  <script>
  import Schedule from "@/components/schedule/scheduleComponent.vue"
  import axios from 'axios'
  export default {
    components:{Schedule},
    data(){
      return{

      }
    },
    created(){
      this.getSchedule(33)
    },
    methods:{
      getSchedule(groupId){
        axios.post('https://raspmath.isu.ru/schedule/' + groupId, {groupId}, {withCredentials: true, headers: {"Access-Control-Allow-Origin" : true}})
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      }
    }
  }
  </script>
  
  <style>
  
  </style>