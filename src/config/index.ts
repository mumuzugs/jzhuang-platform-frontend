/**
 * 环境配置
 */

// 开发环境（本地）
const DEV = {
  baseUrl: 'http://localhost:8000/api/v1',
  uploadUrl: 'http://localhost:8000/api/v1/upload',
}

// 生产环境
const PROD = {
  baseUrl: 'https://api.jizhuang.cn/api/v1',
  uploadUrl: 'https://api.jizhuang.cn/api/v1/upload',
}

// 当前环境 - 强制使用开发环境
const env = DEV

export default {
  baseUrl: env.baseUrl,
  uploadUrl: env.uploadUrl,
  wsUrl: env.baseUrl.replace('http', 'ws').replace('https', 'wss'),
  timeout: 30000,
  debug: true,
}
