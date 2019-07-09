/**
 * 图片预加载组件
 */
class Slider {
  constructor(pageContext, options = { picList: [], showArr: [] }) {
    this.page = pageContext; //获取页面上下文
    this.page.data.slider = {
      picList: options.picList,
      showArr: options.showArr
    }; //初始化data
    this.page._sliderChange = this._sliderChange.bind(this);
  }
  //监听滑动事件，实现图片懒加载
  _sliderChange(e) {
    if (this.page.data.slider.showArr) {
      let showArr = this.page.data.slider.showArr;
      for (let i = 0; i < showArr.length; i++) {
        if (i === e.detail.current) {
          showArr[i] = true;
        }
      }
      this.page.setData({
        'slider.showArr': showArr
      });
    }
  }
  initData(imgs) {
    //fill()方法使用给定值，填充一个数组
    const arr = new Array(imgs.length).fill(false);
    this.page.setData({
      'slider.picList': imgs,
      //fill()方法从 1 号位开始，向原数组填充 7，到 2 号位之前结束。
      //即初始化第一张图片为一加载的状态
      'slider.showArr': arr.fill(true, 0, 1)
    });
  }
}
module.exports = Slider