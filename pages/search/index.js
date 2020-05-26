// pages/search/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    inputValue: null,
    resultList: [],
    CustomBar: app.globalData.CustomBar
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    wx.getStorage({
      key: 'historySearch',
      success(res) {
        _this.setData({
          list: res.data
        })
      }
    })
  },
  blur: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
    this.search();
  },
  search: function() {
    let list = [{
      "projectName": "111"
    }, {
      "projectName": "111"
    }, {
      "projectName": "111"
    }, {
      "projectName": "111"
    }, {
      "projectName": "111"
    }, {
      "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }, {
        "projectName": "111"
      }];
    this.setData({
      resultList: list
    })
  },
  save: function() {
    var list = this.data.list;
    if (list.indexOf(this.data.inputValue) == -1 & this.data.inputValue != '') {
      if(list.length >= 10)
      {
        list.pop();
      }
      list.unshift(this.data.inputValue);
    }
    this.setData({
      list: list
    })
    wx.setStorage({
      key: 'historySearch',
      data: list
    })

  },
  searchName: function(e) {
    this.setData({
      inputValue: e.currentTarget.dataset.value
    })
    this.search();
  },
  remove: function() {
    var _this = this;
    wx.showModal({
      title: '提示',
      content: '确认清空所有记录?',
      success(res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'historySearch',
            success() {
              _this.setData({
                list: []
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  clean: function() {
    var _this = this
    setTimeout(function() {
      _this.setData({
        inputValue: '',

      })
    }, 100)
  },
  confirm: function() {
    this.save();
  },
  detail: function(e) {
    this.save();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  }
})