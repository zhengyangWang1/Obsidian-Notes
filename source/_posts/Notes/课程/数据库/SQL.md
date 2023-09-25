---
categories:
  - Notes
  - 课程
  - 数据库
title: SQL
---
### 3.1 Overview of SQL
Structured Query Language
![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925100326.png)

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925100343.png)

| data query             | Select                                           |
| ---------------------- | ------------------------------------------------ |
| data manipulation      | Insert,  Delete,  Update                         |
| data definition        | Create,  Drop, Alter   (on schema)               |
| data control           | Grant,  Revoke                                   |
| transaction processing | begin transaction, commit, rollback              |
| 指针/游标控制语言(CCL) | DECLARE CURSOR，FETCH INTO和UPDATE WHERE CURRENT |

### 3.2 SQL Data Definition

**Domain Types**
- char(n).固定长度字符串，用户定义
- varchar(n).可变长度字符串，用户定义
- int.整数
- smallint.小整数
- numeric(p, d):固定小数，用户定义
- float(n).浮点数，用户定义

- date:日期包含年月日
- time:时分秒
- timestamp:日期加上时间
- Interval:一段时间
- Null：空集
- create domain:自定义类型，不允许是Null

>关系表属性名最好取英文名，便于应用程序的可移植性

#### Create Table
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925101602.png)
- r是关系表的名称
- A_i是变量名称
- D_i是数据类型（定义域）

约束：指定主键，外键，非空等。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925101909.png)

例：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925102014.png)

#### Updates to Schemas
删除表：
	drop table r  # 删除表r
Alter:
	alter table r add A D  # 在表r中添加A属性，D是A的定义域 
	alter table r drop A  # 把表r中的A属性删去

tuples逐行存储，添加或删除表产生的数据移动花费很大，大数据表通常逐列存储

### 3.3 Basic Structure of SQL Queries
SQL query
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103324.png)
- A_i为属性
- r_i为关系表
- P为predicate
等效于：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103521.png)

#### The select Clause

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103844.png)

SQL允许冗余，加入关键字Distinct消除冗余
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103947.png)
关键字all可以使冗余不被移除

属性可以是没有`from`的文本
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925104758.png)
结果为一行一列的表内容为437，可以为它加上名字
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925104903.png)

select可以包含数学表达式
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925105014.png)

#### The where Clause

为查询添加条件，对应于关系代数的选择代数

可以包含 and，or，not，比较运算符：<,>,<=,>=,=,<>（不等于）
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925105530.png)

between运算符
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925110022.png)

元组比较
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925110122.png)

