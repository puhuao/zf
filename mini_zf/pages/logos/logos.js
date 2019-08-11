// pages/logos/logos.js
wx.cloud.init();
const db = wx.cloud.database({});
const cont = db.collection('logo');
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ne: [],
  },
  selectLogo: function (e) {
    var fileId = e.currentTarget.dataset.key;
    console.log(fileId)
    wx.cloud.getTempFileURL({
      fileList: [fileId],
      success: res => {
        console.log(res.fileList)
        app.globalData.logo = res.fileList.tempFileURL
        console.log(app.globalData.logo)
        var pages = getCurrentPages();//当前页面栈

        if (pages.length > 1) {

          var beforePage = pages[pages.length - 2];//获取上一个页面实例对象

          var currPage = pages[pages.length - 1]; // 当前页面，若不对当前页面进行操作，可省去

          beforePage.changeData();//触发父页面中的方法
          console.log(pages)
        }
        wx.navigateBack({ delta: 1 });
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    //1、引用数据库   
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称     
      env: 'zhufeng-lb3t8'
    })
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('logo').limit(100).get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data)
        //这一步很重要，给ne赋值，没有这一步的话，前台就不会显示值      
        this.setData({
          ne: res.data
        })
      }
    })
  },
})