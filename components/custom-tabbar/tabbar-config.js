module.exports = {
  color: '#7D7D7D',
  selectedColor: "#FF6933",
  borderStyle: "#f6f6f6",
  backgroundColor: "#fff",
  fontSize: 22,
  list: [
    {
      pagePath: "/pages/index",
      iconPath: "/components/custom-tabbar/icons/tabbar_home_n_2x.png",
      iconSize: 50,
      selectedIconPath: "/components/custom-tabbar/icons/tabbar_home_s_2x.png",
      text: "首页"
    }, {
      pagePath: "/pages/message",
      iconSize: 50,
      iconPath: "/components/custom-tabbar/icons/tabbar_supply_n_2x.png",
      selectedIconPath: "/components/custom-tabbar/icons/tabbar_supply_s_2x.png",
      text: "消息"
    }, {
      iconSize: 50,
      pagePath: "/pages/collection",
      iconPath: "/components/custom-tabbar/icons/tabbar_contacts_n_2x.png",
      redDot: true,
      selectedIconPath: "/components/custom-tabbar/icons/tabbar_contacts_s_2x.png",
      text: "购物车"
    }, {
      iconSize: 50,
      pagePath: "/pages/mine",
      iconPath: "/components/custom-tabbar/icons/tabbar_my_n_2x.png",
      selectedIconPath: "/components/custom-tabbar/icons/tabbar_my_s_2x.png",
      text: "我的"
    },
  ]
}