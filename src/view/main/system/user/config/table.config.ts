import { IPropListType } from '@/base-ui/table'

export const propList: IPropListType[] = [
  {
    prop: 'name',
    label: '用户名',
    minWidth: '100',
    slotName: 'name'
  },
  {
    prop: 'realname',
    label: '真实姓名',
    minWidth: '100',
    slotName: 'realname'
  },
  {
    prop: 'cellphone',
    label: '手机号',
    minWidth: '150',
    slotName: 'cellphone'
  },
  {
    prop: 'enable',
    label: '状态',
    minWidth: '70',
    slotName: 'status'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'time'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'time'
  }
]
