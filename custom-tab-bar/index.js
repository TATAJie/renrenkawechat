const app = getApp();
Component({
  data: {
    tabBarHeight: app.globalData.tabBarHeight,
    show: true,
    selected: 0,
    color: '#707070',
    selectedColor: "#ef6c13",
    borderStyle: "#f6f6f6",
    backgroundColor: "#f9f9f9",
    fontSize: 22,
    list: [{
      pagePath: "/pages/index/index",
      iconPath: '/images/tab/basics.png',
      selectedIconPath: '/images/tab/basics_cur.png',
      text: "首页"
    }, {
      pagePath: "/pages/live/index",
      iconPath: '/images/tab/plugin.png',
      selectedIconPath: '/images/tab/plugin_cur.png',
      text: "直播"
    }, {
      pagePath: "/pages/pusher/pusher",
      iconSize: 80,
      iconPath: '/images/tab/classic.png',
      selectedIconPath: '/images/tab/classic@highlight.png',
    }, {
      pagePath: "/pages/message/message",
      iconPath: '/images/tab/component.png',
      badge: 99,
      selectedIconPath: '/images/tab/component_cur.png',
      text: "消息"
    }, {
      pagePath: "/pages/my/my",
      iconPath: '/images/tab/about.png',
      redDot: false,
      selectedIconPath: '/images/tab/about_cur.png',
      text: "我的"
    }, ]
  },
  attached() {},
  methods: {
    switchTab(t) {
      const e = t.currentTarget.dataset,
        a = e.path;
      // this.showItem(e.index);
      wx.switchTab({
        url: a
      })
    },
    show() {
      this.setData({
        show: !0
      })
    },
    hide() {
      this.setData({
        show: !1
      })
    },
    showItem(t) {
      this.setData({
        selected: t
      });
      let e = {
        idx: t,
        path: this.route
      };
      this.triggerEvent("lintap", e, {
        bubbles: !0,
        composed: !0
      })
    },
    showRedDot(t) {
      const e = `list[${t}].redDot`;
      this.setData({
        [e]: !0
      })
    },
    hideRedDot(t) {
      const e = `list[${t}].redDot`;
      this.setData({
        [e]: !1
      })
    },
    setTabBarBadge(t, e) {
      const a = `list[${t}].badge`;
      this.setData({
        [a]: e
      })
    },
    removeTabBarBadge(t) {
      const e = `list[${t}].badge`;
      this.setData({
        [e]: ""
      })
    }
  }
})