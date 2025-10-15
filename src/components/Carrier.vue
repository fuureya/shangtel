<template>
  <div>
    <!-- Jumbotron for Carrier -->
    <Jumbotron :isCarrierPage="true" />

    <!-- Carrier Services Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-600 to-blue-800 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
      <div class="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000">
      </div>
      <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/25 rounded-full blur-2xl animate-pulse delay-500">
      </div>

      <!-- Floating particles -->
      <div class="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div class="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
      <div class="absolute bottom-32 left-16 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-2000"></div>
      <div class="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
    </div>

    <!-- Overlay for better readability -->
    <div class="absolute inset-0 bg-purple-900/20"></div>

    <!-- Content -->
    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- Header Section -->
      <div class="text-center pt-20 pb-16 px-6">
        <div
          class="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <font-awesome-icon icon="satellite-dish" class="mr-2 text-white" />
          <span class="text-white text-sm font-medium">{{ currentCarrierData.badge }}</span>
        </div>

        <h2 class="text-4xl font-black text-white mb-6 leading-tight">
          <span class="bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent font-bold">
            {{ currentCarrierData.title }}
          </span>
        </h2>

        <p class="text-xl text-purple-50 max-w-4xl mx-auto leading-relaxed">
          {{ currentCarrierData.subtitle }}
        </p>
      </div>

      <!-- Carrier Services Grid -->
      <div class="flex-1 flex items-center justify-center px-6 pb-20">
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">

            <!-- Data Center Service -->
            <div class="group relative">
              <div
                class="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden">

                <!-- Card Glow Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl">
                </div>

                <div class="relative z-10">
                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-6">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <font-awesome-icon icon="server" class="text-2xl text-white" />
                    </div>
                    <div class="px-3 py-1 bg-purple-500/10 rounded-full border border-purple-300/20">
                      <span class="text-purple-700 text-xs font-semibold">Infrastructure</span>
                    </div>
                  </div>

                  <!-- Service Name -->
                  <h3 class="text-2xl lg:text-3xl font-black text-gray-800 mb-4">
                    {{ currentCarrierData.dataCenter.name }}
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 text-base leading-relaxed mb-6">
                    {{ currentCarrierData.dataCenter.description }}
                  </p>

                  <!-- Features -->
                  <div class="space-y-3 mb-6">
                    <div v-for="feature in currentCarrierData.dataCenter.features" :key="feature"
                      class="flex items-center space-x-3">
                      <div class="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="check" class="text-xs text-purple-600" />
                      </div>
                      <span class="text-gray-700 text-sm">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Connectivity Service -->
            <div class="group relative">
              <div
                class="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden">

                <!-- Card Glow Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl">
                </div>

                <div class="relative z-10">
                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-6">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <font-awesome-icon icon="network-wired" class="text-2xl text-white" />
                    </div>
                    <div class="px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-300/20">
                      <span class="text-indigo-700 text-xs font-semibold">Network</span>
                    </div>
                  </div>

                  <!-- Service Name -->
                  <h3 class="text-2xl lg:text-3xl font-black text-gray-800 mb-4">
                    {{ currentCarrierData.connectivity.name }}
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 text-base leading-relaxed mb-6">
                    {{ currentCarrierData.connectivity.description }}
                  </p>

                  <!-- Features -->
                  <div class="space-y-3 mb-6">
                    <div v-for="feature in currentCarrierData.connectivity.features" :key="feature"
                      class="flex items-center space-x-3">
                      <div class="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="check" class="text-xs text-indigo-600" />
                      </div>
                      <span class="text-gray-700 text-sm">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cloud Service -->
            <div class="group relative">
              <div
                class="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden">

                <!-- Card Glow Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl">
                </div>

                <div class="relative z-10">
                  <!-- Icon & Badge -->
                  <div class="flex items-center justify-between mb-6">
                    <div
                      class="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <font-awesome-icon icon="cloud" class="text-2xl text-white" />
                    </div>
                    <div class="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-300/20">
                      <span class="text-blue-700 text-xs font-semibold">Cloud</span>
                    </div>
                  </div>

                  <!-- Service Name -->
                  <h3 class="text-2xl lg:text-3xl font-black text-gray-800 mb-4">
                    {{ currentCarrierData.cloudService.name }}
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-600 text-base leading-relaxed mb-6">
                    {{ currentCarrierData.cloudService.description }}
                  </p>

                  <!-- Features -->
                  <div class="space-y-3 mb-6">
                    <div v-for="feature in currentCarrierData.cloudService.features" :key="feature"
                      class="flex items-center space-x-3">
                      <div class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="check" class="text-xs text-blue-600" />
                      </div>
                      <span class="text-gray-700 text-sm">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- CTA Section -->
          <div class="text-center mt-16">
            <a href="#contact" @click="scrollToContact"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:transform hover:scale-105">
              <span>{{ currentCarrierData.ctaText }}</span>
              <font-awesome-icon icon="chevron-right" class="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'
import Jumbotron from '@/components/Jumbotron.vue'

const { currentLanguage } = useLanguage()

const carrierDataIndonesia = {
  badge: "Layanan Carrier",
  title: "Solusi Infrastruktur Telekomunikasi Enterprise",
  subtitle: "Layanan carrier grade untuk mendukung infrastruktur telekomunikasi enterprise dengan teknologi terdepan dan standar internasional.",
  dataCenter: {
    name: "Data Center",
    description: "Fasilitas data center dengan standar tier III untuk hosting infrastruktur IT perusahaan.",
    features: [
      "Tier III Certified",
      "24/7 Monitoring",
      "Redundant Power",
      "Climate Control",
      "Physical Security"
    ]
  },
  connectivity: {
    name: "Connectivity",
    description: "Solusi konektivitas backbone dengan kapasitas tinggi untuk carrier dan enterprise.",
    features: [
      "Fiber Optic Network",
      "High Bandwidth",
      "Low Latency",
      "Redundant Path",
      "SLA Guarantee"
    ]
  },
  cloudService: {
    name: "Cloud Services",
    description: "Layanan cloud computing dengan infrastruktur yang scalable dan secure.",
    features: [
      "IaaS & PaaS",
      "Auto Scaling",
      "Backup & Recovery",
      "Security Monitoring",
      "API Integration"
    ]
  },
  ctaText: "Konsultasi Carrier"
}

const carrierDataEnglish = {
  badge: "Carrier Services",
  title: "Enterprise Telecommunications Infrastructure Solutions",
  subtitle: "Carrier-grade services to support enterprise telecommunications infrastructure with cutting-edge technology and international standards.",
  dataCenter: {
    name: "Data Center",
    description: "Tier III certified data center facilities for hosting enterprise IT infrastructure.",
    features: [
      "Tier III Certified",
      "24/7 Monitoring",
      "Redundant Power",
      "Climate Control",
      "Physical Security"
    ]
  },
  connectivity: {
    name: "Connectivity",
    description: "High-capacity backbone connectivity solutions for carriers and enterprises.",
    features: [
      "Fiber Optic Network",
      "High Bandwidth",
      "Low Latency",
      "Redundant Path",
      "SLA Guarantee"
    ]
  },
  cloudService: {
    name: "Cloud Services",
    description: "Cloud computing services with scalable and secure infrastructure.",
    features: [
      "IaaS & PaaS",
      "Auto Scaling",
      "Backup & Recovery",
      "Security Monitoring",
      "API Integration"
    ]
  },
  ctaText: "Carrier Consultation"
}

const currentCarrierData = computed(() => {
  return currentLanguage.value === 'ID' ? carrierDataIndonesia : carrierDataEnglish
})

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
/* Custom hover effects */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-2xl {
    font-size: 1.5rem;
  }

  .lg\:text-3xl {
    font-size: 1.875rem;
  }

  .p-8 {
    padding: 1.5rem;
  }

  .lg\:p-10 {
    padding: 2rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Animation for floating elements */
@keyframes float {
  0%, 100% {
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