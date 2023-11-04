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

操作系统会为每个内核级线程建立相应的TCB（线程控制块），通过TCB对线程进行管理
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231104103658.png)

可将多个TCB组织成一张线程表

### Race Conditions竞争条件
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009143100.png)
线程分为send和receive
- send：当buffer中有空间，可以写入
- receive：如果buffer中有message，返回message，创建线程
>producer-consumer problem：
>producer需要把message添加到buffer
>consumer需要读取buffer中的message来创建线程

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009144647.png)

当有多个sender时：
A和B会产生竞争，导致in的值不正确
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009144932.png)

解决方法：acquire和release
当一个线程进行时，需要先执行acquire申请一个lock，在执行期间持有，结束后释放
当一个线程持有lock时，其他线程acquire相同的lock会失败
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016082019.png)


在两个线程共用一个lock时，也会出现竞争条件
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016080611.png)

解决方法：Test and Set Lock（TSL）把参数变为真值，返回它的旧值
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016081529.png)

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016082444.png)

Compare-and-swap lock
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016083314.png)
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016083325.png)
当线程A进行比较时，返回true，lck被置为true，线程A得到lock，此时线程B进行比较，返回false，进入循环，直到A进行release


### 进程同步
进程具有异步性的特征，各并发执行的进程以各自独立的、不可预知的速度向前推进

### 进程互斥
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231104223505.png)
一个时间段内只允许一个进程使用的资源称为临界资源。对临界资源的访问，必须**互斥**地进行。
进程互斥指当一个进程访问某临界资源时，另一个想要访问该资源的进程必须等待。当前访问临界资源的进程访问结束，释放该资源后，另一个进程才能去访问临界资源。

