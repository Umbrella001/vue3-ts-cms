type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItemsType {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItemsType[]
  labelWidth?: string
  formItemStyle?: any
  colLayout?: any
}
