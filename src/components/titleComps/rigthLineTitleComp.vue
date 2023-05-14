<template>
  <h2 class="font-40 font-medium primary-text line-height-56 flex align-center">
    <slot></slot>
  </h2>
</template>

<script></script>

<style scoped>
h2 {
  column-gap: 23px;
}

h2:after {
  content: "";
  float: right;
  border-top: 1px solid var(--border);
  flex-grow: 1;
}
</style>
