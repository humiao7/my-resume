// pages/scan/scan.js
Page({

  data: {
    result: ""
  },

  // 打开扫码
  scanMethods() {
    let that = this;
    wx.scanCode({
      success(res) {
        that.setData({ result: res.result })
      }
    })
  },

  // 复制内容到剪切板
  copyToClipboard() {
    let that = this;
    wx.setClipboardData({
      data: that.data.result,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})