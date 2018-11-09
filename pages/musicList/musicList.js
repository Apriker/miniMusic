Page({

  /**
   * 页面的初始数据
   */
  data: {

    //顶部图标参数
    rankImg:"http://p3.music.126.net/ITFTjw1QqPXM4yd2SDvVVQ==/109951163020770438.jpg",
    rankTitle:'hot排行榜',
    rankContent:"hot音乐飙升榜",


    playAllImg:"http://pic.soutu123.com/element_origin_min_pic/00/92/38/9256f21d200c080.jpg",
    playAllImgOn:"http://pic.soutu123.com/element_origin_min_pic/00/92/40/2656f21e0972056.jpg",
    playAllStr:"播放全部",

    //音乐列表信息
    musicInfos:[
        {
          musicNumber:"01",
          musicName:'如果我们不曾相遇',
        musicAuthor: "五月天",
        musicPlayUrl:"http://fs.open.kugou.com/6005d2dd16f31264e74fddd25b41ca06/5be16795/G066/M05/04/19/4oYBAFdq0w2APMybADFGDC4y47A802.mp3",
          musicCover:"https://pic.xiami.net/images/album/img10/3110/21003372621469680510.jpg",
        },
        {
          musicNumber: "02",
          musicName: '顽固',
          musicAuthor: "五月天",
          musicPlayUrl:'http://fs.open.kugou.com/3bc0e8632d430242dbe322e330611057/5be16867/G064/M07/0D/18/IJQEAFeQi92ACKz2AECH1netsfc256.mp3',
          musicCover: "https://pic.xiami.net/images/album/img10/3110/21003372621469680510.jpg"
        },
        {
          musicNumber: "03",
          musicName: '派对动物',
          musicAuthor: "五月天",
          musicPlayUrl:"http://fs.open.kugou.com/30737b7c550ccfbc7387b00f78b21634/5be1687b/G063/M09/07/05/fw0DAFc_v06AKtybAD0oSLjptZc613.mp3",
          musicCover: "https://pic.xiami.net/images/album/img10/3110/21003372621469680510.jpg"
        },
        {
          musicNumber: "04",
          musicName: '只要平凡',
          musicAuthor: "张杰/张碧晨",
          musicPlayUrl:"http://fs.open.kugou.com/16b6d9567a217f9175308630c0427a57/5be1688c/G128/M0B/0D/05/IIcBAFss7SWAFJ0BADwVp8tbUyg648.mp3",
          musicCover: "https://pic.xiami.net/images/album/img2/892902/8929021529892902.jpg"
      }
    ]
  },


  //点击播放
  playMusic: function(music){
    let musicInfo = music.currentTarget.dataset.music;

    wx.navigateTo({
      url: '/pages/play/play?musicName=' + musicInfo.musicName + "&musicAuthor=" + musicInfo.musicAuthor
        + "&musicPlayUrl=" + musicInfo.musicPlayUrl + "&musicCover=" + musicInfo.musicCover,
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})