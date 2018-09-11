class KnItem {
  constructor(pageContext) {
    this.page = pageContext;
    this.page.openDtl = this.openDtl.bind(this);
  }

  openDtl(e) {
    console.log(e);
    var item = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      // 去信息页
      url: '../info-dtl/info-dtl?item=' + item
    });
  }
}

module.exports = KnItem