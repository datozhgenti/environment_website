<template>
  <section
    class="projects padding-top-bottom-96 left-right-padding-20"
    id="projects"
  >
    <div class="wrapper">
      <div class="top-content left-padding-95">
        <titleComp>Projects we have done</titleComp>
        <div class="projects-header-wrapper" id="auto">
          <h2 class="font-48 primary-text" id="header-responsive">
            We are Creating sustainable society, for everyone and forever.
          </h2>
        </div>
      </div>
      <div class="bottom-content flex space-between wrap row-gap-40">
        <projectCard
          v-for="(project, index) in projects"
          :key="project"
          :imgUrl="project.img"
          :titleProp="project.title"
          :subtitleProp="project.subtitle"
          :id="index === 1 ? 'opacity-8' : ''"
        ></projectCard>
      </div>
    </div>
  </section>
</template>

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

<script setup>
import titleComp from "../titleComps/titleComp.vue";
import projectCard from "../cards/projectCard.vue";
</script>

<style scoped>
.projects-header-wrapper {
  width: 640px;
  margin: 32px 0 67px;
  margin-left: 13px;
}

@media all and (max-width: 81.375em) {
  .space-between {
    justify-content: space-evenly;
  }
}
</style>
