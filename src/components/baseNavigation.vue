<script setup>
import '@/assets/img/icons/font_87vddrfr7cd/iconfont.css'
import '@/assets/img/icons/font_b5h5mdij54b/iconfont.css'
document.querySelector('html').style.height = '100%'
document.querySelector('body').setAttribute('style','background-color: #171717;')
document.querySelector('body').style.height = '100%'
document.querySelector('.profile').setAttribute('style','background-color: #171717;')
document.getElementById('app').setAttribute('style', 'height:100%;display: flex;flex-direction: column;')
</script>

<template>
  <div class="main-body">
    <div class="type">
      <!-- <h2 class="type-title">栏目</h2>
      <ul class="type-all">
        这里是否可以包装成数据动态渲染呢
        <li @click="contentTypeShow = !contentTypeShow">前端</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
      </ul> -->
      <slot name="type-list">这里记得匹配</slot>
    </div>
    <slot name="type-every"></slot>
    <div class="bgc-main">
      <div class="mainShow">
        <slot name="router-content">这里也是</slot>
      <!-- <i class="iconfont icon-juhua_huaban index-juhua"></i>
      <i class="iconfont icon-juhua_huaban index-juhua" style="top: 10.5rem;right: 20rem;font-size: 9.8rem;transform: rotateZ(72deg);"></i>
      <i class="iconfont icon-juhua_huaban index-juhua" style="top: 21.5rem;right: 8rem;font-size: 11.8rem;transform: rotateZ(62deg);"></i> -->
      
      <i class="iconfont icon-juhua index-juhua" style="-webkit-text-stroke-color: rgba(215, 206, 249, 0.086);"></i>
      <i class="iconfont icon-juhua index-juhua" style="top: 1.5rem;right: 18rem;font-size: 5.8rem;transform: rotateZ(72deg);"></i>
      <i class="iconfont icon-juhua index-juhua" style="top: 10.5rem;right: 20rem;font-size: 9.8rem;transform: rotateZ(72deg);-webkit-text-stroke-color: rgba(215, 206, 249, 0.046);"></i>
      <i class="iconfont icon-juhua index-juhua" style="top: 15.5rem;right: 2rem;font-size: 7.8rem;transform: rotateZ(72deg);-webkit-text-stroke-color: rgba(215, 206, 249, 0.186);"></i>
      <i class="iconfont icon-juhua index-juhua" style="top: 5.5rem;right: 32rem;font-size: 4.8rem;transform: rotateZ(72deg);-webkit-text-stroke-color: rgba(215, 206, 249, 0.036);-webkit-text-stroke-width: .05rem;"></i>
      <i class="iconfont icon-juhua index-juhua" style="top: 21.5rem;right: 8rem;font-size: 12.8rem;transform: rotateZ(62deg);"></i>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.main-body{
  flex-grow: 1;
  display: flex;
  height: 100%;
  width: 100%;
  color: rgb(215,206,249);
  overflow: hidden;
  position: relative;
  
  .index-juhua{
    /* display: block; */
    z-index: 1;
    position: absolute;
    font-size: 15rem;
    top: -1rem;
    right: 1.5rem;
    -webkit-text-stroke-width: .1rem;
    -webkit-text-stroke-color: rgba(215, 206, 249, 0.116);
    color: transparent;
    transform: rotateZ(20deg);
    transition: all 1.5s;
    &:hover{
      color: rgba(215, 206, 249, 0.116);
    }
  }

  .type{
    flex: 0.8;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: .7333rem;
    background-color: #171717;
    position: relative;
    z-index: 3;
    .type-title{
      flex: 1;
      color: rgb(220, 214, 240);
      /* margin-top: 20px; */
    }
    .type-all{
      flex: 7;
      display: flex;
      flex-direction: column;

      li{
        cursor: pointer;
        flex: 1;
      }
    }
  }

  .bgc-main{
    flex: 6;
    background-color: #171717;
    /* position: relative; */


    .mainShow{
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #3d3264 5%, #bf9bd954);
      border-top-left-radius: 150px;
    }

  }
}

  
</style>