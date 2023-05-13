<template>
  <section
    class="what-we-do-section padding-top-bottom-96 left-right-padding-20 bg-green-ter"
  >
    <div class="wrapper">
      <div class="left-padding-95">
        <titleComp>What we do</titleComp>
        <div class="content flex space-between wrap row-gap-40">
          <div class="left margin-right-40" id="left-responsive">
            <h2 class="font-48 primary-text" id="header-responsive">
              We care for earth, care for the coming birth
            </h2>
            <p class="secondary-text line-height-26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div class="do-list">
              <whatWeDoCard
                v-for="(item, index) in listItem"
                :key="item"
                :imgProp="item.img"
                :titleProp="item.title"
                :subtitleProp="item.subTitle"
                :idProp="index === 0 ? 'first-h3' : ''"
              ></whatWeDoCard>
            </div>
          </div>
          <div class="right right-width-480" id="right-responsive">
            <img
              src="@/assets/whatWeDoCompImgs/man_and_dog.png"
              alt="right img"
              class="block w100 h100 object-fit-cover border-radius-12"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listItem: [
        {
          img: require("@/assets/whatWeDoCompImgs/Icon1.png"),
          title: "Build Healthy Cities",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon2.png"),
          title: "Tree Plantation",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon3.png"),
          title: "Protect Land and Water",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
          img: require("@/assets/whatWeDoCompImgs/Icon4.png"),
          title: "Animal Safety",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
      ],
    };
  },
};
</script>

<script setup>
import titleComp from "@/components/titleComps/titleComp.vue";
import whatWeDoCard from "../cards/whatWeDoCard.vue";
</script>

<style scoped>
h2 {
  margin: 0 0 16px;
}

.left {
  width: 608px;
}

.do-list {
  padding-left: 24px;
  border-left: 1px solid var(--border);
  margin-top: 32px;
}

.list-card + .list-card {
  margin-top: 24px;
}

.right {
  height: 41.125em;
}

.content {
  margin-top: 32px;
}
</style>
