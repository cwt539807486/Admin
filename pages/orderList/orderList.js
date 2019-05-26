// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
  },

  orderin:function(options){
    wx.navigateTo({
      url: '../orderList/orderinfo/orderinfo',
    })

  },

  changeGroup: function (event) {
    var id = event.currentTarget.dataset.id;
    
    this.setData({
      id: id
    });
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {





////////////////////

    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://localhost:8080/employ/selectAllemploy',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("调用API成功");
        console.log(res.data);

        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          items: res.data,
        })
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