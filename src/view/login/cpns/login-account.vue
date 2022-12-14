<template>
  <el-form ref="formRef" :model="ruleForm" :rules="accountRules" label-width="60px">
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account" type="text" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useStore } from 'vuex'

import { accountRules } from '../config/login-config'
import { localCache } from '@/utils'

export default defineComponent({
  setup() {
    const store = useStore()

    const ruleForm = reactive({
      account: localCache.get('user') ?? '',
      password: localCache.get('pwd') ?? ''
    })

    const formRef = ref<FormInstance>()

    const accountValidate = function (isRememberPwd: boolean) {
      formRef.value?.validate((vaild: boolean) => {
        if (vaild) {
          // 记住密码逻辑
          if (isRememberPwd) {
            localCache.set('user', ruleForm.account)
            localCache.set('pwd', ruleForm.password)
          } else {
            localCache.del('user')
            localCache.del('pwd')
          }

          // 请求登录接口
          console.log(store, 'store')
          store.dispatch('loginStore/changeLoginAction', ruleForm)
        } else {
          console.log('登录失败')
        }
      })
    }

    return {
      ruleForm,
      accountRules,
      formRef,
      accountValidate
    }
  }
})
</script>

<style scoped></style>
