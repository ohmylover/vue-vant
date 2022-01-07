<!--
 * @Description:
 * @Autor: zhangcl
 * @Date: 2022-01-06 14:04:18
 * @LastEditors: zhangcl
 * @LastEditTime: 2022-01-06 16:46:51
-->
<template>
  <div class="home">
    <div class="header">首页</div>
    <van-button type="primary" block @click="$router.push({ name: 'Info', params: { id: 1} })">进入详情页</van-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  .header {
    margin-bottom: 0.4rem;
    padding: 0.4rem 0;
    font-size: 0.46rem;
    text-align: center;
    background-color: #fff;
  }
}
</style>
