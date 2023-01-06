<template>
  <div class="box">
    <div class="photo">
      <img :src="this.photo_URL" class="size"/>
    </div>

    <div class="text">
      <p>
        {{content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "intro-box",
  props: ["photo_URL", "content"]
}
</script>

<style scoped>

.box{
  width: 80%;
  min-height: 100px;
  overflow: hidden;
  margin: 20px;
  border-bottom: 3px coral solid;
}

.photo {
  float: left;
  padding-right: 20px;
  border-right: 3px coral dashed;
}

.size {
  height: 300px;
}

.text {
  float: left;
  width: 50%;
  margin: 20px;
  font-size: 20px;
}
</style>