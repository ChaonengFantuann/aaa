## 安装antd
$ npm install antd --save
$ yarn add antd

## 引入
1. 将样式文件引入到 index.jsx
  import 'antd/dist/antd.css';
2. 引入需要使用的组件
  import { Button } from 'antd';

## 手动引入按需加载
1. 将样式文件引入到 index.jsx
  import 'antd/es/button/style/css';
2. 引入需要使用的组件
  import Button from 'antd/es/button';

## 利用依赖按需加载
1. 拉取React的配置文件
  $ npm run eject
2. 遇到的问题：关于文件被修改了，无法运行npm run eject命令
  git
3. 安装依赖
  npm install babel-plugin-import --save-dev
4. 修改package.json中的bable中的presets后面加上：
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
