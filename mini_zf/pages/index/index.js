//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎使用珠峰房源海报助手',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    splashId:'cloud://zhufeng-lb3t8.7a68-zhufeng-lb3t8/advertising/splash.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../photo/photo'
    })
  },
  onLoad: function () {
    wx.cloud.getTempFileURL({
      fileList: [splashId],
      success: res => {
        console.log(res.fileList)
        app.globalData.logo = res.fileList[0].tempFileURL
        console.log(app.globalData.logo)
        var pages = getCurrentPages();//当前页面栈
        console.log(res.fileList[0].tempFileURL)
      },
      fail: err => {
        console.log(err)
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
