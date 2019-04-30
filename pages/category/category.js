// pages/category/category.js
const app = getApp();
var net = require('../../utils/net.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("接收页面传递过来的参数" + options.id)
    net.getReq({
      url: net.apiConfig.urlCategoryDetail,
      params: {
        keyword: "",
        page: '0',
        sort: '0',
        key: "0db6ffd00372064035ef33763dd1c61e",
        t: "1547700576328",
        outCategoryId: options.id,
      },
      success: res => {
        wx.hideLoading()
        this.setData({
          recordList: res.records
        })
      }
    })
  },

})