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
                <swiper-slide v-for="(service, index) in currentServicesData.services" :key="index" class="h-full p-4">
                    <!-- Service Card -->
                    <div
                        class="group relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-blue-500/20">
                        
                        <!-- Background Image with Overlay -->
                        <div class="absolute inset-0 z-0">
                            <img :src="getImageUrl(service.image)" :alt="service.title" 
                                 class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                        </div>

                        <!-- Content Overlay (Glassmorphism) -->
                        <div class="absolute inset-x-4 bottom-4 z-10 p-6 rounded-3xl bg-gray-900/75 backdrop-blur-xl border border-white/10 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                            <div class="flex items-center space-x-4 mb-3">
                                <div class="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center backdrop-blur-lg border border-white/30">
                                    <font-awesome-icon :icon="getIconName(service.icon)" class="text-xl text-white" />
                                </div>
                                <h3 class="text-xl font-bold text-white tracking-wide">
                                    {{ service.title }}
                                </h3>
                            </div>
                            
                            <p class="text-gray-200 text-sm leading-relaxed line-clamp-3 mb-4 transition-opacity duration-700">
                                {{ service.description }}
                            </p>

                            <div class="flex items-center text-blue-400 text-xs font-bold uppercase tracking-widest mt-2">
                                <span class="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">Explore Service</span>
                            </div>
                        </div>

                        <!-- Corner Accent -->
                        <div class="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                           <span class="text-white font-black text-lg">0{{ index + 1 }}</span>
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
        lang: "id",
        title: "Dukungan 24 Jam",
        description: "Layanan bantuan teknis siaga 24/7 untuk memastikan kelancaran operasional bisnis Anda tanpa henti, kapanpun dibutuhkan.",
        icon: "headset",
        image: "s1.jpeg"
    },
    {
        lang: "id",
        title: "Fiber Optic Network",
        description: "Solusi jaringan internet berkecepatan tinggi berbasis fiber optik yang stabil dan handal untuk konektivitas masa depan.",
        icon: "network-wired",
        image: "s2.jpeg"
    },
    {
        lang: "id",
        title: "Enterprise Sistem IT",
        description: "Pengembangan sistem IT terpadu berskala perusahaan yang dirancang untuk efisiensi dan skalabilitas bisnis jangka panjang.",
        icon: "server",
        image: "s3.jpeg"
    },
    {
        lang: "id",
        title: "Server & Storage",
        description: "Layanan penyediaan, pengelolaan, dan pengoptimalan infrastruktur server serta penyimpanan data yang aman dan cepat.",
        icon: "database",
        image: "s4.jpeg"
    },
    {
        lang: "id",
        title: "Security & Monitoring",
        description: "Sistem keamanan siber dan pemantauan infrastruktur yang proaktif untuk melindungi aset digital Anda dari ancaman luar.",
        icon: "shield-halved",
        image: "s5.jpeg"
    },
    {
        lang: "id",
        title: "Multimedia Solutions",
        description: "Integrasi solusi multimedia modern, mulai dari videotron hingga sistem audio visual interaktif untuk publikasi yang memukau.",
        icon: "desktop",
        image: "s6.jpeg"
    },
    {
        lang: "id",
        title: "Konsultan IT",
        description: "Layanan konsultasi strategis oleh para ahli untuk membantu Anda merancang blueprint teknologi yang tepat bagi bisnis.",
        icon: "user-tie",
        image: "s7.jpeg"
    },
    {
        lang: "id",
        title: "Desain IT",
        description: "Perancangan arsitektur sistem dan desain infrastruktur digital yang efisien, modern, serta tepat guna.",
        icon: "lightbulb",
        image: "s8.jpeg"
    },
    // English Version fallback
    {
        lang: "en",
        title: "24/7 Support",
        description: "24/7 standby technical assistance to ensure smooth business operations without interruption, whenever needed.",
        icon: "headset",
        image: "s1.jpeg"
    },
    {
        lang: "en",
        title: "Fiber Optic Network",
        description: "High-speed, stable, and reliable fiber optic-based internet network solutions for future connectivity.",
        icon: "network-wired",
        image: "s2.jpeg"
    },
    {
        lang: "en",
        title: "Enterprise IT Systems",
        description: "Development of integrated enterprise-scale IT systems designed for long-term business efficiency and scalability.",
        icon: "server",
        image: "s3.jpeg"
    },
    {
        lang: "en",
        title: "Server & Storage",
        description: "Provision, management, and optimization services for secure and fast server infrastructure and data storage.",
        icon: "database",
        image: "s4.jpeg"
    },
    {
        lang: "en",
        title: "Security & Monitoring",
        description: "Proactive cybersecurity and infrastructure monitoring systems to protect your digital assets from external threats.",
        icon: "shield-halved",
        image: "s5.jpeg"
    },
    {
        lang: "en",
        title: "Multimedia Solutions",
        description: "Integration of modern multimedia solutions, from videotron to interactive audio-visual systems for stunning publications.",
        icon: "desktop",
        image: "s6.jpeg"
    },
    {
        lang: "en",
        title: "IT Consultant",
        description: "Strategic consulting services by experts to help you design the right technology blueprint for your business.",
        icon: "user-tie",
        image: "s7.jpeg"
    },
    {
        lang: "en",
        title: "IT Design",
        description: "Architecture system design and digital infrastructure design that is efficient, modern, and effective.",
        icon: "lightbulb",
        image: "s8.jpeg"
    }
];


const servicesDataIndonesia = {
    badge: "Layanan Unggulan",
    title: "Solusi IT & Infrastruktur Modern",
    subtitle: "Kami menghadirkan layanan IT komprehensif mulai dari jaringan fiber optik hingga sistem keamanan tingkat perusahaan untuk mendukung transformasi digital Anda.",
    services: servicesData.filter(service => service.lang === 'id')
}

const servicesDataEnglish = {
    badge: "Premier Services",
    title: "Modern IT & Infrastructure Solutions",
    subtitle: "We provide comprehensive IT services from fiber optic networks to enterprise-level security systems to support your digital transformation.",
    services: servicesData.filter(service => service.lang === 'en')
}

const currentServicesData = computed(() => {
    return currentLanguage.value === 'ID' ? servicesDataIndonesia : servicesDataEnglish
})

// Helper function to get image URL
const getImageUrl = (name) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href
}


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