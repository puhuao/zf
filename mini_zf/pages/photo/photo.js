// pages/photo/photo.js
var app = getApp()

Page({ //事件处理函数
  data: {
    tempFilePaths: ''  
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../work/work'
    })
  },
 
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 4, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        console.log({ '选择图片的返回数据': res });
        res.tempFilePaths.forEach(v => {
          console.log({ '遍历每一张图': v });
          _this.compress(v, '450', false, function (res) {
            _this.setData({
              tempFilePaths: _this.data.tempFilePaths.concat(res.tempFilePath)
            });
          });
        })
        // _this.setData({
        //   tempFilePaths: res.tempFilePaths
        // })
      }
    })
  },
  // 压缩图片
  //file图片文件(必选)
  //maxWidth限制宽度(必选)
  //maxHeight限制高度(可选)
  //callback压缩完成回调方法(可选)
  compress:function(file, maxWidth, maxHeight, callback) {    //接收传过来的图片
    var that = this;
    //获取原图片信息
    wx.getImageInfo({
      src: file,
      success: function (res) {
        var width = res.width, height = res.height;
        if (width > maxWidth) {
          //超出限制宽度
          height = (maxWidth / width) * height;
          width = parseInt(maxWidth);
        }
        if (res.height > maxHeight && maxHeight) {
          //超出限制高度
          var ratio = that.data.thumbHeight / res.height;//计算比例
          width = (maxHeight / height) * width.toFixed(2);
          height = maxHeight.toFixed(2);
        }

        that.setData({ thumbWidth: width, thumbHeight: height });

        //按比例压缩图片
        const ctx = wx.createCanvasContext('firstCanvas');
        ctx.drawImage(file, 0, 0, width, height);
        ctx.draw(false, function () {
          //绘画完成回调
          //生成图片
          wx.canvasToTempFilePath({
            canvasId: 'firstCanvas',
            success: function (res) {
              typeof callback == "function" && callback(res);
            }
          })
        });
      }
    })
  }, 
})