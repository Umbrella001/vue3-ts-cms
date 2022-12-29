<template>
  <div class="breakcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breakcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreakCrumbs } from '../index'

export default defineComponent({
  props: {
    breakcrumbs: Array as PropType<IBreakCrumbs[]>,
    default: () => []
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
