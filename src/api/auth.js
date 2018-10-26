import request from '@/api/request'

/**
 * 登录
 * @param {String} username     用户名
 * @param {String} password     密码
 */
export const loginApi = (username, password) => {
  return request({
    url: '/api/admin/login',
    method: 'post',
    data: { username, password }
  })
}

/**
 * 登出
 */
export const logoutApi = () => {
  return request({
    url: '/api/logout',
    method: 'get'
  })
}
