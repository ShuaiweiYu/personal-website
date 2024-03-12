<script setup>
import SkillBoxCategory from "@/components/skills/SkillBoxCategory.vue";
import Chinese from "@/assets/icons/chinese.png";
import German from "@/assets/icons/german.png";
import English from "@/assets/icons/english.png";
import Java from "@/assets/icons/java.png";
import Python from "@/assets/icons/py.png";
import SQL from "@/assets/icons/sql.png";
import Cpp from "@/assets/icons/cpp.png";
import JavaScript from "@/assets/icons/js.png";
import HTML from "@/assets/icons/html.png";
import CSS from "@/assets/icons/css.png";
import SpringBoot from "@/assets/icons/sb.png";
import Junit from "@/assets/icons/ju.png";
import React from "@/assets/icons/React.png";
import view from "@/assets/icons/vue.png";
import Typo3 from "@/assets/icons/typo3.png";
import Office from "@/assets/icons/office.png";
import Git from "@/assets/icons/git.png";
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const {t} = useI18n();

const content = computed(() => [
  {
    title: t('skills.lang.title'), skills: [
      {skill: t('skills.lang.chinese'), img: Chinese},
      {skill: t('skills.lang.english'), img: English},
      {skill: t('skills.lang.german'), img: German}]
  },
  {
    title: t('skills.it.title'), skills: [
      {skill: "Java", img: Java},
      {skill: "Python", img: Python},
      {skill: "SQL", img: SQL},
      {skill: "c++", img:Cpp},
      {skill: "JavaScript", img: JavaScript},
      {skill: "HTML", img: HTML},
      {skill: "CSS", img: CSS}]
  },
  {
    title: t('skills.frameworks.title'), skills: [
      {skill: "SpringBoot", img: SpringBoot},
      {skill: "Junit", img: Junit},
      {skill: "Vue.js", img: view},
      {skill: "React.js", img: React}
    ]
  },
  {
    title: t('skills.other.title'), skills: [
      {skill: "typo3", img: Typo3},
      {skill: "Microsoft Office", img: Office},
      {skill: "Git", img: Git}
    ]
  }
])

</script>

<template>
  <div class="intro-box">
  <div class="intro-box-left">
    <h1 class="intro-box-left-title"> {{ t('skills.title') }} </h1>
  </div>

  <div class="intro-box-right">
    <div class="entry" v-for="(item, index) in content" v-bind:key="index">
      <SkillBoxCategory v-bind:title="item.title" v-bind:skills="item.skills"/>
    </div>
  </div>
  </div>

</template>

<style scoped>

.intro-box {
  width: 80%;
  min-height: 100px;
  overflow: hidden;
  margin: 10px;
  border: 2px #79bbff solid;
  border-radius: 10px;
}

.intro-box-left {
  float: left;
  width: 25%;
}

.intro-box-left-title {
  margin: 5px;
  font-weight: bold;
}

.intro-box-right {
  float: left;
  width: 75%;
}

.entry {
  margin: 5px;
  clear: both;
  display: inline-block;
  float: left;
  position: relative;

}

</style>