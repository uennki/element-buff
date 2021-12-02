<template>
  <div id="app">
    <ProElFormTable />
    <hr />
    <ProElTable />
    <hr />
    <ProElFormSearch />
    <hr />
    <ProElUpload />
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
export default {
  name: "App",
  mounted() {
    const element = document.querySelector(".js-tilt");
    VanillaTilt.init(element);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 32px;
}
</style>
