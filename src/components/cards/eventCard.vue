<template>
  <div
    class="event-card bg-green-secondary border-radius-8 pointer flex align-center"
    @click="$router.push('/event-inner')"
    :style="{ width: cardWidthProp }"
    data-aos="flip-down"
  >
    <div class="event-card-content flex space-between align-center wrap h100">
      <div class="date-wrapper">
        <p class="font-medium font-48 primary-text">{{ dateProp }}</p>
        <p class="font-medium primary-text letter-spacing-2">
          {{ mounthProp }}
        </p>
      </div>
      <div
        class="event-title-wrapper"
        :style="{ maxWidth: titleWrapperWidthProp }"
      >
        <p class="font-medium primary-text letter-spacing-2 relative">
          NEXT EVENTS
        </p>
        <h3 class="font-28 primary-text line-height-42">
          {{ titleProp }}
        </h3>
      </div>
      <img
        src="@/assets/arrow-icons/arrow-icon.png"
        alt="arrow button"
        class="block self-align-center"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "dateProp",
    "mounthProp",
    "titleProp",
    "cardWidthProp",
    "titleWrapperWidthProp",
  ],
};
</script>

<style scoped>
.event-card {
  width: 39.25em;
  padding: 32px 48px 40px 40px;
}

.event-card-content {
  row-gap: 10px;
  flex-grow: 1;
}

.date-wrapper {
  margin-right: 15px;
}

.event-title-wrapper p::after {
  content: "";
  position: absolute;
  border-top: 2px solid var(--primary-text);
  width: 44px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 23px;
}

.event-title-wrapper {
  width: 23.8125em;
  margin-top: 8px;
}

h3 {
  margin-top: 8px;
}

img {
  width: 3.5em;
  height: 3.5em;
}

.event-card:hover h3 {
  text-decoration: underline;
}

@media all and (max-width: 32.1875em) {
  .event-title-wrapper {
    width: auto;
  }
}

@media all and (max-width: 81.875em) {
  .event-card {
    height: 11.9375em;
  }
}

@media all and (max-width: 39.6875em) {
  .event-card {
    height: auto;
  }
}
</style>
