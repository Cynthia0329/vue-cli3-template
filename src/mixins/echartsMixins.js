import ECharts from 'vue-echarts'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'

export default {
  methods:{
    setCostoption(data) {
      let option = {
      }
      this.echartsOption = option
    },
  }
}
