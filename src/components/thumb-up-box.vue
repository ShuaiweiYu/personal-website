<template>
  <div class="box">
    <div class="info-box">
      {{tip_info}}
    </div>
    <div @click="click()">
      <img class="size" v-bind:src="img_path">
    </div>

    <div>
      <div class="info-box">
        {{like_info}}
      </div>
      <div class="number-box">
        {{like_number}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "thumb-up-box",
  data() {
    return {
      hasClicked: false,
      img_path: require("@/assets/icon/like.png"),
      tip_info: "click icon to like",
      like_info: "received like:",
      like_number: 392
    }
  }, methods: {
    click() {
      if (!this.hasClicked) {
        this.like_number++;
        this.hasClicked = true;
      }
    }
  }
}
</script>

<style scoped>

.box {
  background-color: white;
  position: fixed;
  top: 100px;
  right: 30px;
  float: left;
  border: 5px deepskyblue solid;
  border-radius: 20px;
  /*box-shadow: 6px -6px 5px 1px blue;*/
}

.size {
  height: 50px;
  display: block;
  margin: 0 auto;
}

.size:hover {
  scale: 1.1;
}

.info-box {
  text-align: center;
  margin: 5px;
}

.number-box {
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

</style>