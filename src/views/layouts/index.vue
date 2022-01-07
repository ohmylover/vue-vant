<template>
  <div class="app-container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
    }
  },
  methods: {}
}
</script>
