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
将表中具有相同名称的列进行匹配

Natural join特征：
- 关联的表具有一对或多对同名的列
- 连接时候不需要使用on或者using关键字
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009171857.png)
在自然连接中，会产生数据的丢失
#### Outer join外连接
- Left Outer Join左外连接：把左边表的数据全部取出来，而右边表的数据有相等的，显示出来，如果没有，显示NULL

- Right Outer Join：把右边表的数据全部取出来，而左边表的数据有相等的，显示出来，如果没有，显示NULL

- Full Outer Join:

#### Inner join内连接

### 4.2 Views视图

#### Views as Virtual Table
虚拟视图：只储存视图定义，视图是虚关系，在数据库中不存在，根据用户需求临时生成

#### Create view创建视图
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009120344.png)

#### Views Defined Using Other Views
v1可以直接依赖v2，即v2 ->  v1
v1也可以依赖v2，既v2 -> v3 -> v2

