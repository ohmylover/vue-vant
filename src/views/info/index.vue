<!--
 * @Description:
 * @Autor: zhangcl
 * @Date: 2022-01-06 15:41:49
 * @LastEditors: zhangcl
 * @LastEditTime: 2022-01-07 14:04:56
-->
<template>
  <div class="info">
    <div class="header">详情</div>
    <van-panel :title="info.title" :desc="info.desc" :status="info.status">
      <div>{{ info.content }}</div>
    </van-panel>
    <van-button type="primary" block @click="$router.go(-1)">返回上一级</van-button>
  </div>
</template>

<script>
import { getInfoDetail } from '@/api/info.js'
export default {
  name: 'Info',
  data() {
    return {
      info: {
        title: '',
        desc: '',
        status: '',
        content: ''
      }
    }
  },

  computed: {},

  mounted() {
    this.getInfoDetail()
  },

  methods: {
    async getInfoDetail() {
      const res = await getInfoDetail().catch(err => {
        console.log(err)
      })
      if (res && res.data) {
        this.info = res.data
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.info {
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
