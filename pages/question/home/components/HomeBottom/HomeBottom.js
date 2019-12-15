// pages/question/home/components/HomeBottom/HomeBottom.js
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
    SubjectVisible: false,
    title: [{
      name: '常识判断',
      sublist: [{
          name: '生活常识',
          show: false
        },
        {
          name: '物理常识',
          show: false
        },
        {
          name: '化学常识',
          show: false
        },
        {
          name: '科技理论与成就',
          show: false
        },
      ],
      show: false
    }, {
      name: '言语理解与表达',
      sublist: [{
          name: '生活常识',
          show: false
        },
        {
          name: '物理常识',
          show: false
        },
        {
          name: '化学常识',
          show: false
        },
        {
          name: '科技理论与成就',
          show: false
        },
      ],
      show: false
    }, {
      name: '数量关系',
      sublist: [{
          name: '生活常识',
          show: false
        },
        {
          name: '物理常识',
          show: false
        },
        {
          name: '化学常识',
          show: false
        },
        {
          name: '科技理论与成就',
          show: false
        },
      ],
      show: false
    }, {
      name: '判断推理',
      sublist: [{
          name: '生活常识',
          show: false
        },
        {
          name: '物理常识',
          show: false
        },
        {
          name: '化学常识',
          show: false
        },
        {
          name: '科技理论与成就',
          show: false
        },
      ],
      show: false
    }, {
      name: '资料分析',
      sublist: [{
          name: '生活常识',
          show: false
        },
        {
          name: '物理常识',
          show: false
        },
        {
          name: '化学常识',
          show: false
        },
        {
          name: '科技理论与成就',
          show: false
        },
      ],
      show: false
    }, ],
    sublist: ['', '', '']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 设置题目
    ChooseSet() {
      this.setData({
        SubjectVisible: !this.data.SubjectVisible
      })
    },
  }
})