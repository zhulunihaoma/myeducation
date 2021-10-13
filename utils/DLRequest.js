const app = getApp();
const applicationHeaders = ['ordersubmit', 'shopamount']
var header = {};
const request = (url, options, loading) => {
  return new Promise((resolve, reject) => {
    if (loading === 'loading') {
      wx.showLoading({
        title: '加载中',
      })
    }
    header = {
      "content-type": "application/x-www-form-urlencoded"
    };


    applicationHeaders.forEach(urlstr => {
      if (url.indexOf(urlstr) > -1) {

        header = { "content-type": "application/json" };
      }

    })
    wx.request({
      url: url,
      method: options.method,
      data: options.data,
      header: header,
      success(request) {
        wx.hideLoading();
        if (request.data.code === 0 || request.data.msg == 'success') {
          resolve(request.data);
        } else {
          reject(request.data);
        }

      },
      fail(error) {
        wx.hideLoading();
        reject(error.data);
      }

    })

  })
}
const get = (url, options = {}, loading) => {
  return request(url, {
    method: 'GET',
    data: options,
  }, loading)
}
const post = (url, options = {}, loading) => {
  return request(url, {
    method: 'POST',
    data: options
  }, loading)
}
const put = (url, options = {}, loading) => {
  return request(url, {
    method: 'PUT',
    data: options
  }, loading)
}
module.exports = {
  get,
  post,
  put
}