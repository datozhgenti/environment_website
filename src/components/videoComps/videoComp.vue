<template>
  <div class="relative h100 w100 pointer" @click="playPauseVideo">
    <video
      :src="videoUrl"
      class="w100 h100 object-fit-cover border-radius-12 block"
      ref="video"
      @ended="showPlayIcon"
    ></video>
    <img
      v-if="videoPaused"
      src="@/assets/playPauseIcons/play_icon_big.png"
      alt="video play icon"
      class="absolute"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps({
  videoUrl: {
    type: String,
    default: require("@/assets/videos/burning_forest.mp4"),
  },
});

const videoPaused = ref(true);

const video = ref(null);

function playPauseVideo() {
  videoPaused.value = !videoPaused.value;

  if (videoPaused.value) {
    video.value.pause();
  } else {
    video.value.play();
  }
}

function showPlayIcon() {
  videoPaused.value = true;
}
</script>

<style scoped>
img {
  width: 4em;
  height: 4em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
