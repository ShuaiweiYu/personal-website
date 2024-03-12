<script setup>
import Image from "@/assets/images/profile.jpg"
import {useI18n} from "vue-i18n";

const {t} = useI18n();

</script>

<template>
  <div class="box">
    <div class="photo">
      <img :src=Image class="size" alt="profile_photo"/>
    </div>

    <div class="text">
      <p>
        {{t('introduction.content')}}
      </p>
    </div>
  </div>
</template>

<style scoped>

.box{
  width: 80%;
  min-height: 100px;
  overflow: hidden;
  margin: 20px;
  border-bottom: 3px #79bbff solid;
}

.photo {
  float: left;
  padding-right: 20px;
  border-right: 3px #79bbff dashed;
}

.size {
  height: 300px;
}

.text {
  float: left;
  width: 50%;
  margin: 20px;
  font-size: 20px;
}
</style>