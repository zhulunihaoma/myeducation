// pages/question/aiStudy/aiDashbord/aiDashbord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    array: ['公考', '军转'],
    aiList: [{
        title: '判断推理',
        count: 127,
        degree: '80%'
      },
      {
        title: '常识判断',
        count: 127,
        degree: '80%'
      },
      {
        title: '数量关系',
        count: 127,
        degree: '80%'
      },
      {
        title: '言语理解与表达',
        count: 127,
        degree: '80%'
      },
      {
        title: '资料分析',
        count: 127,
        degree: '80%'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})