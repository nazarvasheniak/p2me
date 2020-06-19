import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Products from './views/Products.vue'
import Orders from './views/Orders.vue'
import Order from './views/Order.vue'
import Notfound from './views/Notfound.vue'
import Product from './views/Product.vue'
import Reviews from './views/Reviews.vue'
import Clients from './views/Clients.vue'
import Login from './views/Login.vue'
import Request from './views/Request.vue'
import Drivers from './views/Drivers.vue'
import Drive from './views/Drive.vue'
import EditDriverS from './views/EditDriverS.vue'
import Suppliers from './views/Suppliers.vue'
import Supplier from './views/Supplier.vue'
import Feedbacks from './views/Feedbacks.vue'
import SupplierOrderS from './views/SupplierOrderS.vue'
import SupplierOrderSingle from './views/SupplierOrderSingle.vue'
import SupplierProductS from './views/SupplierProductS.vue'
import SupplierProductItem from './views/SupplierProductItem.vue'
import Account from './views/Account.vue'
import AccountOrderS from './views/AccountOrderS.vue'
import Settings from './views/Settings.vue'
import ClientOrders from './views/ClientOrders.vue'
import ProductsCategoryItem from './views/ProductCategoryItem.vue'
import Courier from './views/Courier.vue'
import AccountOrderCour from './views/AccountOrderCour.vue'
import EditCouriers from './views/EditCouriers.vue'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'activePage',
  routes: [{
    path: '/',
    redirect: {
      path: '/request',
      name: 'request',
    }
  },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/productsCategoryItem/:id',
      name: 'productsCategoryItem',
      props: true,
      component: ProductsCategoryItem
    },
    {
      path: '/products/product/:id',
      name: 'product',
      props: true,
      component: Product
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    {
      path: '/orders/order/:id',
      name: 'order',
      component: Order,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: 'notfound',
      component: Notfound
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/clientOrders',
      name: 'clientOrders',
      component: ClientOrders
    },

    {
      path: '*',
      redirect: {
        path: '/404 ',
        name: 'notfound'
      }
    },
    {
      path: '/request',
      name: 'request',
      component: Request
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: Drivers
    },
    {
      path: '/drive/:id',
      name: 'drive',
      component: Drive
    },
    {
      path: '/editDriverS/:id',
      name: 'editDriverS',
      component: EditDriverS
    },
    {
      path: '/editCouriers',
      name: 'editCouriers',
      component: EditCouriers
    },
    {
      path: '/suppliers',
      name: 'suppliers',
      component: Suppliers,
      props: true
      
    },
    {
      path: '/supplier/:id',
      name: 'supplier',
      component: Supplier
    },
    {
      path: '/feedbacks/:id',
      name: 'feedbacks',
      component: Feedbacks
    },
    {
      path: '/supplierOrderS',
      name: 'supplierOrderS',
      component: SupplierOrderS
    },
    {
      path: '/supplierOrderSingle',
      name: 'supplierOrderSingle',
      component: SupplierOrderSingle
    },
    {
      path: '/supplierProductS',
      name: 'supplierProductS',
      component: SupplierProductS
    },
    {
      path: '/supplierProductItem',
      name: 'supplierProductItem',
      component: SupplierProductItem
    },
    
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/accountOrderS',
      name: 'accountOrderS',
      component: AccountOrderS
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    
    {

      path: '/courier/:id',
      name: 'courier',
      component: Courier
},
     {
        path: '/accountOrderCour',
        name : 'accountOrderCour',
       component: AccountOrderCour
     },

    {
      path: '/clientOrders',
      name: 'clientOrders',
      component: ClientOrders
    },
    
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    next('/login')
  } else {
    next()
  }
});

export default router