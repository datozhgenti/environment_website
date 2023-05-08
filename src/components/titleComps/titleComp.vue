<template>
  <p class="title primary-text font-bold letter-spacing-2 relative">
    <slot>Know About us</slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.title::before {
  content: "";
  border-top: 2px solid var(--primary-text);
  top: 5px;
  width: 72px;
  position: absolute;
  top: 49%;
  left: -95px;
}

@media all and (max-width: 35.3125em) {
  .title::before {
    display: none;
  }
}
</style>
