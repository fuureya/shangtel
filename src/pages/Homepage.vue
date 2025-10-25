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
    title: "Selamat Datang di PT. Shangkuriang Telekomunikasi Indonesia",
    content: "Kami adalah perusahaan yang bergerak di bidang IT Solution, Manage Service, dan System Integrator, dengan fokus utama pada penyediaan jaringan internet. Dengan pengalaman di berbagai kota besar dan daerah pedesaan, kami siap menjadi mitra terpercaya Anda.",
    tagline: "“We Do IT With Passion” — Melayani Anda 24x7"
  },
  {
    lang: "en",
    title: "Welcome to PT. Shangkuriang Telekomunikasi Indonesia",
    content: "We are a company engaged in IT Solutions, Managed Services, and System Integrators, with a primary focus on providing internet networks. With experience in various big cities and rural areas, we are ready to be your trusted partner.",
    tagline: "“We Do IT With Passion” — Serving you 24/7"
  }
]

const { currentLanguage } = useLanguage()

const currentWelcomeData = computed(() => {
  return currentLanguage.value === 'ID' ? welcomeData.find(data => data.lang === 'id') : welcomeData.find(data => data.lang === 'en')
})

</script>