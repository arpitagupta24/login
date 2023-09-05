<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dashboard from './components/Dashboard.vue';
import Login from './components/Login.vue';

export default defineComponent({
    name: 'App',
    components: { Dashboard, Login }
});
</script>
