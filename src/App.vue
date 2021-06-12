<template>
  <div id="app">
  <router-view/>
  <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/main-tab-bar'
export default {
  name: 'app',
  components:{
MainTabBar
  }

};
</script>
<style lang="scss">
@import 'assets/css/base.css'
</style>
