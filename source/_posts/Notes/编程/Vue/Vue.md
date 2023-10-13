---
title: Vue
categories:
  - Notes
  - 编程
  - Vue
tags:
  - Vue
date:
---
```
|-dist                          -- 生成打包后文件
|-node_modules                  -- 项目依赖包的目录
|-public                        -- 项目公用文件
	|--favicon.ico              	-- 网站地址栏前面的小图标
	|--index.html                  -- 项目的默认首页，Vue的组件需要挂载到这个文件上
|-src                           -- 源文件目录，程序员主要工作的地方
	|-api                           -- 与后端交互使用相关方法和配置
	|-assets                   		-- 静态文件目录，图片图标、样式，比如网站logo
	|-components                	-- Vue3.x的自定义组件目录
	|-router                    	-- vue-router相关配置
	|--utils                    	-- 通用工具包
	|--views                    	-- 页面
	|--App.vue                  	-- 项目的根组件，单页应用都需要的
	|--main.css                	-- 一般项目的通用CSS样式写在这里，main.js引入
	|--main.js                  	-- 项目入口文件，SPA单页应用都需要入口文件
|--.gitignore                   -- git的管理配置文件，设置那些目录或文件不管理
|--package-lock.json           -- 项目包的锁定文件，用于防止包版本不一样导致的错误
|--package.json                -- 项目配置文件，包管理、项目名称、版本和命令
```