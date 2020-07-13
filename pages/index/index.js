//index.js

Page({
  data: {
    iconSize: 30,
    menuList: [{
        name: "动态列表",
        iconCss: "display",
        color: "#ff7f50",
        url:"/pages/tab-list/tab-list"
      },
      {
        name: "基本组件",
        iconCss: "setting",
        color: "#ff69b4",
        url:"/"
      },
      {
        name: "表单组件",
        iconCss: "text",
        color: "#87cefa",
        url:"/"
      },
      {
        name: "操作反馈",
        iconCss: "refresh",
        color: "#da70d6",
        url:"/"
      },
      {
        name: "导航组件",
        iconCss: "play",
        color: "#32cd32",
        url:"/"
      },
      {
        name: "搜索组件",
        iconCss: "search",
        color: "#6495ed",
        url:"/"
      },
      {
        name: "地图",
        iconCss: "discover",
        color: "#40e0d0",
        url:"/"
      },
      {
        name: "扫码",
        iconCss: "qr-code",
        color: "#ffa500",
        url:"/"
      },
      {
        name: "web-view",
        iconCss: "cellphone",
        color: "#cd5c5c",
        url:"/pages/web-view/web-view"
      }
    ],
    schedules:[{
      icon:"mike",
      color:"#ff7f50",
      title:"会议",
      content:"部门早会",
      date:"2020-07-10 9:30"
    },{
      icon:"tab",
      color:"#aaa",
      title:"午饭",
      content:"员工食堂用餐",
      date:"2020-07-10 12:00"
    },{
      icon:"like",
      color:"#aaa",
      title:"下午茶",
      content:"放松一下心情",
      date:"2020-07-10 13:00"
    },{
      icon:"sticker",
      color:"#aaa",
      title:"聚会",
      content:"和朋友小聚一下",
      date:"2020-07-10 15:00"
    }]
  }
})