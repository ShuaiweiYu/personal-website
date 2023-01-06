<template>
  <div class="project-box">
    <div class="project-box__image">
      <img class="size" :src="image">
    </div>
    <div class="project-box__content">
      <h2 class="project-box__title">{{ title }}</h2>
      <h3 class="project-box__type">{{ type }}</h3>
      <p class="project-box__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-box",
  props: ["title", "type", "description", "image"]
}
</script>

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