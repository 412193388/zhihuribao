<template>
  <div id="app" class="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.home{
  position: absolute;
  height: 100%;
  width : 100%;
  margin: 0;
  padding: 0;
}
</style>
