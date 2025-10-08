<template>
  <Navbar />
  <section id="home">
    <Jumbotron />
  </section>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ currentWelcomeData.title }}</h1>
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        {{ currentWelcomeData.content }}
      </p>
      <p class="text-lg font-semibold text-blue-600">
        {{ currentWelcomeData.tagline }}
      </p>
    </div>
  </div>

  <!-- Infrastructure Section -->
  <section id="about">
    <Infra />
  </section>

  <!-- Services Section -->
  <section id="services">
    <Services />
  </section>

  <!-- Products Section -->
  <section id="products">
    <Products />
  </section>

  <!-- Footer -->
  <section id="contact">
    <Footer />
  </section>

  <!-- Floating CS Button -->
  <FloatingCsButton />
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Infra from '@/components/Infra.vue'
import Services from '@/components/Services.vue'
import Products from '@/components/Products.vue'
import Footer from '@/components/Footer.vue'
import FloatingCsButton from '@/components/FloatingCsButton.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const welcomeData = [
  {
    lang: "id",
    title: "Selamat Datang di Shangkuriang Telekomunikasi",
    content: "Shangtel adalah mitra terpercaya dalam menghadirkan solusi IT inovatif, layanan terkelola profesional, dan integrasi sistem yang andal. Dengan tim ahli problem solver, kami berkomitmen memberikan dukungan cepat, analisis produk yang kreatif, serta solusi teknologi yang efisien untuk mendukung pertumbuhan bisnis Anda.",
    tagline: "Shangtel — Solusi IT, Layanan Terkelola, dan Integrasi Sistem Terbaik."
  },
  {
    lang: "en",
    title: "Welcome to Shangkuriang Telekomunikasi",
    content: "Shangtel is your trusted partner in delivering innovative IT solutions, professional managed services, and reliable system integration. With a team of expert problem solvers, we are committed to providing fast support, creative product analysis, and efficient technology solutions to empower your business growth.",
    tagline: "Shangtel — IT Solution, Managed Service, and System Integration at Its Best."
  }
]

const { currentLanguage } = useLanguage()

const currentWelcomeData = computed(() => {
  return currentLanguage.value === 'ID' ? welcomeData.find(data => data.lang === 'id') : welcomeData.find(data => data.lang === 'en')
})

</script>