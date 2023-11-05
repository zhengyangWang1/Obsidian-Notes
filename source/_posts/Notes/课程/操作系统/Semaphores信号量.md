---
categories:
  - Notes
  - 课程
  - 操作系统
title: Semaphores信号量
date: 
tags:
  - 操作系统
---
sleep(): 暂停线程，把状态改为BLOCKED
weakup(): 唤醒另一个线程，把其状态改为READY

semaphore（信号量）：
一个非负整数，记录过往weakup的次数

或者一个可负整数

### 信号量机制
信号量是一个变量，用来表示系统中某种资源的数量
原语是一种特殊的程序段，其执行只能一气呵成，不可被中断。
一对原语：wait(S)和signal(S)，S为信号量，简称为P(S)和V(S)

#### 整型信号量
用一个整数型变量作为信号量，用来表示系统中某种资源的数量。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105104439.png)
存在的问题：不满足“让权等待”原则，会发生“忙等”

#### 记录型信号量
用记录型数据结构表示的信号量
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105104723.png)
S.value的初值表示系统中某资源的数目。遵循“让权等待”原则

### 信号量机制实现进程互斥
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105105903.png)
设置互斥信号量mutex，初值为1

### 信号量机制实现进程同步
需要保证“一前一后”执行的两个操作（或两句代码）
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105110323.png)
设置同步信号量S，初值为0
在“前操作”之后执行V(S)
在“后操作”之前执行P(S) 
例题：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105110711.png)
### 生产者-消费者问题
系统中有一组生产者进程和一组消费者进程，生产者进程每次生产一个产品放入缓冲区，消费者进程每次从缓冲区中取出一个产品使用。生产者共享一个初始为空、大小为n的缓冲区。
- 只有缓冲区没满时，生产者才能把产品放入缓冲区，否则必须等待
- 只有缓冲区不空时，消费者才能从中取出产品，否则必须等待
- 缓冲区是临界资源，各进程必须互斥访问。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105112301.png)

实现互斥的P操作一定要在实现同步的P操作之后。先上锁再操作缓冲区会产生阻塞。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105112422.png)
两个V操作顺序可以交换。
