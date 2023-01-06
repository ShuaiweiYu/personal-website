<template>
  <div class="comment-box">

    <div class="button">
      <div v-if="visibility">
        <button class="show-hide-button" @click="hide">{{ text_hide_comment }}</button>
      </div>
      <div v-else>
        <button class="show-hide-button" @click="hide">{{ text_show_comment }}</button>
      </div>
    </div>

    <div class="title">
      {{ title }}
    </div>

    <div class="comment">
      <textarea v-model="msg" placeholder="write some comment here!"></textarea>
    </div>

    <div class="button">
      <button @click="onClick">
        {{ button_msg }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "write-comment-box",
  data() {
    return {
      visibility: true,
      text_hide_comment: "hide comments",
      text_show_comment: "show comments",
      title: "Write me a comment here!",
      button_msg: "Send!",
      msg: "",
      date: null
    }
  }, methods: {
    onClick() {
      this.date = Date.now();
      let input_data = {msg: this.msg, date: this.date}
      this.msg =""
      this.$emit('sendData', input_data)
    }, hide() {
      console.log(this.visibility)
      this.visibility = !this.visibility;
      this.$emit('changeVisibility', this.visibility)
    }
  }
}
</script>

<style scoped>
.comment-box {
  margin: 10px;
}

.title {
  font-size: 20px;
  color: cornflowerblue;
  padding-bottom: 5px;
  border-bottom: 2px cornflowerblue solid;
}

.comment {
  margin: 5px;
}

.button {
  text-align: center;
}

button {
  border: 3px deepskyblue solid;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-size: 15px;
  background-color: cornflowerblue;
  color: white;
}

.show-hide-button {
  border: 3px green solid;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  font-size: 15px;
  background-color: yellowgreen;
  color: white;
}

button:hover {
  scale: 1.1;
}

textarea {
  margin-top: 10px;
  resize: none;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
</style>