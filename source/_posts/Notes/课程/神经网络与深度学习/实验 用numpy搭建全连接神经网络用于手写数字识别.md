---
title: 实验 用numpy搭建全连接神经网络用于手写数字识别
categories:
  - Notes
  - 课程
  - 神经网络与深度学习
tags:
  - Python
  - 神经网络
date:
---
结合代码和公式对全连接层的实现进行分析

### 实验结果

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231011222110.png)

保持学习率lr=0.1不变，增大batchsize效果下降
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231011222928.png)

减少batchsize效果上升，在训练时可以明显发现loss下降的更快，模型收敛更快
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231011222600.png)


保持batchsize=20不变，增大lr
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231011224112.png)

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231011225231.png)

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231011225851.png)
实验准确率最终达到98%