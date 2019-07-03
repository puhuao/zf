// components/customer/customer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    top: 800,
    left: 570,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //组件实现拖动效果
    setTouchMove: function (e) {
      var that = this
      if (e.touches[0].clientX < (wx.getSystemInfoSync().windowWidth - 80) && e.touches[0].clientX > 0 && e.touches[0].clientY < (wx.getSystemInfoSync().windowHeight - 120) && e.touches[0].clientY > 0) {
        wx.getSystemInfo({
          success: function (res) {
            let X = (e.touches[0].clientX * (750 / res.windowWidth));
            // 将高度乘以换算后的该设备的rpx与px的比例
            let Y = (e.touches[0].clientY * (750 / res.windowWidth));
            // 将高度乘以换算后的该设备的rpx与px的比例
            that.setData({
              left: X,
              top: Y
            })
          }
        })

      }
    },
    // 拨打电话组件
    phone() {

      wx.makePhoneCall({
        phoneNumber: this.properties.newPhone,
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    }
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
    created() {

    }
  }
})
