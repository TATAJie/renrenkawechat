import {
  config
} from '../config.js';
class HTTP {
  request(url, data, method) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method);
    })
  }
  _request(url, resolve, reject, data = {}, method = 'GET') {

    var reqTask = wx.request({
      url: config.api_base_url + url,
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        resolve(result.data)
      },
      fail: (err) => {
        reject();
      }
    });
  }
}
export {
  HTTP
}