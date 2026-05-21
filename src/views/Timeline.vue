<template>
  <main>
    <h1>成长历程</h1>
    
    <div class="timeline">
      <TimelineItem
        v-for="item in timelineData"
        :key="item.time"
        :time="item.time"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </main>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue'//组件（时间轴条目）

const timelineData = [
  {
    time: '2023.09',
    title: '进入大学',
    description: '选择数字媒体技术专业，第一次接触编程，学习了编程语言基础。'
  },
  {
    time: '2024.03',
    title: '编程语言深入学习',
    description: '学习了C语言、C++和Python等语言，期间独立完成了些许小型项目。'
  },
  {
    time: '2024.09',
    title: '使用编程语言进行游戏开发',
    description: '将编程语言运用到游戏开发中，独立制作了一个简单的2D游戏，积累了项目经验。'
  },
  {
    time: '2025.09',
    title: '初次接触Web设计',
    description: '作为主要开发者，完成了一个完整的Web页面设计。'
  },
  {
    time: '2026.03',
    title: '大三下学期开始',
    description: '准备作品集，计划参加实习和开源项目。'
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
  margin-bottom: 40px;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #409eff, #67c23a);
}
</style>