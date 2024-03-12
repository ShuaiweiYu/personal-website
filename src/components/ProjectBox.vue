<script setup>
import { defineProps } from 'vue';

const props = defineProps(["title", "type", "description", "image"]);
</script>

<template>
  <div class="project-box">
    <div class="project-box__image">
      <img class="size" :src="props.image" alt="image">
    </div>
    <div class="project-box__content">
      <h2 class="project-box__title">{{ props.title }}</h2>
      <h3 class="project-box__type">{{ props.type }}</h3>
      <p class="project-box__description" v-html="props.description"></p>
    </div>
  </div>
</template>

<style scoped>
.project-box {
  display: inline-block;
  margin: 10px;
  width: 500px;
}

.size {
  width: 100%;
}

.project-box {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}
</style>