<template>
  <section class="team-section left-right-padding-20" id="team">
    <div class="wrapper">
      <div class="text text-align-center center-with-margin">
        <h2 class="font-48 primary-text">Meet our team</h2>
        <p class="secondary-text opacity-60 line-height-26">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div class="team-members flex space-between wrap">
        <MemberCard
          v-for="member in members"
          :key="member"
          :memberImg="member.img"
          :memberName="member.name"
          :memberPosition="member.position"
        ></MemberCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          img: require("@/assets/members-images/member1.png"),
          name: "Leonard John Davies",
          position: "Cofounder, CEO",
        },
        {
          img: require("@/assets/members-images/member2.png"),
          name: "Francis Weber",
          position: "Vice Chairman",
        },
        {
          img: require("@/assets/members-images/member3.png"),
          name: "Kyla Obrien",
          position: "Head of Authority",
        },
        {
          img: require("@/assets/members-images/member4.png"),
          name: "Adrian Dixon",
          position: "Support Executive",
        },
        {
          img: require("@/assets/members-images/member5.png"),
          name: "Freddy Busby",
          position: "Project Manager",
        },
        {
          img: require("@/assets/members-images/member6.png"),
          name: "Dale Banks",
          position: "Accountatnt, Finance",
        },
        {
          img: require("@/assets/members-images/member7.png"),
          name: "Miriam Middleton",
          position: "Cofounder, CEO",
        },
        {
          img: require("@/assets/members-images/member8.png"),
          name: "Ellen Walton",
          position: "Vice Chairman",
        },
      ],
    };
  },
};
</script>

<script setup>
import MemberCard from "../cards/memberCard.vue";
</script>

<style scoped>
.text {
  max-width: 32.4375em;
}

.text p {
  margin-top: 16px;
}

.team-members {
  margin-top: 48px;
  row-gap: 48px;
}

@media all and (max-width: 39.4375em) {
  .team-members {
    justify-content: center;
  }
}
</style>
