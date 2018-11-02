/**公司概况 */
define(function (require, exports, module) {
  (function () {
    var $ = require('jquery');
    mui(".latest-indicators-item").on('tap', '.js-toggle', function () {
      $(this).siblings('.js-toggle-con').toggle();
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
        $(this).text('收起')
      }else{
        $(this).text('展开')
      }
    });
  })(mui);
});