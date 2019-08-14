// pages/input/input.js
var app = getApp()
Page({
  data: {
    use: [{
      "use_name": "出租"
    },
    {
      "use_name": "出售"
    },
    ],
    state: ''
  },
  bindViewTap: function () {
   
    let images = app.data.images
    console.log(images)
    if (images.length==2){
      console.log("app.data.images.size=2?" + images.length)
      wx.navigateTo({
        url: '../edit2pic/edit2pic'
      })
    }else{
      console.log("app.data.images.size=4?" + images.length)
      wx.navigateTo({
        url: '../editpic/editpic'
      })
    }
  },
  //选择用途后加样式
  select_use: function (e) {
    var id = e.currentTarget.dataset.key;
    app.data.state = id
    this.setData({
      state: id,
    });
  },
  nameInput: function (e) {
    let v = 'rent.name'
    app.globalData.name = e.detail.value
  },
  rentInput: function (e) {
    let v = 'rent.rentMony'
    app.globalData.rentMony = e.detail.value

  },
  sizeInput: function (e) {
    let v = 'rent.size'
    app.globalData.size = e.detail.value
  },
  typeInput: function (e) {
    let v = 'rent.type'
    app.globalData.type = e.detail.value
  },
  situationInput: function (e) {
    let v = 'rent.situation'
    app.globalData.situation = e.detail.value
  },
  florInput: function (e) {
    let v = 'rent.floor'
    app.globalData.floor = e.detail.value
  },
  ageInput: function (e) {
    let v = 'rent.age'
    app.globalData.age = e.detail.value
  },
  extraInput: function (e) {
    let v = 'rent.extra'
    app.globalData.extra = e.detail.value
  },
  namePhoneInput: function (e) {
    let v = 'rent.namePhone'
    app.globalData.namePhone = e.detail.value
  },
  sortInput: function (e) {
    let v = 'rent.sort'
    app.globalData.sort = e.detail.value
  },
//fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
  snameInput: function (e) {
    let v = 'sale.name'
    app.globalData.name = e.detail.value
  },
  spriceInput:function (e) {
    let v = 'sale.mony'
    app.globalData.mony = e.detail.value
  },

  smonyPerInput: function (e) {
    let v = 'sale.rentMony'
    app.globalData.monyPer = e.detail.value

  },
  ssizeInput: function (e) {
    let v = 'sale.size'
    app.globalData.size = e.detail.value
  },
  stypeInput: function (e) {
    let v = 'sale.type'
    app.globalData.type = e.detail.value
  },
  sstuationInput: function (e) {
    let v = 'sale.situation'
    app.globalData.situation = e.detail.value
  },
  sflorInput: function (e) {
    let v = 'sale.floor'
    app.globalData.floor = e.detail.value
  },
  sageInput: function (e) {
    let v = 'sale.age'
    app.globalData.age = e.detail.value
  },
  sextraInput: function (e) {
    let v = 'sale.extra'
    app.globalData.extra = e.detail.value
  },
  snamePhoneInput: function (e) {
    let v = 'sale.namePhone'
    app.globalData.namePhone = e.detail.value
  },
  ssortInput: function (e) {
    let v = 'sale.sort'
    app.globalData.sort = e.detail.value
  },
  spropertyInput: function (e) {
    let v = 'sale.propertyYears'
    app.globalData.propertyYears = e.detail.value
  },
  onReady: function () { },
})