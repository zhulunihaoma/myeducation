// pages/selectcourse/courselist/courselist.js
let height = wx.getSystemInfoSync().windowHeight
let itemCount = 1000
let items = [...new Array(itemCount)].map((v, i) => i)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollAbleTabs:[],
    disableScroll: false,
    height,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(this._asyncData, 500);
    this.updated(items);
  },
  _asyncData() {
    this.setData({
      scrollAbleTabs: [{
        tab: '精选',
        key: 'treasure'
      }, {
        tab: '居家生活',
        key: 'life'
      }, {
        tab: '美食厨房',
        key: 'food'
      }, {
        tab: '服饰珠宝',
        key: 'cloth'
      }, {
        tab: '美妆洗护',
        key: 'cosmetics'
      }, {
        tab: '家用电器',
        key: 'one'
      },
      {
        tab: '运动女装',
        key: 'sport'
      }],
    })
  },
  updated(items) {
    const startTime = Date.now()
    this.virtualList = this.virtualList || this.selectComponent('#wux-virtual-list')
    // debugger;
    // this.virtualList.render(items, () => {
    //   const diffTime = Date.now() - startTime
    //   console.log(`onSuccess - render time: ${diffTime}ms`)
    // })
  },
  loadData() {
    if (itemCount >= 10000) return
    if (this.data.disableScroll) return
    this.setData({ disableScroll: true })
    wx.showLoading()
    setTimeout(() => {
      itemCount += 1000
      items = [...new Array(itemCount)].map((v, i) => i)
      this.updated(items)
      this.setData({ disableScroll: false })
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 3000)
    console.log('loadData')
  },
  onChange(e) {
    const { startIndex, endIndex } = e.detail
    if (this.data.startIndex !== startIndex || this.data.endIndex !== endIndex) {
      this.setData(e.detail)
      console.log('onChange', e.detail)
    }
  },
  onPageScroll(e) {
    // 当页面滚动时调用组件 scrollHandler 方法
    this.virtualList.scrollHandler({ detail: e })
    // console.log('onPageScroll', e)
  },
  onReachBottom() {
    this.loadData()
    console.log('onReachBottom')
  },
  onPullDownRefresh() {
    itemCount = 0
    this.loadData()
    console.log('onPullDownRefresh')
  },
})