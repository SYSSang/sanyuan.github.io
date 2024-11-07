<script setup>
import router from '@/router';
import { ref, onMounted, onUnmounted } from 'vue'
import '@/assets/img/icons/font_p81061dps7l/iconfont.css'

const canvas = ref(null)
const canvasFa = ref(null)
const fish = ref(null)
const { innerWidth, innerHeight } = window
// 小鱼是否被点击
const blue = '#41346A'

// let isShow = 'true' 没有正确创建响应式变量
const isShow = ref(true)
// 六个盒子的
const boxShow = ref(false) 
let singleRemove = false

// 绘制波浪图
onMounted(() => {
  // 绘制曲线
  if (canvas.value) {
    // 在初次进入页面的时候要有一个初始的曲线
    canvasSize()
    addListen()
  }
})

onUnmounted(() => {
  removeListen()
})

// 设置画布大小
function canvasSize() {
  const canvasWidth = canvasFa.value.clientWidth
  const canvasHeight = canvasFa.value.clientHeight

  canvas.value.width = canvasWidth
  canvas.value.height = canvasHeight

  let xOffset = 0
  let speed = 0.1
  requestAnimationFrame(() => draw(canvasWidth, canvasHeight, xOffset, speed))
}

// 每帧
function draw(canvasWidth, canvasHeight, xOffset, speed) {
  const ctx = canvas.value.getContext('2d')
  ctx.strokeStyle = blue
  // 清除上一帧的图形
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  // 图形重绘
  drawSin(ctx, xOffset, canvasWidth, canvasHeight)
  // 递归调用 -> 等到下一帧进行重绘
  xOffset += speed
  requestAnimationFrame(() => draw(canvasWidth, canvasHeight, xOffset, speed))
}

// 正弦
function drawSin(ctx, xOffset, canvasWidth, canvasHeight) {
  const points = []
  const startX = 0
  const waveHeight = 80
  const cycles = 4 // 四个周期
  const waveWidth = (2 * Math.PI) / (canvasWidth / cycles) // 计算每个周期的宽度

  ctx.beginPath()
  for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
    let y = waveHeight * Math.sin(waveWidth * x + xOffset)
    y += canvasHeight / 6
    points.push([x, y])
    ctx.lineTo(x, y)
  }
  // 封闭路径
  ctx.lineTo(canvasWidth, canvasHeight)
  ctx.lineTo(startX, canvasHeight)
  ctx.closePath()
  ctx.fillStyle = blue
  ctx.fill()
  ctx.stroke()
}

// 获取卷去的高度
function handleScroll() {
  const scrollTop = document.documentElement.scrollTop
  // console.log(profile.value.offsetHeight , canvasFa.value.offsetHeight); 这里使用offsetHeight可以但height不可以
  // 以及当我改变页面大小，这回重新调用handleScroll函数，打印对应页面大小的元素的宽高
  if (scrollTop >= canvasFa.value.clientTop + canvasFa.value.offsetHeight) {
    isShow.value = false
    console.log(isShow);
    // 这里我如果想要false之后不再侦听scroll怎么办
    removeListen()
  }
}

// 添加事件监听函数
function addListen() {
  if (!singleRemove) {
    window.addEventListener('resize', canvasSize)
    // 卷的高度
    window.addEventListener('scroll', handleScroll)
    singleRemove = true
  }
}

// 移除事件函数
function removeListen() {
  if (singleRemove) {
    window.removeEventListener('resize', canvasSize)
    window.removeEventListener('scroll', handleScroll)
    singleRemove = false
  }
}

// 页面下滑按钮小鱼
function fishDown() {

  fish.value.style.transform = 'rotateX(180deg)'
  console.log(innerHeight, innerWidth);
  window.scrollTo(0, document.documentElement.scrollHeight)
  // window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})

  // 到达底部,盒子动画
  boxShow.value = true
}
</script>

<template>
  <!-- 波浪 -->
   <div class="head-wavefish">
    <div ref="canvasFa" class="header" v-if="isShow">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="tip" v-if="isShow"><B>点 击 翻 转 小 鱼&nbsp;</B>
      <i class="iconfont icon-yewu_yu" style="font-size: 2.8333rem;" @click="fishDown" ref="fish"></i>
    </div>
  </div>
  <div class="intro">
    <Transition name="introBox3">
      <div class="introEvery3" ref="introEvery33" v-if="boxShow" style="background-color: #BFACDA;color: #41346A;" @click="router.push('/project')"><span>项 目</span></div>
    </Transition>

    <Transition name="introBox2">
      <div class="introEvery2" ref="introEvery22" v-if="boxShow"  style="background-color: #9179B7;"  @click="router.push('/article')"><span>文 章</span></div>
    </Transition>

    <Transition name="introBox1">
      <div class="introEvery1" ref="introEvery11" v-if="boxShow">3</div>
    </Transition>

    <Transition name="introBox1">
    <div class="introEvery1" ref="introEvery1" v-if="boxShow">4</div>
    </Transition>

    <Transition name="introBox2">
      <div class="introEvery2" ref="introEvery2" v-if="boxShow" style="background-color: #9179B7;" @click="router.push('/pigeonhole')"><span>归 档</span></div>
    </Transition>

    <Transition name="introBox3">
      <div class="introEvery3" ref="introEvery3" v-if="boxShow" style="background-color: #BFACDA;color: #41346A;" @click="router.push('/friends')"><span>友 链</span></div>
    </Transition>
  </div>
</template> 

<style scoped>

.header {
  position: relative;
  width: 100%;
  height: 30.6667rem;
  /* background-color: aqua; */
  transform: rotateZ(180deg);
}

.tip{
  display: flex;
  position: absolute;
  width: 20.6667rem;
  top: 18.3333rem;
  left: 50%;
  font-size: 1.9333rem;
  color: rgba(254, 254, 254, 0.573);
  transform: translateX(-50%);
  transition:all 0.4s;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  .icon-yewu_yu{
    display: inline-block;
    transition:all 0.4s;
  }

  &:hover{
    color: rgba(255, 255, 255, 0.826);
    box-shadow: .3333rem .2333rem .7667rem .1033rem white;

  }
}

/* 上滑主体部分 */
.intro {
  display: flex;
  height: 52.6667rem;
  justify-content: space-between;
  align-items: flex-end;

  [class^="introEvery"] {
    width: 12.6667rem;
    height: 8.6667rem;
    background-color: #41346A;
    margin-right: .08rem;
    border-radius: 1.1333rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* opacity: 0; */
    font-size: 1.2667rem;
    color: rgb(215,206,249);

    &:hover{
      cursor: pointer;
      &:nth-child(-n+3){
        box-shadow: -.6333rem .8333rem .7667rem .1033rem rgba(255, 255, 255, 0.571);
      }
      &:nth-last-child(-n+3){
        box-shadow: .6333rem .8333rem .7667rem .1033rem rgba(255, 255, 255, 0.571);
      }
      /* border: .1333rem solid #8b41e6e0; */
    }
  }

  .introEvery1{
    margin: 0 .8667rem;
    transform: translateY(-26.6667rem) scale(1);
  }

  .introEvery2{
    transform: translateY(-14.6667rem) scale(1);
  }
  
  .introEvery3{
    transform: translateY(-2.6667rem) scale(1);
    margin: 0 1.333rem;
  }
}

@keyframes up {
  0%{
    transform: translateY(0) scale(0.5);
    opacity: 0;
  }
  100%{
    transform: translateY(-26.6667rem) scale(1);
    opacity: 1;
  }
}

@keyframes up2 {
  0%{
    transform: translateY(0) scale(0.5);
    opacity: 0;
  }
  100%{
    transform: translateY(-14.6667rem) scale(1);
    opacity: 1;
  }
}

@keyframes up3 {
  0%{
    transform: translateY(0) scale(0.5);
    opacity: 0;
  }
  100%{
    transform: translateY(-2.6667rem) scale(1);
    opacity: 1;
  }
}

.introBox1-enter-active{
  animation: up 1.7s;
}

.introBox2-enter-active{
  animation: up2 1.7s;
}

.introBox3-enter-active{
  animation: up3 1.6s;
}
</style>