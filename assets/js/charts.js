define(function (require, exports, module) {
  var util = require('utils');
  var charts = {}; // 加入所有绘图方法
  charts.fstCharts = function (dataList, Dvalue,close,opt) {
    //生成横坐标时间轴
    var beforenoon = util.autoTimeline('9:30', '11:30');
    var afternoon = util.autoTimeline('13:00', '15:00');
    beforenoon.splice(beforenoon.length - 1, 1);
    afternoon[0] = '13:00';
    var timeline = beforenoon.concat(afternoon);
    var option = {
      // animation: false,
      tooltip: {
        show: false,
      },
      grid: {
        left: '14%',
        top: '10%',
        bottom: '11%',
        right: '6%'
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#333',
            type: 'solid'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333',
            type: 'solid'
          }
        },
        axisLabel: {
          interval: 59,
          textStyle: {
            color: "#fff"
          }
        },
        data: timeline
      }],
      yAxis: [{
        position: 'left',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#333',
            type: 'dashed'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333',
            type: 'solid'
          }
        },
        axisLabel: {
          interval: 59,
          textStyle: {
            color: "#fff"
          }
        },
        max: Number(close) + Dvalue,
        min: Number(close) - Dvalue,
        splitNumber: 4,
        interval: 2 * Dvalue / 4
      }],
      series: [{
        name: '',
        type: 'line',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          normal: {
            color: 'rgba(30, 136, 229,.2)'
          }
        },
        itemStyle: {
          normal: {
            color: '#51a5f7',
          }
        },
        lineStyle: {
          normal: {
            width: 1
          }
        },
        data: dataList
      }]
    }
    opt.clear();
    opt.setOption(option);
  }
  /**历史走势 */
  charts.historyCharts = function (dataList, xData,opt) {
    var option = {
      // animation: false,
      tooltip: {
        show: false,
      },
      grid: {
        left: '14%',
        top: '10%',
        bottom: '11%',
        right: '6%'
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#333',
            type: 'solid'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333',
            type: 'solid'
          }
        },
        axisLabel: {
          interval: 59,
          textStyle: {
            color: "#fff"
          }
        },
        data: xData
      }],
      yAxis: [{
        position: 'left',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: '#333',
            type: 'dashed'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333',
            type: 'solid'
          }
        },
        axisLabel: {
          // interval: 59,
          textStyle: {
            color: "#fff"
          }
        },
        // max: Number(close) + Dvalue,
        // min: Number(close) - Dvalue,
        // splitNumber: 4,
        // interval: 2 * Dvalue / 4
      }],
      series: [{
        name: '',
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: '#51a5f7',
          }
        },
        lineStyle: {
          normal: {
            width: 1
          }
        },
        data: dataList
      }]
    }
    opt.clear();
    opt.setOption(option);
  }
  /**饼图 */
  charts.pieCharts = function(color,lData,sData,opt){
    var option = {
      tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        bottom: '15',
        itemWidth: 20,
        itemHeight: 12,
        align: 'left',
        data: lData,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['30%', '60%'],
          center:['50%','40%'],
          color: color,
          hoverAnimation:false,
          label: {
            normal: {
              formatter: '{d}%'
            }
          },
          data:sData
        }
      ]
    };
    opt.setOption(option);
  }
  /**饼图 */
  charts.pieCharts2 = function (color, lData, sData, opt) {
    var option = {
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: 'vertical',
        top:'30%',
        right:'10%',
        itemWidth: 10,
        itemHeight: 10,
        align: 'left',
        data: lData,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['30%', '70%'],
          center: ['30%', '55%'],
          color: color,
          hoverAnimation: false,
          label: {
            normal: {
              show:false,
              formatter: '{d}%'
            }
          },
          data: sData
        }
      ]
    };
    opt.setOption(option);
  }
  charts.barCharts = function (data,xData,opt){
    var option = {
      tooltip: {
        trigger: 'axis',
        show:false
      },
      grid: {
        left: '15%',
        top: '10%',
        right:'6%',
        bottom:'10%'
      },
      xAxis: {
        type: 'category',
        name: '',
        nameLocation: 'center',
        nameGap: '30',
        axisLabel: {
          textStyle: {
            color: "#fff"
          }
        },
        axisLine: {
          lineStyle: {
            color: '#151723'
          }
        },
        axisTick: { show: false },
        data: xData
      },
      yAxis: {
        type: 'value',
        nameLocation: 'center',
        nameGap: '30',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color:'#fff'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#151723'
          }
        },
        axisLabel: {
          textStyle: {
            color: "#fff"
          },
          formatter: '{value}%'
        },
        splitLine: {
          show: false
        }
      },
      color: ['#347CD8'],
      series: [{
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'top',
            color:'#fff'
          }
        },
        data: data
      }]
    };
    opt.setOption(option);
  }
  module.exports = charts;
});