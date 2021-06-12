<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home"  :currentColor="activeColor">
        <i class="el-icon-s-home"></i>
        <div class="tab-bar-text">首页</div>
      </tab-bar-item > 
      <tab-bar-item path="/category" :currentColor="activeColor">
        <i class="el-icon-s-data"></i>
        <div class="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" :currentColor="activeColor">
        <i class="el-icon-s-goods"></i>
        <div class="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" :currentColor="activeColor">
        <i class="el-icon-s-custom"></i>
        <div class="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tab-bar";
import TabBarItem from '@/components/common/tab-bar-item'
export default {
  name: "MainTabBar",
  data(){
    return{
      activeColor:'orange'
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
 
};
</script>

<style scoped>
.main-tab-bar {
 
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
}
.main-tab-bar > div {
  flex: 1;
}
.main-tab-bar > div i {
  font-size: 20px;
  padding: 4px 0 2px 0;
}
</style>


