<template>
  <main>
    <div class="header">
      <h1>项目管理</h1>
      <button class="add-btn" @click="showForm = true">+ 添加项目</button>
    </div>

    <!-- 项目表格 -->
    <div class="project-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>标题</th>
            <th>状态</th>
            <th>标签</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.id }}</td>
            <td>{{ project.title }}</td>
            <td>
              <span :class="'status-badge ' + project.status">
                {{ project.status === 'completed' ? '已完成' : '进行中' }}
              </span>
            </td>
            <td>
              <span class="tag" v-for="tag in project.tags.slice(0,2)" :key="tag">
                {{ tag }}
              </span>
            </td>
            <td>
              <button class="edit-btn" @click="editProject(project)">编辑</button>
              <button class="delete-btn" @click="confirmDelete(project.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 添加/编辑表单弹窗 -->
    <div class="modal" v-if="showForm" @click.self="showForm = false">
      <div class="modal-content">
        <h2>{{ editingId ? '编辑项目' : '添加项目' }}</h2>
        
        <form @submit.prevent="saveProject">
          <div class="form-group">
            <label>标题 *</label>
            <input v-model="formData.title" required>
          </div>
          
          <div class="form-group">
            <label>描述 *</label>
            <textarea v-model="formData.description" rows="3" required></textarea>
          </div>
          
          <div class="form-group">
            <label>技术栈（请用逗号分隔）</label>
            <input v-model="techStackStr" placeholder="例如：Vue, React, Node.js">
          </div>
          
          <div class="form-group">
            <label>封面图URL</label>
            <input v-model="formData.cover" placeholder="https://...">
          </div>
          
          <div class="form-group">
            <label>演示链接</label>
            <input v-model="formData.demo">
          </div>
          
          <div class="form-group">
            <label>GitHub链接</label>
            <input v-model="formData.github">
          </div>
          
          <div class="form-group">
            <label>状态</label>
            <select v-model="formData.status">
              <option value="completed">已完成</option>
              <option value="ongoing">进行中</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>标签（请用逗号分隔）</label>
            <input v-model="tagsStr" placeholder="例如：前端, Vue, 全栈">
          </div>
          
          <div class="form-actions">
            <button type="button" @click="showForm = false">取消</button>
            <button type="submit">保存</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { projects, addProject, updateProject, deleteProject } from '../data/projects.js'

const router = useRouter()

const showForm = ref(false)
const editingId = ref(null)

//表单数据
const formData = ref({
  title: '',
  description: '',
  techStack: [],
  cover: '/images/project.jpg',
  demo: '',
  github: '',
  status: 'completed',
  tags: []
})

//辅助字符串
const techStackStr = computed({
  get: () => formData.value.techStack.join(', '),
  set: (val) => formData.value.techStack = val.split(',').map(s => s.trim()).filter(s => s)
})

const tagsStr = computed({
  get: () => formData.value.tags.join(', '),
  set: (val) => formData.value.tags = val.split(',').map(s => s.trim()).filter(s => s)
})

//重置表单
const resetForm = () => {
  formData.value = {
    title: '',
    description: '',
    techStack: [],
    cover: '/images/project.jpg',
    demo: '',
    github: '',
    status: 'completed',
    tags: []
  }
  editingId.value = null
}

//编辑项目
const editProject = (project) => {
  formData.value = { ...project }
  editingId.value = project.id
  showForm.value = true
}

//保存项目
const saveProject = () => {
  if (editingId.value) {
    updateProject(editingId.value, formData.value)
  } else {
    addProject(formData.value)
  }
  showForm.value = false
  resetForm()
}

//确认删除
const confirmDelete = (id) => {
  if (confirm('确定要删除这个项目吗？')) {
    deleteProject(id)
  }
}
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-btn {
  padding: 10px 20px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.project-table {
  background: white;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 15px;
  font-size: 12px;
  color: white;
}

.status-badge.completed {
  background-color: #67c23a;
}

.status-badge.ongoing {
  background-color: #e6a23c;
}

.tag {
  background-color: #ecf5ff;
  color: #409eff;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
}

.edit-btn, .delete-btn {
  padding: 5px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background-color: #409eff;
  color: white;
}

.delete-btn {
  background-color: #f56c6c;
  color: white;
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 500px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.form-actions button {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions button[type="button"] {
  background-color: #ddd;
}

.form-actions button[type="submit"] {
  background-color: #409eff;
  color: white;
}
</style>