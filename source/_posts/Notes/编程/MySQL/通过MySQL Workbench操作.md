---
title: 通过MySQL Workbench操作
categories:
  - Notes
  - 编程
  - MySQL
tags:
  - 数据库
  - MySQL
date:
---
### 创建数据库以及表
#### 新建数据库
点击button栏的“create a new schema in the connected server”
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125516.png)

在视图中间区域出现的标签页中，填写新建数据库的名字同时可以选择数据库的字符集和校对规则。点击“Apply”。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125554.png)

工具会给出一个提示窗口，该窗口中可看到刚才通过视图创建数据库的动作对应的SQL 语句。点击“Apply”。![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125652.png)
执行完创建数据库操作后，工具会给出执行结果。看到如下图①所示的提示，表示创建数据库成功。点击“Finish”![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125738.png)
此时可看到左侧数据库导航窗口中出现了刚刚新建的数据库。展开数据库名字左侧的箭头，可看到如下图所示的数据库“testdb”![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125801.png)

#### 新建表
在上图中选中“testdb”的Table，右键选择“Create Table”。在中间工作区域新出现的标签窗口中填写表以及字段的相关信息。①填写表的名字及字符集和校对规则。②填写所有的字段名字以及字段的数据类型和相关约束。此处的约束缩写与③处的全称对应。![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125857.png)
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006125950.png)

填好信息后，点击“Apply”，工具会弹出提示窗口，在该窗口中可看到刚才通过视图创建表的动作对应的SQL 语句。点击“Apply”。![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006130449.png)
执行完创建表操作后，工具会给出执行结果。看到如下图①所示的提示，表示创建数据库表成功。点击“Finish”。![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006130508.png)
此时可看到左侧数据库导航窗口中出现了刚刚新建的数据库表。展开表名字左侧的箭头，可看到如下图所示的字段![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231006130524.png)
### 查看数据