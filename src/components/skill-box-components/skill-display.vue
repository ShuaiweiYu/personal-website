<template>

  <div class="intro-box">
    <div class="intro-box-left">
      <h1 class="intro-box-left-title"> {{ title }} </h1>

      <div>
        <img v-bind::src="photo_URL">
      </div>
    </div>

    <div class="intro-box-right">
      <div class="entry" v-for="(item, index) in content" v-bind:key="index">
        <skill-box-category v-bind:title="item.title" v-bind:skills="item.skills"/>
      </div>
    </div>
  </div>

</template>

<script>
import SkillBoxCategory from "@/components/skill-box-components/skill-box-category";
export default {
  name: "skill-display",
  components: {SkillBoxCategory},
  data() {
    return {
      title: "What am I capable of?",
      content: [{title:"Language Skills", skills: [{skill: "Chinese: Native", img:require("@/assets/icon/chinese.png")},
                                                   {skill: "German: proficiency", img:require("@/assets/icon/german.png")},
                                                   {skill: "English: proficiency", img:require("@/assets/icon/english.png")}]
                },
                {title:"Programming Skills", skills: [{skill: "Java", img:require("@/assets/icon/java.png")},
                                                      {skill: "Python", img:require("@/assets/icon/py.png")},
                                                      {skill: "sql", img:require("@/assets/icon/sql.png")},
                                                       // {skill: "c++", img:require("@/assets/icon/cpp.png")},
                                                      {skill: "JavaScript", img:require("@/assets/icon/js.png")},
                                                      {skill: "HTML", img:require("@/assets/icon/html.png")},
                                                      {skill: "CSS", img:require("@/assets/icon/css.png")}]
                },
                {title:"Framework", skills: [{skill: "SpringBoot", img:require("@/assets/icon/sb.png")},
                                             {skill: "Junit", img:require("@/assets/icon/ju.png")},
                                             {skill: "Vue", img:require("@/assets/icon/vue.png")}]
                },
                {title:"Other", skills: [{skill: "typo3", img:require("@/assets/icon/typo3.png")},
                                         {skill: "Microsoft Office", img:require("@/assets/icon/office.png")},
                                         {skill: "git", img:require("@/assets/icon/git.png")}]
        }
      ]
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
  /*border-bottom: 2px coral solid;*/
}

.intro-box-right {
  float: left;
  width: 75%;
}

.entry {
  margin: 5px;
  clear: both;
  display: inline-block;
  float: left;
  position: relative;

}

</style>