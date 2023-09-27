---
title: Git操作
categories:
  - Notes
  - Git
tags:
  - Git
---

[Git 教程 | 菜鸟教程](https://www.runoob.com/git/git-tutorial.html)
### Git配置
Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。
这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：

- `/etc/gitconfig` 文件：系统中对所有用户都普遍适用的配置。若使用 `git config` 时用 `--system` 选项，读写的就是这个文件。
- `~/.gitconfig` 文件：用户目录下的配置文件只适用于该用户。若使用 `git config` 时用 `--global` 选项，读写的就是这个文件。
- 当前项目的 Git 目录中的配置文件（也就是工作目录中的 `.git/config` 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 `.git/config` 里的配置会覆盖 `/etc/gitconfig` 中的同名变量。

### Git创建仓库
#### git init

Git 使用 **git init** 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 **git init** 是使用 Git 的第一个命令。

在执行完成 **git init** 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。

如果当前目录下有几个文件想要纳入版本控制，需要先用 git add 命令告诉 Git 开始对这些文件进行跟踪，然后提交：

```
$ git add *.c
$ git add README
$ git commit -m '初始化项目版本'
```
以上命令将目录下以 .c 结尾及 README 文件提交到仓库中。

#### git clone

我们使用 **git clone** 从现有 Git 仓库中拷贝项目
克隆仓库的命令格式为：

```
git clone <repo>
```

如果我们需要克隆到指定的目录，可以使用以下命令格式：

```
git clone <repo> <directory>
```

**参数说明：**
- **repo:** Git 仓库。
- **directory:** 本地目录。

### Git 基本操作
Git 常用的是以下 6 个命令：**git clone**、**git push**、**git add** 、**git commit**、**git checkout**、**git pull**
![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230923234622.png)

#### Git工作区、暂存库和版本库

- **工作区：** 电脑中的文件目录
- **暂存区：** 英文叫 stage 或 index。一般存放在 .git 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：** 工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。

User在工作区修改文件，通过`git add`添加到暂存区，再通过`git commit`添加到版本库，再通过`git push`添加到远程仓库

**说明：**
- workspace：工作区
- staging area：暂存区/缓存区
- local repository：版本库或本地仓库
- remote repository：远程仓库

| 命令         | 说明                                     |
| ------------ | ---------------------------------------- |
| `git add`    | 添加文件到暂存区                         |
| `git status` | 查看仓库当前的状态，显示有变更的文件。   |
| `git diff`   | 比较文件的不同，即暂存区和工作区的差异。 |
| `git commit` | 提交暂存区到本地仓库。                   |
| `git reset`  | 回退版本。                               |
| `git rm`     | 将文件从暂存区和工作区中删除。           |
| `git mv`     | 移动或重命名工作区文件。                 |
| `git remote` | 远程仓库操作                             |
| `git fetch`  | 从远程获取代码库                         |
| `git pull`   | 下载远程代码并合并                       |
| `git push`   | 上传远程代码并合并                       |

### Git 分支管理
创建分支命令：

```
git branch (branchname)
```

切换分支命令:

```
git checkout (branchname)
```

当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容， 所以多个分支不需要多个目录。
合并分支命令:

```
git merge
```
![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230923234633.png)

合并后删除无用分支：

```
git branch -d newtest
```

