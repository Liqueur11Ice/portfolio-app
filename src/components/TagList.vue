<template>
  <div class="tag-list">
    <span 
      v-for="tag in tags" 
      :key="tag"
      class="tag"
      :class="{ 
        selectable: selectable, 
        selected: selectable && selectedTag === tag 
      }"
      @click="selectable && handleClick(tag)"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    required: true
  },
  selectable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])

const selectedTag = ref(null)

const handleClick = (tag) => {
  if (selectedTag.value === tag) {
    selectedTag.value = null
  } else {
    selectedTag.value = tag
  }
  emit('select', tag)
}
</script>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background-color: #ecf5ff;
  color: #409eff;
  border-radius: 20px;
  font-size: 13px;
}

.tag.selectable {
  cursor: pointer;
  transition: all 0.2s;
}

.tag.selectable:hover {
  transform: scale(1.05);
}

.tag.selected {
  background-color: #409eff;
  color: white;
}
</style>