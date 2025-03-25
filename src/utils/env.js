// 检测是否在内网环境
export const isInternalNetwork = () => {
  // 检查当前域名是否包含 meituan.net
  if (window.location.hostname.includes('meituan.net')) {
    return true;
  }
  
  // 检查当前IP是否在内网范围内
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || 
      hostname === '127.0.0.1' || 
      hostname.startsWith('172.') ||
      hostname.startsWith('11.') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.')) {
    return true;
  }
  
  return false;
};

// 获取资源URL
export const getResourceUrl = (internalUrl, externalUrl) => {
  return isInternalNetwork() ? internalUrl : externalUrl;
}; 