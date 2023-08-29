- [x] 只考虑真实&生成，修改文字

- [x] 增加大量的生成数据  50倍 30倍 70倍

- [ ] 表格：真实数据一条，每个模型的生成数据3条，绘成表格

- [ ] 相关工作重写，把前面粘过来，需要补充很多





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




