<template>
  <main v-if="project">
    <button class="back-btn" @click="goBack">← 返回列表</button>
    
    <div class="detail-card">
      <img :src="project.cover" :alt="project.title" class="cover">
      
      <div class="content">
        <div class="status-badge" :class="project.status">
          {{ project.status === 'completed' ? '已完成' : '进行中' }}
        </div>
        <h1>{{ project.title }}</h1>
        
        <div class="tech-stack">
          <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            #{{ tag }}
          </span>
        </div>
        
        <p class="description">{{ project.description }}</p>
        
        <div class="links">
          <a :href="project.demo" target="_blank" v-if="project.demo" class="btn demo">
            在线演示 →
          </a>
          <a :href="project.github" target="_blank" v-if="project.github" class="btn github">
            GitHub →
          </a>
        </div>
      </div>
    </div>

    <!-- 上一篇 / 下一篇 -->
    <div class="nav-projects" v-if="prevProject || nextProject">
      <router-link 
        v-if="prevProject" 
        :to="{ name: 'ProjectDetail', params: { id: prevProject.id } }"
        class="nav-link prev"
      >
        ← {{ prevProject.title }}
      </router-link>
      <router-link 
        v-if="nextProject" 
        :to="{ name: 'ProjectDetail', params: { id: nextProject.id } }"
        class="nav-link next"
      >
        {{ nextProject.title }} →
      </router-link>
    </div>
  </main>
  
  <div v-else class="loading">加载中...</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects, getProjectById } from '../data/projects.js'

const route = useRoute()
const router = useRouter()

//获取当前项目ID
const projectId = computed(() => Number(route.params.id))
//根据ID获取项目详情
const project = computed(() => getProjectById(projectId.value))

//上一篇 / 下一篇
const currentIndex = computed(() => {
  return projects.value.findIndex(p => p.id === projectId.value)
})

const prevProject = computed(() => {
  return projects.value[currentIndex.value - 1] || null
})

const nextProject = computed(() => {
  return projects.value[currentIndex.value + 1] || null
})

//返回列表
const goBack = () => {
  router.push({ name: 'ProjectList' })
}
</script>

<style scoped>
main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.back-btn {
  background: none;
  border: none;
  color: #409eff;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 5px 0;
}

.back-btn:hover {
  text-decoration: underline;
}

.detail-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.cover {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.content {
  padding: 30px;
  position: relative;
}

.status-badge {
  position: absolute;
  top: -15px;
  right: 30px;
  padding: 6px 16px;
  border-radius: 25px;
  font-weight: bold;
  color: white;
}

.status-badge.completed {
  background-color: #67c23a;
}

.status-badge.ongoing {
  background-color: #e6a23c;
}

h1 {
  margin-bottom: 15px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.tech-tag {
  padding: 5px 12px;
  background-color: #f0f2f5;
  border-radius: 20px;
  font-size: 14px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  color: #409eff;
  font-size: 14px;
}

.description {
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;
}

.links {
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.demo {
  background-color: #409eff;
  color: white;
}

.btn.github {
  background-color: #333;
  color: white;
}

.nav-projects {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.nav-link {
  text-decoration: none;
  color: #409eff;
  padding: 10px 15px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #ecf5ff;
  border-radius: 5px;
}

.loading {
  text-align: center;
  padding: 50px;
  color: #999;
}
</style>