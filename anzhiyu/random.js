var posts=["2025/11/04/2025全国大学生智能车创意组陕西理工大学校级选拔赛/","2025/09/11/2024全国大学生智能车创意组陕西理工大学校内选拔赛/","2025/04/02/Ubuntu虚拟机与ROS1安装/","2025/12/10/利用Clodflare-Tunnel实现无公网IP内网穿透/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };