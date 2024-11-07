<script setup>
import baseNavigation from '@/components/baseNavigation.vue';
import friendsNavigation from './components/friendsNavigation.vue';
</script>

<template>
  <baseNavigation>
    <template #type-list></template>
    <template #router-content>
      <div class="friends-content">
        <friendsNavigation>
          <template #title-name>
            X U P T
          </template>
        </friendsNavigation>
        <friendsNavigation>
          <template #title-name>
            Internet
          </template>
        </friendsNavigation>
      </div>
    </template>
  </baseNavigation>
</template>

<style scoped lang="less">
.friends-content{
  height: 100%;
  background: linear-gradient(to right, #3d3264 5%, #bf9bd954);
  border-top-left-radius: 150px;
  overflow: auto;
  &::-webkit-scrollbar{
    width: 16px;
    height: 10px;
    background-color: transparent;
  }
}
</style>