<template>
  <Navbar />
  <section id="home">
    <Jumbotron />
  </section>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-16">
    <div class="text-center px-10 mx-auto ">
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
    content: "Selamat Datang di PT. Shangkuriang Telekomunikasi Indonesia PT.Shangkuriang Telekomunikasi Indonesia adalah perusahaan yang bergerak di bidang IT Solution, Managed Service, dan System Integration, dengan fokus utama pada penyediaan layanan jaringan internet yang berkualitas dan berkelanjutan. Didukung oleh tenaga ahli berpengalaman dan jaringan kerja yang luas, kami berkomitmen untuk memberikan layanan profesional, solusi teknologi inovatif, serta dukungan terbaik bagi pelanggan di berbagai sektor. kami berkomitmen untuk menghadirkan konektivitas berkualitas tinggi, layanan profesional, serta solusi teknologi terintegrasi yang mendukung transformasi digital di Indonesia. Bersama kami, wujudkan konektivitas tanpa batas untuk masa depan yang lebih cerdas dan terhubung.",
    tagline: "“We Do IT With Passion” — Melayani Anda 24x7"
  },
  {
    lang: "en",
    title: "Welcome to PT. Shangkuriang Telekomunikasi Indonesia",
    content: "PT. Shangkuriang Telekomunikasi Indonesia is a company engaged in IT Solutions, Managed Services, and System Integration, with a primary focus on providing quality and sustainable internet network services.",
    tagline: "“We Do IT With Passion” — Serving you 24/7"
  }
]

const { currentLanguage } = useLanguage()

const currentWelcomeData = computed(() => {
  return currentLanguage.value === 'ID' ? welcomeData.find(data => data.lang === 'id') : welcomeData.find(data => data.lang === 'en')
})

</script>