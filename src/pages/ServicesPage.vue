<template>
  <Navbar />

  <main class="bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-b from-white to-gray-50 pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
        ></div>
      </div>
      <div class="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold mb-6 shadow-md"
        >
          <font-awesome-icon icon="cog" class="mr-2" />
          {{ currentContent.badge }}
        </div>
        <h1
          class="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 tracking-tight font-semi-bold"
        >
          <span
            class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold"
          >
            {{ currentContent.title }}
          </span>
        </h1>
        <p
          class="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-medium"
        >
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
                <div
                  class="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group-hover:shadow-blue-200 group-hover:scale-105 group-hover:rotate-[-1deg]"
                >
                  <img
                    :src="service.image"
                    :alt="service.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  ></div>
                </div>
              </div>

              <!-- Text Content -->
              <div class="w-full lg:w-1/2">
                <div
                  class="relative transition-all duration-500 ease-in-out group-hover:lg:translate-x-4"
                >
                  <div class="mb-4">
                    <div
                      class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110"
                    >
                      <font-awesome-icon
                        :icon="service.icon"
                        class="text-2xl text-white"
                      />
                    </div>
                    <div
                      class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2"
                    >
                      {{ currentContent.serviceTypeLabel }}
                    </div>
                    <h2
                      class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
                    >
                      {{ service.title }}
                    </h2>
                    <div class="text-lg font-semibold text-gray-700 mb-4">
                      {{ service.subtitle }}
                    </div>
                  </div>
                  <p
                    class="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
                  >
                    {{ service.description }}
                  </p>

                  <!-- Points List -->
                  <ul class="space-y-3 mb-8">
                    <li
                      v-for="(point, pIndex) in service.points"
                      :key="pIndex"
                      class="flex items-start text-gray-600"
                    >
                      <font-awesome-icon
                        icon="check"
                        class="text-blue-500 mt-1.5 mr-3 text-sm"
                      />
                      <span class="text-base font-medium">{{ point }}</span>
                    </li>
                  </ul>

                  <a
                    :href="getWhatsAppLink(service.title)"
                    target="_blank"
                    class="inline-flex items-center text-blue-600 font-semibold group/btn border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all duration-300"
                  >
                    {{ currentContent.cta }}
                    <font-awesome-icon
                      icon="chevron-right"
                      class="ml-2 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1"
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
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23e2e8f0'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
