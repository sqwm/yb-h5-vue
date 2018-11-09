## ts全栈vue-h5
### 项目背景
出于技术提升的需要，基于vue最新的脚手架和核心库，开发一个h5, 且使用的是
typescript, 只具备最基本的登录注册，上传图片和修改用户信息的功能，重在掌握项目的搭建和掌握vue技术栈的基础和核心知识点！

### 技术架构
前后端分离，基于vue技术栈。核心库当前版本为：
- typescript 3.x, 
- vue 2.5.17, 
- vue-router 3.0.1, 
- vuex 3.0.1, 
- axios 0.18.0, 
- cube-ui 1.12.2.

### 参与学习或开发
- 下载源码
  ```
  git clone https://github.com/yibiankeji/yb-h5-vue.git   
  ```
- 安装项目有关依赖
  ```
  cd yb-h5-vue &&  npm install 
  ```
- 启动项目
  ```
  npm start  
  ```
  
### 各目录及文件功能
├── README.md 本文件，介绍项目的基本情况
├── babel.config.js babel的配置文件
├── cypress.json e2e测试的配置文件
├── dist 打包后所有文件的目录
├── jest.config.js 单元测试的配置文件
├── node_modules 所有第三方依赖库所在的目录，如vue,axios, ts等
├── package-lock.json 版本锁定的文件
├── package.json npm有关的配置文件，如依赖库、运行脚本等
├── postcss.config.js postcss的配置文件
├── public 静态资源所在的文件 如图片，index.html 和 pwa配置文件manifest.json 等
├── src 项目编写代码的目录
│   ├── App.vue 根组件
│   ├── api.ts 各种请求Url文件
│   ├── apiCfg.ts 请求axios的配置文件
│   ├── assets 静态资源，如一些公共样式等
│   ├── components 组件目录
│   ├── main.ts 启动文件
│   ├── registerServiceWorker.ts 实现离线存储的功能
│   ├── router.ts 路由文件
│   ├── shims-tsx.d.ts 配置jsx扩展的文件
│   ├── shims-vue.d.ts 配置vue扩展的文件
│   ├── store.ts vuex配置文件
│   ├── theme.styl cube-ui的主题文件
│   └── views 页面目录
├── tests 测试目录
│   ├── e2e 功能测试目录
│   └── unit 单元测试目录
├── tsconfig.json typescript配置文件
├── tslint.json 静态语法检测配置文件
└── vue.config.js 项目脚手架的配置文件