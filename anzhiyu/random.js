var posts=["2025/04/02/Ubuntu虚拟机与ROS1安装/","2025/04/02/小米路由器3G刷Breed以及OpenWrt/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };