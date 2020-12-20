<template>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
@import "./assets/css/main.css";

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

body{
  margin:0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
