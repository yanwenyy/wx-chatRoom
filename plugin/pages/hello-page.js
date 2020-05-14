// plugin/pages/hello-page.js
Page({
  data: {
    list: [], //会话内容
    inputMsg: '',
    scrollTop: '',
    windowHeight:'',
    inputHeight:''
  },
  onLoad: function (options) {
    console.log(options)
    console.log('This is a plugin page!');
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
  },

  //input框输入
  input: function (e) {
    this.setData({
      inputMsg: e.detail.value
    })
  },

  //发送按钮点击
  sendMsg: function () {
    // let  scrollHeight = wx.getSystemInfoSync().windowHeight;
    if (this.data.inputMsg != '') {
      this.data.list.push(this.data.inputMsg);
      this.setData({
        inputMsg: '',
        list: this.data.list,
        scrollTop: this.data.list.length * 1000
      })
    } else {

    }
  },

  inputFocus(e) {
    console.log('键盘弹起')
    var inputHeight = 0
    if (e.detail.height) {
      inputHeight = e.detail.height;
      this.setData({
        inputHeight:inputHeight
      })
    }
  },
  inputBlur() {
    console.log('键盘收起');
    this.setData({
      inputHeight:0
    })
  },
});