---
categories:
  - Notes
  - 编程
  - Django
title: Django模板
tags:
  - Python
  - 软件工程
---
### 加载静态文件
[如何管理静态文件（如图片、JavaScript、CSS） | Django 文档 | Django](https://docs.djangoproject.com/zh-hans/4.2/howto/static-files/)
[django在html中显示图片【实测成功】\_django 显示图片-CSDN博客](https://blog.csdn.net/weixin_41529093/article/details/115653070)
[Django基础篇-模板加载静态文件-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1465931)
在Django的templates中，我们可以存放html文件，但**静态文件**如图片、CSS和Javascript不能与html放在同一目录下。需要在app目录下新建一个static文件夹，用来存放静态文件。
#### 修改settings文件
确保`settings`文件中`INSTALLED_APPS`包含了`django.contrib.staticfiles`，并需要在`settings`中添加`STATIC_URL = "static/"`来定义静态文件的链接。
除了在 apps 中使用 `static/` 目录，你可以在配置文件中定义一个目录列表 ([`STATICFILES_DIRS`](https://docs.djangoproject.com/zh-hans/4.2/ref/settings/#std-setting-STATICFILES_DIRS)) ，Django 会从中寻找静态文件：
```
STATICFILES_DIRS = [
    BASE_DIR / "static",
    "/var/www/static/",
]
```

#### 修改html文件
在html中需要添加一行`{% load static %}`在调用静态文件之前。
然后在调用静态文件时，使用`{% static '文件路径' %}`


### 前后端通信
#### 表单传参
[使用表单 | Django 文档 | Django](https://docs.djangoproject.com/zh-hans/4.2/topics/forms/)
前端可以使用表单将参数传递给后端接收
```
<form id="表单名" action="{% url '接收表单的函数' %}" method="post" >
```
url中的函数需要在views中定义，用来接受表单中的信息并进行处理，接收方式常用`get`和`post`

Django使用CSRF令牌是一种保护机制，用于防止恶意网站利用用户的登录状态进行伪造请求。