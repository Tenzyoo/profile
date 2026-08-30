// 获取正确的静态资源路径
export function getAssetUrl(path) {
  if (!path) return null
  // 完整外链直接返回
  if (/^https?:\/\//.test(path)) return path
  const base = import.meta.env.BASE_URL
  const cleanPath = path.replace(/^\//, '')
  return `${base}${cleanPath}`
}