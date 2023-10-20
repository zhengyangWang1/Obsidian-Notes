---
title: UML
categories:
  - Notes
  - 课程
  - 软件工程
date:
tags:
---
UML：统一建模语言

UML是一种标准的图形化建模语言，它是面向对象分析与设计的一种标准表示
- 是一种**可视化的建模语言**，不是一种可视化的程序设计语言
- 是一种**建模语言规格说明**，不是工具或知识库的规格说明

### UML的基本结构
基本构造块：
- 事物 Thing
- 关系 Relationship
- 图 Diagram

语义规则：
- name、scope、visibility、integrity、execution

通用机制：
- specification、adornment、common division、extensibility mechanism

#### 事物
Structural thing
- Class, interface, component, node

Behavior thing
- use case, Interaction, state machine

Group thing
- package

Annotation thing
- note

#### 关系
- Dependenc
- Association
- Generalization
- Realization

### UML的4+1视图
UML 用模型来描述系统的结构（静态特征）以及行为（动态特征）。从不同的视角为系统的架构建模，形成系统的不同视图（view）， 称为4+1视图，从1个需求的角度出发描述与系统设计的4个维度之间的关系。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231020110320.png)
- 用例视图：表示功能需求，强调从用户的角度看到的或需要的系统功能。这种视图也叫做用户模型视图（user model view） 或场景视图（scenario view）；

- 逻辑视图： 展现软件系统设计的静态结构的组成及特征，也称为结构模型视图（structural model view） 或静态视图（static view）；

- 进程视图：描述软件系统设计的并发和同步等特性，关注系统非功能性需求，也称为行为模型视图（behavioral model view）、过程视图（process view）、 协作视图（collaborative view）和动态视图（dynamic view）；

- 构件视图：关注软件代码的静态组织与管理，也称为实现模型视图（implementation model view ）和开发视图（development view）；

- 部署视图：描述硬件的拓扑结构以及软件和硬件的映射问题，关注系统非功能性需求（性能、可靠性等），也称为环境模型视图或物理视图（physical view）

### UML的9个基本图
- 用例图（Use case diagram）：（从用户的角度）描述系统的功能；

- 类图（Class diagram）：描述系统的静态结构（类及其相互关系）；

- 对象图（Object diagram）： 描述系统在某个时刻的静态结构（对象及其相互关系）；

- 顺序图（Sequence diagram）：按时间顺序描述系统元素间的交互；

- 协作图（Collaboration diagram）：按照时间和空间的顺序描述系统元素间的交互和它们之间的关系；

- 状态图（State diagram）：描述了系统元素（对象）的状态条件和响应；

- 活动图（Activity diagram）：描述了系统元素之间的活动；

- 构件图（Component diagram）：描述了实现系统的元素（类或包）组织；

- 部署图（Deployment diagram）：描述了环境元素的配置并把实现系统的元素映射到配置上。