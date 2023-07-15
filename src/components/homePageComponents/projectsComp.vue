<template>
  <section
    class="projects padding-top-bottom-96 left-right-padding-20"
    id="projects"
  >
    <div class="wrapper">
      <div class="top-content left-padding-95" data-aos="flip-up">
        <titleComp>Projects we have done</titleComp>
        <div class="projects-header-wrapper" id="auto">
          <h2 class="font-48 primary-text" id="header-responsive">
            We are Creating sustainable society, for everyone and forever.
          </h2>
        </div>
      </div>
      <projectsRow></projectsRow>
    </div>
  </section>
</template>

<script setup>
import titleComp from "../titleComps/titleComp.vue";
import projectsRow from "../projectsRowComps/projectsRow.vue";
</script>

<style scoped>
.projects-header-wrapper {
  width: 640px;
  margin: 32px 0 67px;
  margin-left: 13px;
}
</style>
