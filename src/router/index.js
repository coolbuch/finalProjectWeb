import Vue from 'vue'
import VueRouter from 'vue-router'
import InfoPage from '../views/pages/InfoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profile',
    props :{default : true,title: 'Профиль'},
    component: InfoPage
  },
  {
    path: '/about',
    name: 'about',
    props :{title: ''},
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    props :{default : true,title: 'Курсы'},
    component: () => import( '../views/pages/CoursePage.vue')
  },
  {
    path: '/marks',
    name: 'Marks',
    props :{default : true,title: 'Успеваемость'},
    component: () => import( '../views/pages/MarksPage.vue')
  }, 
  {
    path: '/schedule',
    name: 'Schedule',
    props :{default : true,title: 'Расписание'},
    component: () => import( '../views/pages/SchedulePage.vue')
  } 
]

const router = new VueRouter({
  routes
})

export default router
