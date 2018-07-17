//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        logo: '/images/pro_01.jpg',
        title: '精英贷',
        desc: '丰富的恩荣啥发\n送到发送到发到付阿斯蒂芬阿斯蒂芬发送到'
      },
      {
        logo: '/images/pro_02.jpg',
        title: '月供贷',
        desc: '丰富的恩荣啥发送到发送到发\n到付阿斯蒂芬阿斯蒂芬发送到'
      },
      {
        logo: '/images/pro_03.jpg',
        title: '保单贷',
        desc: '丰富的恩荣啥发\n送到发送到发到付阿斯蒂芬阿斯蒂芬发'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let content = app.globalData.content;  // 全局变量传值
    console.log(content);
  },
  // 跳转详情页面
  toDetail: function (e) {
    console.log(e);
    // var index = e.currentTarget.dataset.index;
    // console.log(index);
    // var proList = this.data.proList;
    var title = e.currentTarget.dataset.item.title;
    wx.setStorageSync('title', title)
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + title,
    })
  },
  // api 实例
  getData: function () {
    let _this = this;
    wx.request({
      url: 'http://127.0.0.1:8080/list', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        // 赋值
        _this.setData({
          proList: res.data
        })
      }
    })
  }
})
