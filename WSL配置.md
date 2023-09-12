WSL(Windows Subsystem for Linux)，Windows自带的Linux子系统

#### 安装过程及问题
在Windows中开启该功能然后重启

![[Pasted image 20230912234005.png]]

> 可能出现以下问题
> ![[Pasted image 20230912234523.png]]
> 造成该问题的原因是WSL版本由原来的WSL1升级到WSL2后，内核没有升级，前往[微软WSL官网](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-kernel)下载安装适用于 x64 计算机的最新 WSL2 Linux 内核更新包即可。

#### 配置python库环境
在miniconda官网中找到下载命令，下载miniconda
然后新建环境，在环境中下载相关依赖包
#### Pycharm中使用WSL
在Pycharm中添加解释器
![[Pasted image 20230912235338.png]]
选择WSL，选择配置好的环境

#### 其他
WSL中/mnt文件里是Windows文件的映射
![[Pasted image 20230912235011.png]]

在想转到Windows某目录下时需要cd到其映射后的目录
