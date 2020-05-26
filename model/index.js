import { HTTP } from '../utils/http-p.js'
class IndexModel extends HTTP {
  getHotList() {
    return this.request('/rrk-live-center/v1/api/live/agreement/GetModelApp',{},'POST')
  }

  getLikeStatus(bid) {
    return this.request(`/book/${bid}/favor`)
  }

}
export { IndexModel }