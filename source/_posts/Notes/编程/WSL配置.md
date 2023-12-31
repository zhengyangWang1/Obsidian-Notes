---
title: WSL配置
categories:
  - Notes
  - 编程
tags:
  - WSL
---

WSL(Windows Subsystem for Linux)，Windows自带的Linux子系统

## TODO 
- [ ] 输入bash没反应，重启后正常，待解决

#### 安装过程及问题
在Windows中开启该功能然后重启

![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230923234736.png)

> 可能出现以下问题
> ![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230923234752.png)
> 造成该问题的原因是WSL版本由原来的WSL1升级到WSL2后，内核没有升级，前往[微软WSL官网](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-kernel)下载安装适用于 x64 计算机的最新 WSL2 Linux 内核更新包即可。

#### 迁移到D盘

```text
# 查看已经安装的虚拟机
wsl -l -v
# 关闭所有正在运行的虚拟机
wsl --shutdown
# 虚拟机文件导出
wsl --export 虚拟机名称 保存路径
wsl --export Ubuntu D:\\wsl-Ubuntu.tar
# 注销原虚拟机
wsl --unregister Ubuntu
# 导入虚拟机文件
wsl --import 虚拟机名称 目标路径 虚拟机文件路径 --version 2
wsl --import Ubuntu D:\\WSL2\\Ubuntu D:\\wsl-Ubuntu.tar --version 2
# 最后可以选择删除掉虚拟机文件，因为他已经没用了
```

**更改默认用户：**
- 在powershell中输入`ubuntu.exe config --default-user 用户名`来将root用户改为普通用户
- 输入`ubuntu config --default-user root`将普通用户改为默认用户，可以在忘记root密码时使用

#### 配置python库环境
在miniconda官网中找到下载命令，下载miniconda
然后新建环境，在环境中下载相关依赖包
#### Pycharm中使用WSL
在Pycharm中添加解释器
![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230923234812.png)
选择WSL，选择配置好的环境

#### 其他
WSL中/mnt文件里是Windows文件的映射
![](https://cdn.jsdelivr.net/gh/zhengyangWang1/image@main/img/20230923234824.png)

在想转到Windows某目录下时需要cd到其映射后的目录
