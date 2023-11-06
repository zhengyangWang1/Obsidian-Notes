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

冗余属性：假设我们有实体集： 讲师：ID、姓名、**dept_name**、薪水 ；部门：**dept_name**、建筑、预算 
模型：每个教师都有一个使用关系集的关联部门inst_dept 属性dept_name出现在两个实体集中。 由于它是实体集部门的主键，因此它复制关系中存在的信息，因此在实体集讲师中是多余的。 但是：当转换回表时，在某些情况下会重新引入该属性

### 6.4 Mapping  Cardinalities Constrants（映射基数约束）
语义/约束：作为完整性约束，以保持 DBS 的一致性
##### Mapping Cardinalities（映射基数）
表示另一个实体可以通过关系集关联到的实体数
对于二元关系集 R，从 A 到 B 映射基数必须如下所示：
- 一对一
- 一对多
- 多对一
- 多对多
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101233304.png)

有些元素可能不被映射到其他集合

在 ER 图中表示基数约束：
- 有→的代表一，没有箭头为多
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101233549.png)
- 用双线表示至少有一个实体相关联，单线则表示可以有零个或多个

##### Participate Constraints（参与约束）
实体 E 在关系 R 中的参与是**完全的（total）**，如果 E 中的每个实体都参与 R 中的至少一个关系：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101233933.png)
实体 E 在关系 R 中的参与是**部分的（partial）**，如果 E 中的某些实体可能不参与 R 中的任何关系：![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101234007.png)
##### Cardinality Limits for Participation（参与的基数限制）
基数限制（参与的基数界限）用于表示对参与的定量约束
e.g.
- 每个instructor最多可以指导多个student, 最少可以指导0个student
- 每个student最少有1个指导instructor，最多也只有1个指导instructor
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101234344.png)
\*表示无限制
A参与R的基数下界$l_{A}$和上界$h_{A}$
- A中的每个实体a通过R关联了最少$l_{A}$个、最多$h_{A}$个B中实体b
- $l_{A}$ ：对A中的每个实体a, B中至少有$l_{A}$个实体b通过R与其对应/关联
- $h_{A}$：对A中的每个实体a, B中至多有$h_{A}$个实体b通过R与其对应/关联
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101234446.png)
最小值 lA = 0：A 是 R 的部分参与 
最小值 lA > 0：A 为 R 的总参与，相当于双线
最大值 * 表示无限制

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231101235347.png)

我们最多允许一个箭头从三元（或更大程度）关系中表示基数约束  如果有多个箭头，则有两种定义含义的方法。 
- A、B 和 C 之间的三元关系 R，带有指向 B 和 C 的箭头可能意味着 每个 A 实体都与 B 和 C 中的唯一实体相关联，或者
- （A， B） 中的每对实体都与一个唯一的 C 实体相关联，并且每一对（A、C）都与一个唯一的 B 实体相关联

### 6.5 Primary Keys
键是一组属性
键包括 superkey （超键）， candidate key （候选键）， primary key （主键）

#### Keys For Entity Sets
实体集的superkey是一个或多个属性的集合，其值唯一地确定实体集中的每个实体
superkey可能包含无关属性，候选键是最小的超键

主键是被选为标识实体集中实体的主要方法的候选键
尽管可能存在多个候选键，但选择其中一个候选键作为主键

#### Keys For Relationship Sets

#### Choice of Primary key for Binary Relationship

#### Weak Entity Sets
没有主键的实体集称为弱实体集
弱实体集是其存在依赖于另一个实体（称为其标识实体，identifying entity）的实体集
不是将主键与弱实体相关联，而是使用标识实体以及称为鉴别器(discriminator)的额外属性来唯一标识弱实体
每个弱实体都必须与一个标识实体相关联，弱实体集是依赖于标识实体集的存在。
标识实体集是拥有弱实体集。 将弱实体集与标识实体集相关联的关系称为标识关系(identifying relationship)
在 E-R 图中，弱实体集通过双矩形进行描述。 我们用虚线强调弱实体集的判别器。 将弱实体集连接到标识强实体集的关系集由双菱形表示。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231106103032.png)
弱实体集的鉴别器（或部分键）是一组属性，用于区分弱实体集中依赖于特定强实体的所有实体 
例如sec_id、学期、年份 弱实体集的鉴别器用虚线下划线
弱实体集的主键由弱实体集存在依赖的强实体集的主键加上弱实体集的判别器组成 弱实体集 E1 的主键 = 鉴别器 ∪ primary_key（E2）
弱实体集 E1 具有多个标识实体集 E2、E3、..、En，弱实体集 E1 的主键 = 鉴别器 ∪ primary_key（E2） ∪...primary_key（En） .

### 6.6 Removing Redundant Attributes


### 6.7 Reducing E-R Diagrams to Relation Schemas
将 E-R 图转换为表格式是从 E-R 图派生关系数据库设计的基础 
符合 E-R 图的数据库可以由架构/表的集合表示 实体集和关系集可以统一表示为表示数据库内容的关系架构。 对于每个实体集或关系集，都有一个与实体集或关系集对应的唯一架构。 每个表都有许多列，对应于它们的属性将 E-R 图转换为表格式是从 E-R 图派生关系数据库设计的基础 
符合 E-R 图的数据库可以由架构/表的集合表示 
实体集和关系集可以统一表示为表示数据库内容的关系架构。 对于每个实体集或关系集，都有一个与实体集或关系集对应的唯一架构。 每个表都有许多列，对应于它们的属性

强实体集简化为具有相同属性的架构
弱实体集将变成一个表，其中包含标识强实体集的主键的列
#### Representation of Entity Sets with Multivalued Attributes
实体 E 的多值属性 M 由单独的架构 EM 表示 
架构 EM 具有与 E 的主键对应的属性和对应于多值属性 M 的属性

#### Representing Relationship Sets
将关系集简化为表在很大程度上依赖于映射基数约束和总/部分约束 
多对多关系集表示为一个表，其中包含两个参与实体集的主键的列，以及关系集的任何描述性属性
可以通过向多端添加一个额外的属性来表示在多端上合计的多对一和一对多关系集，其中包含一端的主键

该关系被简化为一个独立的表，以避免表中的空值

对于一对一关系集，可以选择任何一方作为多方 可以将额外的属性添加到与两个实体集对应的任一表中

### 6.8 Extended E-R Features
面向对象 （OO） E-R ：
specialization （特化，特殊化，例化） generalization （概括化，泛化，普遍化） attributes inheritance （属性继承）

#### Specialization
自上而下的设计过程： 我们在实体集中指定有别于其他实体的子组 这些子分组成为较低级别的实体集，这些实体集具有属性或参与适用于较高级别实体集的关系
属性继承：较低级别的实体集继承它所链接到的较高级别实体集的所有属性和关系参与，较高级别实体的属性和关系可以应用于其所有较低级别的实体

#### Generalization
自下而上的设计过程
将多个共享相同功能的实体集组合成更高级别的实体集
超类和子类：对于实体集合 A 和 B，如果 A 是 B 的泛化，即 B 是 A 的特化， 则 A 是 B 的超类，B 是 A 的子类

#### Completeness Constraint
完整性约束
指定高级实体集中的实体是否必须至少属于泛化中的一个较低级别的实体集 
- total：实体必须属于较低级别的实体集之一 例如，学生泛化，所有实体必须是研究生或本科生 
- partial：实体不必属于较低级别的实体集之一 例如，人员专业化 部分泛化是默认设置。 
我们可以通过在图中添加关键字 total 并在关键字到相应的空心箭头（用于全面泛化）或空心箭头集（用于重叠泛化）来指定总泛化。
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231106114347.png)

关于一个高级实体是否可能属于单个专业化中集的多个较低级别实体的约束,
- disjoint：一个高级实体只能属于一个较低级别的实体集，即 L-entity-set-1 ∩ L-entity-set-2 = Φ 
- overlapping：一个高级实体可以属于多个较低级别的实体集 L-实体集-1∩L-实体集-2 ≠ Φ
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231106114410.png)

#### Representing Specialization via Schemas
1. 形成更高级别实体的架构 为每个较低级别的实体集形成一个架构，包括较高级别实体集的主键和本地属性![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231106114529.png)
2. 为每个实体集形成一个架构，其中包含所有本地属性和继承属性![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231106114548.png)
3. 如果泛化/特殊化是不相交的且完整的，则创建两个表

#### Aggregation
