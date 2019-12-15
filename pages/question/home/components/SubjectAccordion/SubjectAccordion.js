// pages/question/home/components/SubjectAccordion/SubjectAccordion.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    haveBack:{
      type:Boolean,
      defultValue:false
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
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
    },],
    sublist: ['', '', '']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ShowSubList(e) {
      const index = e.currentTarget.dataset.index;
      let titleList = this.data.title;
      titleList[index].show = !titleList[index].show;
      console.log('=====', titleList);

      this.setData({
        title: titleList
      })
    },
    ShowSubList2(e) {
      console.log('=====', e);
      const index = e.currentTarget.dataset.index;
      const index2 = e.currentTarget.dataset.index2;
      let titleList = this.data.title;
      titleList.forEach(tite => {
        if (tite.name == index) {
          tite.sublist.forEach(subtitle => {
            if (subtitle.name == index2) {
              subtitle.show = !subtitle.show;
            }
          })
        }
      })

      this.setData({
        title: titleList
      })
    },
  }
})
