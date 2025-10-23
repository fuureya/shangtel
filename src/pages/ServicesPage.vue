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
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight">
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
    badge: "Our Premium Services",
    title: "Elevate Your Business with Cutting-Edge IT & ISP Solutions",
    subtitle: "Discover how Shangtel's comprehensive suite of IT and Internet Service Provider solutions can transform your operations, enhance security, and drive unparalleled growth. We are your strategic partner in digital excellence.",
    cta: "Explore Solution",
    services: [
      {
        title: "Strategic IT Management",
        description: "Unlock peak operational efficiency with our expert IT Management. We meticulously oversee your entire IT ecosystem, from infrastructure to applications, ensuring seamless performance, proactive problem-solving, and strategic alignment with your business objectives. Experience robust, scalable, and future-proof IT operations.",
        icon: "server",
        image: "/img/services/it-management.jpg"
      },
      {
        title: "Advanced Data Security & Cyber Protection",
        description: "Safeguard your most valuable assets with Shangtel's impenetrable Data Security solutions. We implement multi-layered defenses, advanced threat detection, and stringent protocols to protect your corporate data from unauthorized access, cyber threats, and data breaches. Trust us to maintain your data integrity and business continuity.",
        icon: "shield",
        image: "/img/services/keamanan-data.jpg"
      },
      {
        title: "Expert IT Consulting & Digital Transformation",
        description: "Navigate the complexities of the digital landscape with our seasoned IT Consulting experts. We provide strategic guidance, technology roadmapping, and innovative solutions to optimize your IT investments, streamline processes, and accelerate your digital transformation journey. Partner with us for informed decisions and measurable results.",
        icon: "users",
        image: "/img/services/it-consultant.jpg"
      },
      {
        title: "Innovative IT System Design & Implementation",
        description: "From concept to deployment, Shangtel specializes in designing and implementing bespoke IT systems that perfectly fit your unique business needs. Whether it's network architecture, interactive platforms, or comprehensive company profiles, our designs are engineered for performance, scalability, and user-centricity, ensuring your technology drives success.",
        icon: "lightbulb",
        image: "/img/services/it-design.jpg"
      },
      {
        title: "Dynamic Multimedia & Digital Content Solutions",
        description: "Captivate your audience with Shangtel's cutting-edge Multimedia services. We integrate text, stunning visuals, engaging videos, graphics, audio, and animation to create compelling digital experiences. From videotron content to interactive presentations, we help your brand communicate effectively and leave a lasting impression.",
        icon: "desktop",
        image: "/img/services/multimedia.jpg"
      },
      {
        title: "Dedicated 24/7 Technical Support",
        description: "Experience uninterrupted operations with Shangtel's round-the-clock Dedicated Technical Support. Our expert team is available 24/7 to provide immediate assistance, troubleshoot issues, and ensure the continuous performance of your IT infrastructure. We're committed to rapid resolution and minimizing downtime, so you can focus on your core business.",
        icon: "headset",
        image: "/img/services/support.jpg"
      }
    ]
  },
  id: {
    badge: "Layanan Premium Kami",
    title: "MAKSIMALKAN POTENSI BISNIS ANDA DENGAN SOLUSI IT & ISP TERDEPAN KAMI!",
    subtitle: "Temukan bagaimana rangkaian solusi IT dan Penyedia Layanan Internet (ISP) komprehensif dari Shangtel dapat mengubah operasional Anda, meningkatkan keamanan, dan mendorong pertumbuhan yang tak tertandingi. Kami adalah mitra strategis Anda dalam keunggulan digital.",
    cta: "Pelajari Lebih Lanjut",
    services: [
      {
        title: "Manajemen IT Strategis",
        description: "Raih efisiensi operasional puncak dengan Manajemen IT ahli kami. Kami mengawasi seluruh ekosistem IT Anda, dari infrastruktur hingga aplikasi, memastikan kinerja tanpa hambatan, penyelesaian masalah proaktif, dan keselarasan strategis dengan tujuan bisnis Anda. Rasakan operasional IT yang kuat, skalabel, dan siap masa depan.",
        icon: "server",
        image: "/img/services/it-management.jpg"
      },
      {
        title: "Keamanan Data & Perlindungan Siber Tingkat Lanjut",
        description: "Lindungi aset Anda yang paling berharga dengan solusi Keamanan Data Shangtel yang tak tertembus. Kami menerapkan pertahanan berlapis, deteksi ancaman canggih, dan protokol ketat untuk melindungi data perusahaan Anda dari akses tidak sah, ancaman siber, dan pelanggaran data. Percayakan kepada kami untuk menjaga integritas data dan kelangsungan bisnis Anda.",
        icon: "shield",
        image: "/img/services/keamanan-data.jpg"
      },
      {
        title: "Konsultasi IT & Transformasi Digital Ahli",
        description: "Jelajahi kompleksitas lanskap digital dengan pakar Konsultasi IT kami yang berpengalaman. Kami memberikan panduan strategis, peta jalan teknologi, dan solusi inovatif untuk mengoptimalkan investasi IT Anda, merampingkan proses, dan mempercepat perjalanan transformasi digital Anda. Bermitra dengan kami untuk keputusan yang terinformasi dan hasil yang terukur.",
        icon: "users",
        image: "/img/services/it-consultant.jpg"
      },
      {
        title: "Desain & Implementasi Sistem IT Inovatif",
        description: "Dari konsep hingga penerapan, Shangtel berspesialisasi dalam merancang dan mengimplementasikan sistem IT yang dibuat khusus yang sangat sesuai dengan kebutuhan bisnis unik Anda. Baik itu arsitektur jaringan, platform interaktif, atau profil perusahaan yang komprehensif, desain kami direkayasa untuk kinerja, skalabilitas, dan berpusat pada pengguna, memastikan teknologi Anda mendorong kesuksesan.",
        icon: "lightbulb",
        image: "/img/services/it-design.jpg"
      },
      {
        title: "Solusi Multimedia & Konten Digital Dinamis",
        description: "Pikat audiens Anda dengan layanan Multimedia mutakhir Shangtel. Kami mengintegrasikan teks, visual yang memukau, video yang menarik, grafis, audio, dan animasi untuk menciptakan pengalaman digital yang memukau. Dari konten videotron hingga presentasi interaktif, kami membantu merek Anda berkomunikasi secara efektif dan meninggalkan kesan abadi.",
        icon: "desktop",
        image: "/img/services/multimedia.jpg"
      },
      {
        title: "Dukungan Teknis 24/7 Khusus",
        description: "Rasakan operasional tanpa henti dengan Dukungan Teknis Khusus 24/7 Shangtel. Tim ahli kami tersedia sepanjang waktu untuk memberikan bantuan segera, memecahkan masalah, dan memastikan kinerja berkelanjutan infrastruktur IT Anda. Kami berkomitmen untuk resolusi cepat dan meminimalkan waktu henti, sehingga Anda dapat fokus pada bisnis inti Anda.",
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