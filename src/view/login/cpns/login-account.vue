<template>
  <el-form ref="formRef" :model="ruleForm" :rules="accountRules" label-width="60px">
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account" type="text" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

import { accountRules } from '../config/login-config'

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      account: '',
      password: ''
    })

    const formRef = ref<FormInstance>()

    const accountValidate = function () {
      formRef.value?.validate((vaild) => {
        console.log('登录成功与否', vaild, ruleForm)
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
