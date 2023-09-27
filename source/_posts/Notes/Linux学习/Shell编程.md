---
title: Shell编程
categories:
  - Notes
  - Linux学习
tags:
  - Linux
---
打开文本编辑器(可以使用 vi/vim 命令来创建文件)，新建一个文件 test.sh，扩展名为 sh（sh代表shell）
`#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell
保存为 test.sh，并 cd 到相应目录

```
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

