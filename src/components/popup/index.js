import Vue from 'vue'
import popup from './popup.vue'

const popupBox = Vue.extend(popup)

popup.install = function (data) {
  let instance = new popupBox({
    data
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.show()
  })
}

Vue.prototype.$popup = popup.install
