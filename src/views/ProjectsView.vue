<script setup>

import {useI18n} from "vue-i18n";

const {t, locale} = useI18n();

import ProjectBox from "@/components/ProjectBox.vue";
import SeminarPaper from "@/assets/images/PPM.png"
import AnaCup from "@/assets/images/ana_cup.png"
import BMWNews from "@/assets/images/bmw_news.png"
import FLcn from "@/assets/images/FLcn.png"
import FLen from "@/assets/images/FLen.png"
import thesis from "@/assets/images/thesis.png"
import upload from "@/assets/images/plupload.png"
import {computed} from "vue";

const academicProjects = computed(() => [
  {
    title: t('projects.academic-projects-2.title'),
    type: t('projects.academic-projects-2.type'),
    description: t('projects.academic-projects-2.content'),
    image: thesis
  },
  {
    title: t('projects.academic-projects-1.title'),
    type: t('projects.academic-projects-1.type'),
    description: t('projects.academic-projects-1.content'),
    image: SeminarPaper
  },
  {
    title: t('projects.academic-projects-3.title'),
    type: t('projects.academic-projects-3.type'),
    description: t('projects.academic-projects-3.content'),
    image: AnaCup
  }
]);

const personalProjects = computed(() => [
  {
    title: t('projects.personal-projects-1.title'),
    description: t('projects.personal-projects-1.content'),
    image: locale.value === 'zh-CN' ? FLcn : FLen
  }
]);

const industryProjects = computed(() => [
  {
    title: t('projects.industry-projects-2.title'),
    description: t('projects.industry-projects-2.content'),
    image: upload
  },
  {
    title: t('projects.industry-projects-1.title'),
    description: t('projects.industry-projects-1.content'),
    image: BMWNews
  }
])

</script>

<template>
  <h1>{{ t('projects.info') }}</h1>

  <h2>{{ t('projects.industry') }}</h2>

  <div class="box">
    <ProjectBox v-for="(item, index) in industryProjects" :key="index" :title="item.title" :type="item.type"
                 :description="item.description" :image="item.image"/>
  </div>

  <h2>{{ t('projects.academic') }}</h2>

  <div class="box">
    <ProjectBox v-for="(item, index) in academicProjects" :key="index" :title="item.title" :type="item.type"
                :description="item.description" :image="item.image"/>
  </div>

  <h2>{{ t('projects.personal') }}</h2>

  <div class="box">
    <ProjectBox v-for="(item, index) in personalProjects" :key="index" :title="item.title" :type="item.type"
                :description="item.description" :image="item.image"/>
  </div>

</template>

<style scoped>

.box {
  display: flex;
  flex-direction: row;   /* 定义项目的排列方向为横向 */
  align-items: flex-start; /* 使项目在交叉轴上的起点对齐 */
  flex-wrap: wrap; /* 添加这一行来允许项目换行 */
  gap: 10px; /* 可以添加gap属性来设置项目之间的间距 */
}


</style>