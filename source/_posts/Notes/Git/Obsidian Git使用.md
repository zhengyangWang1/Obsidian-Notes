---
title: OBsidian Git使用
categories:
  - Notes
  - Git
tags:
  - Git
  - Obsidian
---

### Git使用
第一次使用需要配置用户名和邮箱，这个数据是全局的，不需要重复配置
```
git config --global user.name 用户名  # 配置用户名
git config --global user.email  # 配置邮箱
git config --global --list  # 检查是否配置成功
```

### 在Github上配置SSH key

##### 原理

>SSH登录安全性由非对称加密保证，产生密钥时，一次产生两个密钥，一个公钥，一个私钥，在git中一般命名为id_rsa.pub, id_rsa。
  本地生成一个密钥对，其中公钥放到远程主机，私钥保存在本地
  当本地主机需要登录远程主机时，本地主机向远程主机发送一个登录请求，远程收到消息后，随机生成一个字符串并用公钥加密，发回给本地。本地拿到该字符串，用存放在本地的私钥进行解密，再次发送到远程，远程比对该解密后的字符串与源字符串是否等同，如果等同则认证成功。
  **ssh key的配置是针对每台主机的**。
  目的是在Github上实现免密登录

**第一步：检查本地主机是否已经存在ssh key**

```
cd ~/.ssh 
   ls 
   //看是否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
```

**第二步：如果不存在，生成ssh key**

```
ssh-keygen -t rsa -C "xxx@xxx.com"
//执行后一直回车即可
```

**第三步：获取ssh key公钥内容（id_rsa.pub）**

```
cd ~/.ssh
cat id_rsa.pub
```

**第四步：在Github的Setting中添加key**
**第五步：验证是否成功**

```
ssh -T git@github.com
```

### 添加Github远程仓库：
创建一个Github仓库用于存放笔记

### 配置本地 Obsidian 仓库

```
touch README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin "替换为上图中本条命令位置提示的远端地址（形如 git@gitee.com:user/repo.git）"
git push -u origin main
```

然后Obsidian Git成功同步笔记：）
