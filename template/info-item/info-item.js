class InfoItem {
  constructor(pageContext) {
    this.page = pageContext;
    // this.page.openDtl = this.openDtl.bind(this);
    this.page.openAll = this.openAll.bind(this);
  }
  // openDtl(e) {
  //   console.log(e);
  //   var item = JSON.stringify(e.currentTarget.dataset.item);
  //   wx.navigateTo({
  //     // 去显示详情
  //     url: '../info-dtl/info-dtl?item=' + item
  //   });
  // }
  openAll(e) {
    console.log(e);
    var item = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      // 去所有信息列表
      url: '../info-all/info-all?item=' + item
    });
  }
}
module.exports = InfoItem