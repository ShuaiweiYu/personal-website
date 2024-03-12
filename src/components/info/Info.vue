<script setup>

import {defineProps} from 'vue';
import InfoEntry from "@/components/info/InfoEntry.vue";

const props = defineProps({
  title: String,
  content: Array
});

</script>

<template>

  <div class="intro-box">
    <div class="intro-box-left">
      <h1 class="intro-box-left-title"> {{ title }} </h1>
    </div>

    <div class="intro-box-right">
      <div>
        <div v-for="(item, index) in content" v-bind:key = index>
          <InfoEntry v-bind:date="item.time" v-bind:info="item.info"/>
        </div >
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
  border-bottom: 2px #79bbff solid;
}

.intro-box-right {
  float: left;
  width: 75%;
}

</style>