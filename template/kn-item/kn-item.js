class KnItem {
  constructor(pageContext) {
    this.page = pageContext;
    this.page.openDtl = this.openDtl.bind(this);
  }

  openDtl(e) {
    console.log(e);
    var item = JSON.stringify(e.currentTarget.dataset.item);
    var title = JSON.stringify(e.currentTarget.dataset.title);
    wx.navigateTo({
      //去显示详情
      url: '../info-dtl/info-dtl?item=' + item
    });
  }
}

module.exports = KnItem