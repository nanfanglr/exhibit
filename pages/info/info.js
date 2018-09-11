// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    isShowKN: true,
    knowledges: [{
        url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftf1snjrjuj30se10r1kx.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      }, {
        url: "https://ws1.sinaimg.cn/large/0065oQSqly1fuh5fsvlqcj30sg10onjk.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://ws1.sinaimg.cn/large/0065oQSqly1fuo54a6p0uj30sg0zdqnf.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://ww1.sinaimg.cn/large/0065oQSqly1fszxi9lmmzj30f00jdadv.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftf1snjrjuj30se10r1kx.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/09/18/bce3fa5808e4ba3586ca04e03d4b5ed4.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
      {
        url: "https://cdn.it120.cc/apifactory/2017/09/18/3e1d9b4200ba4ea4fe0c607d5b67b2aa.jpg",
        title: "玩转8个销售连带提升,达成指标更靠谱",
        read: 3,
        praise: 6,
        msg: 99,
      },
    ],

    infos: [{
        title: "品牌速递",
        data: [{
            url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftf1snjrjuj30se10r1kx.jpg",
            title: "玩转8个销售连带提升,达成指标更靠谱",
            read: 3,
            praise: 6,
            msg: 99,
          },
          {
            url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg",
            title: "玩转8个销售连带提升,达成指标更靠谱",
            read: 3,
            praise: 6,
            msg: 99,
          },
          {
            url: "https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg",
            title: "玩转8个销售连带提升,达成指标更靠谱",
            read: 3,
            praise: 6,
            msg: 99,
          }
        ]
      },
      {
        title: "终端故事",
        data: [{
          url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftf1snjrjuj30se10r1kx.jpg",
          title: "玩转8个销售连带提升,达成指标更靠谱",
          read: 3,
          praise: 6,
          msg: 99,
        },
        {
          url: "https://ww1.sinaimg.cn/large/0065oQSqly1ftzsj15hgvj30sg15hkbw.jpg",
          title: "玩转8个销售连带提升,达成指标更靠谱",
          read: 3,
          praise: 6,
          msg: 99,
        },
        {
          url: "https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg",
          title: "玩转8个销售连带提升,达成指标更靠谱",
          read: 3,
          praise: 6,
          msg: 99,
        }
        ]
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  clickTabRule: function(e) {
    this.isShowKN = false;
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        isShowKN: false
      })
    }
  },
  //点击切换商品列表
  clickTabPro: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        isShowKN: true
      })
    }
  },
})