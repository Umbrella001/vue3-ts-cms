<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon><Avatar /></el-icon>
        {{ username }}
        <el-icon><ArrowDown /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon><Setting /></el-icon>设置</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item
            ><el-icon><UserFilled /></el-icon>个人信息</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const username = computed(() => store.state.loginStore.userInfo.name)

    return {
      username
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  cursor: pointer;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    font-size: 15px;
    outline: 0;

    .el-icon {
      margin: 0 6px;
      font-size: 18px;
    }
  }
}
</style>
