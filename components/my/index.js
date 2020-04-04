// components/my/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    authorized: false,
    userInfo: {},
    tabs: ["直播", "视频", "动态", "商品", "推广"],
  },
  attached() {
    this.userAuthorized();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo: function (res) {
      console.log(res);
      if (res.detail.errMsg == "getUserInfo:ok") {
        console.log(res.detail.userInfo.avatarUrl);
        this.setData({
          authorized: true,
          userInfo: res.detail.userInfo
        })
      }
    },
    userAuthorized() {
      wx.authorize({
        scope: 'scope.userInfo',
        success: (result) => {
          wx.getUserInfo({
            withCredentials: 'false',
            lang: 'zh_CN',
            timeout: 10000,
            success: (result) => {
              console.log(result.userInfo.avatarUrl);
              this.setData({
                authorized: true,
                userInfo: result.userInfo
              })
            },
            fail: () => { }
          })
        },
        fail: (error) => {
          console.log(error);

        }
      });
    },
  }
})
