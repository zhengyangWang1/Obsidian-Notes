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
- [ ] 4.1生成数据量对效果的影响
- [ ] 相关工作的文献引用
- [ ] 写修改说明，合并到一起
## 相关工作

#### 数据增强方法
数据增强是一种基于有限数据生成更多有效数据来扩充训练集，从而使得训练集训练出的模型效果得到提升的方法。目前，许多数据增强方法在图像生成和表格数据生成等领域应用广泛。
SMOTE是该领域较早提出的方法之一。SMOTE方法是一种基于插值的数据增强方法，通过处理样本不平衡问题来提升分类器性能。变分自动编码器（Variational Autoencoder，VAE）也是一种常见的方法，VAE是一种无监督学习方法，其包括一个编码器和一个解码器，为每个样本构造专属的正态分布，然后采样来重构。如TVAE，其提出了一个新的集成框架，结合深度度量学习（deep metric learning）来学习 VAE 中的潜在嵌入。
近年来，生成对抗网络(Generative adversarial network)在数据增强领域广泛应用。基于GAN，学者们提出了许多变体。MedGAN将一个自编码器与GAN结合，可以在图像层面实现端到端的生成任务，可以生成连续和离散变量，被用于EHR（electronic health record）数据的生成。CrGAN-Cnet将Cramér Distance和Cross-Net architecture整合到算法中，用于航空公司乘客姓名记录生成（Airline Passenger Name Record Generation），此外还能生成数据来填补数据表格中的缺失值。IRGAN首次将在CV领域中广泛应用的GAN引入到信息检索，利用强化学习，创造性地解决了GAN在离散领域的适用问题。TableGAN将分类器和信息损失引入GAN，并在生成器、鉴别器和分类器中应用卷积神经网络（CNN）。另外，在表格数据增强中，隐私保护能力也是一个重要的因素。PATE-GAN提出了一个生成具有差分隐私保证数据的框架。
上述基于GAN的算法在生成特定类别数据上存在很大不足，而Conditional GAN（CGAN）可以有效控制生成数据，因而被广泛应用。CGAN在生成器和判别器的输入中增加了额外的条件信息，限制了生成数据的生成类型。CW-GAN将Wasserstein距离应用到CGAN中，利用条件向量对少数类进行过采样，以解决表格数据生成不平衡的问题。CTGAN将 PacGAN结构集成到它的鉴别器中，并使用 WGAN 损失加上梯度惩罚来训练一个条件 GAN 框架。CTAB-GAN通过数据编码连续和分类变量的混合数据类型，以及对长尾连续变量有效建模。
2020年，DDPM（Denoising Diffusion Probabilistic Model）被提出，被称为扩散模型，在图像生成领域广泛应用。扩散模型包括两个过程：前向过程和反向过程，其中前向过程又称为扩散过程。无论是前向过程还是反向过程都是一个参数化的马尔可夫链。后来学者们改进DDPM（引用Improved Denoising Diffusion Probabilistic Models），进一步增强其生成效果。

#### 客户流失预估： 
两个阶段：
在研究过程中，学者们对客户流失预测在不同领域进行了大量的探索，包括电信客户流失、银行理财客户流失、新兴互联网行业客户流失，如电商、直播、旅游产品等。客户流失预测方法也逐渐成熟，逐步形成了以机器学习算法为主的现状。从发展历程上主要分为两个阶段。
第一阶段是传统统计学预测方法。决策树（decision tree, DT）是一种机器学习的方法。其是一个预测模型，它代表的是对象属性与对象值之间的一种映射关系。树中每个节点表示某个对象，而每个分叉路径则代表某个可能的属性值，而每个叶节点则对应从根节点到该叶节点所经历的路径所表示的对象的值。决策树的生成算法有ID3, C4.5等。逻辑回归（logistic regression，LR）是一种分类模型，假设数据服从这个分布，然后使用极大似然估计做参数的估计。逻辑回归分析属于非线性回归，它是研究因变量为二项分类或多项分类结果与某些影响因素之间关系的一种多重回归分析方法。贝叶斯分类器（bayesian），贝叶斯分类算法是统计学中的一种分类方法，它是一类利用概率统计知识进行分类的算法。贝叶斯分类器是一种有监督学习模型，通过对已分类的样本进行训练，学习归纳出分类函数，利用训练得到的分类器实现对未分类数据的分类。支持向量机（support vector machine，SVM）是一种二分类模型，它的基本模型是定义在特征空间上的间隔最大的线性分类器。SVM的的学习策略就是间隔最大化，求解能够正确划分训练数据集并且几何间隔最大的分离超平面。
第二阶段是集成学习算法和深度学习的探索。随机森林（random forest，RF）是集成学习 中的 Bagging 方法，由很多决策树构成的，不同决策树之间没有关联。当我们进行分类任务时，新的输入样本进入，就让森林中的每一棵决策树分别进行判断和分类，每个决策树会得到一个自己的分类结果，决策树的分类结果中哪一个分类最多，那么随机森林就会把这个结果当做最终的结果。梯度提升决策树（gradient boosting decision tree，GBDT）和Adaboost都是基于加法模型和前向分步算法，GBDT与Adboost最主要的区别在于两者如何识别模型的问题。Adaboost用错分数据点来识别问题，通过调整错分数据点的权重来改进模型。GBDT通过负梯度来识别问题，通过计算负梯度来改进模型。  Stacking方法是一种分层模型集成框架。首先利用训练集训练得到多个初级学习器，然后用初级学习器对测试集进行预测，并将输出值作为下一阶段训练的输入值，最终的标签作为输出值，用于训练次级学习器。




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




