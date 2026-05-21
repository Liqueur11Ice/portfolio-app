import { ref } from 'vue'

//项目数据
export const projects = ref([
  {
    id: 1,
    title: '简易计算器',
    description: '一个基础的网页计算器，支持加减乘除运算，是Web程序设计课程的第一次实验作业。',
    techStack: ['Vue 3', 'JavaScript', 'CSS'],                  //技术栈数组
    cover: '/images/project1.png',                        //封面图
    demo: 'https://demo.example.com',                           //演示链接
    github: 'https://github.com/example/calculator-app',        //源码链接
    status: 'completed',                                        //'ongoing' | 'completed'
    tags: ['计算器', 'Vite', 'Vue'],                         //标签数组
    createTime: Date.now()                                      //时间戳
  },
  {
    id: 2,
    title: 'DND规则介绍网页',
    description: '介绍龙与地下城(DND)桌面角色扮演游戏的基本规则，包含种族、职业、属性等入门知识。',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    cover: '/images/project2.png',
    demo: 'https://demo.example.com',
    github: 'https://github.com/example/blog-system',
    status: 'completed',
    tags: ['DND', 'HTML/CSS', '规则书'],
    createTime: Date.now()
  },
  {
    id: 3,
    title: '个人简历',
    description: '展示个人经历和技能的网页简历。',
    techStack: ['Vue 3', 'Vue Router', 'CSS'],
    cover: '/images/project3.png',
    demo: 'https://demo.example.com',
    github: 'https://github.com/example/resume-app',
    status: 'ongoing',
    tags: ['简历', 'Vue', 'Vite'],
    createTime: Date.now()
  }
])

//添加项目
export function addProject(project) {
  const newId = Math.max(...projects.value.map(p => p.id), 0) + 1
  projects.value.push({
    ...project,
    id: newId,
    createTime: Date.now()
  })
}

//更新项目
export function updateProject(id, updates) {
  const index = projects.value.findIndex(p => p.id === id)
  if (index !== -1) {
    projects.value[index] = { ...projects.value[index], ...updates }
  }
}

//删除项目
export function deleteProject(id) {
  const index = projects.value.findIndex(p => p.id === id)
  if (index !== -1) {
    projects.value.splice(index, 1)
  }
}

//根据ID获取项目
export function getProjectById(id) {
  return projects.value.find(p => p.id === Number(id))
}

//筛选项目
export function filterProjects(projectsList, status, tag) {
  let result = [...projectsList]
  if (status && status !== 'all') {
    result = result.filter(p => p.status === status)
  }
  if (tag) {
    result = result.filter(p => p.tags.includes(tag))
  }
  return result
}