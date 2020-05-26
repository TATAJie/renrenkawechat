const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const wxgetUserInfo = function () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      lang: 'zh_CN',
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      }
    })
  });
}

const checkLogin = function () {
  let res = getApp().globalData.token ? true : false;
  let res1 = getApp().globalData.isLog;
  let res2 = res && res1;
  if (res2) {
    let newTime = Math.round(new Date() / 1000);
    if (getApp().globalData.expiresTime < newTime) return false;
  }
  return res2;
}

const logout = function () {
  getApp().globalData.token = '';
  getApp().globalData.isLog = false;
}

const chekWxLogin = function () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          return reject({ authSetting: false });
        } else {
          wx.getStorage({
            key: 'cache_key',
            success(res) {
              if (checkLogin()) {
                return resolve({ userinfo: getApp().globalData.userInfo, isLogin: true });
              } else {
                wxgetUserInfo().then(userInfo => {
                  userInfo.cache_key = res.data;
                  return resolve({ userInfo: userInfo, isLogin: false });
                }).catch(res => {
                  return reject(res);
                })
              }
            },
            fail() {
              getCodeLogin((code) => {
                wxgetUserInfo().then(userInfo => {
                  userInfo.code = code;
                  return resolve({ userInfo: userInfo, isLogin: false });
                }).catch(res => {
                  return reject(res);
                })
              });
            }
          })

        }
      },
      fail(res) {
        return reject(res);
      }
    })
  })
}


/**
 * 
 * 授权过后自动登录
*/
const autoLogin = function () {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'cache_key',
      success(res) {
        wxgetUserInfo().then(userInfo => {
          userInfo.cache_key = res.data;
          return resolve(userInfo);
        }).catch(res => {
          return reject(res);
        })
      },
      fail() {
        getCodeLogin((code) => {
          wxgetUserInfo().then(userInfo => {
            userInfo.code = code;
            return resolve(userInfo);
          }).catch(res => {
            return reject(res);
          })
        });
      }
    });
  })
}

const getCodeLogin = function (successFn) {
  wx.login({
    success(res) {
      successFn(res);
    }
  })
}

//获取元素高度

const getViewInfo = (id) => {

  return new Promise((resolve, reject) => {

    try {
      wx.createSelectorQuery().select(id).boundingClientRect(res => { resolve(res) }).exec()

    } catch (err) {

      reject(err)

    }

  })
}

module.exports = {
  formatTime: formatTime,
  chekWxLogin: chekWxLogin,
  getCodeLogin: getCodeLogin,
  checkLogin: checkLogin,
  wxgetUserInfo: wxgetUserInfo,
  autoLogin: autoLogin,
  logout: logout,
  getViewInfo: getViewInfo
}
