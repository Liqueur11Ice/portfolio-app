<template>
  <main>
    <!-- 个人简介区域 -->
    <div class="profile">
      <div class="avatar">
        <img src="/images/img-17326703204547a5bc31312098d74d6a88f9c6ff7c940.jpg" alt="头像">
      </div>
      <h1>十一</h1>
      <p class="slogan">个人展示</p>
      <p class="intro">你好！这里是十一，一名大学生，此页面用于展示自己的编程能力和项目经验。</p>
    </div>

    <!-- 精选项目 -->
    <div class="featured-projects">
      <h2>精选项目</h2>
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in featuredProjects" 
          :key="project.id"
          :project="project"
        />
      </div>
    </div>

    <!-- 快速导航 -->
    <div class="quick-nav">
      <h2>快速链接</h2>
      <div class="nav-links">

        <router-link to="/projects" class="nav-btn">查看全部项目 →</router-link>
        <router-link to="/about" class="nav-btn">关于我 →</router-link>
        <router-link to="/skills" class="nav-btn">我的技能树 →</router-link>
        <router-link to="/timeline" class="nav-btn">成长历程 →</router-link>
        <router-link to="/manage" class="nav-btn">项目管理 →</router-link>
       
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'//使用projectCard组件展示项目
import { projects } from '../data/projects.js'
import router from '../router/index.js';

//精选项目只展示前3个
const featuredProjects = computed(() => projects.value.slice(0, 3))
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.profile {
  text-align: center;
  margin-bottom: 50px;
}

.avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #409eff;
}

h1 {
  margin: 20px 0 10px;
  font-size: 32px;
}

.slogan {
  color: #409eff;
  font-size: 18px;
  margin-bottom: 15px;
}

.intro {
  max-width: 600px;
  margin: 0 auto;
  color: #666;
}

h2 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #409eff;
  display: inline-block;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.quick-nav {
  background-color: #f0f2f5;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #409eff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: transform 0.2s;
}

.nav-btn:hover {
  transform: translateY(-2px);
}
</style>