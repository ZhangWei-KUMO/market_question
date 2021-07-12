# Daz Project用户文件调查的小应用

## 启动pm2集群

```bash
pm2 start pm2.json
pm2-runtime start pm2.json
pm2 list
```

## 状态

```bash
pm2 status 
```

## 关闭集群

```bash
## 关闭
pm2 stop pm2.json
## 重启
pm2 restart pm2.json
```

## 运维部分

### SSH key

```bash
ssh-keygen -t ed25519 -C "kanseefoil@gmail"
cat ~/.ssh/id_ed25519.pub
```
### 系统重装

1. **本地开发机器** 系统重装后，本地机器需要删除`/Users/zhangwei/.ssh/known_hosts`原有云服务器IP指纹信息。
2. **云服务器** 生成公钥提交Github

### 获取代码

```bash
git clone git@github.com:ZhangWei-KUMO/market_question.git
```
