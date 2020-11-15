import http from '../base/http.js'

export function test() { // 测试
  return http.get(`/test`)
}

export function getTagRead(tagName) { // 请求p站阅览数
  return http.get(`/pv/tag_count/${tagName}?json=1`)
}

export function getTagObj(tagName) { // 请求p站tag数
  return http.get(`/tag/top/${tagName}?lang=zh`)
}