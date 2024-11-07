<script setup>
import router from './router';

</script>

<template>
  
  <!-- 导航栏 -->
  <div class="profile" ref="profile">
    <ul class="choice">
      <li class="choice-item" @click="router.push('/project')">项目</li>
      <li class="choice-item" @click="router.push('/article')">文章</li>
      <li class="choice-item" @click="router.push('/friends')">友链</li>
      <li class="choice-item" @click="router.push('/pigeonhole')">归档</li>
    </ul>
    <div class="myInfo">
      <span class="my-pic"></span>
      <span class="nickname"><B>大三元</B></span>
    </div>
  </div>
  <!-- 波浪 -->
  <router-view></router-view>

</template>

<style scoped>
.profile {
  display: flex;
  width: 100%;

  height: 5.1333rem;
  z-index: 1;
  background-color: #41346A;
  
  .choice {
    flex: 6.5;
    width: 60%;
    height: 100%;
    color: rgb(215,206,249);
    display: flex;
    align-items: center;

    .choice-item {
      font-size: 1.0333rem;
      margin-left: 2.6667rem;
      &:hover{
        cursor: pointer;
      }
    }
  }

  .myInfo {
    flex: 3.5;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 1.3333rem;

    .nickname {
      /* flex: 6; */
      font-size: 1.2667rem;
      color: rgb(215,206,249);
    }

    .my-pic {
      /* flex: 4; */
      width: 4.3333rem;
      height: 4.3333rem;
      border-radius: 4.3333rem;
      background: url(./assets/img/Cache_5f374eefa0ee5a35.jpg) no-repeat;
      background-size: 100% 100%;
      margin-left: .5333rem;
    }
  }
}


</style>