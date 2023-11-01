---
categories:
  - Notes
  - 课程
  - 数据库
tags:
  - 数据库
title: 使用E-R模型的数据库设计
date:
---
### 6.1 Overview of Design Process
分析用户需求：
- 什么数据需要被存储
- 什么操作和事件被执行

数据库设计的阶段：
- 需求分析
- 概念设计
- 逻辑模型设计
- 物理模型设计

DBAS设计过程：
生命周期包括五个阶段：
- 项目规划、需求分析、系统设计、实现与部署、运行管理与维护
根据软件组成和各自功能，分为三条设计主线：
数据组织与存储设计、数据访问与处理设计、应用设计
分别用于设计数据库、

### 6.2 The Entity-Relationship Model
建立一个图来表示整个数据库的特征
ER模型包括：
- entity sets实体集
- relationship sets关系集
- attributes

#### 6.2.1 Entity Sets（实体集）
实体是一个存在的对象，区别于其他对象。实体通过一组属性表示
实体集是一些相同类型实体的集合

#### 6.2.2 Relationship Sets

##### Attributes with Relationship Sets
属性也可以与关系集合联系

##### Role in Relationship Sets


### 6.3 Complex Attributes

### 6.4 Mapping  Cardinalities Constrants
一对一
一对多
多对一
多对多
有些元素可能不被映射到其他集合

有→的代表一，没有箭头为多
