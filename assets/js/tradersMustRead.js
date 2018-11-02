/**操盘必读 */
define(function (require, exports, module) {
  require('echarts');
  (function () {
    var $ = require('jquery');

    init();

    function init() {
      industryChartsRender();
      structureChartsRender()
    }
    /**主营行业饼图
     * 
     * color:饼图颜色
     * lData:图例文字
     * sData：饼图数据
     * 
    */
    function industryChartsRender(){
      var charts = require('charts');
      var dom = document.getElementById('js-industry-pie');
      var lData = ['销售啤酒', '运输服务', '包装物销售', '其它'];
      var colorArr = ['#8957A1', '#CC9900', '#3A92FF', '#3366FF'];
      var sData = [{ value: 10, name: '销售啤酒' }, { value: 20, name: '运输服务' }, { value: 20, name: '包装物销售' }, { value: 20, name: '其它' }];
      var myCharts = echarts.init(dom);
      charts.pieCharts2(colorArr, lData, sData, myCharts);
    }

    /**股本结构饼图
     * 
     * color:饼图颜色
     * lData:图例文字
     * sData：饼图数据
     * 
    */
    function structureChartsRender() {
      var charts = require('charts');
      var dom = document.getElementById('stockStructure');
      var lData = ['其它普通股', 'CDR折算普通股'];
      var colorArr = ['#148E5D', '#FE4148'];
      var sData = [{ value: 10, name: '其它普通股' }, { value: 20, name: 'CDR折算普通股' }];
      var myCharts = echarts.init(dom);
      charts.pieCharts(colorArr, lData, sData, myCharts);
    }

    // tab样式切换
    mui('.time-list').on('tap', '.time-item', function () {
      $('.time-list .time-item').removeClass('active');
      $(this).addClass('active');
    });


  })(mui);
});