<template>
  <div class="custom-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" class="form-item" :style="formItemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                />
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <slot name="form-inner"></slot>
      </el-row>
    </el-form>
    <slot name="bottom"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItemsType } from '../types/type'

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItemsType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    formItemStyle: {
      type: Object,
      default: () => ({
        padding: '10px 40px 10px 20px'
      })
    },
    // 响应式查询条件，Layout布局参考属性说明
    // https://element-plus.gitee.io/zh-CN/component/layout.html#col-attributes
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup(props, { emit }) {
    // 遵循单向数据流的双向绑定（组件级写法）
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.custom-form {
  padding-top: 22px;
}
</style>
