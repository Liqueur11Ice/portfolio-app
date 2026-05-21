<template>
  <main>
    <h1>技能树</h1>
    
    <div class="skills-category" v-for="category in skillCategories" :key="category.name">
      <h2>{{ category.name }}</h2>
      <div class="skills-list">
        <SkillBar 
          v-for="skill in category.skills" 
          :key="skill.name"
          :name="skill.name"
          :level="skill.level"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import SkillBar from '../components/SkillBar.vue'//SkillBar组件（技能进度条）

//技能数据
const skillCategories = [
  {
    name: '前端开发',
    skills: [
      { name: 'HTML/CSS', level: 70 },
      { name: 'JavaScript', level: 65 },
      { name: 'Vue.js', level: 60 }
    ]
  },
  {
    name: '后端开发',
    skills: [
      { name: 'Node.js', level: 60 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 65 }
    ]
  },
  {
    name: '工具与其他',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VSCode', level: 88 }
    ]
  }
]
</script>

<style scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
}

.skills-category {
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #409eff;
  display: inline-block;
}

.skills-list {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
</style>