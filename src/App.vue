<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
