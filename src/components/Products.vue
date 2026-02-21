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
                    <img src="/img/products/sky.jpg" alt="Skyaccess Infrastructure"
                      class="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-8">
                    <div
                      class="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <img src="/public/img/skyaccess.png" alt="Skyaccess Logo" class="w-12 h-12 object-contain" />
                    </div>
                    <div class="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-300/20">
                      <span class="text-blue-700 text-sm font-semibold">Enterprise</span>
                    </div>
                  </div>

                  <!-- Product Name -->
                  <h3 class="text-3xl lg:text-4xl font-black text-gray-800 mb-4">
                    Sky<span class="text-blue-600">access</span>
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
                  <a href="https://skyaccess.co.id/" target="_blank"
                    class="group/btn bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:transform hover:scale-105 w-full block text-center">
                    <span class="flex items-center justify-center">
                      {{ currentProductData.shangtelSky.buttonText }}
                      <font-awesome-icon icon="chevron-right"
                        class="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </a>
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
                    <img src="/img/products/ftth.jpg" alt="Shangtelhome FTTH"
                      class="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-8">
                    <div
                      class="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <img src="/public/img/shangtelhome.png" alt="Shangtelhome Logo"
                        class="w-12 h-12 object-contain" />
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
                  <a href="https://shangtelhome.com" target="_blank"
                    class="group/btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:transform hover:scale-105 w-full block text-center">
                    <span class="flex items-center justify-center">
                      {{ currentProductData.shangtelHome.buttonText }}
                      <font-awesome-icon icon="chevron-right"
                        class="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </a>
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
  badge: "Distributor Resmi",
  title: "Distributor Eksklusif Peralatan Wireless",
  subtitle: "Berkat kepercayaan dari produsen mancanegara, kami menjadi distributor eksklusif untuk peralatan wireless di Asia Pasifik, sambil terus mengembangkan merek kami sendiri.",
  shangtelSky: {
    description: "SkyAccess Solusi enterprise merupakan produk Shangkuriang yang diciptakan untuk memenuhi kebutuhan kompleks dari berbagai segmen, mulai dari bisnis korporasi, pemerintahan, hingga pelaku bisnis yang membutuhkan sarana koneksi internet paling terkini. Solusi ini mencakup paket layanan terlengkap seperti fixed network connectivity, serta manajemen layanan dan monitoring terlengkap.",
    features: [
      "Installation",
      "4K Quality",
      "Ultra Fast",
      "Satelite VSAT",
      "Cheap Plans",
      "24/7 Support"
    ],
    buttonText: "Lihat Selengkapnya"
  },
  shangtelHome: {
    description: "ShangtelHome adalah produk unggulan dari PT. Shangkuriang Telekomunikasi Indonesia yang berfokus pada layanan internet berbasis Fiber To The Home (FTTH). Kami hadir untuk memberikan akses internet cepat, stabil, dan terjangkau bagi masyarakat, mendukung kebutuhan digital mulai dari hiburan, pendidikan, hingga bisnis.",
    features: [
      "Privasi & Keamanan Terjamin",
      "Kecepatan Stabil 24/7",
      "Layanan cepat & Responsive",
      "Infrastruktur Modern",
      "Support 24/7"
    ],
    buttonText: "Lihat Selengkapnya"
  }
}

const productDataEnglish = {
  badge: "Official Distributor",
  title: "Exclusive Distributor of Wireless Equipment",
  subtitle: "Thanks to the trust of international manufacturers, we have become the exclusive distributor for wireless equipment in the Asia Pacific, while continuing to develop our own brands.",
  shangtelSky: {
    description: "The SkyAccess Enterprise Solution is a Shangkuriang product created to meet the complex needs of various segments, from corporate businesses and government to business players who require the most up-to-date internet connection facilities. This solution includes a complete service package such as fixed network connectivity, as well as comprehensive service management and monitoring.",
    features: [
      "Installation",
      "4K Quality",
      "Ultra Fast",
      "Satellite VSAT",
      "Affordable Plans",
      "24/7 Support"
    ],
    buttonText: "Learn More"
  },
  shangtelHome: {
    description: "ShangtelHome is a flagship product of PT. Shangkuriang Telekomunikasi Indonesia that focuses on Fiber To The Home (FTTH) based internet services. We are here to provide fast, stable, and affordable internet access for the community, supporting digital needs from entertainment and education to business.",
    features: [
      "Guaranteed Privacy & Security",
      "Stable Speed 24/7",
      "Fast & Responsive Service",
      "Modern Infrastructure",
      "24/7 Support"
    ],
    buttonText: "Learn More"
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