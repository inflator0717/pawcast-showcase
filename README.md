# PawCast

macOS 桌面宠物与壁纸联动视频播放器。屏幕角落常驻一只可拖动的像素小狗，右键打开「放映模式」后，一个与桌面壁纸中电视等大的透明播放框压在普通窗口下方；鼠标悬停才播放本地视频，移开立即暂停并恢复完全透明。

PawCast 面向企业培训中的碎片化学习与桌面信息展示场景。桌面宠物、壁纸场景与视频播放窗口融合在一起，增加桌面的趣味性与陪伴感，降低学习视频的访问和操作成本。

本仓库只承载**产品展示页**与**安装包发布**，站点内容即仓库根目录。

## 在线访问

<https://inflator0717.github.io/pawcast-showcase/>

## 下载

到 [Releases](https://github.com/inflator0717/pawcast-showcase/releases) 下载 `PawCast-0.1.0-arm64.dmg`（Apple Silicon）。

安装：

1. 把 PawCast 拖进「应用程序」
2. 右键点按应用图标，选择「打开」
3. 确认后即可使用

应用未签名，首次打开需要右键「打开」。安装包 SHA-256 见 Release 说明与页面下载区。

## 仓库结构

```
index.html                    展示页
styles.css / main.js          样式与脚本（无框架、无构建）
config.js                     下载直链配置
assets/                       演示视频、海报、图标
downloads/                    本地预览说明（dmg 不入库）
```

## 本地预览

```bash
python3 -m http.server 5345
# 打开 http://127.0.0.1:5345/
```
