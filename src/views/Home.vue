<template>
  <div class="home">
    <h1>整个项目的主页面入口</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <ul class="catalog">
      <li><router-link :to="{path:'/base'}">基本图表组件页面</router-link></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.catalog {
  list-style: none;
}
</style>
