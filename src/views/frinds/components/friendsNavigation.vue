<script setup></script>

<template>
  <div class="friends-xupt">
    <p class="xupt-title"><B><slot name="title-name">分类名</slot></B></p>
    <div class="friends-boxes">
      <div class="friends-box">
        <div class="friends-box-wape">
          <a class="friend-href" href="https://yunjianworld.fun/" target="_blank">
            <div class="friend-pic"></div>
            <div class="friend-bref-info">
              <div class="friend-nickname">云间世界</div>
              <div class="friend-add">yunjianworld.fun</div>
            </div>
          </a>
        </div>
      </div>
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>        
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>        
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>     
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
      <div class="friends-box">
        <div class="friends-box-wape">
        </div>
      </div>   
    </div>
  </div>
</template>

<style scoped>
.friends-xupt{
    width: 100%;
    height: 20rem;
    /* // vertical-align: center; */
    display: flex;
    /* // align-items: center; */
    flex-direction: column;
    padding: 2.6rem 2.6rem 0 2.6rem;
    .xupt-title{
      /* // width: 3.5rem; */
      /* // height: 20rem; */
      font-size: 3.5rem;
      word-wrap: break-word;
      line-height: 100%;
    }

    .friends-boxes{
      width: 100%;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar{
        color: transparent;
      }

      .friends-box{
        float: left;
        width: 25%;
        height: 4rem;
        margin-bottom: 0.8rem;
        
        display: flex;
        justify-content: center;

        .friends-box-wape{
          width: 80%;
          height: 100%;
          border-bottom-right-radius: 2rem;
          background: linear-gradient(to top left, #ffffff3b,#bf9bd910, #bf9bd900);
          position: relative;
          z-index: 9;
        }
      }
    }
  }
.friends-box-wape{
  display: flex;
  align-items: center;
          /* z-index: 999; */

}

.friend-href{
  /* // height: 100%; */
  width: 100%;
  display: flex;
}
/* // 朋友头像 */
.friend-pic{
  /* // float: left; */
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 3rem;
  background: url(src/assets/img/friends-pic/A84918D3B0103F66DA8FFD64E695FCC4.jpg) no-repeat;
  background-size: contain;
}

.friend-bref-info{
  margin-left: .8rem;

  .friend-nickname{
    font-size: .9rem;
    color: rgb(220, 214, 240)!important;
  }

  .friend-add{
    font-size: .8rem;
    color: rgba(220, 214, 240, 0.651)!important;
    }
}
</style>