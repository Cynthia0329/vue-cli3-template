<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
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
import pages from '@/router/modules/pages'
import SidebarItem from './SidebarItem'

export default {
  mixins: [],
  components: { SidebarItem },
  props: {},
  data() {
    return {
      routes: pages
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
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>