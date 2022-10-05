- - -
sidebar_label : 单片与模块化区块链
- - -

# 单片与模块化区块链

区块链实例化[复制状态机](https://dl.acm.org/doi/abs/10.1145/98163.98167)：无许可分布式网络中的节点将确定性事务的有序序列应用于初始状态，从而产生共同的最终状态。 这意味着区块链需要以下四个功能：

- __执行__ 需要执行正确更新状态的交易。 因此，执行必须确保仅执行有效交易，即导致有效状态机转换的交易。
- __解决__ 需要一个环境来验证执行层， 解决欺诈纠纷，以及其他执行层之间的桥梁。
- __共识__ 意味着就交易的顺序达成一致。
- __数据可用性__ (DA) 需要使交易数据可用。 请注意，执行、结算和共识需要 DA。

传统区块链，即_单片区块链_，在一个基础共识层中共同实现所有四个功能。 单片区块链的问题在于共识层必须执行许多不同的任务，并且不能仅针对其中一项功能进行优化。 结果，单片模式限制了系统的吞吐量。

![Modular VS Monolithic](/img/concepts/monolithic-modular.png)

作为一种解决方案，模块化区块链将这些功能在多个专业层之间解耦，作为模块化堆栈的一部分。 由于专业化提供的灵活性，可以安排该堆栈的许多可能性。 例如，将四个功能分成三个专门的层。

基础层由 DA 和共识组成，因此被称为共识和 DA 层（或为简洁起见，称DA 层），而结算和执行都在它们自己的层中移动。 因此，每一层都可以专门的优化执行其功能，从而增加系统的吞吐量。 此外，这种模块化模式使多个执行层（即 [Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) ）能够使用相同的结算层和 DA 层。