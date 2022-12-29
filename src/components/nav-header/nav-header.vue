<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <break-crumb :breakcrumbs="breakcrumbs" />
      <header-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import BreakCrumb from '@/base-ui/breadcrumb'
import HeaderInfo from './cpns/header-info.vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { mapPathBreakcrumb } from '@/utils'

export default defineComponent({
  components: {
    BreakCrumb,
    HeaderInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref<boolean>(false)

    const store = useStore()

    const breakcrumbs = computed(() => {
      const userMenus = store.state.loginStore.userMenus
      const route = useRoute()
      const currentPath = route.path
      return mapPathBreakcrumb(userMenus, currentPath)
    })

    function handleFoldClick() {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      breakcrumbs,
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
