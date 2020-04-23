import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 60000 ,  // 请求超时时间
  withCredentials:false, // 表示跨越请求时是否需要使用凭证（携带cookie）
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }, // 默认消息头
  responseType: 'json',
  transformRequest: [function (data, headers) { // `transformRequest` 允许在向服务器发送前，修改请求数据
    const dataType = headers['Content-Type']
    if (dataType && dataType.indexOf('application/x-www-form-urlencoded') > -1) { // axios默认
      return JSON.stringify(data)
    }
    if (dataType && dataType.indexOf('application/json;charset=UTF-8') > -1) { // 将对象转换为json字符串
      return JSON.stringify(data)
    }
    if (dataType && dataType.indexOf('multipart/form-data') > -1) { // FormData类型
      return data
    }
    return data
  }]
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      //如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
      config.paramsSerializer = function (params) {
        return qs.stringify(params, {arrayFormat: 'repeat'})
      }
    }
    return config
  }, 
  error => {
    Message.error('当前网络异常，请稍后再试！')
    console.error(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    if (res.data.errCode != 0) {
      Message({
        type: 'error',
        message: res.data.msg || 'Error',
      })
      return Promise.reject('error')
    } 
    else {
      if (res.headers['content-type'] == "text/csv") {
        return res
      }
      else {
        return res.data
      }
    }
  }, error => {
    Message.error('当前网络异常，请稍后再试！')
    console.error(error)
    return Promise.reject(error)
  }
)

export default service
