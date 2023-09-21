---
title: Git操作
categories:
  - Notes
  - AI
update:
---
## stable diffusion 模型画任意要求

飞桨： [文生图[多loRA,ControlNet预处理,高清v2,视频生成]v11_副本](https://aistudio.baidu.com/projectdetail/6665563)
kaggle：[免费部署stable diffusion，白嫖32G GPU - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/643442494)
## ai 二维码美化

飞桨：[AI艺术二维码生成器]([【创意应用】AI艺术二维码生成 - 飞桨AI Studio (baidu.com)](https://aistudio.baidu.com/projectdetail/6452331))



---

#### Stable Diffusion使用
[GitHub - AUTOMATIC1111/stable-diffusion-webui: Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)在Github上下载压缩包并按照说明安装
![[Pasted image 20230913125854.png]]

**添加模型：** 在[Civitai | Stable Diffusion models, embeddings, LoRAs and more](https://civitai.com/)上下载模型，添加到相应文件夹。
- Checkpoint:基本模型，下载到webui\\models\\Stable-diffusion
- Lora:微调模型，下载到webui\\models\\Lora
- 其他（待补充）

**插件下载：**
- 中文汉化：[GitHub - VinsonLaro/stable-diffusion-webui-chinese: stable-diffusion-webui 的汉化扩展](https://github.com/VinsonLaro/stable-diffusion-webui-chinese)作者写了非常详细的下载和使用教程
- controlnet：[GitHub - lllyasviel/ControlNet-v1-1-nightly: Nightly release of ControlNet 1.1](https://github.com/lllyasviel/ControlNet-v1-1-nightly)同上的下载方式
**注意：** 下载时可能会因为网络问题下载失败，挂梯子多尝试几次。下载失败后需要到webui\\tmp中删除文件夹，否则无法再次下载。

**Controlnet使用：** 下载controlnet插件后，按照[GitHub - Mikubill/sd-webui-controlnet: WebUI extension for ControlNet](https://github.com/Mikubill/sd-webui-controlnet)提供的地址下载controlnet模型（14个），放到webui\\extensions\\sd-webui-controlnet\\models目录下
此时在WebUI中即可看到controlnet界面，有许多参数可选项可调
可参考b站教程：[“牛逼”的教程来了！一次学会AI二维码+艺术字+光影光效+创意Logo生成，绝对是B站最详细的Stable Diffusion特效设计流程教学！AI绘画进阶应用\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1gX4y1J7ei/?spm_id_from=333.788.recommend_more_video.-1&vd_source=7d4ddbfe6a66f2fbe94075935b693c57)

**模型配置方案：** 
SD提供了太多的模型组合，在此记录一下模型搭配及其效果

**提示词：** 
一些通用的提示词可以提高图像质量，特定的提示词可以指定生成内容