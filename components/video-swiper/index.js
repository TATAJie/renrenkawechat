Component({
  options: {
    addGlobalClass: true,
    pureDataPattern: /^_/
  },
  properties: {
    duration: {
      type: Number,
      value: 500
    },
    easingFunction: {
      type: String,
      value: 'default'
    },
    loop: {
      type: Boolean,
      value: true
    },
    videoList: {
      type: Array,
      value: [],
      observer: function observer(newAry, oldAry) {
        var newVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this._videoListChanged(newVal);
      }
    }
  },
  data: {
    curQueue: [],
    circular: false,
    current: 0,
    playing:true
  },
  lifetimes: {
    attached: function attached() {}
  },
  methods: {
    _videoListChanged: function(newVal) {
      var curQueue = this.data.curQueue.concat(newVal);
      this.setData({
        curQueue
      })
    },
    animationfinish: function animationfinish(e) {
      var curQueue = this.data.curQueue;
      var current = e.detail.current;
      this.setData({
        current
      })
      this.triggerEvent('change', {
        activeId: curQueue[current].id
      });

      var circular = true;
      if (current == 0) {
        circular = false;
      }
      this.setData({
        curQueue: curQueue,
        circular: circular
      });
    },
    multipleTap: function (e) {
      let videoContext = wx.createVideoContext(e.currentTarget.dataset.coverId, this);
      if (this.data.playing) {
        videoContext.pause();
        this.setData({
          playing: false
        })
      } else {
        videoContext.play();
        this.setData({
          playing: true
        })
      }

    },
    onPlay: function onPlay(e) {
      this.trigger(e, 'play');
      this.setData({
        playing: true
      })
    },
    onPause: function onPause(e) {
      this.trigger(e, 'pause');
    },
    onEnded: function onEnded(e) {
      this.trigger(e, 'ended');
    },
    onError: function onError(e) {
      this.trigger(e, 'error');
    },
    onTimeUpdate: function onTimeUpdate(e) {
      this.trigger(e, 'timeupdate');
    },
    onWaiting: function onWaiting(e) {
      this.trigger(e, 'wait');
    },
    onProgress: function onProgress(e) {
      this.trigger(e, 'progress');
    },
    onLoadedMetaData: function onLoadedMetaData(e) {
      this.trigger(e, 'loadedmetadata');
    },
    trigger: function trigger(e, type) {
      var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var detail = e.detail;
      var activeId = e.target.dataset.id;
      this.triggerEvent(type, Object.assign(Object.assign(Object.assign({}, detail), {
        activeId: activeId
      }), ext));
    }
  }
});