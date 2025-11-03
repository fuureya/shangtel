<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <!-- Modern Background Pattern -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Grid Pattern -->
            <div
                class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10">
            </div>

            <!-- Floating Elements -->
            <div class="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div class="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
            <div class="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000">
            </div>
            <div class="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500"></div>

            <!-- Gradient Orbs -->
            <div
                class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl">
            </div>
            <div
                class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Modern Header -->
            <div class="text-center mb-20">
                <div
                    class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold mb-8 shadow-lg">
                    <font-awesome-icon icon="cog" class="mr-2" />
                    {{ currentServicesData.badge }}
                </div>
                <h2 class="text-4xl font-black text-gray-900 mb-6 tracking-tight">
                    <span
                        class="bg-gradient-to-r font-bold from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {{ currentServicesData.title }}
                    </span>
                </h2>
                <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                    {{ currentServicesData.subtitle }}
                </p>

                <!-- Stats Row -->
                <div ref="statsRef" class="flex justify-center items-center space-x-12 mt-12">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600">24/7</div>
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Support</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-indigo-600">{{ formatUptime(animatedUptime) }}%</div>
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Uptime</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600">{{ formatClients(animatedClients) }}+</div>
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Clients</div>
                    </div>
                </div>
            </div>

            <!-- Modern Services Carousel with Swiper -->
            <swiper-container v-bind="swiperParams" init="false" class="w-full">
                <swiper-slide v-for="(service, index) in currentServicesData.services" :key="index" class="h-full p-2">
                    <!-- Service Card -->
                    <div
                        class="group relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:transform hover:scale-[1.02] overflow-hidden flex flex-col">

                        <!-- Card Background Effects -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl">
                        </div>

                        <div class="relative z-10 flex-grow flex flex-col">
                            <!-- Modern Icon Container -->
                            <div class="relative mb-8">
                                <div
                                    class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg">
                                    <font-awesome-icon :icon="getIconName(service.icon)" class="text-3xl text-white" />
                                </div>
                            </div>

                            <!-- Service Content -->
                            <div class="space-y-4 flex-grow flex flex-col">
                                <h3
                                    class="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                    {{ service.title }}
                                </h3>

                                <p class="text-gray-600 leading-relaxed line-clamp-4 flex-grow">
                                    {{ service.description }}
                                </p>

                                <!-- Tech Stack Indicators -->
                                <div class="flex flex-wrap gap-2 pt-4">
                                    <span
                                        v-if="service.title.includes('Management') || service.title.includes('Manajemen')"
                                        class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Infrastructure</span>
                                    <span
                                        v-if="service.title.includes('Security') || service.title.includes('Keamanan')"
                                        class="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Cybersecurity</span>
                                    <span
                                        v-if="service.title.includes('Network') || service.title.includes('Jaringan')"
                                        class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Networking</span>
                                    <span v-if="service.title.includes('Cloud')"
                                        class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Cloud</span>
                                    <span
                                        v-if="service.title.includes('Consulting') || service.title.includes('Konsultasi')"
                                        class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">Strategy</span>
                                    <span
                                        v-if="service.title.includes('Support') || service.title.includes('Dukungan')"
                                        class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">24/7</span>
                                    <span v-if="service.title.includes('Design') || service.title.includes('Desain')"
                                        class="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">Design</span>
                                    <span v-if="service.title.includes('Multimedia')"
                                        class="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">Multimedia</span>
                                    <span v-if="service.title.includes('Service') || service.title.includes('Layanan')"
                                        class="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

// Swiper parameters
const swiperParams = {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: false,
        },
    },
};


// Stats animation state
const statsRef = ref(null)
const animatedUptime = ref(0)
const animatedClients = ref(0)
const isStatsVisible = ref(false)
let statsObserver = null

// Stats animation functions
const animateStats = () => {
    if (!isStatsVisible.value) return

    // Reset stats
    animatedUptime.value = 0
    animatedClients.value = 0

    // Animate uptime to 99.9
    const uptimeTarget = 99.9
    const uptimeDuration = 2000
    const uptimeIncrement = uptimeTarget / (uptimeDuration / 16)

    const uptimeAnimation = () => {
        if (animatedUptime.value < uptimeTarget && isStatsVisible.value) {
            animatedUptime.value = Math.min(animatedUptime.value + uptimeIncrement, uptimeTarget)
            requestAnimationFrame(uptimeAnimation)
        }
    }

    // Animate clients to 500
    const clientsTarget = 500
    const clientsDuration = 2500
    const clientsIncrement = clientsTarget / (clientsDuration / 16)

    const clientsAnimation = () => {
        if (animatedClients.value < clientsTarget && isStatsVisible.value) {
            animatedClients.value = Math.min(animatedClients.value + clientsIncrement, clientsTarget)
            requestAnimationFrame(clientsAnimation)
        }
    }

    // Start animations with slight delay
    setTimeout(uptimeAnimation, 200)
    setTimeout(clientsAnimation, 400)
}

const setupStatsObserver = () => {
    statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isStatsVisible.value = true
                    animateStats()
                } else {
                    isStatsVisible.value = false
                }
            })
        },
        {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        }
    )

    if (statsRef.value) {
        statsObserver.observe(statsRef.value)
    }
}

const formatUptime = (num) => {
    return num.toFixed(1)
}

const formatClients = (num) => {
    return Math.floor(num).toString()
}

onMounted(() => {
    setupStatsObserver()
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
    }
})

onUnmounted(() => {
    if (statsObserver && statsRef.value) {
        statsObserver.unobserve(statsRef.value)
    }
})

const servicesData = [
    {
        lang: "en",
        title: "IT Management",
        description: "To the practice of controlling and conducting business information, IT systems, IT-enabled operations, services, and resources in an enterprise organization.",
        icon: "server"
    },
    {
        lang: "en",
        title: "Data Security",
        description: "Process of protecting corporate data and preventing data loss through unauthorized access. This includes protecting your data from attacks that can encrypt or destroy data.",
        icon: "shield"
    },
    {
        lang: "en",
        title: "IT Consulting",
        description: "IT consulting, also referred to as technology consulting, relates to services aimed at helping clients on how they can utilise information technology (IT) and digital to optimally achieve their business goals. The IT consulting segment spans both advisory and implementation services, but excludes transactional IT activities.",
        icon: "users"
    },
    {
        lang: "en",
        title: "IT Design",
        description: "Generally speaking, it is the process of envisioning and planning the creation of objects, interactive systems, network, company profile, etc.",
        icon: "lightbulb"
    },
    {
        lang: "en",
        title: "Multimedia",
        description: "Computer-assisted integration of text, drawings, still and moving images (videos), graphics, audio, animation, videotron.",
        icon: "desktop"
    },
    {
        lang: "en",
        title: "24/7 Support",
        description: "Even if they are behind firewalls you don't control. All supported platforms are included in the core product, so you can consolidate and standardize support, improving incident handling time and support rep productivity.",
        icon: "headset"
    },
    {
        lang: "id",
        title: "Manajemen IT",
        description: "Praktik mengendalikan dan mengelola informasi bisnis, sistem IT, operasi yang didukung IT, layanan, dan sumber daya dalam organisasi perusahaan.",
        icon: "server"
    },
    {
        lang: "id",
        title: "Keamanan Data",
        description: "Proses melindungi data perusahaan dan mencegah kehilangan data akibat akses yang tidak sah. Ini termasuk melindungi data dari serangan yang dapat mengenkripsi atau merusak data.",
        icon: "shield"
    },
    {
        lang: "id",
        title: "Konsultasi IT",
        description: "Konsultasi IT, juga disebut konsultasi teknologi, adalah layanan yang membantu klien memanfaatkan teknologi informasi (IT) dan digital untuk mencapai tujuan bisnis secara optimal. Segmen ini mencakup layanan konsultasi dan implementasi, namun tidak termasuk aktivitas IT transaksional.",
        icon: "users"
    },
    {
        lang: "id",
        title: "Desain IT",
        description: "Secara umum, ini adalah proses merancang dan merencanakan pembuatan objek, sistem interaktif, jaringan, profil perusahaan, dan sebagainya.",
        icon: "lightbulb"
    },
    {
        lang: "id",
        title: "Multimedia",
        description: "Integrasi berbasis komputer dari teks, gambar, gambar diam dan bergerak (video), grafis, audio, animasi, dan videotron.",
        icon: "desktop"
    },
    {
        lang: "id",
        title: "Dukungan 24/7",
        description: "Bahkan jika berada di balik firewall yang tidak Anda kontrol. Semua platform yang didukung termasuk dalam produk inti, sehingga Anda dapat mengkonsolidasikan dan menstandarisasi dukungan, meningkatkan waktu penanganan insiden dan produktivitas tim support.",
        icon: "headset"
    }
];


const servicesDataIndonesia = {
    badge: "Layanan Komprehensif",
    title: "Solusi IT, Managed Service, dan System Integrator",
    subtitle: "Kami menyediakan layanan IT yang terintegrasi untuk memenuhi berbagai kebutuhan bisnis, dari konsultasi hingga dukungan teknis 24/7.",
    services: servicesData.filter(service => service.lang === 'id')
}

const servicesDataEnglish = {
    badge: "Comprehensive Services",
    title: "IT Solutions, Managed Services, and System Integrator",
    subtitle: "We provide integrated IT services to meet various business needs, from consulting to 24/7 technical support.",
    services: servicesData.filter(service => service.lang === 'en')
}

const currentServicesData = computed(() => {
    return currentLanguage.value === 'ID' ? servicesDataIndonesia : servicesDataEnglish
})

// Helper function to get icon name without prefix
const getIconName = (iconString) => {
    return iconString
}

</script>

<style>
/* Custom Swiper Styles */
swiper-container {
    width: 100%;
    height: 100%;
    padding-bottom: 50px; /* Space for pagination */
}

swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}

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