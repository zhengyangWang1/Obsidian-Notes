---
title: ChatEdit
categories:
  - Notes
  - 论文
date:
tags:
---

### ChatEdit
ChatEdit是一个数据集，用于评估在此背景下的图像编辑和对话能力。
ChatEdit是根据CelebA-HQ数据集（30k张1024×1024面部图像数据集，它提供了 40 个面部属性的二进制注释）构建的，包含与图像上的用户编辑请求相对应的带注释的多轮对话，21个可编辑属性
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231113213751.png)


TODO：
数据集是什么类型？一张图像和几个标签？



### 交互式面部图像编辑
1. 跟踪用户编辑请求
2. 图像编辑
3. 响应生成（对话）

跟踪整个对话历史记录到当前用户编辑请求，直接对原始图像进行修改，而不是调整前一轮的输出。减少错误累计、防止属性遗忘