<template>
  <div id="app">
    <AppNavigation />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppNavigation from '@/components/AppNavigation.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppNavigation
  }
});
</script>
Ì
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
