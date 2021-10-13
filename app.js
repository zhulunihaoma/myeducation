//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        console.log('e系统信息===', e);
        this.globalData.WindowHeight = e.windowHeight;
        this.globalData.WindowWidth = e.windowWidth;
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    LocalVersionId: '1.2',//1.0  1.2 （配合数据库轮换着）审核用  1.1体验版用
    OnlineVersionId: '',
    ShowCheck: false,//显示审核内容
    openid: '',
    shopId: '',
    allcar: {},
    goodscararr: [],
    shopinfo: {},
    userinfo: {},
    ShareGoodsInfo: {},
    RequestUrl: "http://api.tangjunyi.net/api/", //线上环境
    RequestlocalUrl: "http://localhost:8885/",//本地环境
    ImgUrl: "https://www.eastzebra.cn/servicepicture/",
    QcodeUrl: "https://www.eastzebra.cn/qrcode/"
  }
})