<template>
  <a-layout id="main-layout">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['dashboard']" @click="handleMenu">
        <a-sub-menu key="dashboard">
          <span slot="title"><a-icon type="dashboard" /><span>Dashboard</span></span>
          <a-menu-item key="analysis">分析页</a-menu-item>
          <a-menu-item key="monitor">监控页</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="user-menu">
          <span slot="title"><a-icon type="user" /><span>用户</span></span>
          <a-menu-item key="user">列表页</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="article-menu">
          <span slot="title"><a-icon type="profile" /><span>文章</span></span>
          <a-menu-item key="article">列表页</a-menu-item>
          <a-menu-item key="category">分类页</a-menu-item>
          <a-menu-item key="tag">标签页</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="setting">
          <span slot="title"><a-icon type="setting" /><span>设置</span></span>
          <a-menu-item key="self">个人设置</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="space-between">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <info-bar></info-bar>
        </a-row>
      </a-layout-header>
      <app-content></app-content>
      <!-- <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <app-content></app-content>
      </a-layout-content> -->
    </a-layout>
  </a-layout>
</template>
<script>
import AppContent from './components/AppContent'
import InfoBar from './components/InfoBar'
export default {
  data() {
    return {
      collapsed: false
    }
  },
  components: {
    AppContent,
    InfoBar
  },
  methods: {
    handleMenu(item) {
      // console.log(item.key)
      this.$router.push({ name: item.key })
    }
  }
}
</script>
<style>
#main-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#main-layout .trigger:hover {
  color: #1890ff;
}

#main-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
