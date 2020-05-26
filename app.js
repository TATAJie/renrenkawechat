//app.js
const config = require('/components/custom-tabbar/tabbar-config.js');
App({
  onLaunch: function() {
    wx.hideTabBar({
      aniamtion: false,
      fail() {
        setTimeout(function() {
          wx.hideTabBar({
            aniamtion: false
          })
        }, 500)
      }
    })

    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight * (750 / e.windowWidth);
        //px转换为rpx的高度
        this.globalData.ScreenHeight = e.screenHeight * (750 / e.windowWidth);
        this.globalData.WindowWidth = e.windowWidth;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
        this.globalData.CustomBar = this.globalData.CustomBar * (750 / e.windowWidth);
      }
    })
  },
  //跳转指定根视图
  switchTabToIndex(index) {
    this.globalData.selectedIndex = index;
    let url = config.list[index].pagePath;
    wx.switchTab({
      url: url,
    })
  },
  globalData: {
    userInfo: null,
    selectedIndex: 0
  }
})