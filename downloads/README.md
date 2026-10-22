# Downloads

安装包不走仓库、也不走本目录，而是挂在 GitHub Releases 上：

<https://github.com/inflator0717/pawcast-showcase/releases>

当前版本 `v0.1.0`：

| 项 | 值 |
|---|---|
| 文件 | `PawCast-0.1.0-arm64.dmg` |
| 大小 | 141851578 字节（约 142 MB） |
| SHA-256 | `a41c7aa21d4f4407daea0506b2918e88e43733b251fd4db96308e8cb62f47cfb` |

页面的下载按钮通过 `config.js` 里的 `window.PAWCAST_DOWNLOAD_URL` 指向该附件直链；
`config.js` 为空时回落到 HTML 里写死的 `./downloads/PawCast-0.1.0-arm64.dmg`（仅本地预览用）。

## 为什么 dmg 不放进仓库

单个 142 MB，每次构建都会变；GitHub 对常见对象有上传体积限制，且把它塞进 Git 历史会让
克隆成本永久变大。Release 附件正是为二进制分发设计的。

## 本地预览需要真下载时

把构建产物复制到本目录即可（不要提交）：

```bash
cp ../PawCast-0.1.0-arm64.dmg ./
```
