# 音标有谱

一个英语音标点读练习页。首页展示 48 个音标，点击即可播放发音。

## 功能

- 48 个英语音标：按单元音、双元音、辅音分组展示。
- 分类筛选：支持按元音、辅音、长短音、发音方式、清浊筛选。
- 点击播放：点击音标播放对应发音，切换时自动停止上一段。

## 参考来源

音频参考：

- <https://github.com/boommanpro/phonetic_symbol_web/tree/main/words-voice>

版权说明：

本项目仅用于学习目的，音标内容版权归原网站所有。原网站：<https://www.yyybabc.com/>

## 本地运行

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
pnpm preview
```

## 字体

页面只加载一个霞鹜文楷 Screen 子集（`src/assets/fonts/lxgwwenkaiscreen-page.woff2`），只包含 `src/` 里用到的字符。修改页面文案后运行：

```bash
pnpm font:subset # 需要 uv，首次会下载上游完整字体到 .cache/
```

`pnpm build` 会先检查子集是否覆盖所有字符，缺字时直接报错。
