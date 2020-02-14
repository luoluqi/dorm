import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/themes/layout/index'
import store from '../store'

Vue.use(Router)
// 路由实例
const router = new Router({
  scrollBehavior (to, from, savedPosition) { // 路由滚动行为
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(position)
            }, 500)
        })
    }
  },
  routes: [
    {
      path: '/dorm',
      name: '',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/layout/index'),
      children: [
       
        {
          path: 'count',
          name: '宿舍考勤报表',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/count/index')
        },
        {
          path: 'time',
          name: '考勤时间管理',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/time/index')
        },
        {
          path: 'wifi',
          name: '宿舍WIFI管理',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/wifi/index')
        },
        {
          path: 'source',
          name: '考勤数据来源',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/source/index')
        },
        {
          path: 'dorm',
          name: '宿舍信息管理',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/dorm/index')
        },
        {
          path: 'student',
          name: '住宿生信息管理',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/student/index')
        },
        {
          path: 'roomList',
          name: '宿舍列表',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/views/dorm/roomList')
        }
      ]
    },
    {
      path: '/',
      redirect: '/dorm/count'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/login/Login')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/403',
      name: 'Error403',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/error/403')
    },
    {
      path: '/error/404',
      name: 'Error404',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/error/404')
    }
  ]
})
router.beforeEach((to, from, next) => {
  store
    .dispatch('common/GgetTokenByPC', '')
    .then(res => {
      // console.log(JSON.parse(res))
      next()
    })
    .catch(error => {
      console.log(error)
      next()
    })  
})
router.afterEach((to, from) => {
  // window.document.title = to.meta.title
})
export default router
