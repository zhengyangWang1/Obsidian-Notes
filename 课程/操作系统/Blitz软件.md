Blitz是一个软件包，内含一个虚拟机，给操作者提供一个建立操作系统内核的功能

学生将在主机上编辑、编译和链接他们的操作系统内核项目。然后，他们将使用仿真器在虚拟机上执行这些项目。当学生的代码出现错误时，仿真器会显示各种错误信息，学生可以使用仿真器工具进行调试

#### 架构
CPU 采用 RISC 设计，大致仿照 Sun 的 Sparc 架构。 BLITZ 处理器包含 32 个通用整数寄存器，每个寄存器为 32 位。

处理器有两种执行模式，即 "系统模式 "和 "用户模式"。内核代码在系统模式下运行，而应用程序则在用户模式下运行。

BLITZ 机器包括两个输入输出设备。第一个是磁盘。仿真器通过主机上的文件来模拟磁盘。第二个 I/O 设备是终端，仿真器通常将终端输入/输出直接传递到主机的用户界面，这样学生就可以直接与运行中的 BLITZ 代码交互。

该架构还包括一个 "trap "指令，用户程序可以执行该指令。陷阱指令允许用户进程进入内核。

调试器内置于模拟器中，并且是模拟器的组成部分。该模拟器可以在命令行模式下运行，学生可以一次键入一个命令。这些命令可用于调试其 BLITZ 内核代码。

#### 工具
- **blitz：** The BLITZ virtual machine emulator and debugger虚拟机模拟器和调试器
- **asm：** The BLITZ assembler汇编器。
> 汇编器（Assembler）是将汇编语言翻译为机器语言的程序。一般而言，汇编生成的是目标代码，需要经链接器（Linker）生成可执行代码才可以执行。
- **lddd：** The BLITZ linker链接器
- **dumpObj：** A tool to examine BLITZ object and executable files检查blitz对象和可执行文件
- **diskUtil：** A tool to manipulate the initial file system on the emulated BLITZ disk用于操作模拟 BLITZ 磁盘上的初始文件系统的工具
- **kpl：** The KPL compiler编译器