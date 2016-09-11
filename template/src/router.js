export default function (router) {
  router.map({
    '*': {
      component: function (resolve) {
        require(['./view/404.vue'], resolve);
      }
    },
    '/': {
      component: function (resolve) {
        require(['./view/index.vue'], resolve);
      }
    },
    '/index': {
      component: function (resolve) {
        require(['./view/index.vue'], resolve);
      }
    },
    '/a': {
      component: function (resolve) {
        require(['./view/a.vue'], resolve);
      }
    },
    '/b': {
      component: function (resolve) {
        require(['./view/b.vue'], resolve);
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
