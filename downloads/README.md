# Downloads

完整的发布与分发步骤（GitHub Pages 部署、Release 上传、`config.js` 回填）见 [../README.md](../README.md)。

站点默认从同目录取安装包：`./PawCast-0.1.0-arm64.dmg`
（即页面按钮的 href `./downloads/PawCast-0.1.0-arm64.dmg`）。

## dmg 不入库

安装包体积大且每次构建都会变，`.gitignore` 已用 `site/downloads/*.dmg` 忽略所有 dmg。
本地预览需要时，把 `npm run dist` 产出的
`dist/PawCast-0.1.0-arm64.dmg` 复制到本目录即可，**不要 `git add`**。

```bash
npm run dist
cp dist/PawCast-0.1.0-arm64.dmg site/downloads/
```

## 发布到 Release

正式分发走 GitHub Release，而不是把 dmg 提交进仓库：

1. `npm run dist` 生成 `dist/PawCast-0.1.0-arm64.dmg`
2. 计算校验值：`shasum -a 256 dist/PawCast-0.1.0-arm64.dmg`
3. 在 GitHub 上创建 tag（如 `v0.1.0`）与 Release，把 dmg 作为附件上传
4. 复制附件直链，填进 `site/config.js`：

```js
window.PAWCAST_DOWNLOAD_URL = 'https://github.com/<owner>/<repo>/releases/download/v0.1.0/PawCast-0.1.0-arm64.dmg';
```

5. 把上一步得到的 SHA-256 填进 `site/index.html` 下载区里校验值的位置
   （当前值为本轮 `npm run dist` 产物，重新构建后需重新计算并替换）。

当前 dmg 实测：`PawCast-0.1.0-arm64.dmg`，140644427 字节（约 134 MB），
SHA-256 `cd9ffd96f9865f29670bd523d22da885caeeb2f4a1e8488ac3b252d12ffe2fb5`。

`config.js` 留空时，按钮保留 HTML 里写死的相对路径
`./downloads/PawCast-0.1.0-arm64.dmg`（适合把 dmg 手动放到本目录的本地预览）。
