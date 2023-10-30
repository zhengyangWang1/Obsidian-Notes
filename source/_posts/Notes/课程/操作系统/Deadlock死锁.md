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
1. 
	`Work`和`Finish`为长度为m和n的向量，
	(a) Work = Available
	(b) For **i = 1,2, …, n**, 
			if **Allocationi != 0**, 
			then **Finish[i] = false**; 
			otherwise, **Finish[i] = true**
2. 
