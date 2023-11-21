import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
// import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views/app/pages"), //webpackChunkName app
    // beforeEnter: authenticate,
    redirect: "/",

    children: [
      // pages
      {
        path: "/",
        component: () => import("./views/app/pages"),
        redirect: "/",
        children: [
     
          {
            path: "",
            component: () => import("./views/app/pages/home"),
          },
         
          {
            path: "home",
            component: () => import("./views/app/pages/home"),
            name:'home'
          },
   
          {
            path: "awards",
            component: () => import("./views/app/pages/awards"),
            name:'awards'
          },

          {
            path: "/project/:id",
            component: () => import("./views/app/pages/project"),
            name:'project'
          },

          {
            path: "/empty/:id",
            component: () => import("./views/app/pages/empty"),
            name:'empty'
          },

          {
            path: "sidebar",
            component: () => import("./views/app/pages/sidebar"),
            name:'sidebar'
          },
          {
            path: "eventsDetails",
            component: () => import("./views/app/pages/eventsDetails"),
            name:'events_details'
          },
          {
            path: "projectsDetails",
            component: () => import("./views/app/pages/projectsDetails"),
            name:'projects_details'
          },
         
        ]
      },
    
    ]
  },

  {
    path: "*",
    component: () => import("./views/app/pages/notFound")
  }
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
