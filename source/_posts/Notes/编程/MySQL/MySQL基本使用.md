---
title: MySQL基本使用
categories:
  - Notes
  - 编程
  - MySQL
tags:
  - MySQL
  - 数据库
date:
---
[[SQL基础]]
[mysql入门教程——基本操作\_mysql使用教程-CSDN博客](https://blog.csdn.net/qq_43323867/article/details/107433570)

### 数据库操作

#### 查询数据库
```
-- 查询所有数据库
SHOW DATABASES;
-- 查询某个数据库的编码
SHOW CREATE DATABASE test;
```

#### 创建数据库
```
-- 创建库
CREATE DATABASE demo1;
-- 创建数据库的时候指定编码表
-- GB2312、GBK、GB18030、UTF-8(unicode)、ISO-8859-1(拉丁文)
CREATE DATABASE demo2 CHARACTER SET gbk;
-- 修改库的校对规则
CREATE DATABASE demo3 CHARACTER SET utf8 COLLATE utf8_bin;
```

#### 删除数据库
```
-- 删除数据库
DROP DATABASE demo4;
```

修改数据库
```
-- 修改数据库编码表
ALTER DATABASE demo3 CHARACTER SET gbk;
```

### 数据表操作
在操作数据表之前，一定要记住切换到某个库下
```
-- 切换数据
use 库名;
```

#### 创建数据表
```
-- 创建表
CREATE TABLE tb_user(
  id INT,
  username VARCHAR(10),
  age INT
);
```

#### 删除数据表
```
-- 删除表
drop table 表名;
```

#### 查询表结构
`desc` 表名; 查看表结构
`show tables` ; 查看当前库内所有表名
`show create table` 表名; 查看建表语句和字符集

#### 表中插入数据
语法：insert into 表名 (列名，列名，列名…) values (值，值，值…);