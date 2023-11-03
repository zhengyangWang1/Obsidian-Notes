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
在html中需要添加一行

### 前后端通信
