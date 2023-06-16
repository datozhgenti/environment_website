<template>
  <div class="projects-row flex space-between wrap row-gap-40">
    <projectCard
      v-for="(project, index) in projects"
      :key="project"
      :imgUrl="project.img"
      :titleProp="project.title"
      :subtitleProp="project.subtitle"
      :id="index === 1 ? 'opacity-8' : ''"
    ></projectCard>
  </div>
</template>

<script setup>
import projectCard from "../cards/projectCard.vue";
</script>

<script>
export default {
  data() {
    return {
      projects: [
        {
          img: require("@/assets/projectSectionPhotos/Image1.png"),
          title: "Mission 40K: Tree plantation",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
          img: require("@/assets/projectSectionPhotos/Image2.png"),
          title: "Weekly cleanliness program in city",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
          img: require("@/assets/projectSectionPhotos/Image3.png"),
          title: "Wildlife safety program 2021",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media all and (max-width: 81.375em) {
  .space-between {
    justify-content: space-evenly;
  }
}
</style>
