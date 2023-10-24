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
`DatabaseMetaData dbmd=conn.getMetaData()`
参数：catalog目录、schemas架构模式、table表模式和column列模式
`null`表示所有目录/schemas
`""`表示当前目录/schemas
`%`与SQL子句`like`含义相同
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023111208.png)

##### Transaction Control
每个 SQL 语句都被视为一个单独的transaction，默认情况下自动提交
关闭连接上的自动提交:`conn.setAutoCommit (false);`
在连接上启用自动提交:`conn.setAutoCommit (ture);`
Transaction必须最终提交或回滚：`conn.commit();` or `conn.rollback();`

##### Other Features
- 调用函数和过程
`CallableStatement cStmt1 = conn.prepareCall("{? = call some function(?)}");`

`CallableStatement cStmt2 = conn.prepareCall("{call some procedure(?,?)}");`
- 处理大型对象类型
`getBlob（）` 和 `getClob（）` 类似于 `getString（）` 方法，但分别返回 Blob 和 Clob 类型的对象
通过 `getBytes（）` 从这些对象获取数据

##### Embedded SQL: SQLJ in Java
SQLJ：Java 中的嵌入式 SQL
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023112106.png)


#### 5.1.2 从python访问数据库
#### 5.1.3 ODBC
开放式数据库连接 （ODBC） 标准，用于应用程序（作为客户端）与数据库服务器通信
应用程序接口 （API） 到：
- 打开与数据库的连接
- 发送查询和更新
- 取回结果
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023112333.png)

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023113307.png)

#### 5.1.4 Embedded SQL
将 SQL 用作数据库查询工具的方法
1. interactive SQL交互式 SQL: 通过DBS人机界面直接用作DML和DDL
2. dynamic SQL动态 SQL: e.g JDBC, ODBC
3. embedded SQL嵌入式 SQL: 嵌入在通用编程语言中，例如 C 语言
交互式SQL只能进行DB的访问操作，不能对DB访问结果进行进一步的数据处理，Embedded SQL将SQL的数据库访问功能与C语言等宿主语言的数据处理能力相结合，提高了数据应用系统的能力
SQL标准定义了C，C++，Pascal，Fortran和Cobol等语言中的SQL嵌入, 嵌入 SQL 查询的语言称为宿主语言（host language）

在执行任何 SQL 语句之前，程序必须首先连接到数据库![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023114744.png)
`EXEC SQL`语句用于标识对预处理器的嵌入式 SQL 请求![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023114708.png)
可以在嵌入式 SQL 语句中使用主语言的变量。 它们前面带有冒号`:`以区别于 SQL 变量。如上所述使用的变量必须在 DECLARE 部分中声明，用于声明变量的语法遵循通常的主语言语法。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023115411.png)

##### Cursor in Embedded SQL 游标
要编写嵌入式 SQL 查询，我们使用语句![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023115748.png)
变量 c 用于标识查询
利用Embedded SQL进行查询时，查询结果有可能包括多个元组，此时无法直接将多个元组通过共享变量赋值传递给宿主程序
系统开辟专门working区域存放SQL查询的结果关系，并利用查询游标c指向此区域。宿主程序根据c指向的查询结果关系集合，使用open, fetch, close依次获取结果关系中的各元组
游标c相当于一个临时的table
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231023120312.png)

##### Updates Through Embedded SQL
用于修改（更新、插入和删除）的嵌入式 SQL 表达式
可以通过更新游标来更新游标fetch的tuple