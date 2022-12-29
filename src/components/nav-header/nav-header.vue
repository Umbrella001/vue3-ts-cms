<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div>面包屑</div>
      <!--  <header-crumb /> -->
      <header-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderInfo from './cpns/header-info.vue'

export default defineComponent({
  components: {
    HeaderInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    function handleFoldClick() {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
