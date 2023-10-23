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

使用statement对象 stmt 执行查询以发送查询并获取结果
使用 `execute.query` 或 `execute.update`，例如 insert/delete/update/createtable
参数：要执行的SQL语句，表示为字符串
获取查询结果，使用 `try{...}/catch{...}`` 构造
将结果中的元组集检索到 ResultSet 对象 rset 中，并一次获取一个元组
`next()`方法测试结果集是否至少有一个元组，如果是，则获取它
获取结果：如果 dept_name 是 select result 的第一个参数，则`rs.getString（“dept_name”）` 和 `rs.getString(1)`是等价的

##### Prepared Statement
创建一个prepared statement，其中某些值将替换为`?`，在使用时指定实际值
`setString()`方法和其他方法，如`setInt()`指定参数的值
创建：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023105724.png)
设置值：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023105834.png)
第一个参数指定我们要为其赋值的`?`参数，第二个参数指定要分配的值

##### Metadata Features
获取查询结果集中列的数目（结果关系的属性总数），输出各列的列名、数据类型
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023110241.png)
