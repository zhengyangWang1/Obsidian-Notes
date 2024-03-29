---
categories:
  - Notes
  - 课程
  - 大三（上）
  - 操作系统
title: Semaphores信号量
tags:
  - 操作系统
date:
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

### 读者写者问题
1. 允许多个读者同时对文件执行读操作
2. 只允许一个写者往文件中写信息
3. 任一写者在完成写操作前不允许其他读者或者写者工作
4. 写者执行写操作前，应让已有的读者和写者全部退出
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105130752.png)
用rw实现互斥访问，用count实现多个读进程访问，用mutex实现count和rw的原子化操作
潜在问题：只要有读进程还在读，写进程就要一直阻塞等待，可能饿死。这种算法中，读进程是优先的。
实现写优先：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105131045.png)
### 哲学家进餐问题
问题描述：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105131830.png)
防止死锁发生：
1. 最多允许四个哲学家同时进餐
2. 要求奇数号哲学家先拿左边的筷子，然后再拿右边的筷子，而偶数号哲学家刚好相反
3. 使各哲学家拿筷子的操作互斥进行。![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105132054.png)
