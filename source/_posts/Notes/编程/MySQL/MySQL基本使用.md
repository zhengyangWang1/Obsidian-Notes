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

```