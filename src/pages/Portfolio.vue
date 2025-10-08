<template>
  <Navbar />

  <!-- Portfolio Header -->
  <section class="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ currentPortfolioData.title }}</h1>
      <p class="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
        {{ currentPortfolioData.subtitle }}
      </p>
    </div>
  </section>

  <!-- Portfolio Grid -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ currentPortfolioData.sectionTitle }}</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ currentPortfolioData.sectionDescription }}
        </p>
      </div>

      <!-- 3x5 Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in portfolioProjects"
          :key="index"
          class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ project.year }}</span>
              <button class="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                {{ currentPortfolioData.viewProject }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
  <FloatingCsButton />
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FloatingCsButton from '@/components/FloatingCsButton.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

// Portfolio data for both languages
const portfolioDataIndonesia = {
  title: "Portfolio Kami",
  subtitle: "Showcasing our best projects and solutions",
  sectionTitle: "Proyek Terbaru",
  sectionDescription: "Lihat berbagai proyek teknologi yang telah kami kerjakan dengan hasil yang memuaskan",
  viewProject: "Lihat Detail"
}

const portfolioDataEnglish = {
  title: "Our Portfolio",
  subtitle: "Showcasing our best projects and solutions",
  sectionTitle: "Latest Projects",
  sectionDescription: "Explore various technology projects we have completed with satisfying results",
  viewProject: "View Details"
}

const currentPortfolioData = computed(() => {
  return currentLanguage.value === 'ID' ? portfolioDataIndonesia : portfolioDataEnglish
})

// Available images
const availableImages = [
  '/img/products/ftth.jpg',
  '/img/products/sky.jpg',
  '/img/infra/satelite.jpg',
  '/img/infra/fiber.jpg',
  '/img/carousel/c1.jpg',
  '/img/carousel/c2.jpg',
  '/img/carousel/c3.jpg',
  '/img/shangtel.png',
  '/img/map.png'
]

// Portfolio projects data (3x5 = 15 projects)
const portfolioProjects = computed(() => {
  const indonesianProjects = [
    {
      title: "Infrastruktur Fiber Optik",
      description: "Implementasi jaringan fiber optik untuk korporat besar",
      tags: ["Fiber Optik", "Network", "Enterprise"],
      year: "2024",
      image: availableImages[0] // ftth.jpg
    },
    {
      title: "Satelit Komunikasi",
      description: "Instalasi sistem komunikasi satelit untuk daerah terpencil",
      tags: ["Satelit", "Komunikasi", "Remote"],
      year: "2024",
      image: availableImages[2] // satelite.jpg
    },
    {
      title: "Smart City Solution",
      description: "Solusi teknologi pintar untuk pemerintahan kota",
      tags: ["Smart City", "IoT", "Government"],
      year: "2023",
      image: availableImages[4] // c1.jpg
    },
    {
      title: "Network Security",
      description: "Implementasi sistem keamanan jaringan enterprise",
      tags: ["Security", "Network", "Firewall"],
      year: "2024",
      image: availableImages[1] // sky.jpg
    },
    {
      title: "Data Center Setup",
      description: "Pembangunan dan konfigurasi data center modern",
      tags: ["Data Center", "Infrastructure", "Cloud"],
      year: "2023",
      image: availableImages[3] // fiber.jpg
    },
    {
      title: "Wireless Network",
      description: "Instalasi jaringan wireless untuk kampus universitas",
      tags: ["WiFi", "Campus", "Education"],
      year: "2024",
      image: availableImages[5] // c2.jpg
    },
    {
      title: "VoIP Implementation",
      description: "Sistem telepon IP untuk kantor multinasional",
      tags: ["VoIP", "Communication", "Office"],
      year: "2023",
      image: availableImages[6] // c3.jpg
    },
    {
      title: "Cloud Migration",
      description: "Migrasi sistem on-premise ke cloud infrastructure",
      tags: ["Cloud", "Migration", "AWS"],
      year: "2024",
      image: availableImages[7] // shangtel.png
    },
    {
      title: "Network Monitoring",
      description: "Sistem monitoring jaringan real-time 24/7",
      tags: ["Monitoring", "Network", "Analytics"],
      year: "2023",
      image: availableImages[8] // map.png
    },
    {
      title: "CCTV Surveillance",
      description: "Instalasi sistem pengawasan IP camera HD",
      tags: ["CCTV", "Security", "Surveillance"],
      year: "2024",
      image: availableImages[0] // ftth.jpg
    },
    {
      title: "Backup Solution",
      description: "Sistem backup otomatis untuk disaster recovery",
      tags: ["Backup", "Recovery", "Storage"],
      year: "2023",
      image: availableImages[1] // sky.jpg
    },
    {
      title: "ERP Integration",
      description: "Integrasi sistem ERP dengan infrastruktur IT",
      tags: ["ERP", "Integration", "Business"],
      year: "2024",
      image: availableImages[2] // satelite.jpg
    },
    {
      title: "Mobile App Backend",
      description: "Pengembangan backend untuk aplikasi mobile enterprise",
      tags: ["Mobile", "Backend", "API"],
      year: "2023",
      image: availableImages[3] // fiber.jpg
    },
    {
      title: "IoT Platform",
      description: "Platform IoT untuk monitoring industri manufaktur",
      tags: ["IoT", "Manufacturing", "Industry 4.0"],
      year: "2024",
      image: availableImages[4] // c1.jpg
    },
    {
      title: "Cybersecurity Audit",
      description: "Audit keamanan siber dan penetration testing",
      tags: ["Cybersecurity", "Audit", "Penetration Test"],
      year: "2023",
      image: availableImages[5] // c2.jpg
    }
  ]

  const englishProjects = [
    {
      title: "Fiber Optic Infrastructure",
      description: "Implementation of fiber optic network for large corporations",
      tags: ["Fiber Optic", "Network", "Enterprise"],
      year: "2024",
      image: availableImages[0]
    },
    {
      title: "Satellite Communication",
      description: "Satellite communication system installation for remote areas",
      tags: ["Satellite", "Communication", "Remote"],
      year: "2024",
      image: availableImages[2]
    },
    {
      title: "Smart City Solution",
      description: "Smart technology solution for city government",
      tags: ["Smart City", "IoT", "Government"],
      year: "2023",
      image: availableImages[4]
    },
    {
      title: "Network Security",
      description: "Enterprise network security system implementation",
      tags: ["Security", "Network", "Firewall"],
      year: "2024",
      image: availableImages[1]
    },
    {
      title: "Data Center Setup",
      description: "Modern data center construction and configuration",
      tags: ["Data Center", "Infrastructure", "Cloud"],
      year: "2023",
      image: availableImages[3]
    },
    {
      title: "Wireless Network",
      description: "Wireless network installation for university campus",
      tags: ["WiFi", "Campus", "Education"],
      year: "2024",
      image: availableImages[5]
    },
    {
      title: "VoIP Implementation",
      description: "IP telephone system for multinational offices",
      tags: ["VoIP", "Communication", "Office"],
      year: "2023",
      image: availableImages[6]
    },
    {
      title: "Cloud Migration",
      description: "On-premise to cloud infrastructure migration",
      tags: ["Cloud", "Migration", "AWS"],
      year: "2024",
      image: availableImages[7]
    },
    {
      title: "Network Monitoring",
      description: "Real-time 24/7 network monitoring system",
      tags: ["Monitoring", "Network", "Analytics"],
      year: "2023",
      image: availableImages[8]
    },
    {
      title: "CCTV Surveillance",
      description: "HD IP camera surveillance system installation",
      tags: ["CCTV", "Security", "Surveillance"],
      year: "2024",
      image: availableImages[0]
    },
    {
      title: "Backup Solution",
      description: "Automated backup system for disaster recovery",
      tags: ["Backup", "Recovery", "Storage"],
      year: "2023",
      image: availableImages[1]
    },
    {
      title: "ERP Integration",
      description: "ERP system integration with IT infrastructure",
      tags: ["ERP", "Integration", "Business"],
      year: "2024",
      image: availableImages[2]
    },
    {
      title: "Mobile App Backend",
      description: "Backend development for enterprise mobile applications",
      tags: ["Mobile", "Backend", "API"],
      year: "2023",
      image: availableImages[3]
    },
    {
      title: "IoT Platform",
      description: "IoT platform for manufacturing industry monitoring",
      tags: ["IoT", "Manufacturing", "Industry 4.0"],
      year: "2024",
      image: availableImages[4]
    },
    {
      title: "Cybersecurity Audit",
      description: "Cybersecurity audit and penetration testing",
      tags: ["Cybersecurity", "Audit", "Penetration Test"],
      year: "2023",
      image: availableImages[5]
    }
  ]

  return currentLanguage.value === 'ID' ? indonesianProjects : englishProjects
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>