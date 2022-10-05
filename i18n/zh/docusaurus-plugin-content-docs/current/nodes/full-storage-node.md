- - -
sidebar_label : 存储全节点
- - -

# 设置 Celestia 存储全节点

本教程将指导您设置 Celestia 存储全节点，这是一个不连接到 Celestia App（因此不是全节点）但存储所有数据的 Celestia 节点。

## 硬件要求

建议使用以下硬件最低要求来运行存储全节点：

* 内存: 8 GB RAM
* CPU：四核
* 磁盘：250 GB SSD 存储
* 带宽： 1 Gbps下载/100 Mbps上传

## 设置您的存储全节点

以下教程是在 Ubuntu Linux 20.04 (LTS) x64 实例机器上完成的。

### 设置依赖项

您可以按照[这里](../developers/environment.md)教程设置依赖项。

## 安装 Celestia 节点

> 注意：确保您有至少 250+ Gb 的可用空间用于 Celestia 存储全节点

您可以按照[这里](../developers/celestia-node.md)的教程来安装 Celestia 节点。

### 运行存储全节点

#### 初始化存储全节点

运行以下命令：

```sh
celestia full init
```

#### 启动存储全节点

启动存储全节点并连接到验证器节点的 gRPC 端点 (通常在端口 9090上显示)：

> 注意：为了获得获取/提交状态相关信息的能力，例如提交 PayForData 交易或查询节点账号余额的能力，验证者（核心）节点的 gRPC 端点必须按指示传递如下

关于端口的说明：

> 注意： `--core.grpc。 ort` 默认为9090， 如果您没有在命令行中指定 它，它将默认设置为该端口。 如果你喜欢，你可以使用标注来指定另一个端口。

<!-- markdownlint-disable MD013 -->
```sh
celestia full start --core.ip http://<ip-address> --core.grpc.port <port>
```
<!-- markdownlint-enable MD013 -->

如果您想要查询示例RPC端点，请在[这里](./mamaki-testnet.md#rpc-endpoints)查看资源列表。

您可以按照[这里](./keys.md)的`cel-key`指示教程为您的节点创建密钥

启动存储全节点后，将为您生成一个钱包密钥。 你需要使用测试网代币为该地址注资，以支付 PayForData 交易。 您可以通过运行以下命令找到地址：

```sh
./cel-key list --node.type full --keyring-backend test
```

你可以从两种网络获取测试网代币：

* [Arabica](./arabica-devnet.md#arabica-devnet-faucet)
* [Mamaki](./mamaki-testnet.md#mamaki-testnet-faucet)

> 注意：如果你正在为你的主权Rollup运行一个全储存节点， 强烈建议您请求Arabica的开发网代币，因为Arabica有最新版本，可以用于开发你的主权Rollup测试。 您仍然可以使用Mamaki测试网，它几乎只用于验证者操作。

### 可选：使用自定义密钥运行存储全节点

要使用自定义密钥运行存储全节点：

1. 自定义密钥必须存在于 celestia 存储全节点目录中的正确路径(默认: `~/.celestia-full/keys/keyring-test`)
2. 自定义密钥的名称必须在 `开始`时传递，就像这样：

<!-- markdownlint-disable MD013 -->
```sh
celestia full start --core.ip http://<ip-address> --core.grpc.port <port> --keyring.accname <name-of-custom-key>
```
<!-- markdownlint-enable MD013 -->

### 可选：使用 SystemD 启动存储全节点

请按照[这里](./systemd.md#celestia-full-storage-node)的教程，通过 SystemD ，将存储全节点设置为后台进程。

有了它，您现在正在运行 Celestia 存储全节点。