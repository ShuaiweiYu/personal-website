<template>
  <div class="box">
    <div class="content">
      <p>{{msg}}</p>
    </div>
    <div class="date">
      {{convertTime(date)}}
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-box",
  props: ["msg", "date"],
  methods: {
    convertTime(timeStamp) {
      let date = new Date(timeStamp);
      return date.toDateString()
    }
  }
}
</script>

<style scoped>
.box {
  float: left;
  width: 100%;
  margin: 10px;
  border: 2px coral solid;
  border-radius: 10px;
}

.content {
  text-align: left;
  font-size: 20px;
  margin: 3px;
}

.date {
  text-align: right;
  alignment: right;
  font-size: 10px;
  margin: 3px;
}

p {
  margin: 0;
  padding: 0;
}
</style>