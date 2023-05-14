<template>
  <p class="font-40 font-medium primary-text line-height-56 flex align-center">
    <slot></slot>
  </p>
</template>

<script></script>

<style scoped>
p {
  column-gap: 23px;
}

p:after {
  content: "";
  float: right;
  border-top: 1px solid var(--border);
  flex-grow: 1;
}
</style>
