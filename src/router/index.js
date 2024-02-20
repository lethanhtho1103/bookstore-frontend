import { createWebHistory, createRouter } from "vue-router";

import Book from "@/views/Book.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: Book,
  },
  {
    path: "/books/:id",
    name: "book.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/books/",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
