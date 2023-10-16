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
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016171429.png)

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

#### Materialized Views实例化视图
创建一个物理表，其中包含查询定义视图的结果中的所有元组
如果更新查询中使用的关系，则实例化视图结果将过期
### 4.3 Transactions事务
一个transaction包括一系列的查询和更新
特性：原子性、一致性、隔离性、耐用性
事务必须以下列语句之一结束：
- Commit work
- Rollback work
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016100923.png)

### 4.4 Integrity Constraints完整性约束
通过对数据的约束防止数据的意外损坏
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016101652.png)
- E.g. 1   the salary of manager should not be lower than $1000 in Employee
- E.g. 2   table T (x, y, z ), z =x+y, z is a derived attributes from x and y.
- E.g. 3   the student# for table student should not be null
- E.g. 4   the age  of students should only be added
- E.g. 5   when  employee tuples is modified,  new.sal > old.sal + 0.5\*age
- E.g. 6   statistical  constraints

#### Constraints on Single Relation
完整性约束包括：
- primary key
- not null
- unique
- check(P), where P is a predicate（谓词）

#### Referential Integrity参照完整性
确保在一个relation中attribute的值也出现在另一个relation的attribute中
参照完整性约束也称为子集依赖关系（subset dependency）
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016104636.png)
table $r_2$的外键$\alpha$参考table $r_1$的主键K1

Cascading Actions级联操作：对$r_1$的主键K1的删除/更新操作将导致$r_2$的外键$\alpha$的删除/更新

### 4.5 SQL Data Types and Schemas
内置数据类型：
- date: 包含年月日
- time: 时分秒
- timestamp: date+time
- interval: 时间间隔

#### Type Conversion类型转换
`cast` \<e> `as` \<t>
将字符串e转换为类型t

`extract` value d `from` day or time
对于日期或时间d，提取其时间或日期字段

#### Formatting Functions格式化函数
数据可能需要以不同的类型显示：
- 以特定位数显示数字
- 以特定格式显示数据

Data Type Transition: `CAST` 和 `CONVERT`

#### Default Values
在创建table时设置属性的默认值，可以在插入tuple时不设置该属性的值
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016164651.png)

#### Large-Object Types
blob：二进制大对象
clob：字符大对象
XML数据类型
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016164842.png)

#### User-defined Types/Domains
子句`create type`可以用于创建用户自定义类型
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016165050.png)

`create domain`可以创建用户定义域类型
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016165114.png)

#### Schemas, Catalogs, and Environments
现代数据库系统的三级层次结构
- cactalogs（全文目录）
- schemas（架构）
- SQL objects

#### Check Conditions and Assertions检查和评估
`check`和`assertion`可以定义复杂的完整性约束
assertion是一个谓词，表示我们希望数据库始终满足的条件
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016165326.png)

### 4.6 Index Definition in SQL
许多查询参考表中的一小部分记录，读取每条记录以查找具有特定值的记录效率低下
建立索引，在查找时数据库可以只遍历索引而非遍历所有的值
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016111831.png)


### 4.7 Authorization
对数据库各部分的授权形式包括：
- Read：允许读取数据，但不允许修改数据
- Insert：允许插入新数据，但不允许修改现有数据
- Update：允许修改，但不允许删除数据
- Delete：允许删除数据
对schema的授权：
- resources：允许创建新关系表
- alteration：允许在关系表中添加或删除属性
- drop：允许删除关系表
- index：允许创建索引

#### Authorization Specification授权规范
`grant`语句用于授予权限
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016170537.png)

授予视图特权并不意味着授予对基础关系的任何特权
特权的授予者必须已经拥有指定项的权限（或者是数据库管理员）

#### Privileges特权
- select：允许对关系表进行读取访问，或使用视图进行查询的能力
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016170318.png)

- insert：插入元组的能力
- update：使用 SQL 更新语句进行更新的能力
- delete：删除元组的功能
- all privileges：所有可被允许的特权
- references：创建外键的权限


#### Revoking Authorization撤销授权
`revoke`用于撤销授权
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016170604.png)

#### Roles
`create role` \<role name>
可以向角色授予权限
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016170845.png)

可以向用户以及其他角色授予角色
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231016170853.png)


