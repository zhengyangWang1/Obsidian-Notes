---
title: 基于 Transformer 的命名实体识别
categories:
  - Notes
  - 课程
  - 自然语言处理
date:
tags:
---

### 标签集

根据`train_TAG.txt`统计得到的标签集如下：

- O
- B_T
- I_T
- B_LOC
- I_LOC

### 模型和执行细节

#### 模型结构
模型使用hugging face的bert-base-chinese作为预训练模型。模型接受预处理后的字符序列作为输入，输出字符对应的标签
##### 超参数
BERT模型包含12层Transformer encoder，每层Transformer encoder包含的多头自注意头数为12，隐藏层大小为768。
在构建数据集时，设定单条文本最大长度为128，对数据集进行阶段或填充。使用库函数`BertTokenizer`对数据进行向量化操作
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