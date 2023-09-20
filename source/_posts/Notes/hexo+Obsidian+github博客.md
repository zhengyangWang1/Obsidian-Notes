---
title: hexo+Obsidian+github笔记博客
categories:
  - Notes
date:
tags:
---
之前的Obsidian笔记都存在本地仓库，github page业已荒废，遂着手将ob笔记同步到blog上并实现自动更新

[使用 Hexo+GitHub 搭建个人免费博客教程（小白向） - 知乎](https://zhuanlan.zhihu.com/p/60578464)
[Obsidian+Git完美维护Hexo博客 - 知乎](https://zhuanlan.zhihu.com/p/554333805)
### 安装hexo并建立博客

之前的网页源代码已经丢失，于是重新搭建网页

#### 本地建站
首先新建一个本地文件夹（D:\\myweb），在文件夹内打开git bash，安装hexo
```
npm install -g hexo-cli
```
然后便可以新建一个网页了
```text
hexo init      # 初始化
npm install    # 安装组件
hexo g   # 生成页面
hexo s   # 启动预览，在本地
```
#### 部署到Github Page
**安装 hexo-deployer-git**
```text
npm install hexo-deployer-git --save
```
然后**修改  _ config.yml**  文件末尾的 Deployment 部分
```text
deploy:
  type: git
  repository: git@github.com:用户名/用户名.github.io.git
  branch: main
```
完成后运行 `hexo d` 将网站上传部署到 GitHub Pages

### Obsidian实现笔记与博客同步
[javascript - hexo配合github action 自动构建（多种形式） - 前端与算法 - SegmentFault 思否](https://segmentfault.com/a/1190000040767893)
[github action 部署 hexo踩坑记录 - 知乎](https://zhuanlan.zhihu.com/p/626270948)
[GitHub自动部署HEXO个人博客 - 知乎](https://zhuanlan.zhihu.com/p/441558922)
参考了很多文章，解决了无数bug

#### 前置工作
首先需要两个GitHub仓库，一个(Obsidian-Notes)用来和Obsidian Git远程连接，同步文章内容，然后在push时使用Github Action执行hexo deploy来将部署好的网页传输到另一个仓库。另一个(zhengyangWang1)用来接受第一个仓库部署好的内容，作为Github Page的仓库。

首先先把本地存放博客框架的文件夹（D:\\myweb\\web）用git连接到第一个仓库,将内容同步。

#### 给两个仓库配置密钥
```
ssh-keygen -f github-deploy-key # 在git Bash中执行，生成秘钥
```
会在当前目录中生成两个文件：
- 私钥文件 `github-deploy-key`
- 公钥文件 `github-deploy-key.pub`

复制私钥文件中**所有内容**，在第一个项目仓库， Settings -> Secrets and variables -> Actions页面上点击New repository secret 添加。
在 Name 输入框填写 HEXO_DEPLOY_PRI。
在 Value 输入框填写 github-deploy-key文件**所有内容**
**注**：所有内容包括第一行和最后一行不太像私钥内容的东西，曾在此踩坑

在第二个仓库Setting-> deploy key中配置公钥。在 Title 输入框填写 HEXO_DEPLOY_PUB，在 Key 输入框填写 github-deploy-key.pub 文件内容，勾选 Allow write access 选项。

#### 配置第一个仓库的Github Actions
在第一个仓库的本地文件夹找到.github文件，在文件夹下创建workflows/deploy.yml，文件夹名称必须是workflows，这个是github action的文件夹，下面的yml名称可以任意，为执行文件。

yml中的内容如下（改了无数bug）：
```
name: deploy  # name任意

on:  # 当执行push操作时，触发该action
  push:
    branches:
    - main

env:
  GIT_USER: zhengyangWang1  # git的用户名
  GIT_EMAIL: wangzhengyang@bupt.edu.cn  # git的邮箱
  THEME_REPO: fluid-dev/hexo-theme-fluid  # 主题
  THEME_BRANCH: main

jobs:
  deploy:
    runs-on: ubuntu-latest  # 环境，使用Ubuntu

    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          ref: main

      - name: 安装 Node  # 这个格式是正确的，使用build那个会报错
        uses: actions/setup-node@v3
        with:
          node-version: "20.x"

      - name: 配置 环境变量
        env:
          HEXO_DEPLOY_PRI: ${{secrets.HEXO_DEPLOY_PRI}}
        run: |
          mkdir -p ~/.ssh/
          echo "$HEXO_DEPLOY_PRI" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name $GIT_USER
          git config --global user.email $GIT_EMAIL
      - name: 安装 Hexo
        run: |
          npm install hexo-cli -g
          npm install
      
      - name: 生成静态文件
        run: |
          rm -rf .deploy_git  # .deploy_git报错遂添加此行和下一行
          npm install hexo-deployer-git --save
          hexo clean
          hexo generate
      - name: 部署到Github page
        run: |
          hexo deploy
```

本来还有部署主题文件的代码，但因为deploy时报错所以暂时删去，以后搞清楚作用在处理

配置好后push一下，看到deploy成功方可。

### 配置
[Hexo + Obsidian + Git 完美的博客部署与编辑方案 - 掘金](https://juejin.cn/post/7120189614660255781)
[Obsidian+Git完美维护Hexo博客 - 知乎](https://zhuanlan.zhihu.com/p/554333805)
#### 插件Folder foucs mode
在ob中打开hexo博客的文件夹，发现文件太多，都是些平时不会浏览的配置文件，所以下载ob插件Folder foucs mode，可以将左侧文件列表聚焦到想要的地方（\_posts文件夹下）

#### 适配hexo格式
使用hexo new创建笔记会在文件头加入一段模板，这样才会在部署时部署到网页。在ob中，打开核心插件中的模板功能，并将模板文件夹位置设为Template。新建一个Template文件夹，存放一个hexo文件头模板文件。当创建文件时，点击左侧功能栏中的插入模板即可插入文件头。

#### 自动生成分类
Hexo写日志，通常我们都需要维护一个front-matter信息，包括`title`、`date`。博客多了，为了方便日志分类，一般还需要设置`categories`。
[GitHub - xu-song/hexo-auto-category: Generate categories automatically for each post in Hexo](https://github.com/xu-song/hexo-auto-category)自动生成categories
安装：
```
npm install hexo-auto-category --save
```
在站点根目录下的`_config.yml`添加:
```
auto_category:  
 enable: true  
 depth:
```

**利用Git钩子函数触发更新:**
这个插件只有执行`hexo generate`时才会去读取文件夹并更新所有文章的Front-matter分类信息，所以我们可以利用[Git的钩子函数](https://link.zhihu.com/?target=https%3A//git-scm.com/book/zh/v2/%25E8%2587%25AA%25E5%25AE%259A%25E4%25B9%2589-Git-Git-%25E9%2592%25A9%25E5%25AD%2590%23_git_hooks)，在commit的时候先执行下`hexo generate`，这样就能实现自动更新了。
在`.git/hooks`目录下新建一个`pre-commit`文件，也可以执行`touch pre-commit`命令新建该文件,将如下命令写到文件里
```bash
#!/bin/sh
hexo generate && git add .
```

#### PicGo+Github图床
[使用Github+picGo搭建图床，保姆级教程来了 - 知乎](https://zhuanlan.zhihu.com/p/489236769)
