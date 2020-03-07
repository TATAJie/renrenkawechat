import {baseDataBev} from "../../components/behaviors/baseData.js"
Page({
  behaviors: [baseDataBev],
  /** 
   * 页面的初始数据
   */
  data: {
    videoList: [], //接口返回的视频列表。
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getVideoList(0)

  },
  onShow: function(options) {
    console.log('onShow');
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  getVideoList: function(value) {
    var ary = [
      'https://v-cdn.zjol.com.cn/280443.mp4',
      'https://v-cdn.zjol.com.cn/276982.mp4',
      'https://v-cdn.zjol.com.cn/276984.mp4',
      'https://v-cdn.zjol.com.cn/276985.mp4',
      'https://v-cdn.zjol.com.cn/276986.mp4',
      'https://v-cdn.zjol.com.cn/276987.mp4',
      'https://v-cdn.zjol.com.cn/276988.mp4',
      'https://v-cdn.zjol.com.cn/276989.mp4',
      'https://v-cdn.zjol.com.cn/276990.mp4',
      'https://v-cdn.zjol.com.cn/276991.mp4',
      'https://v-cdn.zjol.com.cn/276992.mp4',
      'https://v-cdn.zjol.com.cn/276993.mp4',
      'https://v-cdn.zjol.com.cn/276994.mp4',
      'https://v-cdn.zjol.com.cn/276996.mp4',
      'https://v-cdn.zjol.com.cn/276998.mp4',
      'https://v-cdn.zjol.com.cn/277000.mp4',
      'https://v-cdn.zjol.com.cn/277001.mp4',
      'https://v-cdn.zjol.com.cn/277002.mp4',
      'https://v-cdn.zjol.com.cn/277003.mp4',
      'https://v-cdn.zjol.com.cn/277004.mp4', 'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/2dbe7eca5285890794073052281/447nYOh5H2IA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/302875785285890794073167099/HhGL7OJObiYA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/30287db75285890794073167278/WVQpwkgnb9EA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/320e66af5285890794073202694/8ksYlGUevogA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/30010ead5285890794073141537/DGAx2EgLMEYA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/320ed9255285890794073203062/JyqT3zzDH4MA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/320ee16a5285890794073203247/okwtzftAVuwA.mp4',
      'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/2fcc59275285890794073114126/ySa5LZ3k4EcA.mp4'
    ];

    ary = ary.map((url, index) => ({
      id: index,
      url,
      objectFit: 'contain'
    }));
    this.setData({
      videoList: this.data.videoList.concat(ary),
      current: value
    })
  },
  getNextReuqest: function(event) {
    this.getVideoList(event.detail.current);
  },
  onPlay(e) {
    // console.log('onPlay')
  },

  onPause(e) {
    // console.log('onPlay')
  },

  onEnded(e) {
    // console.log('onEnded')
  },

  onError(e) {
    // console.log('onError')
  },

  onWaiting(e) {
    // console.log('onWaiting')
  },

  onTimeUpdate(e) {
    // console.log('onTimeUpdate')
  },

  onProgress(e) {
    // console.log('onProgress')
  },

  onLoadedMetaData(e) {
    // console.log('onLoadedMetaData')
  },
  swiperEnded(e) {
    let current = e.detail.activeId;
    if (current > this.data.videoList.length - 2) {
      this.getVideoList(current);
    }

  },
  bindDownLoad(e)
  {
    console.log('bindDownLoad');
  },
  topLoad(e) {
    console.log('topLoad');
  }
})