import request from '@/api/request'

/**
 * 用户列表
 */
export const userList = () => {
  return request({
    url: '/api/users',
    method: 'get'
  })
}
