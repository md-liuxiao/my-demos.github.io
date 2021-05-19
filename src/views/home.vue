<template>
  <div class="home-container">
    
    <div class="bg-img"></div>
    <!-- <span :class="{'theme-text': true, 'home-title': true, 'title-animation-end': titleVisible}">Welcome to my blog</span> -->

    <div :class="{'home-title-start': true, 'home-title-end': titleVisible}">Welcome to my blog</div>

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
      titleVisible: false,
      zoomRatio: 0,
      containerWidth: 0,
      containerHeight: 0
    }
  },

  mounted () {
    setTimeout(() => {
      this.titleAnimation()
    })
    
    this.containerWidth = document.body.clientWidth
    this.containerHeight = document.body.clientHeight

    this.setBgSize(this.containerWidth, this.containerHeight)
    this.setContainerBackground()
  },
  methods: {
    titleAnimation () {
      this.titleVisible = true
    },
    setBgSize () {
      let bgContainer = document.querySelector('.bg-img')
      let baseWidth = document.body.clientWidth
      let baseHeight = document.body.clientHeight
      let maxWidth = document.body.clientWidth + 200
      // let maxHeight = document.body.clientHeight + 200

      bgContainer.style.width = baseWidth + 'px'
      bgContainer.style.height = baseHeight + 'px'

      setInterval(() => {
        // console.log(document.querySelector('.bg-img').offsetWidth)
        // console.log(document.querySelector('.bg-img').offsetHeight)
        if (document.querySelector('.bg-img').offsetWidth <= maxWidth) {
          bgContainer.style.width = (document.querySelector('.bg-img').offsetWidth + 1) + 'px'
          bgContainer.style.height = (document.querySelector('.bg-img').offsetHeight + 1) + 'px'
        } else {
          bgContainer.style.width = (document.querySelector('.bg-img').offsetWidth - 1) + 'px'
          bgContainer.style.height = (document.querySelector('.bg-img').offsetHeight - 1) + 'px'
        }
      }, 100)
    },
    setContainerBackground () {
      // const zoomRatio = 0
      // let container = document.querySelector('.home-container')
      // console.log(window.getComputedStyle(container)['background-size'])

      // setInterval(() => {
      //   if (this.zoomRatio <= 1) {
      //     this.zoomRatio += 0.1
      //   } else {
      //     this.zoomRatio -= 0.1
      //   }

      //   container.style.transform = `scale(${this.zoomRatio})`
      // }, 1000)
      // container.style.backgroundSize = '120% 120%'
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
  overflow: hidden;
  // background-image: url('../assets/images/dark.jpg');
  // background-size: 100% 100%;
  // transition: 1s linear;

  .bg-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/dark.jpg');
    background-size: 100% 100%;
    transition: .1s linear;
  }

  .navbar {
    text-align: right;
    padding-right: 20px;
    margin-top: 10px;
  }

  .home-title-start {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size: 50px;
    font-family: fangsong;
    font-weight: bold;
    opacity: 0;
    transition: 1s ease;
    color: #ffffff;
  }

  .home-title-end {
    transform: translate(-50%, -50%);
    font-size: 50px;
    opacity: 1;
  }
}
</style>
