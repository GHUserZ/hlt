//伪加载更多
define(function (require, exports, module) {
  (function () {
    var $ = require('jquery');
    var showMoreNChildren = function ($children, n) {
      //显示某jquery元素下的前n个隐藏的子元素
      var $hiddenChildren = $children.filter(":hidden");
      var cnt = $hiddenChildren.length;
      for (var i = 0; i < n && i < cnt; i++) {
        $hiddenChildren.eq(i).show();
      }
      return cnt - n; //返回还剩余的隐藏子元素的数量
    }

    jQuery.showMore = function (selector) {
      if (selector == undefined) {
        selector = ".showMoreNChildren"
      }
      //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
      $(selector).each(function () {
        var pagesize = $(this).attr("pagesize") || 10;
        var $children = $(this).children();
        if ($children.length > pagesize) {
          for (var i = pagesize; i < $children.length; i++) {
            $children.eq(i).hide();
          }
          $('<p class="mui-text-center mt-15 pb-20"><a href="javascript:;" class="font14 showMore">展示更多</a></p>').insertAfter($(this).parents('.table')).click(function () {
            if (showMoreNChildren($children, pagesize) <= 0) {
              //如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
              $(this).hide();
            };
          });
        }
      });
    }
    $.showMore();
    //放大字体
    mui('.news-details-wrapper').on('tap','.fontSize',function(){
      //获取para的字体大小
      var thisEle = $(".news-con  p").css("font-size");
      //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
      var textFontSize = parseFloat(thisEle, 10);
      var unit = thisEle.slice(-2); //获取单位
      if(textFontSize>=18){
        return false;
      }else{
        textFontSize += 1;
      }
      //设置para的字体大小
      $(".news-con p").css("font-size", textFontSize + unit);
    });
  })(mui);
  
});