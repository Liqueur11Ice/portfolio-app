<template>
  <div class="skill-bar">
    <div class="skill-info">
      <span class="skill-name">{{ name }}</span>
      <span class="skill-level">{{ level }}%</span>
    </div>
    <div class="progress-bar">
      <div 
        class="progress-fill" 
        :style="{ width: level + '%', backgroundColor: color }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  level: { type: Number, required: true, validator: v => v >= 0 && v <= 100 },
  color: { type: String, default: '#409eff' }
})
</script>

<style scoped>
.skill-bar {
  margin-bottom: 20px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.skill-name {
  font-weight: 500;
}

.skill-level {
  color: #666;
  font-size: 14px;
}

.progress-bar {
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 5px;
  transition: width 0.5s ease;
}
</style>