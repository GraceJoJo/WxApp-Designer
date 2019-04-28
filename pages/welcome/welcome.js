// pages/welcome/welcome.js
const app = getApp();
var api = require('../../utils/net.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'Hello',
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    imgUrls: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var dates = {
      title: 'icessun'
    }
    this.setData(dates)
    var array = this.data.imgUrls
    // array.push("../../src/1.png")
    // array.push("../../src/2.png")
    // array.push("../../src/3.png")
    array.push("http://xqproduct.xiangqu.com/FnMWUrjHNCmin0bJ8CENfqrn7m2f?imageView2/2/w/800/q/90/format/jpg/960x615")
    array.push("http://xqproduct.xiangqu.com/FjS5pSu24vUvNHR3V2_4-IsKp929?imageView2/2/w/800/q/90/format/jpg/960x615")
    array.push("http://xqproduct.xiangqu.com/FuXmRIm6a7BQGV0whkWhKYPSjhVJ?imageView2/2/w/800/q/90/format/jpg/960x615")
    array.push("http://xqproduct.xiangqu.com/FgDhLGZHVMYHANVF9qkemdKsldY5?imageView2/2/w/800/q/90/format/jpg/960x615")
    this.setData({
      imgUrls: array
    })
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow")
    api.getReq({
      params: {},
      success: res => {
        console.log(res.data)
        // if (res.data.error_code == 0) {
        //   console.log(res.data.result.data)
        //   this.setData({
        //     "newList[1].newData": res.data.result.data
        //   })
        // }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload")
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