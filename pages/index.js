
const app = getApp()
import {
  IndexModel
} from "../model/index.js"
let indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ScreenHeight: app.globalData.ScreenHeight,
    CustomBar: app.globalData.CustomBar,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dataList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData();
    indexModel.getHotList().then((res) => {
      if(res.code == 200)
      {
      }
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // this.computeScrollViewHeight();
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
  onPullDownRefresh: function(res) {
    setTimeout(function() {
      wx.stopPullDownRefresh()
    }, 1500);
    console.log(res);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function(res) {
    let ary = this.data.dataList;
    ary = ary.concat(ary);
    this.setData({
      dataList: ary
    })
  },
  computeScrollViewHeight() {
    let that = this
    let query = wx.createSelectorQuery().in(this)
    query.select('#cusTabbar').boundingClientRect(function(res) {
      console.log(res);
      that.setData({
        custTabbarH: res.height
      })
    }).exec()
  },
  // 模拟数据加载
  getData: function () {

   
  },
  tapSearch()
  {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  }
  
})