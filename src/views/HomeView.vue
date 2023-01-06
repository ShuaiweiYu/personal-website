<template>
  <intro-box :photo_-u-r-l="photo_URL" :content="text"/>
  <info-boxes/>
  <display-comment-box/>
  <thumb-up-box/>
</template>

<script>

import InfoBoxes from "@/components/info-boxes";
import DisplayCommentBox from "@/components/comment-box-components/display-comment-box";
import ThumbUpBox from "@/components/thumb-up-box";
import IntroBox from "@/components/info-box-components/intro-box";

export default {
  name: "HomeView",
  components: {
    IntroBox,
    ThumbUpBox,
    DisplayCommentBox,
    InfoBoxes,
  }, data() {
    return {
      photo_URL: require("@/assets/images/profile.jpg"),
      text: "Hi here! My name is Shuaiwei, welcome to my personal website! glad that you found it! want to hear more about me? " +
          "then just keep reading! Hope you can find something interesting here. I'm born in a little city in China, " +
          "and that is where I grew up and finished my basic education. Even though it is only a little city, there are still a lot to see. " +
          "Later, I went to Hangzhou for University and that is also when I decided to study abroad to broaden my horizon as well as pursuit a brand new life."
    }
  }
}

</script>



