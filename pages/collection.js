
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ScreenHeight: app.globalData.ScreenHeight,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    active:0,
    tabs6: [1, 2, 3, 4, 5, 6]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  onChange(res){ 
    let index = res.detail.index;
    console.log(index);
    this.setData({
      active:index
    })
  },
  changeTabs(e) {
    console.log(e.detail.currentIndex)
  }
})