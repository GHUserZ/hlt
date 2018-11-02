define(function (require, exports, module) {
  var utils = {};
  /**对搜索字符变色
   * val input value值
   * str 接口传入内容
   */
  utils.redString = function(val,str) {
    var keyword = val;
    var reg = new RegExp("(.*?)(" + keyword + ")(.*)");
    if (reg.test(str)) return RegExp.$1 + '<span class="cRed">' + RegExp.$2 + '</span>' + RegExp.$3;
    else return str;
  };
  utils.helpDialog = function(str) {
    
  };
  utils.autoTimeline = function(start, end) {
    var timeline = [],
      startHour = start.split(':')[0] * 1,
      startMin = start.split(':')[1] * 1,
      endHour = end.split(':')[0] * 1,
      endMin = end.split(':')[1] * 1;
    for (var i = startHour; i <= endHour; i++) {
      var start = (i == startHour) ? startMin : '0';
      var end = (i == endHour) ? endMin : '59';
      for (var j = start; j <= end; j++) {
        j = (j < 10) ? '0' + j : j;
        timeline.push(i + ":" + j);
      }
    }
    return timeline;
  };
  utils.price = function(value) {
    return value == null ? '--' : value;
  };
  utils.curChng = function(value) {
    if(value === null || value === '') {
      return '--';
    } else {
      if(value > 0) {
        return '+' + value;
      } else {
        return value;
      }
    }
  };
  utils.curChngPct = function(value) {
    if(value === null || value === '') {
      return '--';
    } else {
      if(value > 0) {
        return '+' + value.toFixed(2) + '%';
      } else {
        return value.toFixed(2) + '%';
      }
    }
  };
  utils.changeColor = function(num) {
    if(num == 0) {
      return 'color:#000;';
    } else if(num > 0) {
      return 'color:#e3102b;';
    } else {
      return 'color:#06ac0c';
    }
  };
  //存储
  utils.setStorage = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };
  //取出数据
  utils.getStorage = function(key) {
    let data = localStorage[key];
    if(!data || data === "null") {
      return null;
    }
    return JSON.parse(localStorage.getItem(key));
  };
  // 删除单个数据
  utils.removeStorage = function(key) {
    localStorage.removeItem(key);
  };
  //删除全部
  utils.removeAllStorage = function() {
    localStorage.clear();
  };
  module.exports = utils;
});
