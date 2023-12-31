---
title: Django基础
categories:
  - Notes
  - 编程
  - Django
date: 
tags:
  - 软件工程
  - Python
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

#### 视图和URL配置
在`HelloWorld/HelloWorld/`目录下新建一个`views.py`文件，输入
```
from django.http import HttpResponse
 
def hello(request):
    return HttpResponse("Hello world ! ")
```

在urls.py文件中写入
```
from django.urls import re_path as url  
# from django.conf.urls import url 这段代码已经过时，上面的re_path取代了之前版本的url  
from . import views  
  
urlpatterns = [  
    url(r'^$', views.hello),  
]
```
可在网页中看到“Hello world！”的输出

**path（）函数**:
```
path(route, view, kwargs=None, name=None)
```

### 创建app
```
python3 manage.py startapp app1  # 创建app1
```

目录结构如下：
```
.
├── HelloWorld
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── __init__.cpython-38.pyc
│   │   ├── settings.cpython-38.pyc
│   │   ├── urls.cpython-38.pyc
│   │   ├── views.cpython-38.pyc
│   │   └── wsgi.cpython-38.pyc
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py  # 配置app用的url
│   ├── views.py
│   └── wsgi.py
├── app1
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py  # 对数据库进行操作
│   ├── tests.py
│   └── views.py  # 视图函数
├── db.sqlite3
└── manage.py
```

**编写URL和视图函数的对应关系**
```
urlpatterns = [  
    path('something/', views.something)  
]
```

**编写视图函数**
```
def something(request)
	return HttpResponse("xxxxx")
```

**启动django项目**
- 命令行启动
```
python manage.py runserver
```

在app1下新建一个templates目录,写入HTML模板,可以在views中用`render`函数直接获取
```
return render(request, 'something.html')
```