<template>
  <main>
    <h1>项目作品</h1>
    
    <!-- 筛选栏 -->
    <div class="filters">
      <div class="filter-group">
        <span>状态：</span>
        <button 
          v-for="status in statusOptions" 
          :key="status.value"
          :class="{ active: currentStatus === status.value }"
          @click="currentStatus = status.value"
        >
          {{ status.label }}
        </button>
      </div>
      
      <div class="filter-group">
        <span>标签：</span>
        <TagList 
          :tags="allTags" 
          :selectable="true"
          @select="handleTagSelect"
        />
      </div>
    </div>

    <!-- 项目列表 -->
    <div class="projects-grid" v-if="filteredProjects.length > 0">
      <ProjectCard 
        v-for="project in filteredProjects" 
        :key="project.id"
        :project="project"
      />
    </div>
    <div v-else class="empty">
      <p>暂无项目</p>
    </div>
  </main>
</template>

<script setup>
//ProjectList的编程式导航已整合进ProjectCard中，跳转更加方便
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import TagList from '../components/TagList.vue'//TagList组件
import { projects } from '../data/projects.js'

//筛选选项
const statusOptions = [
  { value: 'all', label: '全部' },
  { value: 'completed', label: '已完成' },
  { value: 'ongoing', label: '进行中' }
]

const currentStatus = ref('all')
const selectedTag = ref(null)

//获取所有标签（去重）
const allTags = computed(() => {
  const tags = new Set()
  projects.value.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

//筛选后的项目
const filteredProjects = computed(() => {
  let result = projects.value
  
  if (currentStatus.value !== 'all') {
    result = result.filter(p => p.status === currentStatus.value)
  }
  
  if (selectedTag.value) {
    result = result.filter(p => p.tags.includes(selectedTag.value))
  }
  
  return result
})

//处理标签选择
const handleTagSelect = (tag) => {
  if (selectedTag.value === tag) {
    selectedTag.value = null  //取消选中
  } else {
    selectedTag.value = tag
  }
}

</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.filters {
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.filter-group {
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-group span {
  font-weight: bold;
}

.filter-group button {
  padding: 5px 15px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-group button.active {
  background: #409eff;
  color: white;
  border-color: #409eff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.empty {
  text-align: center;
  padding: 50px;
  color: #999;
}
</style>