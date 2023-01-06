<template>
  <div v-for="(item, index) in content" v-bind:key="index">
    <info-box v-bind:title="title.at(index)" v-bind:content="content.at(index)"/>
  </div>
  <skill-display/>
</template>

<script>
import InfoBox from "@/components/info-box-components/info-box";
import SkillDisplay from "@/components/skill-box-components/skill-display";
export default {
  name: "info-boxes",
  components: {SkillDisplay, InfoBox},
  data() {
    return {
      title: ["About my Studies", "My working experience"],
      content: [
          [
          {time: "2020/10 - 2023/04", info: "Technical University of Munich — Information system B.Sc."},
          {time: "2020/04 - 2020/09", info: "Technical University of Munich — MINT orientation semester"},
          {time: "2019/01 - 2020/02", info: "Studienkolleg Munich — T course"},
          {time: "2017/09 - 2018/10", info: "Zhejiang University of Science and Technology - Mechanical engineering (Sino-German Joint Program)"}
          ], [
          {time: "2022/06 - now", info: "Technical University of Munich - Working student | Website-Hiwi"},
          {time: "2022/08 - 2022/12", info: "BMW Group - Working student | Third-Party Apps"},
          {time: "2021/10 - 2022/04", info: "Technical University of Munich - Working student | Tutor"},
          {time: "2021/04 - 2021/09", info: "Technical University of Munich - Working student | Tutor"}]
      ]
    }
  }
}
</script>

<style scoped>

</style>




