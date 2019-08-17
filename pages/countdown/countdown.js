// pages/countdown/countdown.js
const Countdown = require('../../utils/countDown.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    endtime: Date.now() + 360000000

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.doCountDwon(this.data.endtime);
  },
  doCountDwon: function(endtimeMSec) {
    let that = this;
    let endTime = endtimeMSec - Date.now();
    // let endTime=10000
    if (endTime !== 0) {
      let timer = new Countdown({
        context: this,
        second: endTime,
        endText: '已结束',
        isCustom: false,
        customDataName: '',
        isShowPro: false,
        start: function(flag) {
          //保存计时器标志
          console.log("start.flag=" + flag);

        },
        done: function(options) {
          //处理后倒计时后，是否需要改变icon
          console.log(options);
          that.setData({
            isFinish: true,
          });
        }
      })
      timer.run();

    }
  }

})