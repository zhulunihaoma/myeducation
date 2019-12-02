// pages/question/home/components/ HomeExercise/HomeExercise.js
import
moment
from '../../../.././../miniprogram_npm/moment/index.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checktime() {
      console.log('====', moment('Wed Nov 27 2019 15:06:55 GMT+0800').format('YYYY-MM-DD HH:mm'));
    }
  }
})