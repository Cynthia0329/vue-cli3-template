<template>
  <el-submenu :index="item.path" v-if="item.meta.hasSubMenu">
    <template slot="title"></template>
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