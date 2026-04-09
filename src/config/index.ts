/**
 * 环境配置
 */

// 开发环境
const DEV = {
  baseUrl: 'http://localhost:8000/api/v1',
  uploadUrl: 'http://localhost:8000/api/v1/upload',
}

// 生产环境
const PROD = {
  baseUrl: 'https://api.jizhuang.cn/api/v1',
  uploadUrl: 'https://api.jizhuang.cn/api/v1/upload',
}

// 当前环境
const env = process.env.NODE_ENV === 'production' ? PROD : DEV

export default {
  // API 基础地址
  baseUrl: env.baseUrl,
  
  // 文件上传地址
  uploadUrl: env.uploadUrl,
  
  // WebSocket 地址（用于实时功能）
  wsUrl: env.baseUrl.replace('http', 'ws').replace('https', 'wss'),
  
  // 超时时间（毫秒）
  timeout: 30000,
  
  // 是否开启调试
  debug: process.env.NODE_ENV !== 'production',
}
