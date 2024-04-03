<template>
<div class="pageLoader">
  <div class="cube cube1"></div>
  <div class="cube cube2"></div>
  <div class="cube cube3"></div>
  <div class="cube cube4"></div>
</div>
</template>

<script>
export default {
  name: 'PageLoader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageLoader{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 999;
}

.cube{
  width: 60px;
  height: 60px;
  margin-right: 15px;
}
.cube1{
  background: greenyellow;
  animation: left 1s infinite;
}
.cube2{
  background: skyblue;
}
.cube3{
  background: yellow;
}
.cube4{
  background: red;
  animation: right 1s infinite;
}

@keyframes left {
    40% {transform: translateX(-60px);}
    50% {transform: translateX(0px)}
  }
@keyframes right {
  40% {transform: translateX(60px);}
  50% {transform: translateX(0);}
}
</style>