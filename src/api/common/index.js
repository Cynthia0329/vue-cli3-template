import http from '../base/http.js'

export function test() { // 测试
  return http.get(`/test`)
}

export function getTagRead(tagName) { // 请求p站阅览数
  return http.get(`/tag_count/${tagName}?json=1`)
  // return http.get(`https://dic.pixiv.net/api/tag_count/${tagName}?json=1`)
}