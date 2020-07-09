<template>
  <div id="app">
    <!-- <img src="~assets/img/tabbar/label1.png" alt="哎呀，没得"> -->
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/Tabbar";
export default {
  name: "App",
  components: {
    TabBar
  }
};  
</script>

<style>
</style>

