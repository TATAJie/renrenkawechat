import Util from '../../utils/util.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    attached: function() {
      
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gridItemClick:function(e){
console.log(e.target.dataset.index);
    }
  }
})