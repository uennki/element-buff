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
export default {
  name: "App",
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
