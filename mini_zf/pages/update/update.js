// pages/update/update.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    name:''
  },
  input: function (e) {
    var key = this.data.name

    app.globalData[key] = e.detail.value
  },
  bindViewTap: function () {
    // app.globalData.logo = this.data.content
    console.log(app.globalData[this.data.name])
    var pages = getCurrentPages();//当前页面栈
    
    if (pages.length > 1) {

      var beforePage = pages[pages.length - 2];//获取上一个页面实例对象
      beforePage.setData({
        sale: app.globalData
      });

    }
    wx.navigateBack({ delta: 1 });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      content: options.content,
      name: options.name
    });
  }
})