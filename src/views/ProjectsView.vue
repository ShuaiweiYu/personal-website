<template>
  <h1>This page lists the projects I have done or I was involved</h1>
  <div class="box">
    <project-box v-for="(item, index) in content" v-bind:key="index" v-bind:title="item.title" v-bind:type="item.type"
                 v-bind:description="item.description" v-bind:image="item.image"/>
  </div>
</template>

<script>
import ProjectBox from "@/components/project-components/project-box";

export default {
  name: "ProjectsView",
  components: {ProjectBox},
  data() {
    return {
      content: [
        {
          title: "My Study Planner (Ongoing)",
          description: "There are a lot of calender apps in the marketplace, however few of them are designed specifically for students. My Study Planner is a calender app that is designed for students to help them manage their time and study more effectively. It is a mobile app that is built based on Swift and SwiftUI. It is an APP that combines the calender with todo list and study timer.",
          image: require("@/assets/images/study_planner.png")
        },{
          title: "BMW News",
          description: "During my time as a working student at the BMW, I was assigned to develop a news app for internal testing purpose. Yhe aim to to examine the feasibility of such an news aggregator. The app is built based on Android using Java, it can not only be installed on the Android Automotive but also on normal Android smart phones. The app uses the \"NewsAPI\" service offered by Google to fetch the news data. The app is able to fetch the news data from different sources. The user can also click on the news to read the full article.",
          image: require("@/assets/images/bmw_news.png")
        },
        {
          title: "A Brief Study on the Development of Predictive Process Monitoring",
          type: "Seminar Paper",
          description: "Predictive process monitoring (PPM) is a powerful tool in business logic, and it is gaining more and more attention from industry and academia. Due to the great interest in this topic, a signiﬁcant number of works are continuously published. Therefore there is an indispensable need to perform a literature review on predictive process monitoring. The main objective of this paper is to research the current situation and algorithmic trend of predictive process monitoring so that potential research gaps can be identiﬁed. The objective is achieved through a systematic literature review aimed at the search period of 2018 - 2022 on the topic of predictive process monitoring. A Multi-step ﬁltering was performed on the 263 retrieved articles, and a ﬁnal list of 32 papers was selected. The data subtracted from the papers are then used to analyze and summarize. The ﬁnal result reveals the current trend and identiﬁes the research gaps in PPM.",
          image: require("@/assets/images/PPM.png")
        }, {
          title: "Analytics Cup of Course Business Analytics and Machine learning at TUM in WS2021/22",
          type: "Course Project",
          description: "Analytics Cup is a course project of the course Business Analytics and Machine Learning in associate with Siemens. The aim of the project is to predict the outcome of the purchasing decision of potential customers. We used decision tree algorithm to train our model. The project is based on Python and has a relative high accuracy rate.",
          image: require("@/assets/images/ana_cup.png")
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>