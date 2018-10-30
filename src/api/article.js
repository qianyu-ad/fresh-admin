import request from '@/api/request'

/**
 * 文章列表
 */
export const articleList = () => {
  return request({
    url: '/api/articles',
    method: 'get'
  })
}

/**
 * 分类列表
 */
export const categoryList = () => {
  return request({
    url: '/api/categories',
    method: 'get'
  })
}

/**
 * 创建分类
 * @param {String} name
 */
export const createCategory = name => {
  return request({
    url: '/api/categories',
    method: 'post',
    data: {
      name
    }
  })
}

/**
 * 删除分类
 * @param {Int} id
 */
export const deleteCategory = id => {
  return request({
    url: `/api/categories/${id}`,
    method: 'delete'
  })
}
