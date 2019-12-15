// pages/question/home/components/HomeRouter/HomeRouter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
  },
  /**
   */
  data: {
    grids1: [{
      image: 'cart',
      text: '行测真题',
      icon:'ios-document'
    }, {
      image: 'help',
      text: '申论真题',
      icon: 'ios-list-box'

    }, {
      image: 'address',
      text: '面试真题',
      icon: 'ios-filing'

    }, {
      image: 'order',
      text: '智能学习',
        icon: 'ios-bulb'
    }],
    grids2: [{
      image: 'favor',
      text: '军转',
      icon: 'ios-ribbon'
    }]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    linitemtap(e) {
      switch (e.detail.index) {
        case 0:
          {
            wx.navigateTo({
              url: '../../../../../realTest/realTestList/realTestList',
            })
          }
          break;
        case 1:
          {
            wx.navigateTo({
              url: '../../../../../realApply/applyList/applyList',
            })
          }
          break;
        case 2:
          {
            wx.navigateTo({
              url: '../../../../../realFace/faceList/faceList',
            })
          }
          break;
        case 3:
          {
            wx.navigateTo({
              url: '../../../../../aiStudy/aiDashbord/aiDashbord',
            })
          }
          break;
        default:

      }

    },
    linitemtapArm() {
      wx.navigateTo({
        url: '../../../../../armtrans/armtransList/armtransList',
      })
    }
  }
})