# 常见bug修复

1. 远程服务器系统重装后，使用密钥登录远程服务器时本地机器的指纹就会失效，修复如下：

```bash
ssh-keygen -R 119.45.101.220
```

2. raw.githubusercontent.com被墙

https://www.ipaddress.com/查询真实地址


3. 端口被占

```bash
sudo lsof -t -i:3000
sudo kill -9 [PID]
```