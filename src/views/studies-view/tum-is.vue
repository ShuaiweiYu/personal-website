<template>
  <intro-box/>
  <div v-for="(item, index) in content" v-bind:key="index">
    <semester-box :title="item.at(index)" :info="content.at(index)"/>
  </div>
</template>

<script>
import IntroBox from "@/components/info-box-components/intro-box";
import SemesterBox from "@/components/study-component/semester-box";

export default {
  name: "tum-is",
  components: {SemesterBox, IntroBox, },
  data() {
    return {
      title: [1, 2, 3, 4, 5],
      content: [
        [
          {code: "IN0001", title: "Introduction to Informatics"},
          {code: "IN0002", title: "Fundamentals of Programming (Exercises & Laboratory)"},
          {code: "IN0021", title: "Introduction to Information Systems"},
          {code: "WI001059", title: "Financial Accounting and Reporting"},
          {code: "IN0015", title: "Discrete Structures"}
        ],
        [
          {code: "IN0006", title: "Introduction to Software Engineering"},
          {code: "IN0007", title: "Fundamentals of Algorithms and Data Structures"},
          {code: "IN0025", title: "Information Technologies and Society"},
          {code: "WI001132", title: "Cost Accounting"},
          {code: "MA0901", title: "Linear Algebra for Informatics"}
        ],
        [
          {code: "IN0008", title: "Fundamentals of Databases"},
          {code: "IN2085", title: "Software Engineering for Business Applications"},
          {code: "WI000219", title: "Investment and Financial Management"},
          {code: "WI001059", title: "Financial Accounting and Reporting"},
          {code: "MA0902", title: "Analysis for Informatics"},
          {code: "WI000021_E", title: "Economics I - Microeconomics"},
          {code: "IN2028", title: "Business Analytics and Machine Learning"}
        ],
        [
          {code: "IN0010", title: "Introduction to Computer Networking and Distributed Systems"},
          {code: "IN0024", title: "Operations Research"},
          {code: "WI000261", title: "Empirical Research Methods"},
          {code: "MA9712", title: "Statistics for Business Administration"},
          {code: "WI000023_E", title: "Economics II - Macroeconomics"},
          {code: "IN0014", title: "Seminar: Scientific methods in information systems"}
        ],
        [
          {code: "IN2258", title: "Middleware and Distributed Systems"},
          {code: "IN0012", title: "Bachelor Practical Course: iLab1-design your own Internet"}
        ],
      ]
    }
  }
}
</script>

<style scoped>

</style>