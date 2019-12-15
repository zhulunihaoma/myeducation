// pages/question/armtrans/armtransList/armtransList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollAbleTabs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(this._asyncData, 100);
  },
  _asyncData() {
    this.setData({
      scrollAbleTabs: [{
        tab: '全部',
        key: 'treasure'
      }, {
        tab: '提出对策题',
        key: 'life'
      }, {
        tab: '大作文',
        key: 'food'
      }, {
        tab: '文书写作题',
        key: 'cloth'
      }, {
        tab: '综合分析题',
        key: 'cosmetics'
      }, {
        tab: '概括归纳题',
        key: 'one'
      },
      {
        tab: '运动女装',
        key: 'sport'
      }],
    })
  },

  onPageScroll(e) {
    // 当页面滚动时调用组件 scrollHandler 方法
  },
  onReachBottom() {

    console.log('onReachBottom')
  },
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },
})