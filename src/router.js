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
            component: () => import("./views/app/pages/loading"),
          },
         
          
          {
            path: "home",
            component: () => import("./views/app/pages/home"),
            name:'home'
          },
          {
            path: "filter",
            component: () => import("./views/app/pages/filter"),
            name:'filter'
          },
          {
            path: "downloadleads",
            component: () => import("./views/app/pages/downloadleads"),
            name:'downloadleads'
          },
          {
            path: "success",
            component: () => import("./views/app/pages/success"),
            name:'success'
          },
          {
            path: "leaddetails",
            component: () => import("./views/app/pages/leaddetails"),
            name:'leaddetails'
          },
          {
            path: "addnote",
            component: () => import("./views/app/pages/addnote"),
            name:'addnote'
          },
          {
            path: "logactivity",
            component: () => import("./views/app/pages/logactivity"),
            name:'logactivity'
          },
          {
            path: "account",
            component: () => import("./views/app/pages/account"),
            name:'account'
          },
          {
            path: "failed",
            component: () => import("./views/app/pages/failed"),
            name:'failed'
          },
          // {
          //   path: "loading",
          //   component: () => import("./views/app/pages/loading"),
          //   name:'loading'
          // },
          
          {
            path: "sign-in",
            component: () => import("./views/app/pages/sign-in"),
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
