<template>
  <div style="margin-right: 30px;">
    <a-dropdown>
      <a class="ant-dropdown-link" href="#">
        Admin <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-divider />
        <a-menu-item key="0">
          <a href="javascript:;" @click="logout">退出</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
import { logoutApi } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/token'
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      logoutApi().then(resp => {
        if (resp.data.status === 200) {
          removeToken()
          this.$router.push('/login')
          this.$message.success(resp.data.msg)
        }
      })
    }
  }
}
</script>
