<template>
  <h1>How to contact me?</h1>
  <ul>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/shuaiwei-yu-ba2148156/">Shuaiwei YU</a></li>
    <li>WeChat ID: ysw19990505</li>
    <li v-if="!this.showEmailForm"> <button @click="changeEmailFormVisibility">Show contact formula</button></li>
    <li v-if="this.showEmailForm"> <button @click="changeEmailFormVisibility">Hide contact formula</button></li>
  </ul>


  <form v-if="showEmailForm" ref="form" @submit.prevent="sendEmail">
    <p>Please write me a E-mail here using this contact formula, I will be reaching to you as soon as I read your E-mail </p>
    <label>Please type your name here</label>
    <input v-model="email_txt" type="text"  name="user_name" placeholder="Max Mustermann">
    <label>Please type your E-mail address here</label>
    <input v-model="email_address" type="email"  name="user_email" placeholder="Mustermann.Max@email.com">
    <label>Please type the message you want to send here</label>
    <textarea v-model="email_msg" name="message" placeholder="message to be sent..."></textarea>
    <input type="submit" value="Send">
  </form>

</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  name: "ContactView",
  data() {
    return {
      showEmailForm: false,
      hasClicked: false,
      email_txt: "",
      email_address: "",
      email_msg: ""
    }
  },
  methods: {
    changeEmailFormVisibility() {
      this.showEmailForm = !this.showEmailForm;
    },
    sendEmail() {
      if (!this.hasClicked) {
        this.hasClicked = true;
        emailjs.sendForm('service_fyv6gkj', 'template_hkb2k4l', this.$refs.form, 'pae5LvihPZoO98881')
            .then((result) => {
              window.alert("Email sent successfully!")
              console.log('SUCCESS!', result.text);
            }, (error) => {
              window.alert("Sorry! Something went wrong: " + error.text);
            });
      }
    }
  }
}
</script>

<style scoped>
/*list the form vertically*/
form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}
/*make the textarea to have minimum height 300px*/
textarea {
  min-height: 300px;
}
/*make the button to have margin*/
input[type=submit] {
  margin-top: 10px;
}
</style>