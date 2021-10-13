// pages/nous/nouslist/nouslist.js
import {
  $wuxCalendar
} from '../../../miniprogram_npm/wux-weapp/index';
import DLRequest from '../../../utils/DLRequest.js'
import Api from '../../../utils/ApiDefine.js'
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article_content: '',
    CustomBar: app.globalData.CustomBar,
    WindowHeight: app.globalData.WindowHeight,
    value1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let data = "<div>< span >请说出你喜欢的水果？</span> <ul> <li>苹果</li> <li>香蕉</li><li>橙子</li> </ul></div >";
    //'<div><h3>javascript - <em>js同步编程</em>与异步编程的区别,异步有哪些优点,为什么...</h3><div><span>2016年5月20日 - </span>从编程方式来讲当然是<em>同步编程</em>的方式更为简单,但是同步有其局限性一是假如是单线程那么一旦遇到阻塞调用,会造成整个线程阻塞,导致cpu无法得到有效利用...</div><div><div></div><span ><span ></span></span> - 百度快照</div><div ><span>为您推荐：</span>js同步和异步ajax异步和同步的区别</div></div>';
    this.setData({
      article_content: data
    })
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    this.GetcurrentDate(date);
    this.Getknowledge();
  },
  getuserorders() {
    var that = this;
    DLRequest.get(Api.Getuserorders, {
      openId: getApp().globalData.openid,
      offset: offset,
      size: size
    }, 'loading').then(res => {
      let orderlist = [];
      orderlist = this.data.orderlist;
      if (offset == 1) {
        orderlist = [];
      }
      orderlist = orderlist.concat(res.data.data);
      console.log('获取订单----', orderlist);
      this.setData({
        orderlist: orderlist,
        isfooter_refresh: false,
        nodata: res.data.data.length < 10 ? true : false
      })

      wx.stopPullDownRefresh();

    }).catch(err => {
      that.setData({
        isfooter_refresh: false,
      })
      wx.stopPullDownRefresh();

    })
  },
  Getknowledge() {
    wx.request({
      url: 'http://api.tangjunyi.net/api/knowledge',
      data: {
        date: '2019-12-23'
      },
      method: 'GET',
      header: { "content-type": "application/json" },
      success(res) {
       
        console.log('====knowledge',res);

      },
      fail(error) {
       
      }
    })
  },
  ChooseDate() {
    // console.log(new $wuxCalendar());
    var that = this;
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    $wuxCalendar().open({
      value: [date],
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        that.setData({
          currentDate: displayValues[0],
        })
        // that.GetcurrentDate(displayValues[0]);
      },
    })
  },
  GetcurrentDate(date) {
    // 获取当前日期


    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
    this.setData({
      currentDate: Y + '-' + M + '-' + D
    })

  },
  touchStart: function(e) {
    // console.log(e.touches[0].pageX)
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.data.touchS = [sx, sy]
  },
  touchMove: function(e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.data.touchE = [sx, sy]
  },
  touchEnd: function(e) {
    let start = this.data.touchS
    let end = this.data.touchE
    console.log(start)
    console.log(end)
    if (start[0] < end[0] - 50) {
      console.log('右滑')
      wx.showToast({
        icon: 'loading',
        title: '右滑',
      })
    } else if (start[0] > end[0] + 50) {
      console.log('左滑')
      wx.showToast({
        icon: 'loading',
        title: '左滑',
      })
    } else {
      console.log('静止')
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})