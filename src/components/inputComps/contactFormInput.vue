<template>
  <div class="input-field">
    <label
      :for="labelFor"
      class="primary-text font-12 font-bold opacity-60 block line-height-19"
      >{{ labelProp }}</label
    >
    <input
      :type="inputType"
      :id="labelFor"
      class="w100 block primary-text line-height-26"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelProp: {},
    labelFor: {},
    inputType: {
      default: "text",
    },
  },
};
</script>

<style scoped>
.input-field {
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.25rem;
}

label {
  margin-bottom: 0.5rem;
}
</style>
