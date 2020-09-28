<template>
  <div class="layout">
    <SideBar class="sider-bar"/>
    <AppMain class="app-main"/>  
  </div>
</template>

<script>
import SideBar from './components/Sidebar'
import AppMain from './components/Appmain'

export default {
  mixins: [],
  components: {
    SideBar,
    AppMain
  },
  props: [],
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  &>.sider-bar {
    width: 200px;
  }
  &>.app-main {
    flex: 1;
    padding: 50px;
  }
}
</style>