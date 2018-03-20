import Vue from 'vue'
import Router from 'vue-router'
import ChartApp from '@/components/ChartAppComponent.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
// Vue.component(ChartApp, {message: "hello"})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/chats/:chatId",
      name: 'ChartApp',
      component: ChartApp
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
