<template>
  <div v-if="visited">
    <div id="popup" class="popup">
      <div class="nav">
        <p>标题</p>
        <button @click="close()">关闭</button>
      </div>
      <div class="content">
        内容详情
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popupPage',
  data() {
    return {
      phone: "",
      smscode: '',
      visited: true,
      next: '' // 可以接受参数
    };
  },
  methods: {
    show() {
      this.visited = true
    },
    close() {
      this.visited = false
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  width: 500px;
  height: 300px;
  background: #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nav {
  height: 30px;
  background: #404852;
  font-size: 14px;
  color: #C9D0D7;
  display: flex;
  justify-content: space-between;
}
</style>