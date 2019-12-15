// pages/nous/nouslist/nouslist.js
import { $wuxCalendar } from '../../../miniprogram_npm/wux-weapp/index';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article_content:'',
    CustomBar: app.globalData.CustomBar,
    WindowHeight: app.globalData.WindowHeight,
    value1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let data = "<div>< span >请说出你喜欢的水果？</span> <ul> <li>苹果</li> <li>香蕉</li><li>橙子</li> </ul></div >";
        //'<div><h3>javascript - <em>js同步编程</em>与异步编程的区别,异步有哪些优点,为什么...</h3><div><span>2016年5月20日 - </span>从编程方式来讲当然是<em>同步编程</em>的方式更为简单,但是同步有其局限性一是假如是单线程那么一旦遇到阻塞调用,会造成整个线程阻塞,导致cpu无法得到有效利用...</div><div><div></div><span ><span ></span></span> - 百度快照</div><div ><span>为您推荐：</span>js同步和异步ajax异步和同步的区别</div></div>';
    this.setData({ article_content: data })
  
  },
  openCalendar() {
    // console.log(new $wuxCalendar());
    var that = this;

    $wuxCalendar().open({
      value: that.data.value1,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        that.setData({
          value1: displayValues,
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})