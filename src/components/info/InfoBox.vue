<script setup>

import Info from "@/components/info/Info.vue";
import {useI18n} from "vue-i18n";
import {computed} from "vue";

const {t} = useI18n();

const title = computed(() => [t('info.studies.title'), t('info.works.title')]);

const content = computed(() => [
  [
    {time: t('info.studies.time4'), info: t('info.studies.info4')},
    {time: t('info.studies.time3'), info: t('info.studies.info3')},
    {time: t('info.studies.time2'), info: t('info.studies.info2')},
    {time: t('info.studies.time1'), info: t('info.studies.info1')},
    // {time: "2017/09 - 2018/10", info: "Zhejiang University of Science and Technology - Mechanical engineering (Sino-German Joint Program)"}
  ], [
    {time: t('info.works.time1'), info: t('info.works.info1')},
    {time: t('info.works.time2'), info: t('info.works.info2')},
    {time: t('info.works.time3'), info: t('info.works.info3')},
    {time: t('info.works.time4'), info: t('info.works.info4')},
    {time: t('info.works.time5'), info: t('info.works.info5')},
    {time: t('info.works.time6'), info: t('info.works.info6')},
  ]
]);

</script>

<template>
  <div v-for="(item, index) in content" v-bind:key="index">
    <Info v-bind:title="title.at(index)" v-bind:content="content.at(index)"/>
  </div>
</template>

<style scoped>

</style>