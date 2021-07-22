## 微信开发

第一步：首先在微信基本配置中获取：APPID:wx3e9942ee80ed4227,AppSecret:4788dc244398790de89c55ec4ef06a21。
第二步：为获取access_token，设置IP白名单。
第三步：去https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html设置accessToken

```bash
# IP地址白名单中的中继服务器
https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx3e9942ee80ed4227&secret=4788dc244398790de89c55ec4ef06a21
```

第四步：设置登录跳转的URL

REDIRECT_URI
```bash
https://open.weixin.qq.com/connect/qrconnect?appid=wx3e9942ee80ed4227&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect 
```
----
参考信息：https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html