import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('view/home/Home');
const About = () => import('view/about/About');
const Cart = () => import('view/cart/Cart');
const Profle = () => import('view/profile/Profile');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    }, {
      path: '/about',
      component: About
    }, {
      path: '/cart',
      component: Cart
    }, {
      path: '/profle',
      component: Profle
    }
  ],
  mode: 'history'
})

