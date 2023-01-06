<template>
    <div class="intro_box">
      <h3> {{this.date + ": " + this.info}}</h3>
    </div>
</template>

<script>
export default {
  name: "info-box-small",
  props: ["date", "info"]
}
</script>

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