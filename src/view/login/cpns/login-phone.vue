<template>
  <el-form ref="formRef" :model="ruleForm" :rules="phoneRules" label-width="70px">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="ruleForm.phone" type="tel" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="verify-code">
        <el-input v-model.number="ruleForm.code" maxlength="6" />
        <el-button class="get-btn" type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

import { phoneRules } from '../config/login-config'

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      phone: '',
      code: ''
    })

    const formRef = ref<FormInstance>()

    const phoneValidate = function () {
      formRef.value?.validate((vaild) => {
        console.log('登录成功与否', vaild, ruleForm)
      })
    }

    return {
      ruleForm,
      phoneRules,
      formRef,
      phoneValidate
    }
  }
})
</script>

<style scoped lang="less">
.verify-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
