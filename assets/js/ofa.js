//财务分析
define(function (require, exports, module) {
  require('echarts');
  require('swiper');
  (function () {
    var $ = require('jquery');
    var li = $('.com-tabs li');
    $('.fund-ccmx li').on('touchend', function () {
      var _index = $(this).index();
      if (_index == 1) {
        initSwiper('#swiper_header2', '#swiper_body2');
      }
    });
    initSwiper(1);
    mui('.m-tabs .js-top-tabs').on('tap','li',function(){
      var index = $(this).index();
      $('.m-tabs .js-top-tabs li').removeClass('active');
      $(this).addClass('active');
      $('.mui-slider-item').removeClass('mui-active');
      $('.mui-slider-item').eq(index).addClass('mui-active');
      if(index === 0){
        initSwiper(1);
      }else if(index === 1){
        initSwiper(2);
      } else if (index === 2) {
        initSwiper(3);
      } else {
        initSwiper(4);
      }
    });
    //季度切换
    mui('.fNav .js-f-tabs').on('tap', 'li', function () {
      $('.m-tabs .js-f-tabs li').removeClass('active');
      $(this).addClass('active');
    });
    function initSwiper(index){
      new Swiper('.finance-swiper-container'+index, {
        nested: true,
        slidesPerView: 2,
        spaceBetween: 0,
        autoHeight: true //高度随内容变化
      });
    }
  })(mui);
});