在app里使用keepalive整个系统都生效，包括左侧菜单
在Main中使用只在区域内生效，不会刷新菜单

event bus会累积，导致触发多次
解决方法：根据不同的情况，在destroyed()或者created()时手动销毁vm.bus.$off('eventName')

如果一个列表使用keepalive，详情页不使用，两个页面同时使用bus触发事件，会导致有一个页面不会生效
解决方法：分别给不同的event名称