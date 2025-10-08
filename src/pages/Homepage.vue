<template>
  <Navbar />
  <Jumbotron />

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Welcome to Shangtel</h1>
      <p class="text-xl text-gray-600 leading-relaxed">
        Your trusted partner for comprehensive IT solutions and managed services.
        We empower businesses with cutting-edge technology and reliable infrastructure.
      </p>
    </div>
  </div>

  <!-- Footer -->
  <Footer />

  <!-- Floating CS Button -->
  <FloatingCsButton />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Footer from '@/components/Footer.vue'
import FloatingCsButton from '@/components/FloatingCsButton.vue'
</script>