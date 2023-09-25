---
categories:
  - Notes
  - 课程
  - 数据库
---
### 3.1 Overview of SQL
Structured Query Language
![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925100326.png)

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925100343.png)

| data query             | Select                                           |
| ---------------------- | ------------------------------------------------ |
| data manipulation      | Insert,  Delete,  Update                         |
| data definition        | Create,  Drop, Alter   (on schema)               |
| data control           | Grant,  Revoke                                   |
| transaction processing | begin transaction, commit, rollback              |
| 指针/游标控制语言(CCL) | DECLARE CURSOR，FETCH INTO和UPDATE WHERE CURRENT |

### 3.2 SQL Data Definition

**Domain Types**
- char(n).固定长度字符串，用户定义
- varchar(n).可变长度字符串，用户定义
- int.整数
- smallint.小整数
- numeric(p, d):固定小数，用户定义
- float(n).浮点数，用户定义

- date:日期包含年月日
- time:时分秒
- timestamp:日期加上时间
- Interval:一段时间
- Null：空集
- create domain:自定义类型，不允许是Null

>关系表属性名最好取英文名，便于应用程序的可移植性

### Create Table
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925101602.png)

- r是关系表的名称
- A_i是变量名称
- D_i是数据类型
例：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230925101739.png)
