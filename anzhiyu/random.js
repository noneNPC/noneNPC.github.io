var posts=["2025/09/11/全国大学生智能车创意组陕西理工大学校内选拔赛/","2025/04/02/Ubuntu虚拟机与ROS1安装/","2025/04/02/小米路由器3G刷Breed以及OpenWrt/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };