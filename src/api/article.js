import request from '@/api/request'

/**
 * 文章列表
 */
export const articleList = () => {
  return request({
    url: '/api/articles',
    methods: 'get'
  })
}
