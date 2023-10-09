---
categories:
  - Notes
  - 课程
  - 数据库
title: SQL
tags:
  - 数据库
  - SQL
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

#### Domain Types 定义域类型
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
- P为predicate(谓词)
等效于：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103521.png)

#### The select Clause

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103844.png)

SQL允许冗余，加入关键字Distinct消除冗余
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925103947.png)
关键字all可以使冗余不被移除

属性可以是没有`from`的文本
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925104758.png)
结果为一行一列的表, 内容为437，可以为它加上名字
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925104903.png)

select可以包含数学表达式
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925105014.png)

#### The where Clause

where为查询添加条件，对应于关系代数的选择代数

可以包含 and，or，not，比较运算符：<,>,<=,>=,=,<>（不等于）
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925105530.png)

between运算符
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925110022.png)

元组比较
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925110122.png)

#### natural join
`natural` join in `from` subclause
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925111025.png)
等于
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925111128.png)
自然连接默认把主键相同作为条件

### 3.4 Additional Basic Operation
#### The Rename Opration
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925111544.png)
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925111558.png)
利用T和S区分不同的instructor, 实现对同一属性的不同值比较
>字符要加单引号

#### String Operations
运算符`like` :
- percent(%):与任何子字符串匹配
- underscore(\_):匹配任意字符

注意转义字符的使用:匹配"100%"
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925113015.png)

#### Ordering the Display of Tuples
`order by`对指定属性进行排序,降序desc,升序asc(默认值)
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925113410.png)

### 3.5 Set Operations
`union`(并),`intersect`(交),`except`(差)
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925113554.png)
自动消除重复项,`union all`可以保留重复项

### 3.6 Null Values
Null表示:
- 一个未知的值
- 一个不存在的值
任何涉及Null的算术表达式的结果都是Null

检查空值
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925114200.png)

SQL将涉及Null的比较结果视为unknown
where中的谓词可以涉及布尔运算（and，or，not）,因此需要扩展布尔运算来处理unknown
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925114508.png)
如果只有unknown,则视为false

### 3.7 Aggregate Functions
聚合函数:输入一列,输出一个值
- avg:平均值
- min:最小值
- max:最大值
- sum:求和
- count:数量

分组后聚合:
group by:
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925115629.png)
先按dept_name分组,然后对每个组内的salary求平均

- 聚合函数之外的 select 中的属性必须出现在group by中
- 除count之外的所有聚合操作都忽略有Null的tuples

#### Having Clause
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925120755.png)

对分组后的数据进行条件筛选
`having`用于group形成以后,where用于group形成之前

### 3.8 Nested Subqueries嵌套子查询
子查询是嵌套在另一个查询中的“select-from-where”表达式
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925121043.png)
- r_i可以替换为任意有效的子查询
- P可以替换为B\<operation>(subquery)
- A_i可以替换为生成单个值的子查询

#### some Clause
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009102217.png)
`some`中只要有一个满足条件即为true

#### all  Clause
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009102433.png)
需要`some`中所有都满足条件才为true

#### Empty Relations空关系（exist，except）
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009102903.png)
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009102921.png)

#### Duplicate Tuples重复元组（unique）
`unique`检查子查询中是否有重复元组，如果没有重复项返回true

#### With Clause
`with`子句提供了一种定义临时关系的方法，将一个复杂查询分解为若干步，每个视图定义一个各部的中间计算结果，逻辑清晰。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231009105244.png)

### 3.9 Modification of Database
#### Deletion删除
