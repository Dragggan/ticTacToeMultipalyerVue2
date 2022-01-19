import Vue from "vue";
import VueRouter from "vue-router";
import CreatePlayer from "../views/CreatePlayer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createPlayer",
    name: "CreatePlayer",
    component: CreatePlayer,
  },
  {
    path: "/listPlayersBoards",
    name: "ListPlayersBoards",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListPlayersBoards.vue"),
  },
  {
    path: "/game",
    name: "Game",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Game.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
