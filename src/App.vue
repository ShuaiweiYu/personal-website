<script setup>
import { RouterView } from 'vue-router'
import NavigationView from "@/views/NavigationView.vue";
import {onMounted} from "vue";
import {useI18n} from "vue-i18n";

const { t, locale } = useI18n();

onMounted(() => {
  const language = localStorage.getItem('lang');
  console.log('language', language);
  if (language) {
    locale.value = language;
  }
});
</script>

<template>
  <header>
    <NavigationView />
  </header>

  <!--回到顶部 -->
  <el-backtop :right="100" :bottom="100" />

  <RouterView />
</template>

<style scoped>

</style>
