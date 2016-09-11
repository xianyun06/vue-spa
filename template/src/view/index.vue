<template>
  <div>
    这是首页
    <ul>
    <li v-link="{path:'/a'}">a页</li>
    <li v-link="{path:'/b'}">b页</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
