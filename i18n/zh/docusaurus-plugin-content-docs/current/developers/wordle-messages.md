---
sidebar_label: 信息
---

# 信息

消息允许我们处理信息并将信息提交到特定模块。

From the Cosmos-SDK docs, [messages](https://docs.cosmos.network/master/building-modules/messages-and-queries.html#messages) are:

> In the Cosmos SDK, messages are objects that are contained in transactions to trigger state transitions. Each Cosmos SDK module defines a list of messages and how to handle them.

For messages for Wordle, given our initial design, we will make 2 messages with ignite.

* The first one is: `SubmitWordle` and it only passes the Wordle of the Day.
* The second one is: `SubmitGuess` and it attempts to guess the submitted wordle. 它还传递一个单词作为猜测。

有了这些初始设计，我们就可以开始创建消息了！

## 搭建信息

To create the `SubmitWordle` message, we run the following command:

```sh
ignite scaffold message submit-wordle word
```

This creates the `submit-wordle` message that takes in `word` as a parameter.

We now create the final message, `SubmitGuess`:

```sh
ignite scaffold message submit-guess word
```

Here, we are passing a word as a guess with `submit-guess`.