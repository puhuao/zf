// pages/update/update.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:''
  },
  input: function (e) {
    app.globalData.name = e.detail.value
  },
  bindViewTap: function () {
    // app.globalData.logo = this.data.content
    console.log(app.globalData.name)
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
    this.setData({
      content: options.content,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})