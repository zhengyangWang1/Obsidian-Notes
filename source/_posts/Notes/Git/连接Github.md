---
title: 连接Github
categories:
  - Notes
  - Git
date: 
tags:
  - Github
  - Git
---
### git连接远程仓库
从github克隆仓库到本地
```
git clone ssh
```

连接远程仓库
```
git remote add origin ssh
```

### 分支管理
本地新建分支后push到github
```
git branch -v  # 查看分支列表
git branch 分支名  # 新建分支
git checkout 分支名  # 转到该分支
```

删除本地分支
```
git branch -d 分支名  # 删除本地分支
git branch -D 分支名  # 强制删除本地分支
```
删除远程分支
```
git push origin --delete 分支名  # 删除远程分支
```