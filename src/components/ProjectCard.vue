<template>
  <div class="project-card" @click="goToDetail">
    <img :src="project.cover" :alt="project.title" class="cover">
    <div class="content">
      <div class="status-badge" :class="project.status">
        {{ project.status === 'completed' ? '已完成' : '进行中' }}
      </div>
      <h3>{{ project.title }}</h3>
      <p class="description">{{ truncateText(project.description, 60) }}</p>
      <div class="tech-stack">
        <span v-for="tech in project.techStack.slice(0, 3)" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const router = useRouter()

//截断文本
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

//跳转到详情页
const goToDetail = () => {
  router.push({ name: 'ProjectDetail', params: { id: props.project.id } })
}
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.cover {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.content {
  padding: 15px;
  position: relative;
}

.status-badge {
  position: absolute;
  top: -10px;
  right: 15px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}

.status-badge.completed {
  background-color: #67c23a;
}

.status-badge.ongoing {
  background-color: #e6a23c;
}

h3 {
  margin: 10px 0 8px;
  font-size: 18px;
}

.description {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 2px 8px;
  background-color: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  font-size: 12px;
}
</style>