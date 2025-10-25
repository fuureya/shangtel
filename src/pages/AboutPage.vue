<template>
  <Navbar />

  <!-- Hero Section with Background Image -->
  <section class="relative h-96 flex items-center justify-center text-white">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/img/carousel/c1.jpg');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div class="relative z-10 text-center">
      <h1 class="text-5xl font-extrabold mb-4">{{ currentAboutData.hero.title }}</h1>
      <p class="text-xl">{{ currentAboutData.hero.subtitle }}</p>
    </div>
  </section>

  <!-- About Us Content with Image -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <img src="/img/infra/fiber.jpg" alt="Fiber Optic" class="rounded-lg shadow-2xl w-full">
        </div>
        <div class="md:w-1/2 md:pl-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">{{ currentAboutData.about.title }}</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            {{ currentAboutData.about.paragraph1 }}
          </p>
          <p class="text-gray-600 leading-relaxed">
            {{ currentAboutData.about.paragraph2 }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Visi & Misi Section with Image -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">{{ currentAboutData.visionMission.title }}</h2>
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-blue-600 mb-3">{{ currentAboutData.visionMission.vision.title }}</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ currentAboutData.visionMission.vision.content }}
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-blue-600 mb-3">{{ currentAboutData.visionMission.mission.title }}</h3>
            <ul class="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li v-for="item in currentAboutData.visionMission.mission.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="/img/infra/satelite.jpg" alt="Satelite" class="rounded-lg shadow-2xl w-full">
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const aboutDataIndonesia = {
  hero: {
    title: "Tentang Shangtel",
    subtitle: "Solusi IT, Layanan Terkelola, dan Integrasi Sistem Terbaik"
  },
  about: {
    title: "We Do IT With Passion",
    paragraph1: "PT. Shangkuriang Telekomunikasi Indonesia adalah perusahaan yang bergerak di bidang IT Solution, Manage Service, dan System Integrator, khususnya dalam penyediaan jaringan internet. Kami berpengalaman dalam instalasi jaringan Fiber Optic dan Wireless di berbagai kota besar dan daerah pedesaan.",
    paragraph2: "Kepercayaan dari produsen Wireless Equipment mancanegara telah menjadikan kami distributor eksklusif di Asia Pasifik. Dengan lebih dari 300 klien domestik dan internasional, motto “We Do IT With Passion” menjadi landasan kami untuk memberikan pelayanan 24x7."
  },
  visionMission: {
    title: "Visi & Misi",
    vision: {
      title: "Visi",
      content: "Menjadi perusahaan penyedia teknologi informasi dan komunikasi bertaraf internasional dengan layanan terbaik dalam pemberian solusi yang terpercaya dan bernilai tambah bagi pelanggan dan stakeholder."
    },
    mission: {
      title: "Misi",
      items: [
        "Menjalin kerjasama dengan perusahaan ICT baik dari dalam negeri maupun luar negeri.",
        "Bertekad membawa merek sendiri untuk berkembang menjadi industri manufacturing terkemuka di Indonesia.",
        "Mengembangkan Industri ICT dengan orientasi bisnis dan kultur profesional.",
        "Mengembangkan sumber daya dan potensi bisnis yang ada di lingkungan Indonesia timur.",
        "Meningkatkan benefit dan value bagi konsumen dan stakeholder."
      ]
    }
  }
}

const aboutDataEnglish = {
  hero: {
    title: "About Shangtel",
    subtitle: "The Best IT Solutions, Managed Services, and System Integration"
  },
  about: {
    title: "We Do IT With Passion",
    paragraph1: "PT. Shangkuriang Telekomunikasi Indonesia is a company engaged in IT Solutions, Managed Services, and System Integrators, especially in the provision of internet networks. We have experience in installing Fiber Optic and Wireless networks in various big cities and rural areas.",
    paragraph2: "The trust from foreign Wireless Equipment manufacturers has made us the exclusive distributor in the Asia Pacific. With more than 300 domestic and international clients, the motto “We Do IT With Passion” is our foundation for providing 24/7 service."
  },
  visionMission: {
    title: "Vision & Mission",
    vision: {
      title: "Vision",
      content: "To become an international-class information and communication technology provider with the best service in providing trusted and value-added solutions for customers and stakeholders."
    },
    mission: {
      title: "Mission",
      items: [
        "Collaborate with ICT companies from both domestic and foreign countries.",
        "Determined to bring our own brand to develop into a leading manufacturing industry in Indonesia.",
        "Develop the ICT industry with a business orientation and professional culture.",
        "Develop existing resources and business potential in the eastern Indonesian environment.",
        "Increase benefits and value for consumers and stakeholders."
      ]
    }
  }
}

const currentAboutData = computed(() => {
  return currentLanguage.value === 'ID' ? aboutDataIndonesia : aboutDataEnglish
})
</script>

<style scoped>
/* Scoped styles for custom animations or effects if needed */
</style>