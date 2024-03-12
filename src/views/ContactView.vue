<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import emailjs from '@emailjs/browser';

const showEmailForm = ref(false);
const hasSent = ref(false);
const email_txt = ref("");
const email_address = ref("");
const email_msg = ref("");
const {t} = useI18n();

function changeEmailFormVisibility() {
  showEmailForm.value = !showEmailForm.value;
}

// function sedEmail() {
//   emailjs.sendForm('service_fyv6gkj', 'template_hkb2k4l', this.$refs.form, 'pae5LvihPZoO98881')
//       .then((result) => {
//         window.alert("Email sent successfully!")
//         console.log('SUCCESS!', result.text);
//       }, (error) => {
//         window.alert("Sorry! Something went wrong: " + error.text);
//       });
// }

</script>

<template>
  <h1>{{ t('contact.title') }}</h1>

  <ul>
    <li> {{ t('contact.linkedin') }} <a href="https://www.linkedin.com/in/shuaiwei-yu-ba2148156/">Shuaiwei YU</a></li>
    <li> {{ t('contact.wechat') }} ysw19990505</li>
    <li> {{ t('contact.email') }} yushuaiwei199955@outlook.com </li>
<!--    <li v-if="!showEmailForm">-->
<!--      <el-button @click="changeEmailFormVisibility" type="primary">-->
<!--        {{ t('contact.show-email') }}-->
<!--      </el-button>-->
<!--    </li>-->
<!--    <li v-if="showEmailForm">-->
<!--      <el-button @click="changeEmailFormVisibility">-->
<!--        {{ t('contact.hide-email') }}-->
<!--      </el-button>-->
<!--    </li>-->
  </ul>

<!--  <el-form v-if="showEmailForm">-->
<!--    <p>-->
<!--      {{ t('contact.email-info') }}-->
<!--    </p>-->

<!--    <el-form-item :label="$t('contact.email-name-info')" prop="name">-->
<!--      <el-input v-model="email_txt" :placeholder="$t('contact.email-name-placeholder')"></el-input>-->
<!--    </el-form-item>-->

<!--    <el-form-item :label="$t('contact.email-address-info')" prop="email">-->
<!--      <el-input v-model="email_address" :placeholder="$t('contact.email-address-placeholder')"></el-input>-->
<!--    </el-form-item>-->

<!--    <el-form-item :label="$t('contact.email-content-info')" prop="message">-->
<!--      <el-input v-model="email_msg" type="textarea" :placeholder="$t('contact.email-content-placeholder')"></el-input>-->
<!--    </el-form-item>-->

<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="submitForm(ruleFormRef)">-->
<!--        {{t('contact.email-send')}}-->
<!--      </el-button>-->
<!--    </el-form-item>-->

<!--  </el-form>-->

</template>

<style scoped>
/*list the form vertically*/
form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
</style>