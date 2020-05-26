const app = getApp();
const baseDataBev = Behavior({
  data:{
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ScreenHeight: app.globalData.ScreenHeight
  }
})
export{
  baseDataBev
}