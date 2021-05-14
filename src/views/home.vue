<template>
  <div class="home-container">
    <span :class="{'theme-text': true, 'home-title': true, 'title-animation-end': titleVisible}">Welcome to my blog</span>

    <div class="navbar">
      <el-button size="mini" class="defined-neon-blue">博客主页</el-button>
      <el-button size="mini" class="defined-neon-purple">所有文章</el-button>
      <el-button size="mini" class="defined-neon-yellow">关于我</el-button>
    </div>
    <!-- <div class="container-model"> -->
        <!-- <el-button size="mini" class="draw-border">click</el-button> -->
        <!-- <el-button size="mini" class="circle-btn" icon="el-icon-share">click</el-button> -->
        <!-- <el-button size="mini" class="filleted-corner">click</el-button> -->
        <!-- <el-button size="mini" class="frozen-green">click-click</el-button> -->
        <!-- <el-button size="mini" class="frozen-purple">click-click</el-button> -->
        <!-- <el-button size="mini" class="glisten">click-click-click</el-button> -->
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      titleVisible: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.titleAnimation()
    })
  },
  methods: {
    titleAnimation () {
      this.titleVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/images/sunset.jpg');
  background-size: 100% 100%;

  .navbar {
    text-align: right;
    padding-right: 20px;
    margin-top: 10px;
  }

  .home-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size: 50px;
    font-family: fangsong;
    font-weight: bold;
    opacity: 0;
    transition: 1s ease;
  }

  .title-animation-end {
    transform: translate(-50%, -50%);
    font-size: 50px;
    opacity: 1;
  }
}
</style>
