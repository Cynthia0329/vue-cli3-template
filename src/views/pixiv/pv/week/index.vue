<template>
  <div class="content">
    <h4>P站一周日均阅览数</h4>
    <span>11.02-11.08</span>
    <table v-if="tagArr">
      <thead>
        <tr>
          <th>序号</th>
          <th>Tag</th>
          <th>日均阅览数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tagArr">
          <td>{{ index + 1 }}</td>
          <td>{{ item.tagName }}</td>
          <td style="text-align: right">
            <code>{{ item.arg }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as api from '@/api'
import axios from 'axios'
export default {
  mixins: [],
  components: {},
  props: [],
  data() {
    return {
      tagArr: null
    }
  },
  mounted() {
    this.tagArr = api.mock.pv
  },
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../scss/index.scss';
</style>