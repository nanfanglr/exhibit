// pages/share-dtl/share-dtl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: [
      'https://unsplash.it/200/200',
      'https://unsplash.it/300/300',
      'https://unsplash.it/400/400',
      'https://unsplash.it/600/600',
      'https://unsplash.it/800/800',
      'https://unsplash.it/900/900',
      'https://unsplash.it/1000/1000',
      'https://unsplash.it/1200/1200',
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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



   previewImage(e) {
    console.log(e)
    const { current } = e.currentTarget.dataset
    const { urls } = this.data

    wx.previewImage({
      current,
      urls,
    })
  },
})