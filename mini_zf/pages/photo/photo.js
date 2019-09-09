// pages/photo/photo.js
import {
  $init,
  $digest
} from '../../utils/common.util'
var app = getApp()

Page({ //事件处理函数
  data: {
    showInput: false,
    images: []
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../editpic/editpic'
    })
  },

  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)

  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],
      urls: images,
    })
  },
  chooseimage: function() {
    var _this = this;
    wx.chooseImage({
      count: 4, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function(res) {

        app.data.images = res.tempFilePaths
        console.log("app.data.images.size=?" + app.data.images)
        _this.setData({
          images: res.tempFilePaths
        });
        const images = res.tempFilePaths
        if (images.length > 0) {
          _this.setData({
            showInput: true
          });
        }

      }
    })
  },
  // 压缩图片
  //file图片文件(必选)
  //maxWidth限制宽度(必选)
  //maxHeight限制高度(可选)
  //callback压缩完成回调方法(可选)
  compress: function(file, maxWidth, maxHeight, callback) { //接收传过来的图片
    var that = this;
    //获取原图片信息
    wx.getImageInfo({
      src: file,
      success: function(res) {
        var width = res.width,
          height = res.height;
        if (width > maxWidth) {
          //超出限制宽度
          height = (maxWidth / width) * height;
          width = parseInt(maxWidth);
        }
        if (res.height > maxHeight && maxHeight) {
          //超出限制高度
          var ratio = that.data.thumbHeight / res.height; //计算比例
          width = (maxHeight / height) * width.toFixed(2);
          height = maxHeight.toFixed(2);
        }

        that.setData({
          thumbWidth: width,
          thumbHeight: height
        });

        //按比例压缩图片
        const ctx = wx.createCanvasContext('firstCanvas');
        ctx.drawImage(file, 0, 0, width, height);
        ctx.draw(false, function() {
          //绘画完成回调
          //生成图片
          wx.canvasToTempFilePath({
            canvasId: 'firstCanvas',
            success: function(res) {
              typeof callback == "function" && callback(res);
            }
          })
        });
      }
    })
  },
})