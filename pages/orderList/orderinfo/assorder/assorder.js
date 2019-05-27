// pages/staffList/staffList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    empid:""
  },

  orderin: function (options) {

    var id = options.currentTarget.dataset.id;
    console.log(id);
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://localhost:8080/fix/selectByfixId',
      data: {
        fixid: id,
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
    this.setData({
      hiddenmodalput: false,
    })
  },
  confirmM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },


  want: function (options) {
    var empider = this.data.empid;
    var fixid = options.currentTarget.dataset.ied;
    console.log("employid:" + empider)
    console.log("fixid:" + fixid)
    wx.showModal({
      title: '选择工人',
      content: '是否选择次工人？',
      success: function(res){
        if (res.confirm) {
        var that = this
        wx.request({
          url: 'http://localhost:8080/fix/selectAllfix',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log("调用API成功");
            console.log(res.data);

            //将获取到的json数据，存在名字叫zhihu的这个数组中
            
          }
        })
        }
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.empid = options.employid;
    console.log(options.employid);
    var that = this
    wx.request({
      url: 'http://localhost:8080/fix/selectAllfix',
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
    // this.onLoad();
    // console.log("成功刷新页面");
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