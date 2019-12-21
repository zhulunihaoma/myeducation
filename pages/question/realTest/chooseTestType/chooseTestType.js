// pages/question/realTest/chooseTestType/chooseTestType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [{
      id: 1,
      name: '言语理解与表达',
      checked: true
    }, {
      id: 2,
      name: '数量关系',
        checked: true
    }, {
      id: 3,
      name: '常识判断',
        checked: true
    }, {
      id: 4,
      name: '判断推理',
      checked: true
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  GoselectIndex() {
    wx.navigateTo({
      url: '../../../exercisePage/selectExercise/selectIndex/selectIndex',
    })
  },
  onChangeTap(e) {
    console.log(e)
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