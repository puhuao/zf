// pages/input/input.js

Page({
  data: {
    use: [{
      "use_name": "出租"
    },
    {
      "use_name": "出售"
    },
    ],
    state: '',
  },
  //选择用途后加样式
  select_use: function (e) {
    var id = e.currentTarget.id;
    this.setData({
      state: e.currentTarget.dataset.key,
    });
  },
  onReady: function () { },
})