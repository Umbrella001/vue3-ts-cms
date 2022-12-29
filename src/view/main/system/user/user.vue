<template>
  <div class="user">
    <custom-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h3>用户检索</h3>
      </template>
      <template v-slot:form-inner>
        <el-col :span="8">
          <div class="control-btn">
            <el-button icon="Refresh">重置</el-button>
            <el-button type="primary" icon="Search">搜索</el-button>
          </div>
        </el-col>
      </template>
    </custom-form>
    <div class="content">
      <custom-table :tableList="userList" :propList="propList">
        <template #status="scope">
          <el-tag :type="+scope.row.enable ? 'success' : 'danger'">{{
            +scope.row.enable ? '启用' : '禁用'
          }}</el-tag>
        </template>
      </custom-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

import CustomForm from '@/base-ui/form'
import CustomTable from '@/base-ui/table'

import { formConfig } from './config/form.config'
import { propList } from './config/table.config'

export default defineComponent({
  name: 'user',
  components: {
    CustomForm,
    CustomTable
  },
  setup() {
    const formData = ref({
      name: '',
      id: '',
      phone: '',
      createTime: []
    })

    const store = useStore()
    store.dispatch('systemStore/getPageListAction', {
      url: '/users/list',
      data: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.systemStore.userList)

    return {
      formConfig,
      formData,
      userList,
      propList
    }
  }
})
</script>

<style scoped>
.control-btn {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
