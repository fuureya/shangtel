<template>
  <Navbar />

  <main class="bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative bg-white dark:bg-zinc-900 pt-32 pb-24 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-lg bg-telkom-red/10 text-telkom-red text-xs font-black uppercase tracking-widest mb-8"
        >
          Our Success Stories
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 max-w-4xl mx-auto">
          Delivering <span class="text-telkom-red">Excellence</span> Across Indonesia
        </h1>
        <p class="max-w-3xl mx-auto text-xl text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
          Explore our diverse range of successful projects, from nationwide IT infrastructure deployments to specialized security solutions for enterprise clients.
        </p>
      </div>
    </section>

    <!-- Portfolio Grid Section -->
    <section class="py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-20">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 border-2"
            :class="activeCategory === category.id 
              ? 'bg-telkom-red border-telkom-red text-white shadow-xl shadow-telkom-red/20' 
              : 'bg-white dark:bg-zinc-800 border-gray-100 dark:border-zinc-800 text-gray-500 dark:text-zinc-400 hover:border-telkom-red hover:text-telkom-red'"
          >
            {{ currentLanguage === 'ID' ? category.nameId : category.nameEn }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-700 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <!-- Project Image -->
            <div class="relative h-64 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div class="text-telkom-red text-[10px] font-black uppercase tracking-[0.2em] mb-2 bg-white/90 dark:bg-zinc-900/90 inline-block px-3 py-1 rounded">
                  {{ project.categoryLabel }}
                </div>
                <h3 class="text-white text-xl font-black tracking-tight">
                  {{ project.title }}
                </h3>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-8">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
                  <font-awesome-icon icon="building" class="text-gray-400 dark:text-zinc-500 text-sm" />
                </div>
                <span class="text-sm font-bold text-gray-600 dark:text-zinc-400">
                  {{ project.client }}
                </span>
              </div>
              <p class="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                {{ currentLanguage === 'ID' ? project.descriptionId : project.descriptionEn }}
              </p>
              <div class="flex items-center text-telkom-red text-xs font-black uppercase tracking-widest pt-6 border-t border-gray-50 dark:border-zinc-700">
                <span>View Case Study</span>
                <font-awesome-icon icon="arrow-right" class="ml-2 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <font-awesome-icon icon="folder-open" class="text-6xl text-gray-200 dark:text-zinc-800 mb-6" />
          <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2">No projects found</h3>
          <p class="text-gray-500 dark:text-zinc-400">Try selecting a different category.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl lg:text-5xl font-black mb-8 tracking-tight">Ready to Start Your Project?</h2>
        <p class="text-xl text-zinc-400 mb-12 font-medium">Partner with Shangtel for innovative IT solutions tailored to your business needs.</p>
        <router-link
          to="/#contact"
          class="inline-block bg-telkom-red text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-telkom-red hover:shadow-2xl"
        >
          Get in Touch
        </router-link>
      </div>
    </section>
  </main>

  <FloatingCsButton />
  <Footer />
</template>

<script setup>
import { ref, computed } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import FloatingCsButton from '@/components/FloatingCsButton.vue';
import { useLanguage } from '@/composables/useLanguage.js';

const { currentLanguage } = useLanguage();
const activeCategory = ref('all');

const categories = [
  { id: 'all', nameEn: 'All Projects', nameId: 'Semua Proyek' },
  { id: 'network', nameEn: 'Networking', nameId: 'Jaringan' },
  { id: 'security', nameEn: 'Security', nameId: 'Keamanan' },
  { id: 'multimedia', nameEn: 'Multimedia', nameId: 'Multimedia' },
  { id: 'it-support', nameEn: 'IT Support', nameId: 'Dukungan IT' },
];

const projects = [
  {
    id: 1,
    title: 'Metro Ethernet Deployment',
    client: 'Local ISP Partner',
    category: 'network',
    categoryLabel: 'Networking',
    image: '/img/ly4.jpeg',
    descriptionEn: 'High-speed fiber optic network deployment covering major business districts in East Indonesia.',
    descriptionId: 'Implementasi jaringan fiber optik kecepatan tinggi yang mencakup distrik bisnis utama di Indonesia Timur.',
  },
  {
    id: 2,
    title: 'Enterprise Firewall Upgrade',
    client: 'Provincial Government',
    category: 'security',
    categoryLabel: 'Security',
    image: '/img/ly2.jpeg',
    descriptionEn: 'Implementation of next-generation firewall and threat detection systems for secure government data centers.',
    descriptionId: 'Implementasi firewall generasi terbaru dan sistem deteksi ancaman untuk pusat data pemerintahan yang aman.',
  },
  {
    id: 3,
    title: 'Smart City Videotron Network',
    client: 'Municipal Authority',
    category: 'multimedia',
    categoryLabel: 'Multimedia',
    image: '/assets/img/s6.jpeg',
    descriptionEn: 'Centralized management system for public information displays across the city center.',
    descriptionId: 'Sistem manajemen terpusat untuk tampilan informasi publik di seluruh pusat kota.',
  },
  {
    id: 4,
    title: '24/7 Managed IT Support',
    client: 'International Hotel Chain',
    category: 'it-support',
    categoryLabel: 'IT Support',
    image: '/img/ly1.jpeg',
    descriptionEn: 'Total outsourcing of IT infrastructure maintenance and guest network support for hospitality excellence.',
    descriptionId: 'Outsourcing total pemeliharaan infrastruktur IT dan dukungan jaringan tamu untuk keunggulan perhotelan.',
  },
  {
    id: 5,
    title: 'Satelite VSAT Connectivity',
    client: 'Mining Enterprise',
    category: 'network',
    categoryLabel: 'Networking',
    image: '/img/infra/satelite.jpg',
    descriptionEn: 'Providing reliable satellite links for remote mining operations with high-availability SLAs.',
    descriptionId: 'Menyediakan link satelit yang andal untuk operasi pertambangan terpencil dengan SLA ketersediaan tinggi.',
  },
  {
    id: 6,
    title: 'Data Center Infrastructure',
    client: 'Technological Institute',
    category: 'network',
    categoryLabel: 'Networking',
    image: '/assets/img/s3.jpeg',
    descriptionEn: 'Design and setup of modern server rooms with structured cabling and environmental monitoring.',
    descriptionId: 'Desain dan pengaturan ruang server modern dengan pengkabelan terstruktur dan pemantauan lingkungan.',
  },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(p => p.category === activeCategory.value);
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
