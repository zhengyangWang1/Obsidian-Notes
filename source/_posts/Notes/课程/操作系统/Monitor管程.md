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