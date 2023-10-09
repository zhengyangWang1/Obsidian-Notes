---
title: Threads线程
categories:
  - Notes
  - 课程
  - 操作系统
tags:
  - 操作系统
date:
---
进程是最小资源分配单位
线程是最小执行单元

多线程服务框架
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009140512.png)

单线程与多线程进程：
线程共享进程中的数据，进程为每个线程创建栈和寄存器
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009140611.png)

Concurrency并发：在单核系统上
Parallelism并行：在多核系统上

### Race Conditions竞争条件
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009143100.png)
线程分为send和receive
- send：当buffer中有空间，可以写入
- receive：如果buffer中有message，返回message，调用线程
>producer-consumer problem
>producer需要把message添加到buffer
>consumer需要



当有多个sender时：

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009144004.png)
