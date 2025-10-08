<template>
  <section class="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
      <div class="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000">
      </div>
      <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300/25 rounded-full blur-2xl animate-pulse delay-500">
      </div>

      <!-- Floating particles -->
      <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div class="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
      <div class="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
      <div class="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500"></div>
    </div>

    <!-- Overlay for better readability -->
    <div class="absolute inset-0 bg-blue-900/20"></div>

    <!-- Content -->
    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- Header Section -->
      <div class="text-center pt-20 pb-16 px-6">
        <div
          class="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <font-awesome-icon icon="wifi" class="mr-2 text-white" />
          <span class="text-white text-sm font-medium">{{ currentProductData.badge }}</span>
        </div>

        <h2 class="text-4xl font-black text-white mb-6 leading-tight">
          <span class="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent font-bold">
            {{ currentProductData.title }}
          </span>
        </h2>

        <p class="text-xl text-blue-50 max-w-4xl mx-auto leading-relaxed">
          {{ currentProductData.subtitle }}
        </p>
      </div>

      <!-- Products Grid -->
      <div class="flex-1 flex items-center justify-center px-6 pb-20">
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">

            <!-- ShangtelSky Card -->
            <div class="group relative">
              <div
                class="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden">

                <!-- Map Background -->
                <div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <img src="/img/map.png" alt="Network Map" class="w-full h-full object-cover" />
                </div>

                <!-- Card Glow Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl">
                </div>

                <div class="relative z-10">
                  <!-- Product Image -->
                  <div class="mb-8 rounded-xl overflow-hidden">
                    <img src="/img/products/sky.jpg" alt="ShangtelSky Infrastructure"
                      class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-8">
                    <div
                      class="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <font-awesome-icon icon="cloud" class="text-3xl text-white" />
                    </div>
                    <div class="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-300/20">
                      <span class="text-blue-700 text-sm font-semibold">Enterprise</span>
                    </div>
                  </div>

                  <!-- Product Name -->
                  <h3 class="text-3xl lg:text-4xl font-black text-gray-800 mb-4">
                    Shangtel<span class="text-blue-600">Sky</span>
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 text-lg leading-relaxed mb-8">
                    {{ currentProductData.shangtelSky.description }}
                  </p>

                  <!-- Features -->
                  <div class="space-y-4 mb-8">
                    <div v-for="feature in currentProductData.shangtelSky.features" :key="feature"
                      class="flex items-center space-x-3">
                      <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="check" class="text-sm text-blue-600" />
                      </div>
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <button
                    class="group/btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:transform hover:scale-105 w-full">
                    <span class="flex items-center justify-center">
                      {{ currentProductData.shangtelSky.buttonText }}
                      <font-awesome-icon icon="chevron-right"
                        class="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- ShangtelHome Card -->
            <div class="group relative">
              <div
                class="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden">

                <!-- Map Background -->
                <div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <img src="/img/map.png" alt="Network Map" class="w-full h-full object-cover" />
                </div>

                <!-- Card Glow Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl">
                </div>

                <div class="relative z-10">
                  <!-- Product Image -->
                  <div class="mb-8 rounded-xl overflow-hidden">
                    <img src="/img/products/ftth.jpg" alt="ShangtelHome FTTH"
                      class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-8">
                    <div
                      class="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <font-awesome-icon icon="wifi" class="text-3xl text-white" />
                    </div>
                    <div class="px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-300/20">
                      <span class="text-indigo-700 text-sm font-semibold">Consumer</span>
                    </div>
                  </div>

                  <!-- Product Name -->
                  <h3 class="text-3xl lg:text-4xl font-black text-gray-800 mb-4">
                    Shangtel<span class="text-indigo-600">Home</span>
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 text-lg leading-relaxed mb-8">
                    {{ currentProductData.shangtelHome.description }}
                  </p>

                  <!-- Features -->
                  <div class="space-y-4 mb-8">
                    <div v-for="feature in currentProductData.shangtelHome.features" :key="feature"
                      class="flex items-center space-x-3">
                      <div class="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="check" class="text-sm text-indigo-600" />
                      </div>
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <button
                    class="group/btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:transform hover:scale-105 w-full">
                    <span class="flex items-center justify-center">
                      {{ currentProductData.shangtelHome.buttonText }}
                      <font-awesome-icon icon="chevron-right"
                        class="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const productDataIndonesia = {
  badge: "Produk & Layanan",
  title: "Solusi Konektivitas Terdepan",
  subtitle: "Pilihan produk dan layanan telekomunikasi terbaik untuk memenuhi kebutuhan bisnis dan rumah tangga Anda dengan teknologi canggih dan dukungan 24/7.",
  shangtelSky: {
    description: "Solusi internet enterprise berkecepatan tinggi dengan infrastruktur cloud dan jaringan fiber optik untuk mendukung operasional bisnis skala besar.",
    features: [
      "Kecepatan hingga 1 Gbps",
      "Uptime 99.9% SLA",
      "Dedicated Support 24/7",
      "Cloud Integration",
      "Scalable Bandwidth"
    ],
    buttonText: "Konsultasi Enterprise"
  },
  shangtelHome: {
    description: "Layanan internet rumahan dengan kecepatan stabil dan harga terjangkau untuk aktivitas browsing, streaming, dan gaming keluarga.",
    features: [
      "Kecepatan hingga 100 Mbps",
      "Unlimited Data",
      "WiFi 6 Router",
      "Family Protection",
      "Easy Installation"
    ],
    buttonText: "Pilih Paket Home"
  }
}

const productDataEnglish = {
  badge: "Products & Services",
  title: "Leading Connectivity Solutions",
  subtitle: "Premium telecommunications products and services to meet your business and household needs with advanced technology and 24/7 support.",
  shangtelSky: {
    description: "High-speed enterprise internet solution with cloud infrastructure and fiber optic network to support large-scale business operations.",
    features: [
      "Speed up to 1 Gbps",
      "99.9% Uptime SLA",
      "Dedicated Support 24/7",
      "Cloud Integration",
      "Scalable Bandwidth"
    ],
    buttonText: "Enterprise Consultation"
  },
  shangtelHome: {
    description: "Home internet service with stable speed and affordable pricing for browsing, streaming, and family gaming activities.",
    features: [
      "Speed up to 100 Mbps",
      "Unlimited Data",
      "WiFi 6 Router",
      "Family Protection",
      "Easy Installation"
    ],
    buttonText: "Choose Home Package"
  }
}

const currentProductData = computed(() => {
  return currentLanguage.value === 'ID' ? productDataIndonesia : productDataEnglish
})
</script>

<style scoped>
/* Glassmorphism enhanced effects */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Custom hover effects */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-3xl {
    font-size: 1.875rem;
  }

  .lg\:text-4xl {
    font-size: 2.25rem;
  }

  .p-8 {
    padding: 1.5rem;
  }

  .lg\:p-12 {
    padding: 2rem;
  }
}

/* Animation for floating elements */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>