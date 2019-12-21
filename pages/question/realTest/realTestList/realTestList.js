// pages/question/realTest/realTestList/realTestList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    components: [{
      title: '国考',
      children: [{
        title: '',
        remark: '2009402联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      },
      {
        title: '',
        remark: '2019402联考《行题》真题',
        url: '../chooseTestType/chooseTestType',
      },
      {
        title: '',
        remark: '2018802联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      }
      ],
    },
    {
      title: '江苏',
      children: [{
        title: '',
        remark: '2009402联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      },
        {
          title: '',
          remark: '2019402联考《行题》真题',
          url: '../chooseTestType/chooseTestType',
        },
        {
          title: '',
          remark: '2018802联考《行题》真题网友回忆版本',
          url: '../chooseTestType/chooseTestType',
        }
      ],
    },
    {
      title: '广东',
      children: [{
        title: '',
        remark: '2009402联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      },
        {
          title: '',
          remark: '2019402联考《行题》真题',
          url: '../chooseTestType/chooseTestType',
        },
        {
          title: '',
          remark: '2018802联考《行题》真题网友回忆版本',
          url: '../chooseTestType/chooseTestType',
        }
      ],
    },
    {
      title: '北京',
      children: [{
        title: '',
        remark: '2009402联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      },
        {
          title: '',
          remark: '2019402联考《行题》真题',
          url: '../chooseTestType/chooseTestType',
        },
        {
          title: '',
          remark: '2018802联考《行题》真题网友回忆版本',
          url: '../chooseTestType/chooseTestType',
        }
      ],
    },
    {
      title: '河南',
      children: [{
        title: '',
        remark: '2009402联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      },
        {
          title: '',
          remark: '2019402联考《行题》真题',
          url: '../chooseTestType/chooseTestType',
        },
        {
          title: '',
          remark: '2018802联考《行题》真题网友回忆版本',
          url: '../chooseTestType/chooseTestType',
        }
      ],
    },
    {
      title: '山东',
      children: [{
        title: '',
        remark: '2009402联考《行题》真题网友回忆版本',
        url: '../chooseTestType/chooseTestType',
      },
        {
          title: '',
          remark: '2019402联考《行题》真题',
          url: '../chooseTestType/chooseTestType',
        },
        {
          title: '',
          remark: '2018802联考《行题》真题网友回忆版本',
          url: '../chooseTestType/chooseTestType',
        }
      ],
    },
    
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  GoChooseType(){
    wx.navigateTo({
      url: '../chooseTestType/chooseTestType',
    })
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