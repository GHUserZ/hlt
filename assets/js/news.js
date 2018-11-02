/**新闻 */
define(function (require, exports, module) {
  (function () {
    var $ = require('jquery');
    var MeScroll = require('mescroll');
    var mescrolls = new MeScroll('mescroll',{
      down:{
        isLock:true
      },
      up: {
        auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
        page:{
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 5 // 每页数据的数量
        },
        noMoreSize:5,
        isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
        htmlNodata: '<p class="upwarp-nodata">数据已加载完</p>', //无数据的布局
        callback: upCallback //上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
      }
    });
    /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function upCallback(page) {
      var pageNum = page.num-1
      //联网加载数据
      getListDataFromNet(pageNum, page.size, function (curPageData) {
        //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        console.log("page.num=" + pageNum + ", page.size=" + page.size + ", curPageData.length=" + curPageData.rows.length);
        mescrolls.endBySize(page.size, curPageData.total_rows)
        setListData(curPageData); 
      }, function () {
        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        mescrolls.endErr();
      });
    }

    /*设置列表数据*/
    function setListData(curPageData) {
      var data = curPageData.rows
      var dom = $('#newsContent');
      var html = '';
      for (var i = 0; i < data.length; i++) {
        html += '<li>' +
          '<a href="javascript:;" class="title pl14 mui-ellipsis" >' + data[i].TITLE + '</a >' +
          '<p class="info  pl14">提供者 <span class="name mr10">' + data[i].SOURCE + '</span><span class="time">' + time(data[i].DECLAREDATE) + '</span></p> ' +
          '<a href="javascript:;" class="txt">' + data[i].TXT_CONTENT + '</a> ' +
          '</li>';
      }
      dom.append(html);
    }
    // 请求数据
    function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
      var pageNum = pageNum*20
      var url = `http://api.z3cloud.com.cn/base/HLT_STK_NEWS/full=2&zip=Gzip&skip=${pageNum}&limit=20`;
      $.ajax({
        url: url,
        async: false,
        cache: false,
        success: function (data) {
          successCallback && successCallback(data);
        }});
    }

    function time(time){
      var d = new Date(time);
      var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      return times;
    }
  })(mui);
});