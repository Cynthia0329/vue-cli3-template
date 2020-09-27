<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive> -->
        <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {
    key() {
       return this.$route.path
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>