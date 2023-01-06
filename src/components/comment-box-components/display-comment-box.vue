<template>
  <div class="box">
    <div class="left-box">
      <write-comment-box @sendData="record" @changeVisibility="changeVisibility"/>
    </div>

    <div>
      <p class="small_txt" v-if="!visibility">{{ comment_hide_info }}</p>
      <p class="txt" v-else>{{ comment_info }}</p>
    </div>

    <div class="right-box" v-if="visibility">
      <div v-for="(comment, index) in comments" v-bind:key="index">
        <comment-box v-bind:msg=comment.msg v-bind:date="comment.date"/>
      </div>
    </div>
  </div>
</template>

<script>
import CommentBox from "@/components/comment-box-components/comment-box";
import WriteCommentBox from "@/components/comment-box-components/write-comment-box";

export default {
  name: "display-comment-box",
  components: {WriteCommentBox, CommentBox},
  data() {
    return {
      visibility: true,
      comment_info: "Here are visitor's comments:",
      comment_hide_info: "Comments are currently blended, click \"show comments\" button to show all comments",
      comments: [
        {msg: "Hi! Really nice webpage here! keep going!", date: new Date(2021, 9, 4)},
        {msg: "Wow this site is really cool", date: new Date(2021, 5, 26)},
        {msg: "Hi there! I'm also at TUM, can we grab a lunch together some time? ", date: new Date(2021, 0, 19)},
      ]
    }
  }, methods: {
    record(inputData) {
      if (inputData.msg === "") {
        window.alert("sorry, you can't leave empty comment")
      } else {
        this.comments.unshift(inputData);
        window.alert("you successfully left one comment!");
      }
    }, changeVisibility(vi) {
      this.visibility = vi
    }
  }
}
</script>

<style scoped>
.box {
  width: 80%;
}

.left-box {
  float: left;
  width: 20%;

}

.right-box {
  float: left;
  width: 80%;
}

p {
  margin: 0;
  padding: 0;
}

.txt {
  float: left;
  margin: 5px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
}

.small_txt {
  float: left;
  margin: 5px;
  padding-left: 10px;
  font-size: 13px;
  font-weight: bold;
}


</style>