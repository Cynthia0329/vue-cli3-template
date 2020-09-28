<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      @select="handleSelect"
      mode="vertical"
    >
      <sidebar-item
        v-for="(route, idx) in routes"
        :key="route.path"
        :item="route"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import {constantRoutes} from '@/router'
import SidebarItem from './SidebarItem'

export default {
  mixins: [],
  components: { SidebarItem },
  props: {},
  data() {
    return {
      routes: constantRoutes
    }
  },
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>