// service 统一出口
import AxiosRequest from './request'
import { timeout, requestUrl } from '@/config'
import { localCache } from '@/utils'

const axiosRequest = new AxiosRequest({
  baseURL: requestUrl,
  timeout,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('发起请求成功的拦截', config)
      // 需要全局请求前设置一个请求头，比如添加一个token
      const token = localCache.get('token')
      if (token) {
        config && config.headers && (config.headers['Authorization'] = `Bearer ${token}`)
      }
      return config
    },
    requestInterceptorCatch(error) {
      console.log('发起请求失败的拦截', error)
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截', res)
      return res
    },
    responseInterceptorCatch(error) {
      console.log('响应失败的拦截', error)
    }
  }
})

export default axiosRequest
