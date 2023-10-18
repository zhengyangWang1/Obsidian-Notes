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
结合代码和公式对全连接神经网络的实现进行分析

### 全连接层
```
class Net(object):  
    def __init__(self, num_input, num_output):  
        self.num_input = num_input  
        self.num_output = num_output  
        self.w = np.random.normal(loc=0.0, scale=0.01, size=(self.num_input, self.num_output))  # 随机初始化参数 假设为(n, m)  
        self.bias = np.zeros([1, self.num_output])  # 初始化为0  (1, m)  
        self.input_data = np.zeros(0)  
        self.output_data = np.zeros(0)  
        self.grad_w = np.zeros(0)  
        self.grad_b = np.zeros(0)  
  
    def forward(self, input_data):  
        self.input_data = input_data  # 假设input_data = (1, n)  
        self.output_data = np.matmul(self.input_data, self.w) + self.bias  # (1, n) * (n, m) = (1, m) m为下一层的输入维度  
        return self.output_data  
  
    def backward(self, grad):  
        self.grad_w = np.dot(self.input_data.T, grad)  # (n, 1) * (1, m) = (n, m)  
        self.grad_b = np.sum(grad, axis=0)  
        next_grad = np.dot(grad, self.w.T)  # (1, m) * (m, n) = (1, n)  
        return next_grad  
  
    def backward_with_l2(self, grad, lamb, batch_size):  
        self.grad_w = np.dot(self.input_data.T, grad) + (lamb / batch_size) * self.w  
        self.grad_b = np.sum(grad, axis=0)  
        next_grad = np.dot(grad, self.w.T)  
        return next_grad  
  
    def update(self, lr):  
        self.w = self.w - lr * self.grad_w  
        self.bias = self.bias - lr * self.grad_b
```

定义一个类，在其中实现的功能有：
- 初始化：在创建一层全连接层时，需要初始化w和b，w为（m，n）其中m为输入数据的维度，n为下一层的输入维度，b为（1，n）.公式如下:
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231017235953.png)

- 前馈函数：在前馈函数中实现上面的公式

- 反向传播：需要根据损失更新参数w和b的值，因此分别对w和b求偏导
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231018001633.png)


- 更新参数：在原来的参数上减去梯度方向得到新的参数，实验中往往需要学习率来控制更新的程度

### 激活函数
```
class ReLU(object):  
  
    def __init__(self):  
        self.input_data = np.zeros(0)  
  
    def forward(self, input_data):  
        self.input_data = input_data  
        output_data = np.maximum(0, input_data)  # (1, n)  
        return output_data  
  
    def backward(self, grad):  
        next_grad = grad  # (1, n) * (1, n) 逐元素相乘  
        next_grad[self.input_data < 0] = 0  
        return next_grad
```
激活函数同样需要两个，一个实现前向传播，一个实现反向传播

### Softmax+交叉熵损失
```
class Softmax(object):  
    def __init__(self):  
        self.prob = np.zeros(0)  
        self.batch_size = []  
        self.label = []  
  
    def forward(self, input_data):  
        input_max = np.max(input_data, axis=1, keepdims=True)  
        input_exp = np.exp(input_data - input_max)  
        self.prob = input_exp / np.sum(input_exp, axis=1, keepdims=True)  
        return self.prob  
  
    def get_loss(self, label):  # 计算损失  
        self.label = label  
        self.batch_size = self.prob.shape[0]  
        loss = -np.sum(label * np.log(self.prob + 1e-7)) / self.batch_size  
        return loss  
  
    def backward(self):  
        grad = (self.prob - self.label) / self.batch_size  
        return grad
```
在Softmax中除了实现前向和后向传播外，添加了用交叉熵计算损失的函数，这是因为在softmax后加交叉熵，反向传播的公式会更简便。
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

实验准确率最终达到98%左右