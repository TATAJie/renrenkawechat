import { HTTP } from '../utils/http-p.js'
class LoginModel extends HTTP {
  login(userInfo) {
    return this.request('/rrk-live-center/v1/api/live/agreement/GetModelApp',{}, 'POST')
  }

}
export { LoginModel }