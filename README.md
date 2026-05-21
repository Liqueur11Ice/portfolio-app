# 个人作品集系统

Web程序设计课程实验二：基于 Vue 3 + Vue Router 的个人作品展示网站。

## 项目简介

这是一个个人作品集网站，用于展示我的学习成果和项目经历。网站包含首页、项目列表、项目详情、技能树、成长历程、关于我、项目管理等页面，支持项目的增删改查功能。

## 技术栈

- **前端框架：** Vue 3.4
- **路由管理：** Vue Router 4
- **构建工具：** Vite 5
- **开发语言：** JavaScript

## 功能列表

| 功能 | 说明 |
|------|------|
| 首页 | 个人简介展示 + 精选项目卡片 |
| 项目列表 | 卡片式布局，支持按状态和标签筛选 |
| 项目详情 | 动态路由获取ID，显示完整项目信息，支持上一篇/下一篇 |
| 技能树 | 技能分类展示，带熟练度进度条 |
| 成长历程 | 纵向时间轴布局 |
| 关于我 | 个人介绍和联系方式 |
| 项目管理 | 表格形式，支持添加、编辑、删除项目 |
| 404页面 | 捕获未匹配路由，友好提示 |

## 项目结构

```
portfolio-app/
├── src/
│   ├── components/        # 组件目录
│   │   ├── ProjectCard.vue    # 项目卡片组件
│   │   ├── TagList.vue        # 标签列表组件
│   │   ├── TimelineItem.vue   # 时间轴节点组件
│   │   └── SkillBar.vue       # 技能进度条组件
│   ├── views/             # 页面目录
│   │   ├── Home.vue           # 首页
│   │   ├── ProjectList.vue    # 项目列表页
│   │   ├── ProjectDetail.vue  # 项目详情页
│   │   ├── Skills.vue         # 技能树页
│   │   ├── Timeline.vue       # 时间轴页
│   │   ├── About.vue          # 关于我页
│   │   ├── Manage.vue         # 项目管理页
│   │   └── NotFound.vue       # 404页面
│   ├── router/             # 路由配置
│   │   └── index.js
│   ├── data/               # 项目数据
│   │   └── project.js
│   ├── App.vue             # 根组件
│   └── main.js             # 入口文件
└── package.json
```

## 运行步骤

安装依赖：

```bash
npm install
```

启动项目：

```bash
npm run dev
```
