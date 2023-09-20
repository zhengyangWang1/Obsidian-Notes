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

### Obsidian实现笔记与博客同步
