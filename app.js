//app.js
App({
  onLaunch: function() {
    let systemInfo = wx.getSystemInfoSync()
    // px转换到rpx的比例
    let pxToRpxScale = 750 / systemInfo.windowWidth;
    // 状态栏的高度
    this.globalData.statusBarHeight = systemInfo.statusBarHeight * pxToRpxScale
    // 导航栏的高度
    this.globalData.navigationHeight = 44 * pxToRpxScale
    // window的宽度
    this.globalData.windowWidth = systemInfo.windowWidth * pxToRpxScale
    // window的高度
    this.globalData.windowHeight = systemInfo.windowHeight * pxToRpxScale
    // 屏幕的高度
    this.globalData.screenHeight = systemInfo.screenHeight * pxToRpxScale
    // 屏幕的宽度
    this.globalData.screenWidth = systemInfo.screenWidth * pxToRpxScale
    // 底部tabBar的高度
    this.globalData.tabBarHeight = this.globalData.screenHeight - this.globalData.statusBarHeight - this.globalData.navigationHeight - this.globalData.windowHeight
  },
  globalData: {
    systemInfo: null,
    windowHeight: null, // rpx换算px后的窗口高度
    screenHeight: null, // rpx换算px后的屏幕高度
    windowWidth: null, // rpx换算px后的窗口宽度
    screenWidth: null, // rpx换算px后的屏幕宽度
    statusBarHeight: null, //状态栏高度
    navigationHeight: null, //导航栏高度
    tabBarHeight: null, // 底部tabBar的高度
  }
})