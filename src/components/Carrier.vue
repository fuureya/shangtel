<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center justify-center text-white">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/img/karir1.jpg');">
        <div class="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4">{{ currentCarrierData.hero.title }}</h1>
        <p class="text-xl md:text-2xl">{{ currentCarrierData.hero.subtitle }}</p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">{{ currentCarrierData.intro.title }}</h2>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {{ currentCarrierData.intro.content }}
        </p>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="py-20 bg-gray-50 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0 bg-[url('/img/map.png')] bg-center bg-no-repeat"></div>
      </div>
      <div class="container mx-auto px-6 relative">
        <h2 class="text-center text-4xl font-bold text-gray-900 mb-12">{{ currentCarrierData.whyJoinUs.title }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4 text-blue-500">
              <font-awesome-icon icon="lightbulb" size="3x" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ currentCarrierData.whyJoinUs.cards[0].title }}</h3>
            <p class="text-gray-700">{{ currentCarrierData.whyJoinUs.cards[0].content }}</p>
          </div>
          <!-- Card 2 -->
          <div class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4 text-blue-500">
              <font-awesome-icon icon="users" size="3x" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ currentCarrierData.whyJoinUs.cards[1].title }}</h3>
            <p class="text-gray-700">{{ currentCarrierData.whyJoinUs.cards[1].content }}</p>
          </div>
          <!-- Card 3 -->
          <div class="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="mb-4 text-blue-500">
              <font-awesome-icon icon="chart-line" size="3x" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ currentCarrierData.whyJoinUs.cards[2].title }}</h3>
            <p class="text-gray-700">{{ currentCarrierData.whyJoinUs.cards[2].content }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const carrierDataIndonesia = {
  hero: {
    title: "Bangun Masa Depanmu Bersama Shangtel",
    subtitle: "Jadilah bagian dari tim yang bersemangat dalam inovasi teknologi."
  },
  intro: {
    title: "We Do IT With Passion",
    content: "Di Shangtel, kami percaya bahwa semangat dan dedikasi adalah kunci untuk memberikan solusi terbaik. Kami adalah tim yang solid, kreatif, dan selalu haus akan tantangan baru. Budaya kerja kami didasarkan pada kolaborasi, inovasi, dan pertumbuhan berkelanjutan."
  },
  whyJoinUs: {
    title: "Mengapa Bergabung Dengan Kami?",
    cards: [
      {
        title: "Inovasi Tanpa Henti",
        content: "Kami selalu mencari cara baru untuk memecahkan masalah dan menciptakan teknologi masa depan."
      },
      {
        title: "Lingkungan Kolaboratif",
        content: "Anda akan bekerja dengan para ahli di bidangnya dalam lingkungan yang mendukung dan terbuka."
      },
      {
        title: "Pengembangan Karir",
        content: "Kami berinvestasi pada pertumbuhan profesional Anda melalui pelatihan dan peluang pengembangan."
      }
    ]
  }
}

const carrierDataEnglish = {
  hero: {
    title: "Build Your Future with Shangtel",
    subtitle: "Be part of a team that is passionate about technological innovation."
  },
  intro: {
    title: "We Do IT With Passion",
    content: "At Shangtel, we believe that passion and dedication are the keys to providing the best solutions. We are a solid, creative team that is always hungry for new challenges. Our work culture is based on collaboration, innovation, and continuous growth."
  },
  whyJoinUs: {
    title: "Why Join Us?",
    cards: [
      {
        title: "Endless Innovation",
        content: "We are always looking for new ways to solve problems and create future technologies."
      },
      {
        title: "Collaborative Environment",
        content: "You will work with experts in their fields in a supportive and open environment."
      },
      {
        title: "Career Development",
        content: "We invest in your professional growth through training and development opportunities."
      }
    ]
  }
}

const currentCarrierData = computed(() => {
  return currentLanguage.value === 'ID' ? carrierDataIndonesia : carrierDataEnglish
})
</script>

<style scoped>
/* Scoped styles if needed */
</style>
