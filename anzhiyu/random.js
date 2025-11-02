var posts=["2025/09/11/2024全国大学生智能车创意组陕西理工大学校内选拔赛/","2025/10/22/2025全国大学生智能车创意组陕西理工大学校内选拔赛/","2025/04/02/Ubuntu虚拟机与ROS1安装/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };