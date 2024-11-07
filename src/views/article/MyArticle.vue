<script setup>
import { ref } from 'vue'
import baseNavigation from '@/components/baseNavigation.vue';
import '@/assets/img/icons/font_a32wm011gk/iconfont.css'
// document.querySelector('html').setAttribute('style', 'height: 100%;')
document.querySelector('html').style.height = '100%'
document.querySelector('body').style.height = '100%'
document.querySelector('.profile').setAttribute('style','background-color: #171717;')
document.getElementById('app').setAttribute('style', 'height:100%;display: flex;flex-direction: column;')

const contentTypeShow = ref(false)
</script>

<template>
  <baseNavigation>
    <template #type-list>
      <h2 class="type-title">栏目</h2>
      <ul class="type-all">
        <!-- 这里是否可以包装成数据动态渲染呢 -->
        <li @click="contentTypeShow = !contentTypeShow">前端</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
        <li @click="contentTypeShow = !contentTypeShow">请期待</li>
      </ul>
    </template>
    <template #type-every>
      <div class="type-every" v-show="contentTypeShow">
      <ul class="type-every-content">
        <!-- 这里是佛瑞根据数据的不同渲染出不同的效果 -->
         <!-- 超过多少个出现下滑 -->
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
        <li>vue</li>
      </ul>
      <div class="moveDown">
        <i class="iconfont icon-xialia-jiantou"></i>
      </div>
    </div>
    </template>
    <template #router-content>
      <div class="article-content">
        <div class="content1 contentBoxShow">
          <div class="box-wape">
            <span class="postTime" style="font-size: .6667rem;color: rgba(215, 206, 249, 0.589);">2024</span>
            <h3 style="margin: .1rem 0;">标题</h3>
            <span class="briefContent">哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
          </div>
        </div>
                <div class="content1 contentBoxShow">
          <div class="box-wape">
            <span class="postTime" style="font-size: .6667rem;color: rgba(215, 206, 249, 0.589);">2024</span>
            <h3 style="margin: .1rem 0;">标题</h3>
            <span class="briefContent">哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
          </div>
        </div>
                <div class="content1 contentBoxShow">
          <div class="box-wape">
            <span class="postTime" style="font-size: .6667rem;color: rgba(215, 206, 249, 0.589);">2024</span>
            <h3 style="margin: .1rem 0;">标题</h3>
            <span class="briefContent">哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊啊啊啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
          </div>
        </div>
      </div>
    </template>
    
  </baseNavigation>
</template>

<style scoped lang="less">
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

.type-every{
  flex: 0.8;
  height: 100%;
  background: #171717;
  display: flex;
  flex-direction: column;
  /* align-items: space; */
  justify-content: space-between;
  .type-every-content{
    flex-grow: 1;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
  }

.moveDown{
  display: flex;
  justify-content: center;
  padding-bottom: .1067rem;
  .iconfont{
    font-size: 1.2rem;
    &:hover{
    color: white;
  }
  }
  
}
}
.article-content{
  height: 100%;
  flex: 6;
  background: linear-gradient(to right, #3d3264 5%, #bf9bd954);
  border-top-left-radius: 150px;
  display: flex; 
  flex-wrap: wrap; 
  overflow: auto;

  [class^="content"]{
    width: 50%;
    height: 11rem;
    display: flex;
    align-items: center;

    .box-wape{
      position: relative;
      z-index: 9;
      width: 100%;
      height: 8.3333rem;
      margin-right:1.5333rem;
      background: linear-gradient(to top left, #ffffff4d,#bf9bd909, #bf9bd900);
      border-bottom-right-radius: 3.6667rem;
      font-size: .75rem;
      /* padding-left: 1.2333rem; */
      padding: .4333rem 2.2333rem 0;

      .briefContent{
        color: rgba(215, 206, 249, 0.589);
        overflow: hidden;
        text-overflow: ellipsis;
        /* 以下代码有兼容性问题 */
        /*弹性伸缩盒子模型显示*/
        display: -webkit-box;
        /*限制在一个块元素显示的文本的行数*/
        -webkit-line-clamp: 4;
        /*设置或检索伸缩盒对象的子元索的排列方式*/
        -webkit-box-orient: vertical;
      }
   }
 }

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
    background-color: #171717;
  }
}

</style>