# CHATGPT_WEB_GENERATOR

## 简介

一个简洁的类 `telegram` 的 `web` AI 聊天页面。

处理引擎整合了 `OPENAI` 的几大强力模型，支持聊天、图像生成处理、语音转文字、代码补全等多项功能。

## 前置工作

1. 使用`pnpm` 安装依赖。

```sh
pnpm i
```

2. 在根目录下新建 `.env.local` 文件，并将内容更改为：

```conf
OPENAI_API_KEY=<你的OPNENAI key>
```

3. 使用 `pnpm run dev` 运行项目。

## 使用方式

### 聊天对话

直接发送消息即可。支持上下文解析。

### 图片生成

在发送的消息前加上 `#image# ` 前缀，并在之后加入需要生成的图片描述即可。

### 语音转录

施工中...
