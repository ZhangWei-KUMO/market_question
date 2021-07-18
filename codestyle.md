# 代码风格标准
 
 代码风格标准化是一个项目是否长期可持续维护的重要关键点，本项目采用的是eslint/airbnb代码风格。

```bash
# 安装 eslint
yarn add eslint --dev
# 运行eslint
yarn run eslint --init
```

然后在VScode中安装eslint插件

## Vscode配置

在右下角选择【设置】，在搜索框中搜索`eslint`，拉到最下面选择`Eslint/Validate`,点击`settings.json`添加代码如下：

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
 }
 ```

 ## .eslintrc.js配置

 ```js
  rules: {
    // 让js文件支持react jsx语法
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 新版的next.js已经不需要引入React
    "react/react-in-jsx-scope": "off",
    // 对于快速开发应用不使用prop-types
    "react/prop-types": "off"
    
  }
 ```

