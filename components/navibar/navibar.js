// components/navibar/navibar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentDate: {
      type: String
    },
    title: {
      type: String
    },
    showBack: {
      type: Boolean,
      value: true
    },
    shopId: {
      type: String,
      value: ''
    }


  },
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached: function() {
      
      // 在组件实例进入页面节点树时执行
      let pages = getCurrentPages();
      console.log('当前页面路由', pages);
      if (pages.length == 1) {
        this.setData({
          showBack: false
        })
      } else {
        this.setData({
          showBack: true
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Naviheight: app.globalData.StatusBar + app.globalData.CustomBar,
    Custom: app.globalData.Custom,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ChooseDate(){
      this.triggerEvent('ChooseDate');

    },
    goback() {
      wx.navigateBack({

      })
      // this.triggerEvent('goback');

    },
    gohome() {
      if (this.data.shopId.length > 0) {
        wx.redirectTo({
          url: '../../../../../../order/test/test?shopId=' + this.data.shopId,
        })
      } else {
        wx.switchTab({
          url: '../../home/shoplist/shoplist'
        })
      }

      // this.triggerEvent('gohome');

    },
  }
})