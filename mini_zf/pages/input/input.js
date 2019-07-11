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
    wx.navigateTo({
      url: '../nd/nd'
    })
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
    app.data.v = e.detail.value
  },
  rentInput: function (e) {
    let v = 'rent.rentMony'
    app.data.v = e.detail.value

  },
  sizeInput: function (e) {
    let v = 'rent.size'
    app.data.v = e.detail.value
  },
  typeInput: function (e) {
    let v = 'rent.type'
    app.data.v = e.detail.value
  },
  situationInput: function (e) {
    let v = 'rent.situation'
    app.data.v = e.detail.value
  },
  florInput: function (e) {
    let v = 'rent.floor'
    app.data.v = e.detail.value
  },
  ageInput: function (e) {
    let v = 'rent.age'
    app.data.v = e.detail.value
  },
  extraInput: function (e) {
    let v = 'rent.extra'
    app.data.v = e.detail.value
  },
  namePhoneInput: function (e) {
    let v = 'rent.namePhone'
    app.data.v = e.detail.value
  },
  sortInput: function (e) {
    let v = 'rent.sort'
    app.data.v = e.detail.value
  },
//fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
  snameInput: function (e) {
    let v = 'sale.name'
    app.data.v = e.detail.value
  },
  spriceInput:function (e) {
    let v = 'sale.mony'
    app.data.v = e.detail.value
  },

  smonyPerInput: function (e) {
    let v = 'sale.rentMony'
    app.data.v = e.detail.value

  },
  ssizeInput: function (e) {
    let v = 'sale.size'
    app.data.v = e.detail.value
  },
  stypeInput: function (e) {
    let v = 'sale.type'
    app.data.v = e.detail.value
  },
  sstuationInput: function (e) {
    let v = 'sale.situation'
    app.data.v = e.detail.value
  },
  sflorInput: function (e) {
    let v = 'sale.floor'
    app.data.v = e.detail.value
  },
  sageInput: function (e) {
    let v = 'sale.age'
    app.data.v = e.detail.value
  },
  sextraInput: function (e) {
    let v = 'sale.extra'
    app.data.v = e.detail.value
  },
  snamePhoneInput: function (e) {
    let v = 'sale.namePhone'
    app.data.v = e.detail.value
  },
  ssortInput: function (e) {
    let v = 'sale.sort'
    app.data.v = e.detail.value
  },
  spropertyInput: function (e) {
    let v = 'sale.propertyYears'
    app.data.v = e.detail.value
  },
  onReady: function () { },
})