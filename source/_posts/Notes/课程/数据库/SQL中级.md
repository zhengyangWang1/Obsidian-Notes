---
title: SQL中级
categories:
  - Notes
  - 课程
  - 数据库
tags:
  - SQL
  - 数据库
date:
---
### 4.1 Joined Expressions
`join`是笛卡尔积，它要求两个表中的元组匹配，用于`from`子句中的子查询表达式

#### Natural join operations自然连接

#### Outer join外连接

- **Right Outer Join**:

- **Full Outer Join**:

#### Inner join内连接

### 4.2 Views视图

#### Views as Virtual Table
虚拟视图：只储存视图定义，视图是虚关系，在数据库中不存在，根据用户需求临时生成

#### Create view创建视图
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009120344.png)

#### Views Defined Using Other Views
v1可以直接依赖v2，即v2 ->  v1
v1也可以依赖v2，既v2 -> v3 -> v2

