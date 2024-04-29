---
categories:
  - Notes
  - 课程
  - 计算机视觉
title: 词袋模型+SVM图像分类
date: 
tags:
---
---
### 算法流程描述
首先，对数据集进行预处理。本实验使用scene_categories数据集，该数据集包括15个类别（文件夹名就是类别名），每个类中编号前150号的样本作为训练样本，15个类一共2250张训练样本；剩下的样本构成测试集合。对数据进行SIFT特征提取，得到每张图片的描述符，作为训练数据。
然后，使用KMeans算法对SIFT特征进行聚类，得到视觉词汇，然后计算图像的词袋模型，将图像的词汇表示和标签作为SVM的训练数据，得到训练好的SVM分类器。
对测试数据集中的每张图像，同样根据构建的视觉词汇，计算图像的词袋表示。使用训练好的SVM分类器对测试数据集进行分类预测，并计算分类准确率。
使用分类预测结果和真实标签计算混淆矩阵，然后用matplotlib绘制其热力图。

### 函数功能说明
`extract_sift_features` 将输入的彩色图像转换为灰度图像，然后使用SIFT算法检测图像中的关键点，并计算这些关键点的SIFT特征描述符。
```python
def extract_sift_features(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    sift = cv2.SIFT_create()
    keypoints, descriptors = sift.detectAndCompute(gray, None)
    return descriptors
```
`preprocess_data` 对输入的图像路径列表进行预处理，提取每张图像的SIFT特征描述符，并将所有特征描述符拼接成一个特征矩阵返回。
```python
def preprocess_data(img_paths):
    features = []
    for img_path in img_paths:
        image = cv2.imread(img_path)
        if image is not None:
            sift_features = extract_sift_features(image)
            if sift_features is not None:
                features.append(sift_features)
    return np.concatenate(features, axis=0)
```
`build_vocabulary` 使用K均值聚类算法对给定的特征集进行聚类，并构建一个视觉词汇，返回聚类中心。
```python
def build_vocabulary(features, vocab_size):
    kmeans = KMeans(n_clusters=vocab_size)
    kmeans.fit(features)
    return kmeans.cluster_centers_
```
`compute_bovw` 根据给定的特征和视觉词汇计算图像的词袋表示，并返回词袋表示。
```python
def compute_bovw(features, vocabulary):
    kmeans = KMeans(n_clusters=vocabulary.shape[0], init=vocabulary, n_init=1, max_iter=1)
    kmeans.fit(vocabulary)
    bovw_representation = np.zeros((1, vocabulary.shape[0]))
    if features is not None:
        assignments = kmeans.predict(features)
        for assignment in assignments:
            bovw_representation[0, assignment] += 1
    return bovw_representation
```

在主函数中，首先按每个类别前150个数据为训练数据的原创对原始数据进行训练集和测试集的划分，然后调用上面的函数进行SIFT特征提取、计算词汇表、计算词袋模型，然后训练svm分类器，对测试数据的词袋表示进行预测，计算预测结果与真实结果的准确率与混淆矩阵，并将混淆矩阵可视化。

数据划分：
```python
# 加载和预处理训练数据
train_labels = []
test_labels = []
train_img_paths = []
test_img_paths  = []
for path, dirs, files in os.walk(img_path):
    for i, file in enumerate(files):
        if (i < 150):
            train_img_paths.append(os.path.join(path, file))
        else:
            test_img_paths.append(os.path.join(path, file))
    if (len(files) > 0):
        train_labels.extend([path.split('/')[-1]] * 150)
        test_labels.extend([path.split('/')[-1]] * (len(files) - 150))
```

训练和测试：
```python
# 训练SVM分类器
print("正在训练SVM分类器...")
clf = SVC(kernel='linear')
clf.fit(train_bovw, train_labels)

# 测试词袋
test_bovw = []
for img_path in tqdm(test_img_paths, desc="正在测试分类器"):
    image_features = preprocess_data([img_path])
    bovw_representation = compute_bovw(image_features, vocabulary)
    test_bovw.append(bovw_representation)
test_bovw = np.concatenate(test_bovw, axis=0)

# 预测并评估分类器
predictions = clf.predict(test_bovw)
accuracy = accuracy_score(test_labels, predictions)
print("准确率:{:.3f}%".format(accuracy*100))
```

计算并可视化混淆矩阵：
```python
# 计算混淆矩阵
conf_mat = confusion_matrix(test_labels, predictions)
normalized_conf_mat = conf_mat.astype('float') / conf_mat.sum(axis=1)[:, np.newaxis]

categories = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14']

# 绘制混淆矩阵
plt.figure(figsize=(10, 8))
heatmap = sns.heatmap(normalized_conf_mat, annot=True, fmt='.2f', cmap='Blues', cbar=False)

heatmap.set_xticks(np.arange(len(categories))+0.5)
# 设置横坐标刻度标签为类别名称
heatmap.set_xticklabels(categories, rotation=45, ha='right')

# 设置纵坐标刻度在类别中心
heatmap.set_yticks(np.arange(len(categories))+0.5)
# 设置纵坐标刻度标签为类别名称
heatmap.set_yticklabels(categories, rotation=0)

plt.xlabel('预测类别')
plt.ylabel('真实类别')
plt.title('预测结果的混淆矩阵')
plt.show()
```

### 函数参数说明
`extract_sift_features`:
    - `image`: 输入的图像，是一个三维的NumPy数组，表示为(height, width, channels)。
`preprocess_data`:
    - `img_paths`: 包含图像文件路径的列表，用于指定要预处理的图像数据集。
`build_vocabulary`:
    - `features`: 特征矩阵，是一个二维NumPy数组，每行代表一个特征向量。
    - `vocab_size`: 视觉词汇的大小，即要构建的聚类中心数量。
`compute_bovw`:
    - `features`: 特征矩阵，是一个二维NumPy数组，每行代表一个特征向量。
    - `vocabulary`: 视觉词汇，是一个二维NumPy数组，每行代表一个聚类中心。

### 结果分析
在实验中发现，适当增大`vocab_size`可以带来更高的准确率，但考虑设备性能，最终选择的值为3000。
最终准确率如下：
![image.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20240429000700.png)

预测结果的混淆矩阵如下，其中每行之和为1，每个元素为预测类别在帧数类别中所占比例：
![Figure_1.png](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/Figure_1.png)
