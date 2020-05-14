// plugin/components/chatList/chatList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    wssUrl:{
      type: String,
      value:''
    },
    parameter:{
      type: Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready:function(){
    wx.connectSocket({
      url: 'wss://example.qq.com',
      header: {
        'content-type': 'application/json'
      },
      protocols: ['protocol1'],
      success:function(res){
        console.log(res);
      },
      fail:function(res){
        console.log(res);
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
