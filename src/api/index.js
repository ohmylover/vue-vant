import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const api = axios.create({
  baseURL: baseApi, // url = base api url + request url
  timeout: 10000, // request timeout
  responseType: 'json',
  withCredentials: true
})

// request拦截器 request interceptor
api.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    // 在请求发送之前做一些处理
    if (!(/^https:\/\/|http:\/\//.test(config.url))) {
      config.headers = {}
    }
    if (store.getters.token) {
      config.headers['token'] = store.getters.token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
api.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 0) {
      // 登录超时,重新登录
      if (res.status === -2) {
        Toast.fail('登录过期，请返回APP重新登录')
        store.dispatch('removeToken')
      }
      if (res.status === -1) {
        Toast.fail(res.message)
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default api
