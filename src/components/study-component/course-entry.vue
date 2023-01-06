<template>
  <div class="intro_box">
    <h3> {{this.code}} </h3>
    <h4> {{this.title}} </h4>
  </div>
</template>

<script>
export default {
  name: "course-entry",
  props: ["code", "title"],
}
</script>

<style scoped>

.intro_box {
  float: left;
  width: 100%;
}

h3 {
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
}

h4 {
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
}

</style>