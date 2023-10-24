---
title: Django操作MySQL
categories:
  - Notes
  - 编程
  - Django
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

### 创建删除和修改表
在app的models文件下写入类 文件结构见[[Django基础]]
```
class User(models.Model):  
    # 用户身份证号 主键  
    user_id = models.CharField('user_id', primary_key=True, max_length=30)  
    # 用户姓名  
    user_name = models.CharField('user_name', max_length=20, null=False)  
    
    class Meta:  
        db_table = 'User'
```

models修改完后，在终端中执行
```
python manage.py makemigrations
python manage.py migrate
```
即可在数据库中看到表

修改和删除表，只需要修改models中的类，然后执行上面两条命令即可