import axios from 'axios'
import message from 'ant-design-vue'

const service = axios.create({
  timeout: 5000,
  proxy: {
    host: '127.0.0.1',
    port: 5000
  }
})

// 请求钩子
service.interceptors.request.use(
  request => {
    return request
  },
  error => {
    Promise.reject(error)
  }
)

// 响应钩子
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      message.error('请求超时, 请稍后尝试')
      return Promise.reject(error)
    }
  }
)

export default service
