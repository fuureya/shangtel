<template>
  <Navbar />

  <main class="bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-white pt-32 pb-24 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-lg bg-telkom-red/10 text-telkom-red text-xs font-black uppercase tracking-widest mb-8"
        >
          {{ currentContent.badge }}
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter mb-8 max-w-4xl mx-auto">
          {{ currentContent.title }}
        </h1>
        <p class="max-w-3xl mx-auto text-xl text-gray-500 leading-relaxed font-medium">
          {{ currentContent.subtitle }}
        </p>
      </div>
    </section>

    <!-- Services List Section -->
    <section class="py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="space-y-20 lg:space-y-28">
          <div
            v-for="(service, index) in currentContent.services"
            :key="service.title"
            class="group relative"
          >
            <div
              class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
            >
              <!-- Image Container -->
              <div class="w-full lg:w-1/2">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    :src="service.image"
                    :alt="service.title"
                    class="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

              <!-- Text Content -->
              <div class="w-full lg:w-1/2">
                <div
                  class="relative transition-all duration-500 ease-in-out group-hover:lg:translate-x-4"
                >
                  <div class="mb-4">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 bg-telkom-red text-white rounded-xl shadow-xl shadow-telkom-red/20 mb-8 transition-transform duration-500 group-hover:rotate-6"
                    >
                      <font-awesome-icon
                        :icon="service.icon"
                        class="text-2xl"
                      />
                    </div>
                    <div
                      class="text-xs font-black text-telkom-red uppercase tracking-[0.2em] mb-4"
                    >
                      {{ currentContent.serviceTypeLabel }}
                    </div>
                    <h2
                      class="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                      {{ service.title }}
                    </h2>
                    <div class="text-xl font-bold text-gray-700 mb-6 flex items-center">
                      <span class="w-8 h-1 bg-telkom-red mr-4"></span>
                      {{ service.subtitle }}
                    </div>
                  </div>
                  <p
                    class="text-lg text-gray-500 leading-relaxed mb-10 font-medium"
                  >
                    {{ service.description }}
                  </p>

                  <!-- Points List -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div
                      v-for="(point, pIndex) in service.points"
                      :key="pIndex"
                      class="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                    >
                      <font-awesome-icon
                        icon="check"
                        class="text-telkom-red font-black"
                      />
                      <span class="text-xs font-black text-gray-700 uppercase tracking-widest">{{ point }}</span>
                    </div>
                  </div>

                  <a
                    :href="getWhatsAppLink(service.title)"
                    target="_blank"
                    class="inline-block bg-zinc-900 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all hover:bg-telkom-red hover:shadow-xl"
                  >
                    {{ currentContent.cta }}
                    <font-awesome-icon
                      icon="arrow-right"
                      class="ml-2"
                    />
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
import { computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import FloatingCsButton from "@/components/FloatingCsButton.vue";
import { useLanguage } from "@/composables/useLanguage.js";

const { currentLanguage } = useLanguage();

const servicesData = {
  en: {
    badge: "Our Premium Services",
    title: "Elevate Your Business with Cutting-Edge IT & ISP Solutions",
    subtitle:
      "Discover how Shangtel's comprehensive suite of IT and Internet Service Provider solutions can transform your operations, enhance security, and drive unparalleled growth.",
    cta: "Explore Solution",
    serviceTypeLabel: "SERVICE MENU",
    services: [
      {
        title: "Managed IT Services",
        subtitle: "Professional and Sustainable Infrastructure Management",
        description:
          "We provide comprehensive IT system management services, from maintenance and troubleshooting to performance optimization. Ensuring operations run stably, efficiently, and with minimum downtime.",
        points: [
          "24/7 Monitoring",
          "Preventive Maintenance",
          "System Optimization",
          "Enterprise Technical Support",
        ],
        icon: "server",
        image: "/img/ly1.jpeg",
      },
      {
        title: "Cyber Security & Data Protection",
        subtitle: "Maximum Protection for Your Digital Assets",
        description:
          "Security is the top priority. We deliver layered security solutions to protect strategic corporate networks, systems, and data from cyber threats.",
        points: [
          "Firewall & Network Security",
          "Data Encryption",
          "Access Control Management",
          "Threat Detection & Mitigation",
        ],
        icon: "shield",
        image: "/img/ly2.jpeg",
      },
      {
        title: "IT Infrastructure & Network Design",
        subtitle: "Tough and Scalable System Architecture",
        description:
          "Planning and implementation of IT infrastructure designed to suit your business needs, with enterprise standards and long-term expansion readiness.",
        points: [
          "Network Architecture Design",
          "Server & Data Center Setup",
          "Fiber Optic & Structured Cabling",
          "System Integration",
        ],
        icon: "network-wired",
        image: "/img/ly3.jpeg",
      },
      {
        title: "Internet Service Provider (ISP) & Connectivity Solutions",
        subtitle: "Stable, Fast, and Reliable Connection",
        description:
          "As an internet service provider, Shangtel ensures your business connectivity remains stable with professional technical support and measurable SLAs.",
        points: [
          "Dedicated Internet",
          "Corporate Broadband",
          "Backup Link & Redundancy",
          "SLA Guarantee",
        ],
        icon: "wifi",
        image: "/img/ly4.jpeg",
      },
    ],
  },
  id: {
    badge: "Layanan Premium Kami",
    title: "MAKSIMALKAN POTENSI BISNIS ANDA DENGAN SOLUSI IT KAMI!",
    subtitle:
      "Temukan bagaimana rangkaian solusi IT dan Penyedia Layanan Internet (ISP) komprehensif dari Shangtel dapat mengubah operasional Anda, meningkatkan keamanan, dan mendorong pertumbuhan yang tak tertandingi.",
    cta: "Pelajari Lebih Lanjut",
    serviceTypeLabel: "MENU LAYANAN",
    services: [
      {
        title: "Managed IT Services",
        subtitle:
          "Pengelolaan Infrastruktur Secara Profesional dan Berkelanjutan",
        description:
          "Kami menyediakan layanan pengelolaan sistem IT secara menyeluruh, mulai dari maintenance, troubleshooting, hingga optimalisasi performa. Memastikan operasional berjalan stabil, efisien, dan minim downtime.",
        points: [
          "Monitoring 24/7",
          "Preventive Maintenance",
          "System Optimization",
          "Technical Support Enterprise",
        ],
        icon: "server",
        image: "/img/ly1.jpeg",
      },
      {
        title: "Cyber Security & Data Protection",
        subtitle: "Perlindungan Maksimal untuk Aset Digital Anda",
        description:
          "Keamanan adalah prioritas utama. Kami menghadirkan solusi keamanan berlapis untuk melindungi jaringan, sistem, dan data strategis perusahaan dari ancaman siber.",
        points: [
          "Firewall & Network Security",
          "Data Encryption",
          "Access Control Management",
          "Threat Detection & Mitigation",
        ],
        icon: "shield",
        image: "/img/ly2.jpeg",
      },
      {
        title: "IT Infrastructure & Network Design",
        subtitle: "Arsitektur Sistem yang Tangguh dan Scalable",
        description:
          "Perencanaan dan implementasi infrastruktur IT yang dirancang sesuai kebutuhan bisnis Anda, dengan standar enterprise dan kesiapan ekspansi jangka panjang.",
        points: [
          "Network Architecture Design",
          "Server & Data Center Setup",
          "Fiber Optic & Structured Cabling",
          "System Integration",
        ],
        icon: "network-wired",
        image: "/img/ly3.jpeg",
      },
      {
        title: "Internet Service Provider (ISP) & Connectivity Solutions",
        subtitle: "Koneksi Stabil, Cepat, dan Andal",
        description:
          "Sebagai penyedia layanan internet, Shangtel memastikan konektivitas bisnis Anda tetap stabil dengan dukungan teknis profesional dan SLA yang terukur.",
        points: [
          "Dedicated Internet",
          "Corporate Broadband",
          "Backup Link & Redundancy",
          "SLA Guarantee",
        ],
        icon: "wifi",
        image: "/img/ly4.jpeg",
      },
    ],
  },
};

const currentContent = computed(() => {
  return currentLanguage.value === "ID" ? servicesData.id : servicesData.en;
});

const getWhatsAppLink = (serviceTitle) => {
  const number = "628114499096";
  const lang = currentLanguage.value;
  const message =
    lang === "ID"
      ? `Halo, saya ingin bertanya mengenai layanan "${serviceTitle}".`
      : `Hello, I would like to inquire about the "${serviceTitle}" service.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
</script>

<style scoped>
</style>
