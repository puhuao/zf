// pages/land/land.js
// https://github.com/BearstOzawa/ourTalk
let index = 0,
  items = [],
  flag = true,
  itemId = 1;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    painting: {},
    shareImage: '',
    images: [],
    itemList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      images: app.data.images
    });

  },
  editName: function (e) {
    let content = e.currentTarget.dataset.data
    let name = e.currentTarget.dataset.name
    console.log(content + "-----name=" + name)
    wx.navigateTo({
      url: '../update/update?content=' + content + '&name=' + name
    })
  },
  onReady: function() {
    this.setData({
      images: app.data.images
    });
    let pos = 0;
    for (let i = 0; i < app.data.images.length; i++) {
      pos = i;
      console.log(app.data.images[i])
      this.setDropItem({
        url: app.data.images[i],
        position: pos
      });
    }
  },

  setDropItem(imgData) {
    let data = {},
      _this = this;
    wx.getImageInfo({
      src: imgData.url,
      success: res => {
        // 初始化数据
        data.width = res.width; //宽度
        data.height = res.height; //高度
        data.image = imgData.url; //地址
        data.id = ++itemId; //id
        data.top = 0; //top定位
        data.left = imgData.position * 160; //left定位
        data.scale = 1; //scale缩放
        data.active = false; //选中状态
        console.log(data)
        items[items.length] = data;
        _this.setData({
          itemList: items
        })
      }
    })
  },
  WraptouchStart: function(e) {
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
      if (e.currentTarget.dataset.id == items[i].id) {
        index = i;
        items[index].active = true;
      }
    }
    this.setData({
      itemList: items
    })
  },
  WraptouchMove: function(e) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
      }, 100)
    }

    console.log(items)
    this.setData({
      itemList: items
    })
  },
  eventDraw() {
    wx.showLoading({
      title: '绘制分享图片中',
      mask: true
    })
    let images = app.data.images
    let sale = app.globalData
    this.setData({
      painting: {
        width: 740,
        height: 524,
        clear: true,
        views: [{
            type: 'image',
            url: images[0],
            top: 0,
            left: 197 * 2.5,
            width: 80 * 2.5,
            height: 30 * 2.5
          },
          {
            type: 'image',
            url: images[0],
            top: 68 * 2.5,
            left: 5 * 2.5,
            width: 150 * 2.5,
            height: 84 * 2.5
          },
          {
            type: 'image',
            url: images[1],
            top: 152 * 2.5,
            left: 5 * 2.5,
            width: 50 * 2.5,
            height: 50 * 2.5
          },
          {
            type: 'image',
            url: images[2],
            top: 152 * 2.5,
            left: 55 * 2.5,
            width: 50 * 2.5,
            height: 50 * 2.5
          },
          {
            type: 'image',
            url: images[3],
            top: 152 * 2.5,
            left: 105 * 2.5,
            width: 50 * 2.5,
            height: 50 * 2.5
          },
          {
            type: 'text',
            content: sale.name,
            fontSize: 16,
            color: '#402D16',
            textAlign: 'left',
            top: 48 * 2.5,
            left: 25 * 2.5,
            bolder: true
          },
          {
            type: 'text',
            content: '售',
            fontSize: 15,
            color: '#563D20',
            textAlign: 'left',
            top: 56 * 2.5,
            left: 73 * 2.5
          },
          {
            type: 'text',
            content: sale.mony,
            fontSize: 22,
            lineHeight: 21,
            color: '#383549',
            textAlign: 'left',
            top: 40 * 2.5,
            left: 84 * 2.5,
            width: 287,
            MaxLineNumber: 2,
            breakWord: true,
            bolder: true
          },
          {
            type: 'text',
            content: '户型',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 68 * 2.5,
            left: 186 * 2.5,
            bolder: true
          },
          {
            type: 'text',
            content: sale.type,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 78 * 2.5,
            left: 176 * 2.5,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '面积',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 68 * 2.5,
            left: 234 * 2.5,
            bolder: true
          },
          {
            type: 'text',
            content: sale.size,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 78 * 2.5,
            left: 234 * 2.5,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '楼层',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 100 * 2.5,
            left: 176 * 2.5,
            bolder: true
          },
          {
            type: 'text',
            content: sale.floor,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 110 * 2.5,
            left: 176 * 2.5,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '装修',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 100 * 2.5,
            left: 234 * 2.5,
            bolder: true
          },
          {
            type: 'text',
            content: sale.situation,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 110 * 2.5,
            left: 234 * 2.5,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '其他说明',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 129 * 2.5,
            left: 176 * 2.5,
            bolder: true
          },
          {
            type: 'text',
            content: sale.extra,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 139 * 2.5,
            left: 176 * 2.5,
            textDecoration: 'line-through'
          },
          {
            type: 'image',
            url: images[0],
            top: 136 * 2.5,
            left: 223 * 2.5,
            width: 74 * 2.5,
            height: 74 * 2.5
          }
        ]
      }
    })
  },
  eventSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  eventGetImage(event) {
    console.log(event)
    wx.hideLoading()
    const {
      tempFilePath,
      errMsg
    } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  },
  changePage() {
    // wx.navigateTo({
    //   url: '../land/land'
    // })
  }
})