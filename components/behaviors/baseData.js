const App = getApp();
const baseDataBev = Behavior({
  data:{
    contentHeight: App.globalData.screenHeight - App.globalData.statusBarHeight - App.globalData.navigationHeight - App.globalData.tabBarHeight
  }
})
export{
  baseDataBev
}