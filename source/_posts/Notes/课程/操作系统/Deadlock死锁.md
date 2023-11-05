---
title: Deadlock死锁
categories:
  - Notes
  - 课程
  - 操作系统
tags:
  - 操作系统
date:
---
Pi为进程，Rj为资源
Pi请求资源Rj：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231025100217.png)
Pi拥有资源Rj：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231025100233.png)

不死锁：
P3执行完后释放R3，P2就可以申请到R3，P2执行，P2执行完之后释放R1，P1就可以申请到R1执行
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231025100454.png)

死锁：
P3申请R2，R2被P1持有，P3无法执行，导致P2和P1无法执行
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231025100550.png)

- 图里面没有环则不会死锁
- 图里面有环，如果一个资源里只有一个实例，则会死锁；如果一个资源里有多个实例，则不一定会死锁

Hold and Wait持有等待
要么持有全部资源，要么等待

资源类型
- Available：一个长度为m的向量，表示每种可用资源的数量（m种资源）
- Allocation：一个n×m的矩阵代表每个进程现在持有的资源数量（n个进程）
- Request：一个n×m的矩阵代表每个进程需要的资源数量

检测算法：
1. `Work`和`Finish`为长度为m和n的向量，
	(a) Work = Available
	(b) For **i = 1,2, …, n**, 
			if **Allocationi != 0**, 
			then **Finish[i] = false**; 
			otherwise, **Finish[i] = true**
2. 找到一个index `i`，使得
	(a) Finish[i] == false 
	(b) Request_i <= Work

3. Work = Work + Allocation_i 
	Finish[i] = true 
	go to step 2

4. If Finish[i] == false, for some i, 1 <= i <= n, then the system is in deadlock state. Moreover, if Finish[i] == false, then P_i is deadlocked

### 死锁
在并发环境下，各进程因竞争资源而造成的一种互相等待对方手里的资源，导致各进程都阻塞，都无法向前推进的现象，就是“死锁”。
#### 死锁产生的必要条件
1. 互斥条件：只有对互斥使用的资源的争抢才会导致死锁
2. 不剥夺条件：进程所获得的资源未使用完之前，不能由其他进程强行夺走，只能主动释放
3. 请求和保持条件：进程已经保持了至少一个资源，又提出新的资源请求，而该资源又被其他进程占用，此时请求进程被阻塞，但又对自己已有的资源保持不放
4. 循环等待条件：存在一种进程资源的循环等待链，链中的每一个进程已获得的资源同时被下一个进程所请求

#### 产生情况
1. 对系统资源的竞争
2. 进程推进顺序非法
3. 信号量的使用不当也会造成死锁

#### 预防死锁
破坏互斥条件：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105150332.png)
破坏不剥夺条件：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105150225.png)

破坏请求和保持条件：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105150533.png)

破坏循环等待条件：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105150733.png)

#### 避免死锁
>安全序列：如果按照这种序列分配资源，则每个进程都能顺利完成。

如果分配了资源后，系统中找不出任何一个安全序列，系统就进入了不安全状态。如果系统进入不安全状态，就**有可能发生死锁**

银行家算法：在进程提出资源申请时，先预判此次分配是否会导致系统进入不安全状态，如果会进入不安全状态，就暂时不答应这次请求，让该进程先阻塞等待。

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105152524.png)

#### 死锁的检测
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231105152801.png)

