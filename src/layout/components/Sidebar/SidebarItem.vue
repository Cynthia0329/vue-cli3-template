<template>
  <el-submenu :index="item.path" v-if="item.meta.hasSubMenu">
    <template slot="title">{{ item.meta.title }}</template>
    <template v-for="childRoute in item.children">
      <el-menu-item :index="childRoute.path">
        <template slot="title">{{ childRoute.meta.title }}</template>
      </el-menu-item>
    </template>
  </el-submenu>

  <el-menu-item :index="item.path" v-else>
    <span slot="title">{{ item.meta.title }}</span>
  </el-menu-item>
  
</template>

<script>
export default {
  name: 'SidebarItem',
  mixins: [],
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>