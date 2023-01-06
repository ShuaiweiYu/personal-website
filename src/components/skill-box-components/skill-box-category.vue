<template>
  <div class="box">
    <div class="left-box">
      <div class="title">
        {{title}}
      </div>
    </div>

    <div class="entry" v-for="(item, index) in skills" v-bind:key="index">
      <skill-box v-bind:content="item.skill" v-bind:icon_path="item.img"/>
    </div>
  </div>
</template>

<script>

import skillBox from "@/components/skill-box-components/skill-box";
export default {
  name: "skill-box-category",
  components: {skillBox},
  props:["title", "skills"]
}
</script>

<style scoped>
.left-box {
  float: left;
  border-right: 2px deepskyblue solid;
  margin: 5px;
}

.title {
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  border: 2px crimson solid;
  border-radius: 25px;
  margin-right: 10px;
  line-height: 30px;
  color: yellowgreen;
}

.entry {
  float: left;
  margin: 5px;
}

</style>