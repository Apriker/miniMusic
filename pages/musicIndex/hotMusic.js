//获取app.js中的对象
const app = getApp();

Page({

  /**
   * 自定义音乐接口地址
   */
  musicUrls:{
      hotListUrl:"https://www.baidu.com",
      rankListUrl:"",
      otherListUrl:""
  },


  /**
   * 页面的初始数据
   */
  data: {
    // top栏图片文字
    topEverydayImg_1:"http://p3.music.126.net/sN91dYsevh-5ZhCRTysHsQ==/109951163410086537.jpg",
    viewId_1:"viewId_1",
    topMusic_1_List:"123",
    topEverydayStr_1:"热门推荐",

    topEverydayImg_2: "http://p4.music.126.net/-FA1ngcfUhViuFpdDJ_Eqg==/18536666533124771.jpg?param=200y200",
    viewId_2: "viewId_2",
    topMusic_2_List:"456",
    topEverydayStr_2:"排行榜",


    //  body内容类表一
    bodyImg_1_1:"http://p1.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg",
    bodyImg_1_2:"http://p1.music.126.net/JAXmMw2HqPwsOB9gXqwTng==/6627856092806601.jpg",
    bodyImg_1_3:"http://p1.music.126.net/CjGoliP3xOB0gcCUaeTTBg==/109951163375727336.jpg",
    bodyStr_1:"摇滚"
  },


  //音乐列表跳转
  rankingList : function(e){

    wx.navigateTo({
      url: "/pages/musicList/musicList?listCode=" + this.data.topMusic_1_List
    });

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let this_ = this;

      //加载音乐列表id
      wx.request({
        
        url: this.musicUrls.hotListUrl,
        data: {},
        header:{},
        method:"GET",

        //接口响应成功
        success: function(e){
         
        },

        //接口响应失败
        fail:function(e){

        },

        complete: function(e){

        }
      })
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