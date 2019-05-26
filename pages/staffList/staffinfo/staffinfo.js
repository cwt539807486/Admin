// pages/staffList/staffinfo/staffinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fixid: "",
    items: []
  },

  delorder: function (options) {
    var id = options.currentTarget.dataset.id;
    wx.showModal({
      title: '删除提示',
      content: '是否删除此订单',
      success: function (res) {
        if (res.confirm) {
          console.log(id);
          wx.request({
            url: 'http://localhost:8080/fix/deleteByPrimaryKey',
            data: {
              fixid: id,
            },
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              console.log("调用API成功");
              console.log('删除成功');
              wx.navigateBack({

              })
            }
          })
        }
        if (res.cancel) {
          console.log('取消');
        }
      }
    })
  },

  glorder: function (options) {
    wx.navigateTo({
      url: '/pages/staffList/staffinfo/updstaff/updstaff',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.fixid = options.id
    console.log(options.id)

    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://localhost:8080/fix/selectByfixId',
      data: {
        fixid: this.data.fixid,
      },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("调用API成功");
        console.log(res.data);
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          // items: res,
          fxid: res.data.fixid,
          fxame: res.data.fixName,
          fxphe: res.data.fixPhone,
          fxgrd: res.data.fixGrade,
          fxinf: res.data.fixInfo,

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