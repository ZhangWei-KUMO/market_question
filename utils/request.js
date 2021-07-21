const request = async (path, method, body) => {
  if (!path) {
    throw new Error('缺少参数，请填写请求路径');
  }
  if (!method) {
    throw new Error('缺少参数，请填写请求方法');
  }
  if (method === 'POST' && !body) {
    throw new Error('缺少参数，POST方法请填写body参数');
  }
  if (method === 'POST') {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }
  const response = await fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export default request;
