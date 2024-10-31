var posts=["2024/10/25/Hello-world-java/","2024/10/25/Java入门与安装/","2024/10/25/Java程序运行机制/","2024/10/24/基本Dos命令/","2024/10/24/Markdown学习/","2024/10/31/Java基础01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };