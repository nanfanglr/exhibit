const RELEASE = true;
const app = getApp();
const IMG_BASE_URL = RELEASE ? 'http://xxx.oss-cn-beijing.aliyuncs.com/' : 'http://xxx.oss-cn-beijing.aliyuncs.com/';
const API_BASE_URL = RELEASE ? 'https://xxx.xxx.com/xxx/' : 'https://xxx-test.xxx.com/xxx/';
//常用的Content-type的方式
//application/x-javascript text/xml -> xml数据 
//application/x-javascript -> json对象 
//application/x-www-form-urlencoded -> 表单数据 
//application/json;charset=utf-8 -> json数据

function FetchRequest(url, data, method = 'GET') {
  return FetchRequestLoad(url, data, method, true);
}

/**
 * 简单网络请求Promise封装（优点避免嵌套回调）；
 * 可以考虑将所有的接口访问方法都定义在这里，导出后相关页面进行调用；
 * 也可以在每个页面写接口调用；
 * url: 请求地址
 * data: 请求内容
 * method: 请求方法
 * hideLoading:加载效果
 * contentType：请求头数据类型
 */
function FetchRequestLoad(url, data, method = 'GET', hideLoading = false, contentType = "application/x-www-form-urlencoded") {
  if (!hideLoading) {
    wx.showLoading({
      title: '加载中',
    })
  }
  return new Promise(Request);
  /**
   * 请求接口
   */
  function Request(resolve, reject) {
    let _url = API_BASE_URL + url
    let token;
    if (app.globalData.userInfo) {
      //每次调接口后台需要将token值提交的情况
      token = app.globalData.userInfo.apiAutoToken;
    }
    wx.request({
      url: _url,
      method: method.toUpperCase(),
      data: data,
      header: {
        // 'Accept': 'application/json',
        "Content-Type": contentType,
        //每次调接口后台需要将Cookie提交的情况
        'Cookie': wx.getStorageSync('cookieKey'),
        // 'Authorization': null,
         //每次调接口后台需要将token值提交的情况
        'api_auth_token': token
      },
      success: FetchSuccess,
      fail: FetchError,
      complete: RequestOver
    })

    /**
     * 成功回调
     */
    function FetchSuccess(res) {
      // console.log('FetchSuccess---------->');
      // console.log(res);
      if (res.statusCode >= 200 && res.statusCode < 300) {
        if (res && res.header && res.header['Set-Cookie']) {
          //保存Cookie到Storage
          wx.setStorageSync('cookieKey', res.header['Set-Cookie']);
        }
        if (res.data.success || res.data.code == 0) {
          if (!hideLoading) {
            wx.hideLoading();
          }
          resolve(res.data);
        } else {
          FetchError(res.data);
        }
      } else {
        FetchError(res.data);
        switch (res.statusCode) {
          case 403:
            // 业务逻辑处理
            break
        }
      }
    }

    /**
     * 异常处理
     */
    function FetchError(err) {
      if (!hideLoading) {
        wx.hideLoading();
      }
      // console.log('FetchError---------->');
      // console.log(err);
      if (err) {
        wx.showToast({
          title: err.errMsg || err.message || err.msg,
          icon: 'none',
          // duration: 3000
        })
      }
      reject(err);
    }
  }

  function RequestOver() {
    //这里暂时不处理业务
  }
}

/**
 * 并发请求
 * 没做缓存等处理
 */
function FetchRequestAll(data) {
  return new Promise(function(resolve, reject) {
    Promise.all(data).then(res => {
      resolve(res)
    })
  });
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function(callback) {
  var Promise = this.constructor;
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(
        function() {
          return value;
        }
      );
    },
    function(reason) {
      Promise.resolve(callback()).then(
        function() {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  fetchRequest: FetchRequest,
  fetchRequestLoad: FetchRequestLoad,
  fetchRequestAll: FetchRequestAll,
  RELEASE: RELEASE,
  IMG_BASE_URL: IMG_BASE_URL,
}