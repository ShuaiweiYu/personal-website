<script setup>
import {computed, ref} from 'vue';
import { useI18n } from 'vue-i18n';
import { ArrowDown } from '@element-plus/icons-vue'

const { t, locale } = useI18n();

const links = computed(() => [
  { link: "/", info: t('navigations.home') },
  { link: "/projects", info: t('navigations.projects') },
  { link: "/contact", info: t('navigations.contact') },
  { link: "/cv", info: t('navigations.cv') }
]);

function changeLanguage(lang) {
  localStorage.setItem('lang', lang);
  locale.value = lang;
}

</script>

<template>

  <div class="bd">
    <div class="nav">
      <li v-for="(item, index) in links" v-bind:key=index>
        <router-link :to="item.link">
          {{ item.info }}
        </router-link>
      </li>
      <div class="language-selector">
      <el-dropdown class="language-button">
        <el-button type="success">
          {{t('navigations.language')}}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changeLanguage('zh-CN')">中文</el-dropdown-item>
            <el-dropdown-item @click="changeLanguage('en')">English</el-dropdown-item>
            <el-dropdown-item @click="changeLanguage('de')">Deutsch</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      </div>

    </div>
  </div>

</template>

<style scoped>

a {
  text-decoration: none;
}

li {
  float: left;
  list-style: none;
}

.top-bar {
  float: left;
  border-top: 5px solid #409EFF;
  border-bottom: 2px solid #409EFF;
  background-color: #fcfcfc;
}

.top-bar a {
  display: block;
  height: 60px;
  font-size: 25px;
  color: #4c4c4c;

  padding: 0 20px;
  line-height: 60px;
}

.top-bar a:hover {
  background-color: #eee;
  color: #409EFF;
}


li {
  list-style: none;
}

a {
  text-decoration: none;
}

.bd {
  border-top: 5px solid #409EFF;
  border-bottom: 2px solid #409EFF;
  margin-bottom: 10px;
  min-height: 10px;
  overflow: hidden;
}

.nav {
  display: flex; /* 设定为Flexbox */
  //justify-content: space-between; /* 子元素之间的间隔平均分布 */
  align-items: center; /* 子元素垂直居中 */
  height: 40px; /* 给定一个高度，与顶部导航栏的其余部分一致 */
}

.nav li {
  float: left;
  margin: 0 15px;
}

.nav li a {
  display: block;
  height: 40px;
  padding: 0 5px;
  line-height: 40px;
  font-size: 15px;
  color: #050505;
}

.nav li a:hover {
  background-color: #eee;
  color: #409EFF;
}

div a.router-link-exact-active {
  background-color: #eee;
  color: #409EFF;
}

.language-button {
  display: flex; /* 同样设定为Flexbox */
  align-items: center; /* 保证按钮内的内容垂直居中 */
}

.language-selector {
  margin-left: auto; /* 自动将语言选择器推到最右侧 */
  margin-right: 20px;
}

</style>