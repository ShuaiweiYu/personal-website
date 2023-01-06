<template>

  <div class="bd">
    <div class="nav">
      <li v-for="(item, index) in links" v-bind:key = index>
        <router-link :to="item.link"> {{item.info}} </router-link>
      </li>
    </div>
  </div>

</template>

<script>
export default {
  name: "navigation-bar",
  data() {
    return {
      links: [
          {link: "/", info: "Home"},
          {link: "/my-projects", info: "My Projects"},
          // {link: "/tools", info: "Tools"},
          {link: "/get-in-touch", info: "Get In Touch"}
      ]
    }
  }
}
</script>

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
  border-top: 5px solid coral;
  border-bottom: 2px solid coral;
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
  color: coral;
}


li {
  list-style: none;
}

a {
  text-decoration: none;
}

.bd {
  border-top: 5px solid coral;
  border-bottom: 2px solid coral;
  margin-bottom: 10px;
  min-height: 10px;
  overflow: hidden;
}

.nav {
  float: left;
  margin-left: 40px;
}
.nav li {
  float: left;
  margin: 0 15px;
}
.nav li a {
  display: block;
  height: 60px;
  padding: 0 10px;
  line-height: 60px;
  font-size: 25px;
  color: #050505;
}
.nav li a:hover {
  background-color: #eee;
  color: coral;
}

div a.router-link-exact-active {
  background-color: #eee;
  color: coral;
}

</style>