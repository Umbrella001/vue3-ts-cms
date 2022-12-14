import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ExtraInterceptors, ExtraRequestConfig } from './type'

import { ElLoading } from 'element-plus'

const CONFIG_LOADING_STATUS = true

class AxiosRequest {
  instance: AxiosInstance
  interceptors?: ExtraInterceptors
  loading: any
  showFetchLoading: boolean

  constructor(config: ExtraRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.loading = null
    this.showFetchLoading = config.showFetchLoading ?? CONFIG_LOADING_STATUS

    // 从创建该实例者传入的拦截器进行拦截（是否有拦截器，由创建实例时决定）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 添加全局的拦截器（只要使用该实例就会有对应的拦截器）
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功拦截')

        if (this.showFetchLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求中...',
            background: 'raba(0,0,0,.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('请求拦截出错err', err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局的响应成功拦截')
        const data = res.data

        this.loading?.close()

        switch (data.code) {
          case '-1001':
            break
          case '-1024':
            break
          default:
            return data
        }
      },
      (err) => {
        // console.log('全局的响应失败拦截')

        this.loading?.close()

        switch (err.response.state) {
          case '404':
            break
          case '500':
            break
        }
      }
    )
  }

  // 同样让request也支持单独传入拦截器
  request<T>(config: ExtraRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showFetchLoading === false) {
        this.showFetchLoading = config.showFetchLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          this.showFetchLoading = CONFIG_LOADING_STATUS

          console.log(res)
          resolve(res)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  get<T = any>(config: ExtraRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: ExtraRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: ExtraRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: ExtraRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default AxiosRequest

// 调用方法

// interface DATATYPE {
//   data: any,
//   code: number,
//   msg: string
// }

// AxiosRequest.get<DATATYPE>({
//   url: 'xxx',
//   params: {
//     page: 1
//   }
// }).then(res => {

// })
