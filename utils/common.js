import DLRequest from '../utils/DLRequest.js';
import Api from '../utils/ApiDefine.js';

const chooseimg = (seleccount, index) => {
  return new Promise(function(resolve, reject) {

    // 原来的函数体代码  
    wx.chooseImage({
      count: seleccount, // 默认9
      sizeType: ['compressed'],  // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        // var 

        // var arr = that.data.localphotoarr;
        // arr.splice(index, 0, tempFilePaths[0]);
        // arr[index] = tempFilePaths[0];
        console.log("本地图片呼呼呼---", tempFilePaths);
        // let url = uploadimg(tempFilePaths, index);
        uploadimg(tempFilePaths[0], index).then(function(url) {
          resolve(url);

        });

      }
    })
  });
}

function uploadimg(tempFilePaths, index) {
  return new Promise(function(resolve, reject) {

    // 压缩图片
    // wx.compressImage({
    //   src: tempFilePaths,
    //   quality: 30,
    //   success: function(res) {
        wx.showLoading({
          mask:true,
          title: '上传中',
        })
        var that = this;
        wx.uploadFile({
          url: getApp().globalData.RequestUrl + '/picupload',
          filePath: tempFilePaths,
          name: 'file', //文件KEY，后台取文件用； 必须使用 'file'
          formData: {
            //其他附带上传的参数，可不写
          },
          success: (res) => {
            wx.hideLoading();
            wx.showToast({
              title: '上传成功',
            })
            var urlobject = JSON.parse(res.data);
            resolve(urlobject.data);
          },
          fail: (res) => {
            wx.hideLoading();
          },

        })
      // }
    // })
  });

}

// 获取用户信息
function Getwxuserinfo(openId) {
  return new Promise(function (resolve, reject) {

  DLRequest.get(Api.Getwxuserinfo, {
    openId: openId
  }).then(res => {
    let isHaveUserinfo = res.data ? true : false;
    resolve(isHaveUserinfo);


  }).catch(err => {

  })
  })
}

// 提交用户信息
function Submituserinfo(userinfo) {
  DLRequest.post(Api.Wxuserinfo, userinfo, 'loading').then(res => {
    console.log('===提交用户信息', res);

  }).catch(err => {

  })

}
module.exports = {
  chooseimg: chooseimg,
  Uploadimg: uploadimg,
  Getwxuserinfo: Getwxuserinfo,
  Submituserinfo: Submituserinfo
}