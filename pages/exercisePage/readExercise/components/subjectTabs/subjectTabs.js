// pages/exercisePage/readExercise/components/subjectTabs/subjectTabs.js
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showMore:false,
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
      }, {
        tab: '经济知识',
        key: 'sport'
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTabs(){

    },
  }
})