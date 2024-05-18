---
title: 基于 Transformer 的命名实体识别
categories:
  - Notes
  - 课程
  - 自然语言处理
date:
tags:
---
### 基于Transformer的命名实体识别模型说明文档

#### 标签集

根据`train_TAG.txt`统计得到的标签集如下：

- O (非命名实体中的字符)
- B_T (时间实体的开头字)
- I_T (时间实体的中间字)
- B_LOC (地点实体的开头字)
- I_LOC (地点实体的中间字)

这些标签用于对每个字符进行标注，分别表示非命名实体、时间实体和地点实体的不同部分。

#### 模型和执行细节

##### 模型结构

本项目使用BERT作为基础模型进行命名实体识别。具体的模型结构和超参数如下：

- 模型类型：BERT
- 模型名称：`bert-base-chinese`
- 输入：字符序列
- 输出：字符对应的标签

##### 超参数

- 隐藏层大小：768
- Transformer层数：12
- 注意力头数：12
- 最大序列长度：128
- 标签数：5 (根据标签集)

##### 训练算法

使用的训练算法和配置如下：

- 优化器：AdamW
- 学习率：5e-5
- 批次大小：32
- 训练轮数：3

##### 数据预处理

数据预处理步骤包括：

1. 使用BERT分词器对文本进行编码，确保每个字符对应一个token。
2. 将标签转换为相应的ID。
3. 对输入序列进行填充或截断以达到最大长度。

##### 训练过程

训练过程中，模型的输入为编码后的字符序列，输出为每个字符对应的标签。损失函数采用交叉熵损失，优化器为AdamW。训练循环中每个epoch包括以下步骤：

1. 前向传播计算损失。
2. 反向传播更新模型参数。
3. 每个epoch结束后输出损失值。

##### 验证过程

为了评估模型的性能，每个epoch结束后在验证集上进行测试，记录验证集上的损失和准确率。

#### 训练损失和验证集性能随时间变化的曲线

我们记录了每个epoch的训练损失和验证集上的损失与准确率，并绘制了随时间变化的曲线。

#### 参考文献

本项目参考了以下文献、网站和代码：

1. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2018). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. arXiv preprint arXiv:1810.04805.
2. Hugging Face Transformers库：[https://github.com/huggingface/transformers](https://github.com/huggingface/transformers)
3. PyTorch官方文档：https://pytorch.org/docs/stable/index.html