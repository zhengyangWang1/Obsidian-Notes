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
- char(n).固定长度字符串
- varchar(n).可变长度字符串
- 