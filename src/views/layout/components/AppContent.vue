<template>
  <div>
    <keep-alive>
      <router-view :key="key" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view :key="key" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'AppContent',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
