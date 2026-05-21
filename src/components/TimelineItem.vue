<template>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <div class="timeline-time">{{ time }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  time: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -30px;
  top: 5px;
  width: 16px;
  height: 16px;
  background-color: #409eff;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #409eff;
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.timeline-content:hover {
  transform: translateX(5px);
}

.timeline-time {
  color: #409eff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

p {
  color: #666;
  line-height: 1.6;
}
</style>