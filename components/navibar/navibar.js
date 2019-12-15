// components/navibar/navibar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
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
      // 获取当前日期

      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);
      //获取年份  
      var Y = date.getFullYear();
      //获取月份  
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      //获取当日日期 
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

      console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
      this.setData({
        currentDate: Y + '年' + M + '月' + D + '日'
      })

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
    currentDate: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
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