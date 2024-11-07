<script setup>
import '@/assets/img/icons/font_87vddrfr7cd/iconfont.css'
</script>

<template>
  <div class="pigeonhole-year-box">
    <div class="pigeonhole-year"><slot name="pigeYear">年份</slot></div>
    <ul class="year-article-each-boxes">
      <li class="year-article-each">
       <i class="iconfont icon-juhua"></i>
       <a class="year-article-each-name">文章名字链接</a>
       <span class="post-time">2024-11-5</span>
      </li>
      <li class="year-article-each">
       <i class="iconfont icon-juhua"></i>
       <a class="year-article-each-name">文章名字链接</a>
       <span class="post-time">2024-11-5</span>
      </li>
      <li class="year-article-each">
       <i class="iconfont icon-juhua"></i>
       <a class="year-article-each-name">文章名字链接</a>
       <span class="post-time">2024-11-5</span>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.pigeonhole-year-box{
  padding: 2.6rem 2.6rem 0 2.6rem;

  .pigeonhole-year{
    font-size: 3.1rem;
    margin-bottom: 1rem;
  }

  
  .year-article-each-boxes{
    padding-left: 1.2rem;
    /* width: 50%; */
    position: relative;

    .year-article-each{
      margin-bottom: .2rem;
      .icon-juhua{
        vertical-align: middle;
        margin-right: .8rem;
        font-size: .9rem;
      }

      .year-article-each-name{
        font-size: .75rem;
        color: rgb(215,206,249);
        margin-right: 8rem;
      }

      .post-time{
        /* float: right; */
        /* display: block; */
        font-size: .75rem;
        /* line-height: .75rem; */
        /* line-height: 100%; */
      }
    }
  }

}
</style>