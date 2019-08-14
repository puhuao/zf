// pages/edit2pic/edit2pic.js
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
    itemList: [],
    sale: {},
    logo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      images: app.data.images,
      sale: app.globalData,
      logo: app.globalData.logo,
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   *
   */
  onReady: function () {
    this.setData({
      images: app.data.images,
      sale: app.globalData
    });
    console.log(this.data.sale)
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
  editName: function (e) {
    let content = e.currentTarget.dataset.data
    wx.navigateTo({
      url: '../update/update?content=' + content
    })
   
  },
  editLogo: function (e) {
    wx.navigateTo({
      url: '../logos/logos'
    })
    console.log(app.globalData)
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
  WraptouchStart: function (e) {
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
  WraptouchMove: function (e) {
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
        width: 648,
        height: 918,
        clear: true,
        views: [
          {
            type: 'image',
            url: app.globalData.logo,
            top: 0,
            left: 25,
            width: 144,
            height: 144
          },
          {
            type: 'image',
            url: images[0],
            top: 80 + 144,
            left: 84,
            width: 480,
            height: 160
          },
          {
            type: 'image',
            url: images[1],
            top: 388,
            left: 84,
            width: 480,
            height: 160
          },
          {
            type: 'image',
            url: "",
            top: 0,
            left: 0,
            width: 0,
            height: 0
          },
          {
            type: 'image',
            url: "",
            top: 0,
            left: 0,
            width: 0,
            height: 0
          },
          {
            type: 'text',
            content: sale.name,
            fontSize: 30,
            color: '#402D16',
            textAlign: 'left',
            top: 188,
            left: 128,
            width: 148,
            bolder: true
          },
          {
            type: 'text',
            content: '售',
            fontSize: 15,
            color: '#563D20',
            textAlign: 'left',
            top: 192,
            left: 128 + 80
          },
          {
            type: 'text',
            content: sale.mony,
            fontSize: 22,
            lineHeight: 21,
            color: '#383549',
            textAlign: 'left',
            top: 178,
            left: 208 + 15,
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
            top: 388 + 160,
            left: 84,
            bolder: true
          },
          {
            type: 'text',
            content: sale.type,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 388 + 160 + 40,
            left: 84,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '面积',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 388 + 160,
            left: 84 + 120,
            bolder: true
          },
          {
            type: 'text',
            content: sale.size,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 388 + 160 + 40,
            left: 84 + 120,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '楼层',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 388 + 160,
            left: 84 + 120 + 120,
            bolder: true
          },
          {
            type: 'text',
            content: sale.floor,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 388 + 160 + 40,
            left: 84 + 120 + 120,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '装修',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 388 + 160,
            left: 84 + 120 + 120 + 120,
            bolder: true
          },
          {
            type: 'text',
            content: sale.situation,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 388 + 160 + 40,
            left: 84 + 120 + 120 + 120,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '其他说明',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 388 + 160 + 40 + 40,
            left: 84,
            bolder: true
          },
          {
            type: 'text',
            content: sale.extra,
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 388 + 160 + 40,
            left: 84,
            textDecoration: 'line-through'
          },
          {
            type: 'image',
            url: images[0],
            top: 674,
            left: 404,
            width: 244,
            height: 244
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
    const { tempFilePath, errMsg } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  },
  changePage() {
    wx.navigateTo({
      url: '../land/land'
    })
  }
})