<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  content: String,
  icon_path: String
});

</script>

<template>
  <div class="shell">
    <div class="icon">
      <img class="size" :src="icon_path" alt="skill_icons">
    </div>

    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<style scoped>

.shell {
  float: left;
  border: 2px deepskyblue solid;
  border-radius: 25px;
  min-height: 1px;
  overflow: hidden;
}

.icon {
  position: relative;
  top: 5px;
  left: 5px;
  float: left;
  padding-left: 5px;
  padding-right: 5px;
}

.size {
  height: 30px;
}

.content {
  float: left;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  padding-right: 10px;
  padding-left: 5px;
}

.shell:hover {
  scale: 1.1;
  background-color: deepskyblue;
  color: white;
}

</style>