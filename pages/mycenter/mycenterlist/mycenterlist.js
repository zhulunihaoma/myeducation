// pages/mycenter/mycenterlist/mycenterlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  Lintap(e){
    const type = e.currentTarget.dataset.type;
    console.log('=====', type);

    switch (type) {
      case '0':
        {
          wx.navigateTo({
            url: '../mistakeBook/mistakeBook',//错题本
          })
        }
        break;
      case '1':
        {
          wx.navigateTo({
            url: '../subjectCollection/subjectCollection',//题目收藏
          })
        }
        break;
      case '2':
        {
          wx.navigateTo({
            url: '../myNote/myNote',//我的笔记
          })
        }
        break;
      case '3':
        {
          wx.navigateTo({
            url: '../classTest/classTest',//班级测试
          })
        }
        break;
      default:

    } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})