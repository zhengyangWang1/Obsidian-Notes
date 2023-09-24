---
title: First Class
categories:
  - Notes
  - 编程
  - Django
date:
tags:
---
### 创建第一个项目
```
django-admin startprojct HelloWorld
```
创建一个Django项目名为HelloWorld，目录结构如下
```
$ cd HelloWorld/
$ tree
.
|-- HelloWorld
|   |-- __init__.py
|   |-- asgi.py
|   |-- settings.py
|   |-- urls.py
|   `-- wsgi.py
`-- manage.py
```
目录说明：
- **HelloWorld:** 项目的容器。
- **manage.py:** 一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互。
- **HelloWorld/__init__.py:** 一个空文件，告诉 Python 该目录是一个 Python 包。
- **HelloWorld/asgi.py:** 一个 ASGI 兼容的 Web 服务器的入口，以便运行你的项目。
- **HelloWorld/settings.py:** 该 Django 项目的设置/配置。
- **HelloWorld/urls.py:** 该 Django 项目的 URL 声明; 一份由 Django 驱动的网站"目录"。
- **HelloWorld/wsgi.py:** 一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。

#### 启动服务器
```
python3 manage.py runserver 0.0.0.0:8000
```
0.0.0.0 让其它电脑可连接到开发服务器，8000 为端口号。如果不说明，那么端口号默认为 8000

>第一次打开网页出现报错：DisallowedHost at Invaild HTTP_HOST header： '0.0.0.0:8000'. You may need to add '0.0.0.0' to ALLOWED_HOSTS. 
>解决：在配置文件settings.py中找到`ALLOWED_HOSTS`，将‘0.0.0.0’添加到其中