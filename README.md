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