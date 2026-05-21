<template>
  <main>
    <div class="about-card">
      <div class="avatar">
        <img src="/images/img-17326703204547a5bc31312098d74d6a88f9c6ff7c940.jpg" alt="头像">
      </div>
      
      <h1>十一</h1>
      <p class="title">在校大三学生</p>
      
      <div class="bio">
        <h2>关于我</h2>
        <p>大家好！我是十一，目前就读于某大学数字媒体技术专业，大三学生。</p>
        <p>从大一开始接触编程，到现在已经积累了2年多的开发经验。</p>
        <p>虽然我就业方向并非编程技术方向。</p>
        <p>但这个个人展示页面是我用Vue 3开发的，旨在展示我的编程能力和项目经验。希望通过这个平台，能够更好地展示自己，也欢迎大家交流和合作！</p>
      </div>
      
      <div class="contact">
        <h2>联系方式</h2>
        <div class="contact-links">
          <a href="mailto:shiyi@example.com" class="contact-item">
            📧 shiyi@example.com
          </a>
          <a href="https://github.com/shiyi" target="_blank" class="contact-item">
            💻 GitHub: github.com/shiyi
          </a>
          <a href="#" class="contact-item">
            🐦 微博: @shiyi
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #409eff;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 10px;
}

.title {
  color: #409eff;
  font-size: 18px;
  margin-bottom: 30px;
}

h2 {
  text-align: left;
  margin: 30px 0 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #409eff;
  display: inline-block;
}

.bio {
  text-align: left;
}

.bio p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
}

.contact-links {
  text-align: left;
}

.contact-item {
  display: block;
  padding: 12px 0;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  transition: color 0.2s;
}

.contact-item:hover {
  color: #409eff;
}
</style>