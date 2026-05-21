<template>
  <div>
    <!-- 导航菜单 -->
    <nav>
      <!-- 高亮显示当前界面 -->   
      <router-link to="/" active-class="active">首页</router-link>
      <router-link to="/projects" active-class="active">项目作品</router-link>
      <router-link to="/about" active-class="active">关于我</router-link>
      <router-link to="/Skills" active-class="active">技能树</router-link>
      <router-link to="/Timeline" active-class="active">成长历程</router-link>
      <router-link to="/manage" active-class="active">项目管理</router-link>
    </nav>
    <!-- 路由过渡动画 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', sans-serif;
  background-color: #f5f5f5;
}

nav {
  background-color: #2c3e50;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #34495e;
}

nav a.active {
  background-color: #409eff;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>