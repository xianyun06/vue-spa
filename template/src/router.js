export default function (router) {
  router.map({
    '*': {
      component: function (resolve) {
        require(['./view/404.vue'], resolve);
      }
    },
    '/demo': {
      component: function (resolve) {
        require(['./demo/list.vue'], resolve);
      },
      subRoutes: {

      }
    }
  })

}
