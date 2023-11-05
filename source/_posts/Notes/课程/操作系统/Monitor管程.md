---
title: Monitor管程
categories:
  - Notes
  - 课程
  - 操作系统
tags:
  - 操作系统
date:
---
### Monitor
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231018102847.png)
每个monitor都有一个互斥锁，monitor中只能有一个线程处于活动状态

### Condition variables
condition是一个类，实现了以下函数：
- condition.wait()
- condition.signal()
- condition.broadcast()


### 管程
管程是一种特殊的软件模块，有这些部分组成：
1. 局部于管程的共享数据结构说明
2. 对该数据结构进行操作的一组过程
3. 对局部于管程的共享数据设置初始值的语句
4. 管程有一个名字

管程的基本特征：
1. 局部于管程的数据只能被局部于管程的过程所访问
2. 一个进程只有通过调用管程内的过程才能进入管程访问共享数据
3. 每次仅允许一个进程在管程内执行某个内部过程