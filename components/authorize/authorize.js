// components/authorize/authorize.js
let app = getApp();
import Util from '../../utils/util.js';
import {
  LoginModel
} from "../../model/login.js"
let loginModel = new LoginModel()
Component({
  lifetimes: {
    attached() {
      this.setAuthStatus();
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    iShidden: {
      type: Boolean,
      value: true,
    },
    //是否自动登录
    isAuto: {
      type: Boolean,
      value: true,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    errorSum: 0,
    errorNum: 3
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //检测登录状态并执行自动登录
    setAuthStatus() {
      var that = this;
      Util.chekWxLogin().then((res) => {
        if (res.isLogin) {
          if (!Util.checkLogin()) return Promise.reject({
            authSetting: true,
            msg: '用户token失效',
            userInfo: res.userInfo
          });
          that.triggerEvent('onLoadFun', app.globalData.userInfo);
        } else {
          wx.showLoading({
            title: '正在登录中'
          });
          that.setUserInfo(res.userInfo, true);
        }
      }).catch(res => {
        if (res.authSetting === false) {
          // //没有授权不会自动弹出登录框
          if (that.data.isAuto === false) return;
          //自动弹出授权
          that.setData({
            iShidden: false
          });
        } else if (res.authSetting) {
          //授权后登录token失效了
          that.setUserInfo(res.userInfo);
        }
      })
    },
    //授权
    setUserInfo(userInfo, isLogin) {
      let that = this;
      if (isLogin) {
        that.getWxUserInfo(userInfo);
      } else {
        Util.getCodeLogin((res) => {
          Util.wxgetUserInfo().then(userInfo => {
            userInfo.code = res.code;
            that.getWxUserInfo(userInfo);
          }).catch(res => {
            wx.hideLoading();
          });
        });
      }
    },
    getWxUserInfo: function(userInfo) {

      let that = this;
      loginModel.login(userInfo).then(res => {
        console.log('===========' + userInfo);
        console.log(res);
        // app.globalData.token = res.data.token;
        // app.globalData.isLog = true;
        // app.globalData.userInfo = res.data.userInfo;
        // app.globalData.expiresTime = res.data.expires_time;
        // if (res.data.cache_key) wx.setStorage({
        //   key: 'cache_key',
        //   data: res.data.cache_key
        // });
        //取消登录提示
        wx.hideLoading();
        //关闭登录弹出窗口
        that.setData({
          iShidden: true,
          errorSum: 0
        });

        //执行登录完成回调
        that.triggerEvent('onLoadFun', app.globalData.userInfo);

      }).catch((err) => {
        wx.hideLoading();
        that.data.errorSum++;
        that.setData({
          errorSum: that.data.errorSum
        });
        if (that.data.errorSum >= that.data.errorNum) {
          // Util.Tips({
          //   title: err
          // });
        } else {
          that.setUserInfo(userInfo);
        }
      });
    },
    getUserInfo: function(res) {
      if (res.detail.errMsg == "getUserInfo:ok") {
        this.setAuthStatus();
      }
    }
  }
})