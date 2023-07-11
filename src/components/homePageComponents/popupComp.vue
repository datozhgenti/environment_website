<template>
  <teleport to="body">
    <div
      class="popup-wrapper flex justify-center align-center"
      @click.self="popupStore.popupDeactivate"
    >
      <div class="popup bg-white border-radius-8">
        <div class="flex flex-end">
          <img
            src="@/assets/popup-assets/close.png"
            alt="close button"
            class="block pointer"
            width="32"
            height="32"
            @click="popupStore.popupDeactivate"
          />
        </div>
        <div class="popup-content center-with-margin">
          <h6 class="primary-text font-40 line-height-56">
            Join as a volunteer
          </h6>
          <p class="secondary-text font-14 line-height-22">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
            varius enim in eros elementum tristique.
          </p>
          <form @submit.prevent="">
            <div class="grid popup-form space-between">
              <contactFormInput
                labelProp="First Name"
                labelFor="first_name"
              ></contactFormInput>
              <contactFormInput
                labelProp="Last Name"
                labelFor="last_name"
              ></contactFormInput>
              <contactFormInput
                labelProp="Email Id"
                labelFor="email"
                inputType="email"
                class="email-input"
              ></contactFormInput>
              <div class="input-field textarea">
                <div>
                  <label
                    for="message"
                    class="primary-text font-12 font-bold opacity-60 block line-height-19"
                    >Message</label
                  >
                </div>
                <textarea
                  id="message"
                  class="w100 block primary-text line-height-26 border-radius-4"
                  placeholder="Type your Messege"
                ></textarea>
              </div>
            </div>
            <div class="submit-btn-wrapper">
              <buttonComp class="primary-btn">Send message</buttonComp>
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { usePopupStore } from "@/stores/popupStore.js";
import contactFormInput from "../inputComps/contactFormInput.vue";
import buttonComp from "../buttonComps/buttonComp.vue";

// eslint-disable-next-line
const popupStore = usePopupStore();
</script>

<style scoped>
.popup-wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0;
  z-index: 100;
}

.popup {
  max-width: 40em;
  padding: 24px;
  margin: 0 20px;
  overflow: auto;
}

p {
  margin: 16px 0 32px;
}

.popup-content {
  padding: 0 24px;
}

.popup-form {
  row-gap: 32px;
  grid-template-columns: repeat(auto-fit, 16em);
}

.submit-btn-wrapper {
  margin-top: 32px;
}

.primary-btn {
  width: 10.625rem;
  height: 3.1875rem;
}

label[for="message"] {
  margin-bottom: 4px;
}

textarea {
  border: 1px solid var(--border);
  padding: 20px;
  height: 9.75em;
}

textarea::placeholder {
  color: var(--primary-text);
  line-height: 26px;
  opacity: 0.3;
}

@media all and (min-width: 40.5em) {
  .textarea,
  .email-input {
    grid-column: span 2;
  }
}

@media all and (max-width: 40.5em) {
  .popup-form {
    grid-template-columns: 100%;
  }

  .popup {
    height: 90vh;
  }

  .popup-content {
    padding: 0;
  }
}
</style>
