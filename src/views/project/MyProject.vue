<script setup>
import baseNavigation from '@/components/baseNavigation.vue';
import yearProect from './components/yearProect.vue';
</script>

<template>
  <baseNavigation>
    <template #router-content>
      <div class="projects-content">
        <yearProect>
          <template #projectYear>2024</template>
        </yearProect>
        <yearProect>
          <template #projectYear>2023</template>
        </yearProect>
      </div>
    </template>
  </baseNavigation>
</template>

<style scoped>
.projects-content{
  height: 100%;
  background: linear-gradient(to right, #3d3264 5%, #bf9bd954);
  border-top-left-radius: 150px;
  overflow: auto;

  /* 滑动条样式设置 */
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