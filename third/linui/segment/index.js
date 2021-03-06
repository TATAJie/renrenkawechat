import scrollCenter from "../behaviors/scrollCenter";
Component({
  behaviors: [scrollCenter],
  externalClasses: ["l-class", "l-header-class", "l-class-active", "l-active-class", "l-class-inactive", "l-inactive-class", "l-class-tabimage", "l-tab-image-class", "l-class-header-line", "l-header-line-class", "l-class-line", "l-line-class", "l-class-icon", "l-icon-class", "l-class-badge", "l-badge-class"],
  options: {
    multipleSlots: !0
  },
  relations: {
    "../segment-item/index": {
      type: "child",
      linked() {
        this.initTabs()
      }
    }
  },
  properties: {
    activeKey: {
      type: String,
      value: "",
      observer: "changeCurrent"
    },
    placement: {
      type: String,
      value: "top"
    },
    scrollable: Boolean,
    hasLine: {
      type: Boolean,
      value: !0
    },
    animatedForLine: Boolean,
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    equalWidth: {
      type: Boolean,
      value: !0
    },
    even: {
      type: Boolean,
      value: !0
    },
    width: Number,
    height: Number,
    itemHeight: Number,
    itemWidth: Number
  },
  observers: {
    activeKey: function(e) {
      if (!e) return;
      const t = this.data.tabList.findIndex(t => t.key === e);
      this.setData({
        currentIndex: t
      }, () => {
        this.data.scrollable && this.queryMultipleNodes()
      })
    }
  },
  data: {
    tabList: [],
    currentIndex: 0
  },
  methods: {
    initTabs(e = this.data.activeKey) {
      let t = this.getRelationNodes("../segment-item/index");
      if (t.length > 0) {
        if (t.length === this.data.tabList.length) return;
        let a = e,
          s = this.data.currentIndex;
        const l = t.map((t, l) => (a = e || 0 != l ? a : t.data.key, s = t.data.key === a ? l : s, { ...t.data
        }));
        this.setData({
          tabList: l,
          activeKey: a,
          currentIndex: s
        }, () => {
          this.data.scrollable && this.queryMultipleNodes()
        })
      }
    },
    handleChange(e) {
      const t = e.currentTarget.dataset.key,
        a = e.currentTarget.dataset.index;
      this._setChangeData({
        activeKey: t,
        currentIndex: a
      })
    },
    _setChangeData({
      activeKey: e,
      currentIndex: t
    }) {
      this.setData({
        activeKey: e,
        currentIndex: t
      }, () => {
        this.data.scrollable && this.queryMultipleNodes()
      }), this.triggerEvent("linchange", {
        activeKey: e,
        currentIndex: t
      })
    }
  }
});