<template>
    <div class="dialog-container">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        :modal-append-to-body='false'
        @close='closeCb'
        width="28%">
        <span><slot>确认删除吗？</slot></span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="$emit('handleContinue',true)">确 定</el-button>
          <el-button @click="$emit('handleContinue',false)">取 消</el-button>
        </span>
      </el-dialog>
    </div>
            
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props : {
       isShow:{
          type : Boolean,
          default : false
       }
    },
    computed: {
       dialogVisible: {
         get: function() {
           return this.isShow
         },
         set: function() {}
       }
    },
    methods: {
       closeCb() {
          this.$emit('handleContinue',false)
       }
    }
  }
</script>

<style lang='scss' scoped>
  .dialog-container /deep/ .el-dialog__header{
    background: #404852;
    padding: 0 0 0 11px;
  }
  .dialog-container /deep/ .el-dialog {
     margin-top:30vh!important;
  }
  .dialog-container /deep/ .el-dialog__title{
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(201,208,215,1);
      line-height: 30px;
  }
  .dialog-container /deep/ .el-dialog__headerbtn{
      top: 3px;
      right: 10px;
  }
  .dialog-container /deep/ .el-dialog__headerbtn .el-dialog__close{
        color: #C9D0D7;
  }
  .dialog-container /deep/ .el-dialog__body{
        padding: 41px 0 32px 0;
  }
  .dialog-container /deep/ .el-dialog__body span{
        text-align: center;
      display: inherit;
      font-size: 14px;
      line-height: 22px;
      color: #333333;
      font-family: Microsoft YaHei;

  }
  .dialog-container /deep/ .el-dialog__footer{
    padding: 0 0 20px;
      text-align: center;
  }
  .dialog-container /deep/ .el-button--primary{
      color: #FFF;
      background-color: #1984EA;
      border-color: #1984EA
  }
  .dialog-container /deep/ .el-button{
        border: 1px solid #DDDDDD;
        width: 52px;
        height: 25px;
        padding: 0;
  }
  .dialog-container /deep/ .el-button--default{
        color: #333333;
  }
</style>
