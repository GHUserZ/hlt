/**股本股东 */
define(function (require, exports, module) {
  require('echarts');
  (function () {
    var $ = require('jquery');
    // 滑动切换
    var gallery = mui('.mui-slider');
    var slider = gallery.slider({interval: 0});
    // 监听滑动事件
    document.querySelector('.mui-slider').addEventListener('slide', function (event) {
      var currIndex = slider.getSlideNumber();
      var itemLength = $('.mui-slider-item').length;
      console.log(itemLength)
      if(currIndex === 0){
        $('#prev').hide();
      }else{
        $('#prev').show();
      }
      if (currIndex === (itemLength - 1)){
        $('#next').hide();
      }else{
        $('#next').show();
      }
    })
    //上一个
    mui('.prevNextBox').on('tap', '#prev', function () {
      slider.prevItem();
    });
    //下一个
    mui('.prevNextBox').on('tap', '#next', function () {
      slider.nextItem();
    });
    
    chartsRender();
    /**绘制饼图
     * 
     * color:饼图颜色
     * lData:图例文字
     * sData：饼图数据
     * 
    */
    function chartsRender(){
      var charts = require('charts');
      var dom = document.getElementsByClassName('pieCharts');
      var lData = ['其它普通股', 'CDR折算普通股'];
      var colorArr = ['#148E5D', '#FE4148'];
      var sData = [{ value: 10, name: '其它普通股' },{ value: 20, name: 'CDR折算普通股' }];
      for(var i = 0;i<dom.length;i++){
        var myCharts = echarts.init(dom[i]);
        charts.pieCharts(colorArr, lData, sData, myCharts);
      }
    }
    // tab样式切换
    mui('.time-list').on('tap', '.time-item', function () {
      $('.time-list .time-item').removeClass('active');
      $(this).addClass('active');
    });


  })(mui);
});