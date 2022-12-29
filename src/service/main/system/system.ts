import axiosRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, data: any) {
  return axiosRequest.post<IDataType>({
    url,
    data
  })
}
