<template>
  <div class="pane-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" size="large">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码" size="large" class="phoneNumberBox">
        <el-input />
        <el-button class="phoneNumber" type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.pane-phone {
  .phoneNumberBox {
    position: relative;
    .el-input {
      width: 140px;
    }
    .phoneNumber {
      position: absolute;
      top: 0;
      right: 0;
      width: 90px;
      border-radius: 5px;
    }
  }
}
</style>
