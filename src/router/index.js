import {createRouter, createWebHistory} from 'vue-router';

const HomeComponent = () => import('../public/pages/home.component.vue')
const DeliveryComponent = () => import('../last-mile/pages/delivery-view.component.vue')

const routes = [
    {path: '/home', name: 'home', component: HomeComponent, meta: {title: 'home'}},
    {path: '/last-mile/deliveries/new', name:'Delivery', component: DeliveryComponent, meta: {title: 'delivery'}},
    {path: '/', name: 'default', redirect: {name: 'home'}}
]

const router = createRouter({history: createWebHistory(import.meta.env.BASE_URL), routes});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);

    let baseTitle = 'Chazki';
    document.title = `${baseTitle} | ${to.name['title']}`;
    next();
})

export default router;