<template>
  <div class="content">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-left: 50px;width: 100%;">
      <el-tab-pane label="全部" name="all">
        <all></all>
      </el-tab-pane>
      <el-tab-pane label="某个月" name="month">
        <get-month></get-month>
      </el-tab-pane>
      <el-tab-pane label="某天" name="day">
        <day></day>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as api from '@/api'
import axios from 'axios'

import all from './all.vue'
import getMonth from './getMonth.vue'
import day from './day.vue'


export default {
  mixins: [],
  components: {
    all,
    getMonth,
    day,
  },
  props: [],
  data() {
    return {
      activeName: 'day',
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
</style>