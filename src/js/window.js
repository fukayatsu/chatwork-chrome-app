var resize_content = function() {
  var content = document.getElementById('content');
  content.style.width  = (window.document.documentElement.clientWidth  - 16) + 'px'
  content.style.height = (window.document.documentElement.clientHeight - 16) + 'px'
}

window.onresize = resize_content;
window.onload = function() {
  resize_content();
  var webview = document.getElementById('webview');
  webview.addEventListener('newwindow', function(e) {
    e.preventDefault();
    window.open(e.targetUrl)
  });
};

