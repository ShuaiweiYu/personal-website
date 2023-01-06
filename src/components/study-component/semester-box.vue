<template>
  <div class="intro-box">
    <div class="intro-box-left">
      <h1 class="intro-box-left-title"> {{ this.showSemester(semester) }} </h1>
    </div>

    <div class="intro-box-right">
      <div>
        <div v-for="(item, index) in content" v-bind:key = index>
          <course-entry :code="info.code" :title="info.title"/>
        </div >
      </div>
    </div>
  </div>
</template>

<script>
import CourseEntry from "@/components/study-component/course-entry";
export default {
  name: "semester-box",
  components: {CourseEntry},
  props: ["semester", "info"],
  methods: {
    showSemester(ses) {
      let num = "";
      if (ses === 1) {
        num = "1st."
      } else if (ses === 2) {
        num = "2nd."
      } else if (ses === 3) {
        num = "3rd."
      } else {
        num = ses + "th."
      }
      return num + " Semester"
    }
  }
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