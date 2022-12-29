import { IForm } from '@/base-ui/form'

export const formConfig: IForm = {
  formItems: [
    {
      field: 'id',
      label: '用户ID',
      type: 'input',
      placeholder: '请输入用户ID'
    },
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'phone',
      label: '手机号',
      type: 'input',
      placeholder: '请输入用户手机号'
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px'
}
