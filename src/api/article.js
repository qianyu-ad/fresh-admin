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
    data: { name }
  })
}

/**
 * 更新分类
 */
export const updateCategory = (id, name) => {
  return request({
    url: `/api/categories/${id}`,
    method: 'post',
    data: { name }
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

/**
 * 标签列表
 */
export const tagList = () => {
  return request({
    url: '/api/tags',
    method: 'get'
  })
}

/**
 * 新增标签
 * @param {String} name
 */
export const createTag = name => {
  return request({
    url: '/api/tags',
    method: 'post',
    data: { name }
  })
}

/**
 * 更新标签
 */
export const updateTag = (id, name) => {
  return request({
    url: `/api/tags/${id}`,
    method: 'post',
    data: { name }
  })
}

/**
 * 删除标签
 */
export const deleteTag = id => {
  return request({
    url: `/api/tags/${id}`,
    method: 'delete'
  })
}
