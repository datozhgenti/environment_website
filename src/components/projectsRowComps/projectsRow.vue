<template>
  <div class="projects-row flex space-between wrap row-gap-40">
    <projectCard
      v-for="(project, index) in projects"
      :key="project"
      :imgUrl="project.img"
      :titleProp="project.title"
      :subtitleProp="project.subtitle"
      :animDelay="project.delay"
      :id="index === 1 ? 'opacity-8' : ''"
    ></projectCard>
  </div>
</template>

<script setup>
import projectCard from "../cards/projectCard.vue";
</script>

<script>
import deleteAnimDelays from "@/composables/deleteAnimDelays";
export default {
  data() {
    return {
      projects: [
        {
          img: require("@/assets/projectSectionPhotos/Image1.png"),
          title: "Mission 40K: Tree plantation",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
          delay: 200,
        },
        {
          img: require("@/assets/projectSectionPhotos/Image2.png"),
          title: "Weekly cleanliness program in city",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
          delay: 400,
        },
        {
          img: require("@/assets/projectSectionPhotos/Image3.png"),
          title: "Wildlife safety program 2021",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
          delay: 600,
        },
      ],
    };
  },
  methods: {},
  mounted() {
    deleteAnimDelays("79.5em", this.projects);
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
