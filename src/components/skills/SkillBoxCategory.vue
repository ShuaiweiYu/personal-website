<script setup>
import Skills from "@/components/skills/Skills.vue";
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  skills: Array
});

</script>

<template>
  <div class="box">
    <div class="left-box">
      <div class="title">
        {{title}}
      </div>
    </div>

    <div class="entry" v-for="(item, index) in skills" v-bind:key="index">
      <Skills v-bind:content="item.skill" v-bind:icon_path="item.img"/>
    </div>
  </div>
</template>

<style scoped>
.left-box {
  float: left;
  border-right: 2px deepskyblue solid;
  margin: 5px;
}

.title {
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  border: 2px #409EFF solid;
  border-radius: 25px;
  margin-right: 10px;
  line-height: 30px;
  color: yellowgreen;
}

.entry {
  float: left;
  margin: 5px;
}

</style>