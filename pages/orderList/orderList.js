// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        title: "全部",
        stock: 1,
        status:-1
      },
      {
        id: 1,
        title: "未分配",
        stock: 2,
        status: 0
      },
      {
        id: 2,
        title: "维修中",
        stock: 3,
        status: 1
      },
      {
        id: 3,
        title: "已完成",
        stock: 4,
        status: 2
      },
    ],
    // 当前选中的号码
    current_tag: 0,
    statusr:-1
  },

  orderin:function(options){
    var empid = options.currentTarget.dataset.emp;
    console.log(empid);
    wx.navigateTo({

      url: '../orderList/orderinfo/orderinfo?id=' + empid,
    })
    

  },

  clickedAction: function (responseObject) {
    let that = this;
    var id = responseObject.currentTarget.dataset.id;  //获取自定义的ID值 
    console.log("current_tag", id)
    this.setData({
      current_tag: id,
    })

    if (id == 0) {
      console.log("current_tag", id)
      that.setData({
        statusr: -1
      })

    } else if(id == 2){
      that.setData({
        statusr: 1
      })
    }else if(id == 3){
      that.setData({
        statusr: 2
      })
    }else if(id == 1){
      that.setData({
        statusr: 0
      })
    }


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.onLoad();
    console.log("成功刷新页面");
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