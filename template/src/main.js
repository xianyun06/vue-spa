import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Mint);

Vue.http.options.emulateJSON = true;//跨域请求，需加上这句

let router = new VueRouter({});
routerMap(router);

let app = Vue.extend({
  store,
});
router.start(app,'#app');
