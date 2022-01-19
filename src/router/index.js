import Vue from "vue";
import VueRouter from "vue-router";
import CreatePlayer from "../views/CreatePlayer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/createPlayer'
  },
  {
    path: "/createPlayer",
    name: "CreatePlayer",
    component: CreatePlayer,
  },
  {
    path: "/listPlayersBoards",
    name: "ListPlayersBoards",
    component: () =>
      import(/* webpackChunkName: "listPlayersBoards" */ "../views/ListPlayersBoards.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/Game.vue"),
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import(/* PageNotFound: "PageNotFound" */ '../views/PageNotFound.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
