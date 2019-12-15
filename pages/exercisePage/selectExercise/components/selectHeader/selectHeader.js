// pages/exercisePage/selectExercise/components/selectHeader/selectHeader.js
import {
  $wuxCountDown
} from '../../../../../miniprogram_npm/wux-weapp/index'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // this.Cutdownt();
      var that = this;
      this.c3 = new $wuxCountDown({
        date: +(new Date) + 60000 * 20,
        render(date) {
          const min = this.leadingZeros(date.min, 2) + ' 分 '
          const sec = this.leadingZeros(date.sec, 2) + ' 秒 '
          that.setData({
            c3: min + sec,
          })
        },
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    c3: '',
    collected:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Collecte(){
      this.setData({
        collected: !this.data.collected
      })
    },
    Cutdown() {
     
    }
  }
})