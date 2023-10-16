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
`join`是笛卡尔积，它要求两个表中的元组匹配，用于`from`子句中的子查询表达式。
使用 `join ... on`子句可以指定任意的连接条件。`on`条件允许在参与连接的关系上设置通用的谓词。该谓词的写法与where子句谓词类似。

#### Natural join operations自然连接
将表中具有相同名称的列进行匹配

Natural join特征：
- 关联的表具有一对或多对同名的列
- 连接时候不需要使用on或者using关键字

在自然连接中，会产生数据的丢失
#### Outer join外连接
- Left Outer Join左外连接：把左边表的数据全部取出来，而右边表的数据有相等的，显示出来，如果没有，显示NULL
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009172709.png)

- Right Outer Join右外连接：把右边表的数据全部取出来，而左边表的数据有相等的，显示出来，如果没有，显示NULL
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009172943.png)


- Full Outer Join全外连接：兼顾左外连接和右外连接
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009173144.png)


#### Inner join内连接
为了把常规连接和外连接区分开来，在SQL中把常规连接称作内连接。关键字inner是可选的，当join子句中没有使用outer前缀时，缺省的连接是内连接。内连接以**笛卡尔积**的形式表现出来。

自然连接只显示一列相同名称的列，而内连接显示两列
>自然连接和内连接的区别：
>[自然连接和内连接的区别|极客教程](https://geek-docs.com/sql/sql-ask-answer/the-difference-between-natural-join-and-inner-join.html)

### 4.2 Views视图

在 SQL 中，视图是基于 SQL 语句的结果集的可视化的表。
视图包含行和列，就像一个真实的表。视图中的字段就是来自一个或多个数据库中的真实的表中的字段。
视图是虚关系，在数据库中不存在，根据用户需求临时生成，数据库只储存视图定义。

#### Create view创建视图
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009174818.png)
其中\<query expression>为SQL表达式，v是视图的名称

#### Views Defined Using Other Views
v1可以直接依赖（depend directly on）v2，即 v2 ->  v1
v1也可以依赖（depend on）v2，即 v2 -> v3 -> v2
如果视图依赖于自身，则称为递归关系

