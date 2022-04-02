import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import Recipe from "../views/Recipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "users",
    component: Users,
  },
  {
    path: "/recipe",
    name: "recipe",
    component: Recipe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
