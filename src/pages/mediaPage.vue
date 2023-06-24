<template>
  <navComp id="bg-green-ter"></navComp>
  <headerComp></headerComp>
  <blogComp :textWithLine="false" class="padding-top-bottom-96"></blogComp>
  <eventComp id="padding-top-0"></eventComp>
  <footerComp></footerComp>
</template>

<script setup>
import navComp from "@/components/homePageComponents/navComp.vue";
import headerComp from "@/components/mediaPageComponents/headerComp.vue";
import blogComp from "@/components/homePageComponents/blogComp.vue";
import eventComp from "@/components/homePageComponents/eventComp.vue";
import footerComp from "@/components/homePageComponents/footerComp.vue";
</script>

<style></style>
