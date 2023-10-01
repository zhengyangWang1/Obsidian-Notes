---
title: Django操作MySQL
categories:
  - Notes
  - 编程
  - MySQL
tags:
  - MySQL
  - Python
date:
---
### 安装第三方模块
```
pip install mysqlclient
```

### ORM
ORM全称是：Object Relational Mapping(对象关系映射)，其主要作用是在编程中，把面向对象的概念跟数据库中表的概念对应起来。
在Django中的应用
- 创建、修改、删除数据库中的表
- 操作表中的数据

### 创建数据库
- 启动MySQL服务
- 自带工具创建数据库
```
create datebase 数据库名;  # 创建数据库
show databases;  # 显示数据库列表
```

### Django连接数据库
在setting中修改默认的数据库`DATABASES`，Django默认的数据库是sqlite，将其改为mysql
```
DATABASES = {  
    'default': {  
        "ENGINE": "django.db.backends.mysql",  
        "NAME": "table1",  # 数据库名字  
        "USER": 'root',  # 用户名  
        'PASSWORD': 'Wzy030530',  
        'HOST': '127.0.0.1',  # 主机  
        'PORT': '3306',  
    }  
}
```

注：
```
SELECT User FROM mysql.user;  # 查看mysql的用户名列表
```

