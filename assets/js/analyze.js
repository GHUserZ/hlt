/**主页 */
define(function (require, exports, module) {
  require('echarts');
  (function(){
    var $ = require('jquery');
    var charts = require('charts');
   
    var dRadar = document.getElementById('barCharts');
    if (dRadar) {
      fundInflowCharts(dRadar);
      mui('.m-tabs-wrapper').on('tap','#dxzj .time-item',function(){
        $('.js-dRange').hide();
        $('#dxzj .time-item').removeClass('active');
        $(this).addClass('active');
        var index= $(this).index();
        if(index ===0){
          fundInflowCharts(dRadar);
        }else if(index === 1){
          fundBalanceCharts(dRadar);
        }else{
          $('.js-dRange').show();
          historyCharts(dRadar);
        }
      });
      //东向历史时间区间
      mui('.js-dRange').on('tap', ' .time-item', function () {
        $('.js-dRange .time-item').removeClass('active');
        $(this).addClass('active');
        historyCharts(dRadar);
      });
    }
    /**资金流入 */
    function fundInflowCharts(elm){
      var myCharts = echarts.init(elm);
      var xData = ['2000', '2001', '2003', '2004', '2005', '2006'] 
      var data = [12, 21, 3, 1, 10, 8];
      charts.barCharts( data,xData,myCharts); 
    }
  })(mui);
});