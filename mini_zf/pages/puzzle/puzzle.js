const Puzzle = require("./h5puzzle.js");
Page({
  data: {
    imgPoints: [],
    imgArr: [
      'https://rattenking.gitee.io/stone/images/wx/images/quanyecha.jpg'
    ],
    imgUrl: 'https://rattenking.gitee.io/stone/images/wx/images/quanyecha.jpg',
    levelArr: [
      {
        id: 2,
        text: '弱智'
      },
    ],
    WIDTH: 648,
    HEIGHT: 918,
    width: 0,
    height: 0,
    status: false,
    trans: 0,
    currentX: 0,
    currentY: 0,
    currentPX: 0,
    currentPY: 0,
    type0: 2
  },
  onReady(){
    let _this = this;  
    new Puzzle(this);
  },
  getType(e){
    this.setData({
      trans: -this.data.WIDTH,
      type0: e.currentTarget.dataset.type
    })
    this.puzzle = new Puzzle(this, {
      type: e.currentTarget.dataset.type
    })
  },
  getUrl(e){
    this.setData({
      trans: -this.data.WIDTH * 2,
      imgUrl: e.currentTarget.dataset.url
    })
  }
})