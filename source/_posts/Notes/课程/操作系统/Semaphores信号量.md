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

