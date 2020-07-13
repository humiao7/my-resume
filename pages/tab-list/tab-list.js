Page({
  data: {
    tabs: [{ title: '列表1', list: [] }, { title: '列表2', list: [] }, { title: '列表3', list: [] }],
    activeTab: 0,
  },

  onLoad() {
    this.loadMoreList();
  },

  // 切换tab页面
  onTabChange(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
    if(this.data.tabs[index].list.length<=0){
      this.loadMoreList(index);
    }
  },

  // 刷新tab页面
  refreshTabList() {
    let index = this.data.activeTab;
    let tabs = [...this.data.tabs];
    tabs[index].list = [];
    this.setData({ tabs: tabs });
    setTimeout(() => {
      this.loadMoreList(index);
    }, 2000)
  },

  // 加载更多列表项
  loadMoreList() {
    let index = this.data.activeTab;
    let tabs = [...this.data.tabs];
    let tag = tabs[index].list.length;
    for (let i = 1; i <= 20; i++) {
      tabs[index].list.push(tag + i);
    }
    this.setData({
      tabs: tabs
    })
  }
})