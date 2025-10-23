<template>
  <Navbar />

  <main class="bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-white to-gray-50 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      </div>
      <div class="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold mb-6 shadow-md">
          <font-awesome-icon icon="cog" class="mr-2" />
          {{ currentContent.badge }}
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
          <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {{ currentContent.title }}
          </span>
        </h1>
        <p class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
          {{ currentContent.subtitle }}
        </p>
      </div>
    </section>

    <!-- Services List Section -->
    <section class="py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="space-y-20 lg:space-y-28">
          <div v-for="(service, index) in currentContent.services" :key="service.title" 
               class="group relative">
            <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16" 
                 :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }">
              
              <!-- Image Container -->
              <div class="w-full lg:w-1/2">
                <div class="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl 
                            transition-all duration-500 ease-in-out 
                            group-hover:shadow-blue-200 group-hover:scale-105 group-hover:rotate-[-1deg]">
                  <img :src="service.image" :alt="service.title" 
                       class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              <!-- Text Content -->
              <div class="w-full lg:w-1/2">
                <div class="relative transition-all duration-500 ease-in-out group-hover:lg:translate-x-4">
                  <div class="mb-4">
                    <div class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110">
                      <font-awesome-icon :icon="service.icon" class="text-2xl text-white" />
                    </div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
                      {{ service.title }}
                    </h2>
                  </div>
                  <p class="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {{ service.description }}
                  </p>
                  <a :href="getWhatsAppLink(service.title)" target="_blank" class="inline-flex items-center mt-8 text-blue-600 font-semibold group/btn">
                    {{ currentContent.cta }}
                    <font-awesome-icon icon="chevron-right" class="ml-2 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <FloatingCsButton />
  <Footer />
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FloatingCsButton from '@/components/FloatingCsButton.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const servicesData = {
  en: {
    badge: "Our Services",
    title: "Customized IT Solutions for Your Business",
    subtitle: "We provide a range of expert services to ensure your technology infrastructure is robust, secure, and perfectly aligned with your business goals.",
    cta: "Learn More",
    services: [
      {
        title: "IT Management",
        description: "The practice of controlling and conducting business information, IT systems, IT-enabled operations, services, and resources in an enterprise organization.",
        icon: "server",
        image: "/img/services/it-management.jpg"
      },
      {
        title: "Data Security",
        description: "Process of protecting corporate data and preventing data loss through unauthorized access. This includes protecting your data from attacks that can encrypt or destroy data.",
        icon: "shield",
        image: "/img/services/keamanan-data.jpg"
      },
      {
        title: "IT Consulting",
        description: "Services aimed at helping clients on how they can utilise information technology (IT) and digital to optimally achieve their business goals.",
        icon: "users",
        image: "/img/services/it-consultant.jpg"
      },
      {
        title: "IT Design",
        description: "The process of envisioning and planning the creation of objects, interactive systems, networks, company profiles, and more to meet strategic objectives.",
        icon: "lightbulb",
        image: "/img/services/it-design.jpg"
      },
      {
        title: "Multimedia",
        description: "Computer-assisted integration of text, drawings, still and moving images (videos), graphics, audio, animation, and videotron for impactful communication.",
        icon: "desktop",
        image: "/img/services/multimedia.jpg"
      },
      {
        title: "24/7 Support",
        description: "All supported platforms are included in the core product, so you can consolidate and standardize support, improving incident handling time and support rep productivity.",
        icon: "headset",
        image: "/img/services/support.jpg"
      }
    ]
  },
  id: {
    badge: "Layanan Kami",
    title: "Solusi IT Kustom untuk Bisnis Anda",
    subtitle: "Kami menyediakan berbagai layanan ahli untuk memastikan infrastruktur teknologi Anda kuat, aman, dan selaras sempurna dengan tujuan bisnis Anda.",
    cta: "Pelajari Lebih Lanjut",
    services: [
      {
        title: "Manajemen IT",
        description: "Praktik mengendalikan dan mengelola informasi bisnis, sistem IT, operasi yang didukung IT, layanan, dan sumber daya dalam organisasi perusahaan.",
        icon: "server",
        image: "/img/services/it-management.jpg"
      },
      {
        title: "Keamanan Data",
        description: "Proses melindungi data perusahaan dan mencegah kehilangan data akibat akses yang tidak sah. Ini termasuk melindungi data dari serangan yang dapat mengenkripsi atau merusak data.",
        icon: "shield",
        image: "/img/services/keamanan-data.jpg"
      },
      {
        title: "Konsultasi IT",
        description: "Layanan yang membantu klien memanfaatkan teknologi informasi (IT) dan digital untuk mencapai tujuan bisnis secara optimal.",
        icon: "users",
        image: "/img/services/it-consultant.jpg"
      },
      {
        title: "Desain IT",
        description: "Proses merancang dan merencanakan pembuatan objek, sistem interaktif, jaringan, profil perusahaan, dan lainnya untuk memenuhi tujuan strategis.",
        icon: "lightbulb",
        image: "/img/services/it-design.jpg"
      },
      {
        title: "Multimedia",
        description: "Integrasi berbasis komputer dari teks, gambar, gambar diam dan bergerak (video), grafis, audio, animasi, dan videotron untuk komunikasi yang berdampak.",
        icon: "desktop",
        image: "/img/services/multimedia.jpg"
      },
      {
        title: "Dukungan 24/7",
        description: "Semua platform yang didukung termasuk dalam produk inti, sehingga Anda dapat mengkonsolidasikan dan menstandarisasi dukungan, meningkatkan waktu penanganan insiden.",
        icon: "headset",
        image: "/img/services/support.jpg"
      }
    ]
  }
}

const currentContent = computed(() => {
  return currentLanguage.value === 'ID' ? servicesData.id : servicesData.en
})

const getWhatsAppLink = (serviceTitle) => {
  const number = '628114499096';
  const lang = currentLanguage.value;
  const message = lang === 'ID' 
    ? `Halo, saya ingin bertanya mengenai layanan "${serviceTitle}".`
    : `Hello, I would like to inquire about the "${serviceTitle}" service.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

</script>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23e2e8f0'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>