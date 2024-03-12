<script setup>

import {onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import LikeIcon from '@/assets/icons/like.png';
const { t } = useI18n();

const has_clicked = ref(false);
const like_number = ref(176);

function click() {
  if (!has_clicked.value) {
    like_number.value++;
    has_clicked.value = true;
    localStorage.setItem('clicked', 'true');
    localStorage.setItem('like_number', like_number.value);
  }
}

onMounted(() => {
  const hasClicked = localStorage.getItem('clicked');
  if (hasClicked === 'true') {
    like_number.value = localStorage.getItem('like_number');
    has_clicked.value = true;
  }
});

</script>

<template>
  <div class="box">
    <div class="info-box">
      {{t('thumbUpBox.click')}}
    </div>
    <div @click="click()">
      <img v-if="has_clicked===false" class="size" v-bind:src="LikeIcon" alt="thumb up img">
      <img v-else class="sizeClicked" v-bind:src="LikeIcon" alt="thumb up img">
    </div>

    <div>
      <div class="info-box">
        {{t('thumbUpBox.likeInfo')}}
      </div>
      <div class="number-box">
        {{like_number}}
      </div>
    </div>
  </div>
</template>

<style scoped>

.box {
  background-color: white;
  position: fixed;
  top: 100px;
  right: 30px;
  float: left;
  border: 5px #409EFF solid;
  border-radius: 20px;
  /*box-shadow: 6px -6px 5px 1px blue;*/
}

.size {
  height: 50px;
  display: block;
  margin: 0 auto;
}

.size:hover {
  scale: 1.1;
  cursor: pointer;
}

.sizeClicked {
  height: 50px;
  display: block;
  margin: 0 auto;
  scale: 1.1;
}

.info-box {
  text-align: center;
  margin: 5px;
}

.number-box {
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

</style>