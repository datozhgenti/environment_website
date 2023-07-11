<template>
  <section class="contact-form padding-top-bottom-96 left-right-padding-20">
    <div class="wrapper">
      <div class="form-wrapper center-with-margin">
        <form @submit.prevent="" class="grid space-between">
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
          ></contactFormInput>
          <contactFormInput
            labelProp="Subject"
            labelFor="subject"
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
          <div class="submit-btn-wrapper text-align-center">
            <buttonComp class="primary-btn" type="submit"
              >Send message</buttonComp
            >
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import contactFormInput from "../inputComps/contactFormInput.vue";
import buttonComp from "../buttonComps/buttonComp.vue";
</script>

<style scoped>
.form-wrapper {
  max-width: 48em;
}

form {
  grid-template-columns: repeat(auto-fit, minmax(0, 23em));
  row-gap: 32px;
}

@media all and (min-width: 48.4375em) {
  .input-field.textarea,
  .submit-btn-wrapper {
    grid-column: span 2;
  }
}

@media all and (max-width: 48.4375em) {
  form {
    grid-template-columns: 100%;
  }
}
</style>
