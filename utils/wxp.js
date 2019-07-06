/***
 * 这个类是对小程序中的一些接口方法进行promise封装，以达到链式调用，避免嵌套回调。
 */
/**
 * 获取个人信息的授权
 */
const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        console.log(res.authSetting);
        if (res.authSetting['scope.userInfo']) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail(res) {
        reject(res);
      }
    });
  });
}

/**
 * 微信登录接口
 */
const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        console.log(res.authSetting);
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail(res) {
        reject(res);
      }
    });
  });
}

/**
 * 微信支付接口
 */
const requestPayment =
  (timeStamp, nonceStr, packageValue, signType, paySign) => {
    return new Promise((resolve, reject) => {
      wx.requestPayment({
        timeStamp: timeStamp,
        nonceStr: nonceStr,
        package: packageValue,
        signType: signType,
        paySign: paySign,
        success(res) {
          resolve(res);
        },
        fail(res) {
          reject(res);
        }
      })
    });
  }


module.exports = {
  getSetting: getSetting,
  login: login,
  requestPayment: requestPayment
}