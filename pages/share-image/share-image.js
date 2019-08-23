// pages/share-image/share-image.js
const ShareImg = require('../../template/sharebtn/shareimg.js');

const PosterConfig = {
  width: 750,
  height: 1070,
  backgroundColor: '#fff',
  debug: false,
  pixelRatio: 1,

  texts: [{
      x: 59,
      y: 730,
      baseLine: 'middle',
      text: '2人拼',
      fontSize: 28,
      color: '#ec1731',
    },
    {
      x: 59,
      y: 770,
      baseLine: 'middle',
      text: '商家发货&售后',
      fontSize: 28,
      color: '#929292',
    },
    {
      x: 350,
      y: 870,
      baseLine: 'top',
      text: '长按识别小程序码',
      fontSize: 38,
      color: '#080808',
    },
    {
      x: 350,
      y: 920,
      baseLine: 'top',
      text: '超值好货一起拼',
      fontSize: 28,
      color: '#929292',
    },
  ],
  images: [{
      width: 650,
      height: 650,
      x: 50,
      y: 50,
      url: '',
    },
    {
      width: 220,
      height: 220,
      x: 50,
      y: 800,
      url: '',
    },

  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    PosterConfig.images[0].url = "https://kf-img.oss-cn-beijing.aliyuncs.com/b9ic2202/b9ic2202_1.jpg"
    PosterConfig.images[1].url = "https://ws1.sinaimg.cn/large/0065oQSqly1fuh5fsvlqcj30sg10onjk.jpg"
    new ShareImg(this)
    this.setData({
      posterConfig: PosterConfig
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})