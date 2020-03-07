// pages/live/index.js
import { baseDataBev } from "../../components/behaviors/baseData.js"
Page({
  behaviors: [baseDataBev],
  /**
   * 页面的初始数据
   */
  data: {
    uppering:false,
    lowering:false,
    demo: [{
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
      title: '显瘦中长款系带风衣',
      describe: '不易皱好打理。',
      count: '888',
      delCount: '666'
    },{
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
      title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。。',
      count: '888',
      delCount: '666'
    },{
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
      title: '显瘦中长款系带风衣',
      describe: '垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
      }, {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
        count: '888',
        delCount: '666'
      }, {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。不易皱好打理。',
        count: '888',
        delCount: '666'
      }, {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。、不易皱好打理。',
        count: '888',
        delCount: '666'
      }, {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583413277767&di=cae3b4788b872a8381b6215911bb4e45&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F23%2F20170823064611_Tzrja.jpeg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑。',
        count: '888',
        delCount: '666'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.renderWaterFlow(this.data.demo, false, () => {
      console.log('渲染成功')
    })
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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
  upper(e)
  {
    this.setData({
      uppering: true
    })
    setTimeout(() => {
      this.setData({
        uppering: false
      })
    }, 3000)
    
  },
  lower(e){
    this.setData({
      lowering: true
    })
    setTimeout(() => {
      this.setData({
        lowering: false
      })
    }, 3000)
  }
})