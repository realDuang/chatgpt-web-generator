# CHATGPT_WEB_GENERATOR

## 简介

一个简洁的类 `telegram` 的 `web` AI 聊天页面。

处理引擎整合了 `OPENAI` 的几大强力模型，支持聊天、图像生成处理、语音转文字、代码补全等多项功能。

## 用例展示

![20230330152243](https://zakum-1252497671.cos.ap-guangzhou.myqcloud.com/20230330152243.png)

## 开始

1. 使用`pnpm` 安装依赖。

```sh
pnpm i
```

2. 在根目录下新建 `.env.local` 文件，并将内容更改为：

```conf
OPENAI_API_KEY=<你的OPNENAI key>
```

3. 使用 `pnpm run dev` 运行项目。

## 功能特性

### 聊天对话

直接发送消息即可。支持上下文解析。GPT 语言模型可在设置中自行更换。

### 图片生成

在设置中，选择 `小助手功能` 为 - `图像生成`，并在之后的对话中加入需要生成的图片描述即可。

### 语音转录

施工中...
