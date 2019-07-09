// pages/swiper/swiper.js
var Slider = require('../../template/swiper/swiper.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.slider = new Slider(this);
    //初始化顶部导航组件
    this.slider.initData([
      'https://img02.wzhouhui.net/optm/ad/2017/03/08/orig/e22542db46cefea5dfb51f7c7ba8d3817824e65c.jpg',
      'https://img02.wzhouhui.net/optm/ad/2017/03/08/orig/610d7f02a200cdb27b005b4d5cb2b67f2e6314d0.jpg',
      'https://img02.wzhouhui.net/optm/ad/2017/03/08/orig/05f531fa8b97da6987153b20ca71f3844c56e62a.jpg',
      'https://img02.wzhouhui.net/optm/ad/2017/03/08/orig/d51c19b84bbc45a8d15b460fcd6ae99768527638.jpg'
    ]);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})