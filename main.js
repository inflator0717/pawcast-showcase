// 页面脚本：把 config.js 里的下载直链应用到下载按钮上。
// config.js 未配置（空值或未加载）时，按钮保留 HTML 里写死的默认路径。
(function () {
  var url = window.PAWCAST_DOWNLOAD_URL;
  if (typeof url !== 'string' || !url.trim()) return;

  var links = document.querySelectorAll('[data-download-link]');
  for (var i = 0; i < links.length; i += 1) {
    links[i].setAttribute('href', url.trim());
  }
})();
