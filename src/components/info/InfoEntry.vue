<script setup>

import {defineProps} from 'vue';

const props = defineProps({
  date: String,
  info: String
});

</script>

<template>
  <div class="intro_box">
    <h3> {{props.date + ": " + props.info}}</h3>
  </div>
</template>

<style scoped>

.intro_box {
  float: left;
  width: 100%;
}

h3 {
  padding-left: 5px;
  padding-right: 5px;;
}

</style>