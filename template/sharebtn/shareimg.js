import Poster from '../../miniprogram_dist/poster/poster';

const posterConfig = {
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
      url: 'https://kf-img.oss-cn-beijing.aliyuncs.com/b9ic2202/b9ic2202_1.jpg',
    },
    {
      width: 220,
      height: 220,
      x: 50,
      y: 800,
      url: 'https://ws1.sinaimg.cn/large/0065oQSqly1fuh5fsvlqcj30sg10onjk.jpg',
    },

  ]
}


class ShareImg {

  constructor(pageContext) {
    this.page = pageContext; //获取页面上下文
    this.page.data.posterConfig = undefined;
    this.page.data.showShareBtn = false;
    this.page.data.showShareImg = false;
    this.page.data.imgUrl = undefined;
    this.page.onPosterSuccess = this._onPosterSuccess.bind(this);
    this.page.onPosterFail = this._onPosterFail.bind(this);
    this.page.onCreatePoster = this._onCreatePoster.bind(this);
    this.page.setShareBtn = this._setShareBtn.bind(this);
    this.page.closeShareBtn = this._closeShareBtn(this);
    this.page.setShareImg = this._setShareImg.bind(this);
    this.page.closeShareImg = this._closeShareImg.bind(this);
    this.page.imgSave = this._imgSave.bind(this);
  }

  _onPosterSuccess(e) {
    const {
      detail
    } = e;
    console.log(e)
    this.page.setData({
      imgUrl: e.detail
    })
  }

  _onPosterFail(err) {
    console.error(err);
  }

  _onCreatePoster() {
    this.page.setData({
      posterConfig: posterConfig,
      showShareBtn: false
    }, () => {
      Poster.create(true); // 入参：true为抹掉重新生成 
    });
  }

  _setShareBtn() {
    this.page.setData({
      showShareBtn: true
    })
  }

  _closeShareBtn() {
    this.page.setData({
      showShareBtn: false
    })
  }

  _setShareImg() {
    this.page.setData({
      imgUrl: "",
      showShareBtn: false,
      showShareImg: true
    })
    this._onCreatePoster()
  }

  _closeShareImg() {
    this.page.setData({
      showShareImg: false
    })
  }

  _imgSave() {
    if (this.page.data.imgUrl) {
      this._closeShareImg()
      wx.saveImageToPhotosAlbum({
        filePath: this.page.data.imgUrl,
        success(res) {
          wx.showToast({
            title: '保存图片成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
  }
}
module.exports = ShareImg