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
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <img src="@/assets/img/a1.jpg" alt="Fiber Optic" class="rounded-lg shadow-2xl w-full">
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
  <section class="py-16 md:py-24 bg-gray-50">
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
            <h3 class="text-2xl font-semibold text-blue-600 mb-3">{{ currentAboutData.visionMission.mission.title }}
            </h3>
            <ul class="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li v-for="item in currentAboutData.visionMission.mission.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="@/assets/img/a2.jpg" alt="Satelite" class="rounded-lg shadow-2xl w-full">
        </div>
      </div>
    </div>
  </section>

  <!-- Clients Section -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-12">{{ currentLanguage === 'ID' ? 'Klien Kami' : 'Our Clients' }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
        <div v-for="client in displayedClients" :key="client"
          class="flex justify-center transition-transform duration-300 ease-in-out hover:scale-110">
          <img :src="client" alt="Client Logo"
            class="h-14 object-contain transition-all duration-300">
        </div>
      </div>
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex justify-center items-center mt-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
      <!-- View More Button -->
      <div v-if="!showAllClients && !isLoading && clientLogos.length > 6" class="mt-12">
        <button @click="loadMoreClients"
          class="inline-flex items-center gap-3 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500">
          <span>{{ currentLanguage === 'ID' ? 'Lihat Lebih Lengkap' : 'View More' }}</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref, computed } from 'vue'
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
    paragraph1: "PT. Shangkuriang Telekomunikasi Indonesia adalah perusahaan yang bergerak di bidang IT Solution, Managed Service, dan System Integration, dengan fokus utama pada penyediaan layanan jaringan internet yang berkualitas dan berkelanjutan.",
    paragraph2: "Didukung oleh tenaga ahli berpengalaman dan jaringan kerja yang luas, kami berkomitmen untuk memberikan layanan profesional, solusi teknologi inovatif, serta dukungan terbaik bagi pelanggan di berbagai sektor. kami berkomitmen untuk menghadirkan konektivitas berkualitas tinggi, layanan profesional, serta solusi teknologi terintegrasi yang mendukung transformasi digital di Indonesia. Bersama kami, wujudkan konektivitas tanpa batas untuk masa depan yang lebih cerdas dan terhubung."
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
    paragraph1: "PT. Shangkuriang Telekomunikasi Indonesia is a company engaged in IT Solutions, Managed Services, and System Integration, with a primary focus on providing high-quality and sustainable internet network services.",
    paragraph2: "Supported by experienced experts and an extensive work network, we are committed to providing professional services, innovative technology solutions, and the best support for customers in various sectors. We are committed to delivering high-quality connectivity, professional services, and integrated technology solutions that support digital transformation in Indonesia. With us, realize limitless connectivity for a smarter and more connected future."
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

const clientLogos = ref([
  '/img/client/aston.png',
  '/img/client/diskominfo-papua-barat.png',
  '/img/client/capitol.webp',
  '/img/client/swissbell-manokwari.jpeg',
  '/img/client/pc24-telekomunikasi.png',
  '/img/client/Manokwari_City_Mall_logo.jpg',
  '/img/client/sjam.webp',
  '/img/client/rrri.png',
  '/img/client/polbangtan-manokwari.png',
  '/img/client/mitra-kreasi-darma.webp',
  '/img/client/hotel-mariat-sorong.jpg',
  '/img/client/bumi-pundi-karsa.jpeg',
  '/img/client/budi-starch-sweentener.png',
  '/img/client/brin.png',
  '/img/client/balmon.jpeg',
  '/img/client/asanabiak.png',
  '/img/client/alimhome.webp',
  '/img/client/medcopapua.png',
  '/img/client/bkhit.jpg',
  '/img/client/iconplus.webp'
]);

const showAllClients = ref(false);
const isLoading = ref(false);

const displayedClients = computed(() => {
  if (showAllClients.value) {
    return clientLogos.value;
  }
  return clientLogos.value.slice(0, 6);
});

const loadMoreClients = () => {
  isLoading.value = true;
  setTimeout(() => {
    showAllClients.value = true;
    isLoading.value = false;
  }, 1500); // 1.5 second delay
};
</script>

<style scoped>
/* Scoped styles for custom animations or effects if needed */
</style>