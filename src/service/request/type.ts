// 定制axios中的请求拦截器和响应拦截器
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface ExtraInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface ExtraRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ExtraInterceptors<T>
  showFetchLoading?: boolean
}

export { ExtraInterceptors, ExtraRequestConfig }
