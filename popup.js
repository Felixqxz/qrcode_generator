document.addEventListener('DOMContentLoaded', function() {
  var queryInfo = {
    active: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var url = tabs[0].url;
    new QRCode(document.getElementById("status"), url);
    // new QRCode(document.getElementById("status"), {
    //   text: url,
    //   width: 128,
    //   height: 128,
    //   colorDark : "#f60",
    //   colorLight : "#ccc",
    //   correctLevel : 3 // 二维码结构复杂性 0~3
    // });
  });
});
