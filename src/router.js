import { createRouter, createWebHistory } from "vue-router";

import homePage from "@/pages/homePage.vue";

const aboutPage = () => import("@/pages/aboutPage.vue");

const whatWeDoPage = () => import("@/pages/whatWeDoPage.vue");

const mediaPage = () => import("@/pages/mediaPage.vue");

const contactPage = () => import("@/pages/contactPage.vue");

const donationPage = () => import("@/pages/donationPage.vue");

const projectInner = () => import("@/pages/projectInner.vue");

const blogPostInner = () => import("@/pages/blogPostInner.vue");

const eventInner = () => import("@/pages/eventInner.vue");

const routes = [
  { path: "/", component: homePage, alias: "/home" },
  { path: "/about", component: aboutPage },
  { path: "/what-we-do", component: whatWeDoPage },
  { path: "/media", component: mediaPage },
  { path: "/contact", component: contactPage },
  { path: "/donation", component: donationPage },
  { path: "/project-inner", component: projectInner },
  { path: "/blog-post-inner", component: blogPostInner },
  { path: "/event-inner", component: eventInner },
];

const router = createRouter({
  history: createWebHistory("/environment"),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
