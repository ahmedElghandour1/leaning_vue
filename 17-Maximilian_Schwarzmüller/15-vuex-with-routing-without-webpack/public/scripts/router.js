console.log(Counter);

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/counter', component: Counter, name: 'counter'},

]
const routerOptions = {
    mode: 'hash',

}

const router = new VueRouter({
    routes,
    ...routerOptions
}) 
router.beforeEach((to, from , next) => {
    console.log(to, from);
    next();
})
router.afterEach((to, from ) => {
    console.log(to, from);
    
  })