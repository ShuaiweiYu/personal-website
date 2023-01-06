<template>

  <div class="intro-box">
    <div class="intro-box-left">
      <h1 class="intro-box-left-title"> {{ title }} </h1>
    </div>

    <div class="intro-box-right">
      <div>
        <div v-for="(item, index) in content" v-bind:key = index>
          <info-box-small v-bind:date="item.time" v-bind:info="item.info"/>
        </div >
      </div>
    </div>
  </div>

</template>

<script>
import InfoBoxSmall from "@/components/info-box-components/info-box-entry";
export default {
  name: "info-box",
  components: {InfoBoxSmall},
  props: ["title", "photo_URL", "content", "link"]
}
</script>

<style scoped>

.intro-box {
  width: 80%;
  min-height: 100px;
  overflow: hidden;
  margin: 10px;
  border: 2px coral solid;
  border-radius: 10px;
}

.intro-box-left {
  float: left;
  width: 25%;
}

.intro-box-left-title {
  margin: 5px;
  font-weight: bold;
  border-bottom: 2px coral solid;
}

.intro-box-right {
  float: left;
  width: 75%;
}

</style>