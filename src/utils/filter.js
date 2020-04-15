
export default {
  install(Vue, options) {
    Vue.filter('isNull', function (val) { 
      if (val !== "" && val !== null && val !== undefined) {
        return val
      } else {
        return "--"
      }
    })
  }
}
