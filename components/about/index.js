Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    authorized: false,
    userInfo: {}
  },
  attached() {
    this.userAuthorized();
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(3000),
          forksCount: that.coutNum(484),
          visitTotal: that.coutNum(24000)
        })
      }
    }
    wx.hideLoading()
  },
  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://image.weilanwl.com/color2.0/zanCode.jpg'],
        current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接      
      })
    },
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