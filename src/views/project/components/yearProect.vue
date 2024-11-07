<script setup>
import '@/assets/img/icons/font_87vddrfr7cd/iconfont.css'
import { ref } from 'vue'
const isDetailedProject = ref(false)
</script>

<template>
  <div class="year-project-box">
    <div class="project-year"><slot name="projectYear">年份</slot></div>
    <div class="each-project">
      <i class="iconfont icon-juhua" @click="isDetailedProject = !isDetailedProject"></i>
      <span class="each-project-time">2024-10-25</span>
      <span class="each-project-name">个人独立博客</span>
      <div class="project-detailed-process" v-show="isDetailedProject">
        <p>项目具体实现过程</p>
        <p>项目具体实现过程</p>
        <p>项目具体实现过程</p>
        <p>项目具体实现过程</p>
      </div>
    </div>
    <div class="each-project">
      <i class="iconfont icon-juhua"></i>
      <span class="each-project-time">2024-10-25</span>
      <span class="each-project-name">个人独立博客</span>
    </div>
  </div>
</template>

<style scoped>
.year-project-box{
  /* height: 50%; */
  padding: 2.6rem 2.6rem 0 2.6rem;

  .project-year{
    font-size: 3.1rem;
    margin-bottom: 1rem;
  }

  .each-project{
    margin-bottom: .8rem;
    padding-left: 1.2rem;
    /* line-height: 100%; */
    /* text-align: center; */
    /* line-height: 100%; */
    /* transition: all 1.6s; */

    .icon-juhua{
      vertical-align: middle;
      margin-right: .8rem;
      font-size: 1.1rem;
    }

    .each-project-time{
      color: rgba(215, 206, 249, 0.692);
      margin-right: .8rem;
      font-size: .85rem;
    }

    /* 项目具体实现过程的盒子样式 */
    .project-detailed-process{
      margin-left: 2.5rem;
      margin-top: .5rem;
      display: block;
      color: rgba(215, 206, 249, 0.692);
      font-size: .8rem;
      p{
        margin-bottom: .5rem;
      }
    }
  }

}
</style>