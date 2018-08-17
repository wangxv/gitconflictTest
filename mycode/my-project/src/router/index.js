import Vue from 'vue'
import Router from 'vue-router'
import ActivityList from '@/components/wcomponents/ActivityList'
import GoodsList from '@/components/wcomponents/Goods'
import UserList from '@/components/wcomponents/User'
import GoodsConfig from '@/components/wcomponents/GoodsConfig'
import Item1 from '@/components/wcomponents/second/Item1'
import Item2 from '@/components/wcomponents/second/Item2'
import Item3 from '@/components/wcomponents/second/Item3'
import Item4 from '@/components/wcomponents/second/Item4'
import Tindex from '@/components/wcomponents/three/index'

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
    }, {
        path: '/goodsConfig/Item1',
        name: 'Item1',
        component: Item1
    }, {
        path: '/goodsConfig/Item2',
        name: 'Item2',
        component: Item2
    }, {
        path: '/goodsConfig/Item3',
        name: 'Item3',
        component: Item3
    }, {
        path: '/goodsConfig/Item4',
        name: 'Item4',
        component: Item4
    }]
})
