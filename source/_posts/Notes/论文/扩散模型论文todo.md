---
title: 扩散模型论文todo
categories:
  - Notes
  - 论文
update: 
tags:
  - 扩散模型
---
检查句号后面空格


论文检查：
- [x] 论文中公式全部检查  公式文字部分也对应检查
- [x] 图表全部检查  图表文字部分也对应检查
- [x] 参考文献检查  **20和29参考文献重点检查**
- [x] 学历补充
- [x] word格式整理好

![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231203092747.png)
![d5304720bd3b25b687d5db36f180fb3.jpg](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/d5304720bd3b25b687d5db36f180fb3.jpg)


检查论文，12.4之前






对比学习生成 **hardsample**
自动数据增强
识别出假数据
https://arxiv.org/pdf/2207.00148.pdf
https://arxiv.org/pdf/2010.04592v2.pdf
https://epubs.siam.org/doi/epdf/10.1137/1.9781611977653.ch19
https://ojs.aaai.org/index.php/AAAI/article/view/26071
https://arxiv.org/pdf/2303.15161v3.pdf
https://www.sciencedirect.com/science/article/abs/pii/S0031320323002121
https://paperswithcode.com/paper/hard-sample-guided-hybrid-contrast-learning
https://paperswithcode.com/paper/hard-sample-aware-noise-robust-learning-for
### NEW

![ff4ca0be44cbc807008ad5e9d025a40.jpg](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/ff4ca0be44cbc807008ad5e9d025a40.jpg)

- [ ] 表一加个表头

- [ ] 表三添加：auc已经到很高的数值，差距拉不开，意义不大

- [ ] 所有数据换成通信数据,电信场景不同任务，网络优化、运维、用户进行实验，验证在不同任务下的效果

- [ ] 基于文章写一个ppt
12-15页有效内容

11.29
ppt要求：刷一下ppt格式
参考p8做p11

背景 相关工作
方法介绍
数据集介绍
哪几个实验

用对比学习做GAN的判别器
1. hardsample的生成结果进行对比
2. hardsample怎么生成，普通生成也怎么生成
3. 对这些样本构造一个图，从图中计算hardsample

1. 基于对比学习
2. DDPM在通信的应用
3. 隐私保护的深入探索 看论文
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20231127150317.png)

### IDEA
#### 基于误分样本的数据重构
之前调节分类器的参数，来提升评估效果
现在可以尝试==调节生成模型的参数==来提升生成模型的效果

#### 难分类样本
难以分类但是分类正确的样本，提升权重
之前是使用全部原始样本生成生成数据，然后从生成数据中挑选误分类样本。
现在先评估原始数据，挑选出难分类样本，生成难分类样本生成数据，进行评估或者和原始数据融合

#### 对比学习
数据抽样

将原始数据划分为正样本和负样本，可知正样本很少，存在严重的不平衡
按照对比学习的思路，可以尝试在全部样本中进行两两一组的随机抽样，两个样本标签相同为正样本对，不同为负样本对

#### 误分类样本数据重构 +数据规模
考虑到真实数据量比较小
我们可以生成大量数据
以真实数据训练分类器，提取生成误分样本，并和一些生成样本融合，（相当于提升了数据规模）
生成两份数量都为N的数据（N为原始数据规模的10-100倍），一份通过分类器得到误分类样本，与另一份融合，共同用于训练分类器

#### 不同生成模型数据融合
将扩散生成模型和 GAN 模型生成的数据进行融合用于共同训练分类器


---
## 融合生成数据和原始数据的特征表示？

使用自适应的权重机制

---

- [x] 只考虑真实&生成，修改文字

- [x] 增加大量的生成数据  50倍 30倍 70倍

- [x] 表格：真实数据一条，每个模型的生成数据3条，绘成表格

- [x] 相关工作：把数据增强放前面，客户流失放后面，重在罗列，要写哪篇文章
- [x] 数据集来源换成网址
- [x] 隐私部分表格修改

---

- [ ] 审稿意见标粗的 <font color="#ff0000">其他联合损失函数</font>
- [x] 表格格式问题
- [x] 弱分类器强分类器表格加粗好结果
- [x] 4.1生成数据量对效果的影响
- [ ] 相关工作的文献引用
- [x] 写修改说明，合并到一起


---


- [x] 相关工作第二部分
- [ ] 引言部分的参考文献
- [x] 加上LR的误分类，另外数据是不是贴反了@程梓航
- [x] 序号
- [ ] 方法介绍开始一直检查到
- [x] 修改说明中 损失函数 数据量增大
- [ ] 修改说明合完发过去
- [ ] 4.1绿的复制 表四复制
- [ ] 引言 和 相关工作【】里加参考文献


- [ ] 图标边框
- [x] 合参考文献 数据集划分 误分类
- [ ] 公式 摘要


有问题的论文序号：2，4，8，10，15，16，18，28，34，35
## 生成数据量对效果的影响

为了验证大规模的生成数据对效果的影响，我们使用扩散模型生成了数据集训练数据量10倍、50倍和100倍的数据，用来训练分类器Catboost，训练结果如下表所示。在电信数据集中，大量样本并不能显著提升分类器的性能，反而使结果略微下降。在银行数据集和电商数据集中，大规模样本使分类器性能得到提升，尤其是电商数据的表现提升显著，超越了真实数据的效果。三者都在数据规模达到原训练样本100倍时取得最好的效果。这表明通过增大数据集规模来提升模型效果在某些场景下是可行的。

| real   | 0.8072 | 0.7388 | 0.8546 |     |     |        | 0.9701 | 0.9456 | 0.9948 |     |     |        | 0.9401 | 0.8737 | 0.9528 |
| --------------- | ------ | ------ | ------ | ------ | --- | --- | ------ | ------ | ------ | ------ | --- | --- | ------ | ------ | ------ | ------ |
| syn 1:5_fakeALL | 0.8051 | 0.7367 | 0.8542 |        |     |     | 0.9589 | 0.9241 | 0.9836 |        |     |     | 0.9049 | 0.8076 | 0.8893 |        |
| 10x_fakeall     | 0.7277 | 0.7072 | 0.8384 |        |     |     | 0.9589 | 0.9239 | 0.9855 |        |     |     | 0.9331 | 0.8646 | 0.9511 |        |
| 30x_fakeall     |        |        |        |        |     |     |        |        |        |        |     |     | 0.9322 | 0.8652 | 0.9556 |        |
| 50x_fakeall     | 0.7227 | 0.702  | 0.844  |        |     |     | 0.9608 | 0.9279 | 0.9872 |        |     |     | 0.9349 | 0.8708 | 0.9543 |        |
| 70x_fakeall     |        |        |        |        |     |     |        |        |        |        |     |     |        |        |        |        |
| 100x_fakeall    | 0.7277 | 0.7076 | 0.8442 |        |     |     | 0.9623 | 0.9312 | 0.9882 |        |     |     | 0.934  | 0.8687 | 0.9562 |        |

## 相关工作

#### 数据增强方法
数据增强是一种基于有限数据生成更多有效数据来扩充训练集，从而使得训练集训练出的模型效果得到提升的方法。目前，许多数据增强方法在图像生成等领域应用广泛。常用的方法有综合采样人工合成数据算法SMOTE[12]，无监督学习方法VAE（Variational Autoencoder）[32]，GAN[34]及其多种变体，以及扩散模型（Denoising Diffusion Probabilistic Model）[48]等。
Xiaojun Wu利用改进的 SMOTE 处理流失数据，结合过采样和欠采样方法解决流失数据的不平衡问题，对电子商务客户流失进行预测。（# E-commerce customer churn prediction based on improved SMOTE and AdaBoost）TVAE[33]在VAE的基础上提出了一个新的集成框架，结合深度度量学习（deep metric learning）来学习 VAE 中的潜在嵌入。MedGAN将一个自编码器与GAN结合，可以在图像层面实现端到端的生成任务，可以生成连续和离散变量，被用于EHR（electronic health record）数据的生成。CrGAN-Cnet将Cramér Distance和Cross-Net architecture整合到算法中，用于航空公司乘客姓名记录生成（Airline Passenger Name Record Generation），此外还能生成数据来填补数据表格中的缺失值。IRGAN首次将在CV领域中广泛应用的GAN引入到信息检索，利用强化学习，创造性地解决了GAN在离散领域的适用问题。TableGAN将分类器和信息损失引入GAN，并在生成器、鉴别器和分类器中应用卷积神经网络（CNN）。另外，在表格数据增强中，隐私保护能力也是一个重要的因素。PATE-GAN提出了一个生成具有差分隐私保证数据的框架。
上述基于GAN的算法在生成特定类别数据上存在很大不足，而Conditional GAN（CGAN）可以有效控制生成数据，因而被广泛应用。CGAN在生成器和判别器的输入中增加了额外的条件信息，限制了生成数据的生成类型。CW-GAN将Wasserstein距离应用到CGAN中，利用条件向量对少数类进行过采样，以解决表格数据生成不平衡的问题。CTGAN将 PacGAN结构集成到它的鉴别器中，并使用 WGAN 损失加上梯度惩罚来训练一个条件 GAN 框架。CTAB-GAN通过数据编码连续和分类变量的混合数据类型，以及对长尾连续变量有效建模。
2020年，DDPM（Denoising Diffusion Probabilistic Model）被提出，被称为扩散模型，在图像生成领域广泛应用。扩散模型包括两个过程：前向过程和反向过程，其中前向过程又称为扩散过程。无论是前向过程还是反向过程都是一个参数化的马尔可夫链。后来学者们改进DDPM（引用Improved Denoising Diffusion Probabilistic Models），进一步增强其生成效果。

#### 客户流失预估： 
在过去的研究中，学者们对客户流失预测在多种领域进行了大量的探索，包括电信客户流失、银行理财客户流失、新兴互联网行业客户流失，如电商、直播、旅游产品等。预测方法也逐渐成熟，形成了以机器学习算法为主流的现状。从发展历程上主要分为两个阶段。
第一阶段是传统统计学预测方法，主要包括决策树（decision tree, DT）、逻辑回归（logistic regression，LR）、贝叶斯分类器（bayesian）、支持向量机（support vector machine，SVM）等算法。早在2007年，Luo Bin就使用决策树来预测手机服务中的客户流失（# Customer Churn Prediction Based on the Decision Tree in Personal Handyphone System Service）。同年，针对实际客户流失数据中正负样本数量不平衡而且数据量大的特点,Ying Weiyun提出带有不同类权重参数的支持向量机算法CW-SVM来预测客户流失,通过调整类权重参数改变分类面位置,提高算法分类准确性[6]。近些年电子商务发展迅速，客户激增，Qiu Yanfang使用逻辑回归来预测电子商务场景下的客户流失[4]。在[3]中，Hemlata Jain将逻辑回归和logit boost结合起来，在美国电信公司Orange的数据集上表现良好。在[5]中，Guangli Nie分别使用决策树和逻辑回归对某银行信用卡用户流失数据做预测。Arno De Caigny在其论文中将决策树和逻辑回归结合提出了一种新的混合算法，logit leaf model (LLM) ，以更好地对数据进行分类。（# A new hybrid classification algorithm for customer churn prediction based on logistic regression and decision trees）。这一阶段的客户流失预测方法主要集中在将这些基础算法和手动特征工程结合对客户流失进行建模[1-3, 6-7]。
第二阶段是客户流失预测场景中集成学习算法的垄断和深度学习的初步探索。随着集成学习的引入，随机森林（random forest，RF）、梯度提升决策树（gradient boosting decision tree，GBDT）、Adaboost和Stack等方法被大量引入到对客户流失预测中，包括在电信、银行、互联网等场景。特别是GBDT，由于其算法具有很好的性能被客户流失预测广泛应用。
Yaya Xie提出了一种基于随机森林的学习方法，称为改进的平衡随机森林(improved balanced random forests，IBRF)，通过改变类的分布和对少数类的错误分类施加更高的惩罚来迭代学习最佳特征，并将该方法应用于某银行客户流失数据集。（# Customer churn prediction using improved balanced random forests）Liang Jiafu提出了一种基于梯度提升决策树算法(GBDT)和逻辑回归(LR)算法的用户流失预防模型,对参数特征进行调整,对已有移动用户流失数据进行计算,识别速度和准确率均拥有好的效果[8]。Zengyuan Wu提出 PCA-AdaBoost 模型，采用主成分分析来减少数据维度，使用AdaBoost对多个决策树进行级联，以最小化不平衡数据的影响。该模型在kaggle的电子商务数据集上证明了模型的有效性。（# A PCA-AdaBoost model for E-commerce customer churn prediction）
在深度学习领域，Ebru Pekel Ozmen改进卷积神经网络算法，提出了一种新的混合扩展卷积决策树模型(ECDT)，将模型应用于零售业员工流失预测的数据集[10]。[11]提出了一个利用交易数据预测银行客户流失的框架,将GRU和bi-directional LSTM应用于客户流失预测。这一阶段的客户流失方法开始尝试将一些机器学习方法集成起来，或是使用流行的深度学习方法，用更复杂的模型学习和预测流失数据。
整体上，客户流失预测以机器学习算法为主，并发展出集成学习等不同模型，深度学习在该领域也有一定应用。预测领域也从电信用户流失逐渐发展到银行信用卡用户流失、电商用户流失等多个领域。






## 工作
**1** 多处需要增加引用文献，例如：Theil’s U 统计量，Correlation Ratio，SHAP（SHapley Additive exPlanations）
解决：Theil’s U 统计量，Correlation Ratio可以直接引用CTABGAN
		  SHAP： [A Unified Approach to Interpreting Model Predictions]([[1705.07874v2] A Unified Approach to Interpreting Model Predictions (arxiv.org)](https://arxiv.org/abs/1705.07874v2))
		  
**2** 论文之中提到的 kaggle 数据集可以给出相应的链接。 @ 正阳 （找链接，试着参考论文里）
[Telco Customer Churn | Kaggle](https://www.kaggle.com/datasets/blastchar/telco-customer-churn)
[Credit Card customers | Kaggle](https://www.kaggle.com/datasets/sakshigoyal7/credit-card-customers)
[直播电商数据集_数据集-阿里云天池 (aliyun.com)](https://tianchi.aliyun.com/dataset/124814)

3 电信数据集，每个模型找五条

REAL：

Male  0 No No  2  Yes  No  DSL  Yes  Yes  No  No  No  No  Month-to-month  Yes  Mailed check  53.85  108.15

Female  0  No No 2 Yes No Fiber optic No No No No No No Month-to-month Yes Electronic check 70.7 151.65 

Female 0 No No 8 Yes Yes Fiber optic No No Yes No Yes Yes Month-to-month Yes Electronic check 99.65 820.5

Male 1 No No 1 No No phone service DSL No No Yes No No Yes Month-to-month Yes Electronic check 39.65 39.65

Male 0 No No 49 Yes Yes Fiber optic No Yes Yes No Yes Yes Month-to-month Yes Bank transfer(automatic) 103.7 5036.3

DDPM：
'Male' '1' 'Yes' 'No'  4.0 'Yes' 'No' 'Fiber optic' 'No' 'No' 'Yes' 'No'
  'Yes' 'Yes' 'Month-to-month' 'Yes' 'Electronic check'
  92.81641778046422 347.77240745447966
  
 'Male' '0' 'Yes' 'No' 1.0 'Yes' 'Yes' 'Fiber optic' 'No' 'No' 'No' 'No'
  'Yes' 'Yes' 'Month-to-month' 'Yes' 'Electronic check' 
  95.8100172795924 135.30996333735123

 'Female' '0' 'No' 'No' 12.89970293412554 'Yes' 'No' 'Fiber optic' 'No' 'No' 'No' 'No'
  'Yes' 'Yes' 'Month-to-month' 'Yes' 'Bank transfer (automatic)'
   90.24851621598897 1131.933374934577
  
 'Male' '0' 'No' 'No' 15.0 'Yes' 'Yes' 'Fiber optic' 'No' 'Yes' 'No' 'No'
  'No' 'Yes' 'Month-to-month' 'Yes' 'Credit card (automatic)' 
  89.23206588556003 1370.882200227259
 
 'Female' '1' 'No' 'No' 1.0 'Yes' 'Yes' 'Fiber optic' 'No' 'No' 'No' 'No'
  'No' 'No' 'Month-to-month' 'Yes' 'Electronic check' 
  75.70813933778831 75.53547210781328

SMOTE：
'Female' '0' 'No' 'No' 6.058020806965098 'Yes' 'No' 'Fiber optic' 'No' 'No' 'No' 'No'
  'Yes' 'Yes' 'Month-to-month' 'Yes' 'Electronic check' 
  89.30362630043531 581.5998093801566
  
 'Female' '0' 'Yes' 'No' 34.16695916300951 'Yes' 'Yes' 'Fiber optic' 'Yes' 'No' 'Yes' 'No'
  'Yes' 'Yes' 'Month-to-month' 'Yes' 'Electronic check' 
  102.47469287884003 3553.063238271951
  
 'Female' '0' 'No' 'No' 10.409424239667828 'Yes' 'Yes' 'DSL' 'No' 'No' 'No' 'No' 'No' 'Yes'
  'Month-to-month' 'No' 'Electronic check' 
  72.89683257375917 749.7780225143397
  
 'Male' '0' 'Yes' 'No' 68.0 'Yes' 'Yes' 'Fiber optic' 'Yes' 'Yes' 'Yes' 'Yes'
  'Yes' 'Yes' 'Two year' 'Yes' 'Credit card (automatic)' 
  111.84516691088298 7754.865079775263
  
 'Male' '0' 'No' 'No' 57.53490684507468 'No' 'No phone service' 'DSL' 'No' 'Yes' 'Yes'
  'No' 'Yes' 'Yes' 'Month-to-month' 'Yes' 'Electronic check'
   52.08537000221106 2966.5298068815946

CTABGAN：
'Female' '1' 'Yes' 'No' 25.813646159053306 'Yes' 'No' 'Fiber optic' 'No' 'Yes' 'No' 'No'
  'No' 'No' 'Month-to-month' 'Yes' 'Credit card (automatic)'
   72.4520499161782 107.12076519599646
  
 'Male' '0' 'No' 'Yes' 7.578428442708454 'Yes' 'No' 'DSL' 'No' 'No' 'No' 'No' 'No' 'No'
  'Month-to-month' 'No' 'Mailed check' 
  45.84371280675952 105.69947914250504
  
 'Male' '0' 'No' 'No'  1.9809866925261472 'Yes' 'Yes' 'Fiber optic' 'No' 'No' 'No' 'No'
  'Yes' 'No' 'Month-to-month' 'Yes' 'Bank transfer (automatic)'
   81.46474915190095 40.94928790189158
  
 'Female' '1' 'No' 'Yes' 26.57383830887195 'Yes' 'No phone service' 'DSL' 'Yes' 'Yes'
  'Yes' 'No' 'Yes' 'Yes' 'Month-to-month' 'No' 'Electronic check'
   57.69859110911275 781.0754735958174
  
 'Male' '0' 'Yes' 'No'  28.8168545923753 'Yes' 'Yes' 'DSL' 'No' 'Yes' 'No' 'Yes' 'Yes'
  'Yes' 'Month-to-month' 'No' 'Credit card (automatic)' 
  77.30306219710255 756.2990340865898




In the field of data mining, there are commonly encountered issues of data imbalance and inadequate protection of user privacy data. These issues can have a detrimental impact on the accuracy of model predictions and the applicability of models in privacy-preserving scenarios. Therefore, the generation of new data has emerged as a prominent solution in addressing these challenges.  
However, generating high-quality data poses certain challenges in the field of data mining, which primarily deals with structured data characterized by a high number of dimensions and unrelated features.  
Considering the successful application of diffusion models in tasks such as image generation, this study attempts to apply diffusion models to the task of customer churn prediction.  
This paper employs Gaussian diffusion models and polynomial diffusion models to generate data for numerical and categorical features in churn data. It also conducts research and analysis on the predictive performance and privacy protection capabilities of these models.  
We conducted extensive experiments on customer churn data from multiple domains to explore the potential of merging synthetic data with real data for reconstruction.  
The experimental results indicate that the adoption of the diffusion model enables the generation of high-quality data. Furthermore, the generated data exhibits improvements across various customer churn prediction methods, with a particular advantage observed for weak classifiers. This approach also effectively mitigates the issue of data imbalance.  
Moreover, the data generated by the diffusion model exhibits a distribution that is closer to real data, thereby possessing potential value in preserving customer privacy.




