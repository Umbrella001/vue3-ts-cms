<template>
  <el-table :data="tableList" stripe border style="width: 100%">
    <template v-for="item in propList" :key="item.prop">
      <el-table-column v-bind="item" align="center">
        <template #default="scope">
          <slot :name="item.slotName || 'defaultSlot'" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPropListType } from '../types/type'

export default defineComponent({
  props: {
    tableList: {
      type: Array,
      default: () => []
    },
    propList: {
      type: Array as PropType<IPropListType[]>,
      required: true
    }
  }
})
</script>

<style scoped></style>
