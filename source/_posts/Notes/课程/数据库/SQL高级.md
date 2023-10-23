---
title: SQL高级
categories:
  - Notes
  - 课程
  - 数据库
date: 
tags:
  - 数据库
  - SQL
---
### 5.1 Accessing SQL from Programming Language
应用程序执行数据处理，并调用
- 与数据库服务器连接
- 将SQL命令发送到数据库服务器
- 将结果的元组逐个提取到程序变量中

两种方法访问SQL：
**dynamic SQL**：
程序用function连接数据库服务器并与之通信
程序将 SQL 查询构造为字符串，提交查询，然后将结果检索到程序变量中
- JDBC (Java DB Connectivity) with Java
- ODBC (Open DB Connectivity) with C, C++, and Visual Basic
**embedded SQL**：
SQL 语句在编译时在高级程序中转换为函数调用
这些函数调用使用提供动态 SQL 功能的 API 连接到数据库

#### 5.1.1 JDBC
JDBC 是一个基于 Java 的 API
支持查询、更新和检索
与数据库通信的模型：
1. 创建连接
2. 创建SQL statement（语句）对象
3. 用statement对象执行查询并获取结果
4. 处理错误的异常机制

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023103147.png)
