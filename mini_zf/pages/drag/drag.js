const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrayNull: true,
    releaseText: '',
    replayMore: false,
    hidden: true,
    flag: false,
    x: 0,
    y: 0,
    tempFilePaths: [],
    disabled: true,
    elements: [],
    textHeight: ''
  },
  //上传图片 
  choose: function () {
    var that = this,
      tempFilePaths = this.data.tempFilePaths;
    wx.chooseImage({
      count: 9 - tempFilePaths.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res)
        wx.hideLoading()
        tempFilePaths = tempFilePaths.concat(res.tempFilePaths);
        that.setData({
          tempFilePaths: tempFilePaths
        }, () => {
          //获取到图片url的数组后，回调里执行下面的原因是：为了拖拽初始化
          var query = wx.createSelectorQuery();
          var nodesRef = query.selectAll(".item");
          nodesRef.fields({
            dataset: true,
            rect: true
          }, (result) => {
            console.log(result)
            that.setData({
              elements: result
            })
          }).exec()
        });
      }
    })
  },
  //删除图片
  deletePic: function (e) {
    var images = this.data.tempFilePaths;
    var index = e.currentTarget.dataset.id;
    images.splice(index, 1);
    this.setData({
      tempFilePaths: images
    })
    if (this.data.tempFilePaths.length != 0 || this.data.releaseText != "") {
      this.setData({
        arrayNull: false
      })
    } else {
      this.setData({
        arrayNull: true
      })
    }
  },
  //放大图片
  previewImage: function (e) {
    var src = e.currentTarget.dataset.src; //获取data-src
    var imgList = this.data.tempFilePaths; //获取data-list
    //要把对象中需要的键值对拿出来，放进一个数组，Object.keys是为了取到对象的长度进行遍历
    var imgArr = [];
    var objkeys = Object.keys(imgList);
    for (var i = 0; i < objkeys.length; i++) {
      imgArr.push(imgList[i]);
    }
    console.log(src, imgList)
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgArr // 需要预览的图片http链接列表
    })
  },

  //长按
  _longtap: function (e) {
    var maskImg = e.currentTarget.dataset.img
    this.setData({
      maskImg: maskImg
    })
    const detail = e.detail;
    this.setData({
      x: e.currentTarget.offsetLeft,
      y: e.currentTarget.offsetTop
    })
    this.setData({
      hidden: false,
      flag: true
    })
  },
  //触摸开始
  touchs: function (e) {
    this.setData({
      beginIndex: e.currentTarget.dataset.index
    })
  },
  //触摸结束
  touchend: function (e) {
    if (!this.data.flag) {
      return;
    }
    const x = e.changedTouches[0].pageX
    const y = e.changedTouches[0].pageY
    const list = this.data.elements;
    let data = this.data.tempFilePaths
    for (var j = 0; j < list.length; j++) {
      const item = list[j];
      if (x > item.left && x < item.right && y > item.top && y < item.bottom) {

        const endIndex = item.dataset.index;
        const beginIndex = this.data.beginIndex;
        //临时保存移动的目标数据
        let tem = data[beginIndex];
        //将移动目标的下标值替换为被移动目标的下标值
        data[beginIndex] = data[endIndex]
        //将被移动目标的下标值替换为beginIndex
        data[endIndex] = tem;
        this.setData({
          tempFilePaths: data
        })
      }
    }
    this.setData({
      hidden: true,
      flag: false
    })
  },
  //滑动
  touchm: function (e) {
    console.log(e)
    let x = e.changedTouches[0].clientX
    let y = e.changedTouches[0].clientY
    // **//请着重 好好的 看看这里 朋友们 拖拽会不会出bug 就看这里了**
    //===============================>
    this.setData({
      x: x - 75,
      y: y
    })
  }
})
