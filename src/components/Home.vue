<template>
  <el-container class='home-container'>
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.jpg" width="60px" alt="">
        <span>知乎日报</span>
      </div>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 左侧边去 -->
      <el-aside>
        <aside-home :day = "day" :stories = "stories"></aside-home>
      </el-aside>
      <!-- 右侧主题区 -->
      <el-main>
        <main-home></main-home>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideHome from './AsideHome'
import MainHome from './MainHome'

export default {
  name: 'Home',
  components: {
    'aside-home': AsideHome,
    'main-home': MainHome
  },
  data () {
    return {
      day: '',
      stories: []
    }
  },
  mounted () {
    this.axios.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(res => {
      this.day = res.data.STORIES.date
      this.stories = res.data.STORIES.stories
    })
  }
}

</script>
<style lang="less" scoped>
.home-container{
  height: 100%;
}
.el-header{
  background-color: #ffffff;
  padding-left: 0;
  font-size: 20px;
  height: 100px;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px
    }
  }
}
.el-aside{
  background-color: #ffffff;
  width: 200px
}

.el-main{
  background-color: #E7E7E7;
}

</style>
