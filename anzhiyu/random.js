var posts=["2024/10/24/hello-world/","2024/10/24/Markdown学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };