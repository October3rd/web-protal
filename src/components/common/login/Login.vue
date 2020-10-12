<!--
 * @Author: your name
 * @Date: 2020-10-08 16:24:50
 * @LastEditTime: 2020-10-08 21:38:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ls-web\src\components\common\login\Login.vue
-->
<template>
    <el-row type="flex" align="middle">
      <span>{{ userInfo.username ? userInfo.username : "未登录" }}</span>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="circleUrl" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item>
            <el-switch v-model="modeStyle" @change="changeStyle"></el-switch>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
</template>

<script>
 export default {
  name: 'Login',
  components: {

  },
  data () {
   return {
    userInfo: { username: 'lhj' },
    // 头像
    circleUrl: require('assets/icons/login.png'),
    // 风格切换
    modeStyle: false
   }
  },
  computed: {},
  methods: {
    changeStyle() {
      const styleDesc = this.modeStyle ? '控制台' : '主页'
      this.$message({
        type: 'success',
        message: `当前：${styleDesc}`
      })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
 }
</script>

<style lang="scss" scoped>
.avatar-container {
  margin: 0 30px 0 10px;
  height: 44px;

  ::v-deep .el-dropdown-selfdefine {
    height: 44px;
  }

  .avatar-wrapper {
    margin-top: 3px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    
    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}
</style>
