// pages/orderinfo/orderinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empid:"",
    userID:""
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
            url: 'http://localhost:8080/employ/deleteByPrimaryKey',
            data: {
              employid: id,
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

          console.log('删除成功');
        }
        if (res.cancel) {
          console.log('取消');
        }
      }
    })
  },

  glorder: function(options){
    var id = options.currentTarget.dataset.eid;
    var status=options.currentTarget.dataset.sta;
    console.log("qwqw"+id)
    console.log(status)
    if(status == 0){
      wx.navigateTo({
        url: '../orderinfo/assorder/assorder?employid='+ id,
      })
    } else if (status == 1){

      wx.showModal({
        title: '订单完成',
        content: '是否完成订单？',
        success: function(res){
          if (res.confirm){
            //wx.request
            
          }
          
        }
      })
    }
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
    this.data.empid = options.id
    console.log(options.id)

    var that = this
    wx.request({
      url: 'http://localhost:8080/employ/selectByemployId',
      data: {
        employid: this.data.empid,
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
          employid: res.data.employid,
          employinfo: res.data.employInfo,
          employstatus: res.data.employStatus,
          employtime: res.data.employTime,
          employadd: res.data.employAddress,
          fixid: res.data.fixid,
          userid: res.data.userid

        })

        console.log("获取用户详情前获取userid:" + that.data.userid)
        wx.request({
          url: 'http://localhost:8080/user/selectByuserId',
          data: {
            userid: that.data.userid,
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
              usid: res.data.userid,
              usame: res.data.userName,
              usphe: res.data.userPhone,
              usadd: res.data.userAddress,
              usinf: res.data.userInfo,

            })
          }
        })
        console.log("获取用户详情前获取fixid:" + that.data.fixid)
        wx.request({
          url: 'http://localhost:8080/fix/selectByfixId',
          data: {
            fixid: that.data.fixid,
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

      }
      
    })

//获取用户详情
    
    
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