const request = (path, method, body) => {
  if (!path) {
    throw new Error('缺少参数，请填写请求路径');
  }
  if (!method) {
    throw new Error('缺少参数，请填写请求方法');
  }
  if (method === 'POST' && !body) {
    throw new Error('缺少参数，POST方法请填写body参数');
  }
};

export default request;
