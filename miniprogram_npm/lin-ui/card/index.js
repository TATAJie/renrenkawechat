Component({
  externalClasses: ["l-class", "l-img-class", "l-title-class"],
  options: {
    multipleSlots: !0
  },
  properties: {
    image: String,
    title: String,
    describe: String,
    plaintext: Boolean,
    full: Boolean,
    position: {
      type: String,
      value: "left"
    },
    type: {
      type: String,
      value: "primary"
    },
    imageMode: {
      type: String,
      value: "scaleToFill"
    }
  },
  data: {},
  methods: {}
});