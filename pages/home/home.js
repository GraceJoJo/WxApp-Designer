// pages/home/home.js
const app = getApp();
var net = require('../../utils/net.js')
var {
  bannerData
} = require('../../utils/data.js')
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
    imgUrls: [], //banner
    goodsCategoryList: [], //商品分类
    homeList: [] //商品列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(bannerData)
    this.setData({
      imgUrls: bannerData.navTab
    })
    //1、获取所有商品分类
    net.getReq({
      url: net.apiConfig.urlCategoryList,
      params: {},
      success: res => {
        this.setData({
          goodsCategoryList: res,
        })
      }
    })
    //2、获取首页商品列表
    net.getReq({
      url: net.apiConfig.urlHomeList,
      success: res => {
        this.setData(
          {
            homeList: res.content
          }
        )
      }
    })
  },
  /**
   * 点击分类进入分类详情
   */
  categoryDetail: function(e) {
    var categoryId = e.currentTarget.dataset.id;
    console.log(categoryId)
    wx.navigateTo({
      url: '../category/category?id=' + categoryId
    })
  },

})