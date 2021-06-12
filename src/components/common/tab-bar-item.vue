<template>
  <div class="tab-bar-item" @click='itemclick' :style="{color:isActive?currentColor:null}" >
    <slot></slot>
  </div>
</template>
<style scoped>
.tab-bar-item{
  flex: 1
}
</style>

<script>
export default {
  name:'tab-bar-item',
  computed:{
    isActive(){
    return this.$route.path.includes(this.path)
    }
  },
 props:{
   path:String,
   currentColor:{
     type:String,
     default:'red'
   }
 },
  methods:{
    itemclick(){
     this.$router.push(this.path) 
     
    }
  }
}
</script>

