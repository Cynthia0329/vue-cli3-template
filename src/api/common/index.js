import http from '../base/http.js'

export function test() { // 测试
  return http.get(`/test`)
}