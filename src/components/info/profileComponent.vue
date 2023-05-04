<template>
  <div>
    <v-row class="headline"> <v-col>Информация</v-col></v-row>
    <v-row class="d-flex flex-row">
      <v-col cols="2">
        <v-img
          width="200"
          height="200"
          src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
        ></v-img>
      </v-col>
      <v-col>
        <div><span class="font-weight-light">ФИО:</span> {{ info.name }}</div>
        <div>
          <span class="font-weight-light">Email:</span> {{ info.email }}
        </div>
        <div>
          <span class="font-weight-light">Телефон:</span> {{ info.phone }}
        </div>
        <div>
          <span class="font-weight-light">Группа:</span> {{ info.group }}
        </div>
        <div><span class="font-weight-light">Роль:</span> {{ info.role }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        name: "Фамилия Имя Отчество",
        email: "example@mail.ru",
        phone: "+7123456789",
        group: "02161-ДМ",
        role: "Студент",
      },
    };
  },
};
</script>

<style>
</style>