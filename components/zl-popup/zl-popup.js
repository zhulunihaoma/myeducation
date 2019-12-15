// components/zl-popup/zl-popup.js
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tittle: {
      type: String,
      observer: function (newVal, oldVal) {

      }
    },
    visible: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    closable:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
 
    Cancel(){
      this.triggerEvent('setVisible');

    },
  }
})
