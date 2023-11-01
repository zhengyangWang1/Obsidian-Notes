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
- 什么操作和事务（transaction）被执行，例如插入、删除和更新

数据库设计的三种模式：
- 概念设计
- 逻辑设计，在逻辑级别和视图级别
- 物理设计，在物理层面

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
分别用于设计数据库、数据库事务和应用程序

### 6.2 The Entity-Relationship Model
建立一个图来表示整个数据库的特征
ER模型包括三个概念：
- entity sets（实体集）
- relationship sets（关系集）
- attributes（属性）
ER模型使用有关联的图表表示，即ER图，它以图形的方式表示数据库的整体逻辑结构


#### 6.2.1 Entity Sets（实体集）
实体是一个存在的对象，区别于其他对象。实体通过一组属性表示。
实体集是一些相同类型实体的集合。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101224017.png)

#### 6.2.2 Relationship Sets（关系集）
关系是多个实体之间的关联
实体集 E1， E2， ...， En 参与关系集 R
##### Attributes with Relationship Sets

关系集在E-R图中用菱形表示，菱形通过线条连接到多个不同的实体集（矩形）。属性也可以与关系集合联系。
在教师和学生之间设置的顾问关系可能具有属性日期，该属性跟踪学生何时开始与顾问关联
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101225949.png)

##### Role in Relationship Sets
实体在关系中扮演的功能称为该实体的角色
在E-R图中角色一般标注在菱形和矩形之间的连线上
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101230806.png)

##### Degree of a Relationship Set（关系集的度） vs Non-binary Relationship Sets（非二元关系集）
二元关系涉及两个实体集（或二度）
在某些情况下，我们将关系表示为非二元关系。 具有三元关系的 E-R 图示例：学生在教师的指导下从事研究项目，教师、学生和项目之间的关系proj_guide是三元的
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101231144.png)


### 6.3 Complex Attributes
每个属性都有一个可取值的集合，称为该属性的域（domain），或者值集（value set）
属性类型： 
- 简单属性和复合属性 
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101231709.png)

- 单值和多值属性
- 派生属性: 可以从其他属性计算

属性的 Null 值表示:
- 该属性不适用于实体，不存在
- 该属性的值存在，但为“未知”

冗余属性：

### 6.4 Mapping  Cardinalities Constrants
一对一
一对多
多对一
多对多
有些元素可能不被映射到其他集合

有→的代表一，没有箭头为多
