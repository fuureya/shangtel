<template>
    <section class="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <!-- Modern Background Pattern -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Grid Pattern -->
            <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

            <!-- Floating Elements -->
            <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div class="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
            <div class="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
            <div class="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500"></div>

            <!-- Gradient Orbs -->
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Modern Header -->
            <div class="text-center mb-20">
                <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold mb-8 shadow-lg">
                    <i class="fas fa-rocket mr-2"></i>
                    {{ currentServicesData.badge }}
                </div>
                <h2 class="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                    <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {{ currentServicesData.title }}
                    </span>
                </h2>
                <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                    {{ currentServicesData.subtitle }}
                </p>

                <!-- Stats Row -->
                <div class="flex justify-center items-center space-x-12 mt-12">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600">24/7</div>
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Support</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-indigo-600">99.9%</div>
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Uptime</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600">500+</div>
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Clients</div>
                    </div>
                </div>
            </div>

            <!-- Modern Services Carousel -->
            <div class="relative">
                <!-- Navigation Arrows -->
                <button @click="prevSlide" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide"
                        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group">
                    <i class="fas fa-chevron-left text-gray-600 group-hover:text-blue-600 transition-colors"></i>
                </button>

                <button @click="nextSlide" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide"
                        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 group">
                    <i class="fas fa-chevron-right text-gray-600 group-hover:text-blue-600 transition-colors"></i>
                </button>

                <!-- Services Grid with Transform -->
                <div class="overflow-hidden">
                    <div class="flex gap-8 transition-transform duration-500 ease-in-out"
                         :style="{ transform: `translateX(-${currentSlideIndex * slideWidth}%)` }">
                        <div v-for="(service, index) in currentServicesData.services" :key="index"
                             class="group relative flex-shrink-0"
                             :style="{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 32 / cardsPerView}px)` }">

                            <!-- Service Card -->
                            <div class="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden">

                                <!-- Card Background Effects -->
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                                <!-- Animated Border -->
                                <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>

                                <div class="relative z-10">
                                    <!-- Modern Icon Container -->
                                    <div class="relative mb-8">
                                        <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                            <i :class="service.icon" class="text-3xl text-white"></i>
                                        </div>
                                        <!-- Icon Glow Effect -->
                                        <div class="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                                    </div>

                                    <!-- Service Content -->
                                    <div class="space-y-4">
                                        <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                            {{ service.title }}
                                        </h3>

                                        <p class="text-gray-600 leading-relaxed line-clamp-4">
                                            {{ service.description }}
                                        </p>

                                        <!-- Tech Stack Indicators -->
                                        <div class="flex flex-wrap gap-2 pt-4">
                                            <span v-if="service.title.includes('Management') || service.title.includes('Manajemen')"
                                                  class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Infrastructure</span>
                                            <span v-if="service.title.includes('Security') || service.title.includes('Keamanan')"
                                                  class="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Cybersecurity</span>
                                            <span v-if="service.title.includes('Network') || service.title.includes('Jaringan')"
                                                  class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Networking</span>
                                            <span v-if="service.title.includes('Cloud')"
                                                  class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Cloud</span>
                                            <span v-if="service.title.includes('Consulting') || service.title.includes('Konsultasi')"
                                                  class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">Strategy</span>
                                            <span v-if="service.title.includes('Support') || service.title.includes('Dukungan')"
                                                  class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">24/7</span>
                                        </div>
                                    </div>

                                    <!-- Hover Arrow -->
                                    <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                            <i class="fas fa-arrow-right text-white text-sm"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dots Indicator -->
                <div class="flex justify-center mt-12 space-x-3">
                    <button v-for="(_, index) in (currentServicesData.services.length - cardsPerView + 1)"
                            :key="index"
                            @click="goToSlide(index)"
                            class="w-3 h-3 rounded-full transition-all duration-300"
                            :class="index === currentSlideIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'">
                    </button>
                </div>
            </div>

            <!-- Enterprise Trust Section -->
            <div class="mt-24 text-center">
                <div class="inline-flex items-center space-x-2 text-gray-500 mb-8">
                    <div class="w-12 h-px bg-gray-300"></div>
                    <span class="text-sm font-medium uppercase tracking-wide">Trusted by Enterprise</span>
                    <div class="w-12 h-px bg-gray-300"></div>
                </div>

                <div class="flex justify-center items-center space-x-8 opacity-60">
                    <i class="fab fa-microsoft text-3xl text-gray-400"></i>
                    <i class="fab fa-aws text-3xl text-gray-400"></i>
                    <i class="fab fa-google text-3xl text-gray-400"></i>
                    <i class="fas fa-server text-3xl text-gray-400"></i>
                    <i class="fab fa-cisco text-3xl text-gray-400"></i>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

// Carousel state
const currentSlideIndex = ref(0)
const cardsPerView = ref(3)

// Responsive cards per view
const updateCardsPerView = () => {
  if (window.innerWidth < 768) {
    cardsPerView.value = 1
  } else if (window.innerWidth < 1024) {
    cardsPerView.value = 2
  } else {
    cardsPerView.value = 3
  }
}

// Slide width calculation
const slideWidth = computed(() => {
  return 100 / cardsPerView.value
})

// Navigation functions
const nextSlide = () => {
  const totalServices = currentServicesData.value.services.length
  const maxSlide = totalServices - cardsPerView.value
  if (currentSlideIndex.value < maxSlide) {
    currentSlideIndex.value++
  } else {
    currentSlideIndex.value = 0
  }
}

const prevSlide = () => {
  const totalServices = currentServicesData.value.services.length
  const maxSlide = totalServices - cardsPerView.value
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  } else {
    currentSlideIndex.value = maxSlide
  }
}

const goToSlide = (index) => {
  currentSlideIndex.value = index
}

// Auto-slide functionality
let autoSlideInterval = null

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

onMounted(() => {
  updateCardsPerView()
  window.addEventListener('resize', updateCardsPerView)
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCardsPerView)
  stopAutoSlide()
})

const servicesData = [
    {
        lang: "en",
        title: "IT Management",
        description: "Comprehensive management of IT infrastructure, systems, and resources to ensure optimal business operations and digital transformation.",
        icon: "fas fa-server"
    },
    {
        lang: "en",
        title: "Data Security",
        description: "Advanced cybersecurity solutions protecting critical business data with enterprise-grade firewall, encryption, and threat detection systems.",
        icon: "fas fa-shield-halved"
    },
    {
        lang: "en",
        title: "IT Consulting",
        description: "Strategic technology consulting services helping organizations optimize their IT infrastructure and implement digital transformation initiatives.",
        icon: "fas fa-user-tie"
    },
    {
        lang: "en",
        title: "Network Solutions",
        description: "High-performance network infrastructure design, implementation, and management for reliable enterprise connectivity and communication.",
        icon: "fas fa-network-wired"
    },
    {
        lang: "en",
        title: "Cloud Services",
        description: "Scalable cloud infrastructure solutions including migration, hosting, backup, and disaster recovery for modern business continuity.",
        icon: "fas fa-cloud"
    },
    {
        lang: "en",
        title: "24/7 Support",
        description: "Round-the-clock technical support and monitoring services ensuring maximum uptime and rapid incident response for critical systems.",
        icon: "fas fa-headset"
    },
    {
        lang: "id",
        title: "Manajemen IT",
        description: "Manajemen komprehensif infrastruktur IT, sistem, dan sumber daya untuk memastikan operasional bisnis optimal dan transformasi digital.",
        icon: "fas fa-server"
    },
    {
        lang: "id",
        title: "Keamanan Data",
        description: "Solusi keamanan siber canggih melindungi data bisnis kritikal dengan firewall enterprise, enkripsi, dan sistem deteksi ancaman.",
        icon: "fas fa-shield-halved"
    },
    {
        lang: "id",
        title: "Konsultasi IT",
        description: "Layanan konsultasi teknologi strategis membantu organisasi mengoptimalkan infrastruktur IT dan implementasi inisiatif transformasi digital.",
        icon: "fas fa-user-tie"
    },
    {
        lang: "id",
        title: "Solusi Jaringan",
        description: "Desain, implementasi, dan manajemen infrastruktur jaringan performa tinggi untuk konektivitas dan komunikasi enterprise yang handal.",
        icon: "fas fa-network-wired"
    },
    {
        lang: "id",
        title: "Layanan Cloud",
        description: "Solusi infrastruktur cloud yang skalabel termasuk migrasi, hosting, backup, dan disaster recovery untuk kontinuitas bisnis modern.",
        icon: "fas fa-cloud"
    },
    {
        lang: "id",
        title: "Dukungan 24/7",
        description: "Layanan dukungan teknis dan monitoring 24/7 memastikan uptime maksimal dan respons insiden cepat untuk sistem kritikal.",
        icon: "fas fa-headset"
    }
];

const servicesDataIndonesia = {
    badge: "Layanan Kami",
    title: "Solusi IT Enterprise",
    subtitle: "Penyedia layanan teknologi informasi terpercaya dengan infrastruktur canggih dan dukungan 24/7 untuk transformasi digital perusahaan Anda.",
    services: servicesData.filter(service => service.lang === 'id')
}

const servicesDataEnglish = {
    badge: "Our Services",
    title: "Enterprise IT Solutions",
    subtitle: "Trusted technology service provider with advanced infrastructure and 24/7 support for your company's digital transformation.",
    services: servicesData.filter(service => service.lang === 'en')
}

const currentServicesData = computed(() => {
    return currentLanguage.value === 'ID' ? servicesDataIndonesia : servicesDataEnglish
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.float-animation {
    animation: float 3s ease-in-out infinite;
}

/* Card hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

/* Button hover effects */
.group\/btn:hover .group-hover\/btn\:translate-x-1 {
    transform: translateX(0.25rem);
}

.group\/btn:hover .group-hover\/btn\:opacity-100 {
    opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-4xl {
        font-size: 2rem;
    }

    .lg\:text-5xl {
        font-size: 2.5rem;
    }

    .p-8 {
        padding: 1.5rem;
    }

    .text-2xl {
        font-size: 1.5rem;
    }
}

/* Smooth transitions */
* {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>