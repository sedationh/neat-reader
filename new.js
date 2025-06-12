const data = {
  spineIndex: 12,
  progress: 0.024674851100036466,
};

// http://localhost:8080/#/epubreader?bookguid=ec2355cc-6e2b-4387-9fe2-ffb518d3859a1

// 处理hash路由中的查询参数
const currentUrl = new URL(location.href);
const hashPart = currentUrl.hash.substring(1); // 去掉#号

// 分离路径和查询参数
const [hashPath, hashQuery = ''] = hashPart.split('?');

// 创建URLSearchParams来处理hash中的查询参数
const hashParams = new URLSearchParams(hashQuery);
hashParams.set('spineIndex', data.spineIndex);
hashParams.set('progress', data.progress);

// 重新构建URL
const newHash = `#${hashPath}?${hashParams.toString()}`;
location.href = `${currentUrl.origin}${currentUrl.pathname}${currentUrl.search}${newHash}`;

