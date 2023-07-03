<template>
  <section class="projects left-right-padding-20">
    <div class="wrapper">
      <div class="projects-content">
        <projectsRow></projectsRow>
      </div>
    </div>
  </section>
</template>

<script setup>
import projectsRow from "../projectsRowComps/projectsRow.vue";
</script>

<style scoped>
.projects {
  margin-top: 86px;
}
</style>
