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

### 获取代码

```bash
git clone git@github.com:ZhangWei-KUMO/market_question.git
```

### 安装node环境

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

将下列代码添加至`~/.bash_profile`

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

刷新`source ~/.bash_profile`。

```bash
# 安装node12.13.1
nvm install 12.13.1
npm install -g yarn 
```

### 安装pm2

```bash
npm install pm2@latest -g
```

### 启动

```bash
yarn
pm2 start pm2.json
```

### 系统重装

1. **本地开发机器** 系统重装后，本地机器需要删除`/Users/zhangwei/.ssh/known_hosts`原有云服务器IP指纹信息。
2. **云服务器** 生成公钥提交Github

### VPN启动

```bash
# 1. sudo passwd root 设置密码
# 2. su 进入root账户
bash <(curl -s -L https://git.io/v2ray.sh)
```

### 密钥管理

#### 腾讯云UI端

1. 绑定密钥
2. 加载密钥