// component/time-line/time-line.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 图标显示
    icon: {
      type: String,
      value: 'star',
    },
    // 颜色
    color: {
      type: String,
      value: '#ff5722'
    },
    // 标题
    title: {
      type: String
    },
    // 内容
    content: {
      type: String
    },
    // 日期
    timestamp: {
      type: String
    }
  }
})