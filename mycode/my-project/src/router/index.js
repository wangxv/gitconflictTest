import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ActivityList from '@/components/wcomponents/ActivityList'
import GoodsList from '@/components/wcomponents/Goods'
import UserList from '@/components/wcomponents/User'
import GoodsConfig from '@/components/wcomponents/GoodsConfig'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/activityList',
        name: 'ActivityList',
        component: ActivityList
    }, {
        path: '/goodsList',
        name: 'GoodsList',
        component: GoodsList
    }, {
        path: '/userList',
        name: 'UserList',
        component: UserList
    }, {
        path: '/goodsConfig',
        name: 'GoodsConfig',
        component: GoodsConfig
    }]
})