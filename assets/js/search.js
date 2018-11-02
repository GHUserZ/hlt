/**公司概况 */
define(function (require, exports, module) {
  (function () {
    var $ = require('jquery');
    var util = require('utils');

    //股票搜索
    document.getElementById('textSearch').addEventListener('input', function () {
      stockSearch();
    });

    //股票搜索
    function stockSearch() {
      var keyword = document.getElementById('textSearch').value;
      keyword = keyword.toUpperCase();
      var table = document.body.querySelector('.search-result');
      table.innerHTML = "";
      if (keyword != null && keyword.trim() != "") {
        var url = `http://api.z3cloud.com.cn/base/HLT_STK_CODE/full=2&zip=Gzip`;
        $.ajax({
          url: url, 
          async: false,
          cache: false,
          success:function(data){
            var data = data.rows;
            var data2 = [];
            for(var i = 0;i<data.length;i++){
              var reg = new RegExp("(.*?)(" + keyword + ")(.*)");
              if (reg.test(data[i].STOCKSNAME) || reg.test(data[i].STOCKCODE)){
                data2.push(data[i]);
              };
            }
            searchRender(keyword, data2);
          }
        })
      }else{
        $('#searchResultDiv').hide();
      }
    };
    //搜索结果渲染
    function searchRender(keyword, data) {
      $('#searchResultDiv').show();
      var table = document.body.querySelector('#searchResultDiv');
      var result = data;
      if (result.length != 0) {
        var ul = document.createElement('ul');
        ul.className = 'search-result-list';
        for (var i = 0; i < result.length; i++) {
          var li = document.createElement('li');
          var stock_code = result[i].STOCKCODE;
          var stock_info = result[i].STOCKCODE + "-" + result[i].STOCKSNAME;
          li.innerHTML = '<a href="javascript:;" id="' + stock_code + '" class="result-item">'+
                         ' <div class="">'+
                         '   <p class="name">' + util.redString(keyword, result[i].STOCKSNAME) + '</p>'+
                         '   <p class="code">' + util.redString(keyword, result[i].STOCKCODE) + '</p>'+
                         ' </div>'+
                         ' <div class="pr">'+
                         '   <div class="icon-box addStock">'+
                         '     <span class="mui-icon mui-icon-plusempty"></span>'+
                         '   </div>'+
                         ' </div>'+
                        '</a>';
          ul.appendChild(li);
        }
        table.appendChild(ul);
      } else {
        var div = document.createElement('div');
        div.className = 'm-no-search mui-text-center';
        div.innerHTML = '<i class="m-icon icon-noSearch mb30"></i>' +
          '<p>抱歉~暂无符合“' + keyword+'”的搜索条件。</p>';
        table.appendChild(div);
      }
    };

    //添加点击
    $('body').delegate('.search-result-list .addStock','tap',function(e){
      e.stopPropagation();

    });
    //a链接点击跳转
    $('body').delegate('.search-result-list .result-item', 'tap', function (e) {
      e.stopPropagation();
      window.location.href = ''
    });
  })(mui);
});