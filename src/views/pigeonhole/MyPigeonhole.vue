<script setup>
import baseNavigation from '@/components/baseNavigation.vue';
import yearPigeonhole from './components/yearPigeonhole.vue';
</script>

<template>
  <baseNavigation>
    <template #router-content>
      <div class="pigeonhole-content">
        <yearPigeonhole>
          <template #pigeYear>2024</template>
        </yearPigeonhole>
        <yearPigeonhole>
          <template #pigeYear>2023</template>
        </yearPigeonhole>
        <yearPigeonhole>
          <template #pigeYear>2022</template>
        </yearPigeonhole>
      </div>
    </template>
  </baseNavigation>
</template>

<style scoped>
.pigeonhole-content{
  height: 100%;
  background: linear-gradient(to right, #3d3264 5%, #bf9bd954);
  border-top-left-radius: 150px;
  overflow: auto;
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar
  {
    width: 16px;
    height: 10px;
    /* background: linear-gradient(to top, #3d3264 5%, #bf9bd954); */
    background-color: transparent;
  }
  
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb
  {
    width: 10px;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
    background-color: #171717;
  }
}
</style>