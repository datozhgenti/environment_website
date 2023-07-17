<template>
  <div class="list-card flex" data-aos="fade-right">
    <img :src="imgProp" alt="icon" />
    <div>
      <h3 class="font-24 primary-text line-height-28" :id="idProp">
        {{ titleProp }}
      </h3>
      <p class="secondary-text line-height-26">
        {{ subtitleProp }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgProp", "titleProp", "subtitleProp", "idProp"],
};
</script>

<style scoped>
.list-card {
  column-gap: 24px;
  width: 27.25em;
}

.list-card img {
  width: 1.75em;
  height: 1.75em;
}

h3 {
  margin-bottom: 14px;
}

#first-h3 {
  margin-bottom: 8px;
}

@media all and (max-width: 33.125em) {
  .list-card {
    width: auto;
  }
}
</style>
