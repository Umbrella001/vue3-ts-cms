<template>
  <div class="login-panel">
    <h1 class="title">鸿蒙后台管理系统</h1>

    <el-tabs type="border-card" :stretch="true" class="panel" v-model="panelName">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <section class="remain-box" v-show="panelName === 'account'">
      <el-checkbox v-model="isRememberPwd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码？</el-link>
    </section>

    <el-button
      class="login-btn"
      type="primary"
      :loading="isLoginLoading"
      size="large"
      @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './cpns/login-account.vue'
import LoginPhone from './cpns/login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    let panelName = ref('account')
    let isRememberPwd = ref(true)
    let isLoginLoading = ref(false)

    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    const handleLogin = () => {
      if (panelName.value === 'account') {
        accountRef.value?.accountValidate(isRememberPwd.value)
      } else {
        phoneRef.value?.phoneValidate()
      }
    }

    return {
      panelName,
      isRememberPwd,
      isLoginLoading,
      accountRef,
      phoneRef,
      handleLogin
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.png');

  :deep(.el-tabs--border-card > .el-tabs__content) {
    padding: 30px 15px 15px;
  }

  .title {
    margin-bottom: 15px;
    color: #f5f5f5;
    text-align: center;
  }

  .panel {
    width: 330px;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        margin-left: 5px;
      }
    }

    .control-account {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
    }

    .login-btn {
      margin-top: 10px;
      width: 100%;
    }
  }

  .remain-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    margin-top: 6px;
  }

  .login-btn {
    width: 330px;
    margin-top: 10px;
  }
}
</style>
