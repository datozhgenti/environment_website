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

const tab1Comp = () =>
  import("@/components/donationPageComponents/tabComps/tabComp1.vue");

const tab2Comp = () =>
  import("@/components/donationPageComponents/tabComps/tabComp2.vue");

const tab3Comp = () =>
  import("@/components/donationPageComponents/tabComps/tabComp3.vue");

const routes = [
  { path: "/", component: homePage, alias: "/home" },
  { path: "/about", component: aboutPage },
  { path: "/what-we-do", component: whatWeDoPage },
  { path: "/media", component: mediaPage },
  { path: "/contact", component: contactPage },
  {
    path: "/donation",
    component: donationPage,
    children: [
      { path: "", components: { tab1: tab1Comp }, alias: "overview" },
      { path: "impact", components: { tab2: tab2Comp } },
      { path: "what-you-get", components: { tab3: tab3Comp } },
    ],
  },
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
