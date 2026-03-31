<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[28rem] flex items-center justify-center text-white overflow-hidden bg-black">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" style="background-image: url('/img/karir1.jpg'); opacity: 0.5;">
      </div>
      <div class="relative z-10 text-center px-6">
        <div class="inline-block bg-telkom-red px-4 py-2 rounded mb-6 transform rotate-1">
          <span class="text-xs font-black uppercase tracking-[0.2em]">Careers</span>
        </div>
        <h1 class="text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-none">{{ currentCarrierData.hero.title }}</h1>
        <p class="text-xl lg:text-2xl font-medium text-gray-200 max-w-2xl mx-auto">{{ currentCarrierData.hero.subtitle }}</p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-24 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <div class="w-16 h-1 bg-telkom-red mx-auto mb-8"></div>
        <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">{{ currentCarrierData.intro.title }}</h2>
        <p class="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
          {{ currentCarrierData.intro.content }}
        </p>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden transition-colors duration-300">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div class="absolute inset-0 bg-[url('/img/map.png')] dark:grayscale bg-center bg-cover"></div>
      </div>
      <div class="container mx-auto px-6 relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{{ currentCarrierData.whyJoinUs.title }}</h2>
          <div class="w-20 h-1.5 bg-telkom-red mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(card, index) in currentCarrierData.whyJoinUs.cards" :key="index"
            class="group bg-white dark:bg-zinc-800 p-10 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-16 h-16 bg-telkom-red/10 text-telkom-red rounded-xl flex items-center justify-center mb-8 group-hover:bg-telkom-red group-hover:text-white transition-colors duration-500">
              <font-awesome-icon :icon="['fas', ['lightbulb', 'users', 'chart-line'][index]]" class="text-2xl" />
            </div>
            <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-4">{{ card.title }}</h3>
            <p class="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{{ card.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Openings Section -->
    <section class="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{{ currentCarrierData.openings.title }}</h2>
          <div class="w-20 h-1.5 bg-telkom-red mx-auto"></div>
        </div>

        <div class="max-w-5xl mx-auto space-y-6">
          <div v-for="job in currentCarrierData.openings.jobs" :key="job.id"
            class="group bg-gray-50 dark:bg-zinc-800/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:border-telkom-red">
            <div>
              <div class="flex items-center space-x-3 mb-2">
                <span class="px-3 py-1 bg-telkom-red/10 text-telkom-red text-[10px] font-black uppercase tracking-widest rounded-full">
                  {{ job.type }}
                </span>
                <span class="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest">
                  {{ job.location }}
                </span>
              </div>
              <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2">{{ job.title }}</h3>
              <p class="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
                {{ job.description }}
              </p>
            </div>
            <div class="mt-6 md:mt-0">
              <a :href="getApplyLink(job.title)"
                class="inline-block bg-zinc-900 dark:bg-zinc-700 text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all hover:bg-telkom-red hover:shadow-xl">
                {{ currentLanguage === 'ID' ? 'Lamar Sekarang' : 'Apply Now' }}
                <font-awesome-icon icon="arrow-right" class="ml-2" />
              </a>
            </div>
          </div>

          <div v-if="currentCarrierData.openings.jobs.length === 0" class="text-center py-12">
            <p class="text-xl text-gray-500 dark:text-zinc-400 font-medium">
              {{ currentLanguage === 'ID' ? 'Saat ini belum ada lowongan terbuka.' : 'There are currently no open positions.' }}
            </p>
          </div>
        </div>

        <!-- General Application CTA -->
        <div class="mt-20 p-10 bg-zinc-900 rounded-3xl text-center relative overflow-hidden">
          <div class="relative z-10">
            <h3 class="text-3xl font-black text-white mb-4">{{ currentCarrierData.cta.title }}</h3>
            <p class="text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
              {{ currentCarrierData.cta.subtitle }}
            </p>
            <a href="mailto:hr@shangtel.co.id"
              class="inline-block bg-telkom-red text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-telkom-red hover:shadow-2xl">
              {{ currentCarrierData.cta.button }}
            </a>
          </div>
          <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-telkom-red/20 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-telkom-red/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const getApplyLink = (jobTitle) => {
  const number = "628114499096"; // Same as services
  const lang = currentLanguage.value;
  const message = lang === 'ID' 
    ? `Halo, saya tertarik melamar untuk posisi "${jobTitle}". Mohon informasi selanjutnya.`
    : `Hello, I am interested in applying for the "${jobTitle}" position. Please provide more information.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const carrierDataIndonesia = {
  hero: {
    title: "Bangun Masa Depanmu Bersama Shangtel",
    subtitle: "Jadilah bagian dari tim yang bersemangat dalam inovasi teknologi."
  },
  intro: {
    title: "We Do IT With Passion",
    content: "Di Shangtel, kami percaya bahwa semangat dan dedikasi adalah kunci untuk memberikan solusi terbaik. Kami adalah tim yang solid, kreatif, dan selalu haus akan tantangan baru. Budaya kerja kami didasarkan pada kolaborasi, inovasi, dan pertumbuhan berkelanjutan."
  },
  whyJoinUs: {
    title: "Mengapa Bergabung Dengan Kami?",
    cards: [
      {
        title: "Inovasi Tanpa Henti",
        content: "Kami selalu mencari cara baru untuk memecahkan masalah dan menciptakan teknologi masa depan."
      },
      {
        title: "Lingkungan Kolaboratif",
        content: "Anda akan bekerja dengan para ahli di bidangnya dalam lingkungan yang mendukung dan terbuka."
      },
      {
        title: "Pengembangan Karir",
        content: "Kami berinvestasi pada pertumbuhan profesional Anda melalui pelatihan dan peluang pengembangan."
      }
    ]
  },
  openings: {
    title: "Lowongan Terkini",
    jobs: [
      {
        id: 1,
        title: "Network Engineer",
        type: "Full-time",
        location: "Manokwari, Papua Barat",
        description: "Bertanggung jawab atas instalasi, konfigurasi, dan pemeliharaan infrastruktur jaringan fiber optik dan wireless."
      },
      {
        id: 2,
        title: "IT Support Specialist",
        type: "Full-time",
        location: "Sorong, Papua Barat Daya",
        description: "Memberikan dukungan teknis tingkat pertama dan kedua bagi klien korporat kami, memastikan ketersediaan layanan 24/7."
      },
      {
        id: 3,
        title: "Account Executive",
        type: "Full-time",
        location: "Jakarta (Remote Option)",
        description: "Membangun hubungan dengan klien baru dan mengelola kemitraan strategis untuk solusi IT enterprise."
      }
    ]
  },
  cta: {
    title: "Tidak Menemukan Posisi Yang Cocok?",
    subtitle: "Kami selalu mencari talenta berbakat. Kirimkan CV dan portofolio Anda ke database kami untuk peluang di masa depan.",
    button: "Kirim CV Umum"
  }
}

const carrierDataEnglish = {
  hero: {
    title: "Build Your Future with Shangtel",
    subtitle: "Be part of a team that is passionate about technological innovation."
  },
  intro: {
    title: "We Do IT With Passion",
    content: "At Shangtel, we believe that passion and dedication are the keys to providing the best solutions. We are a solid, creative team that is always hungry for new challenges. Our work culture is based on collaboration, innovation, and continuous growth."
  },
  whyJoinUs: {
    title: "Why Join Us?",
    cards: [
      {
        title: "Endless Innovation",
        content: "We are always looking for new ways to solve problems and create future technologies."
      },
      {
        title: "Collaborative Environment",
        content: "You will work with experts in their fields in a supportive and open environment."
      },
      {
        title: "Career Development",
        content: "We invest in your professional growth through training and development opportunities."
      }
    ]
  },
  openings: {
    title: "Current Openings",
    jobs: [
      {
        id: 1,
        title: "Network Engineer",
        type: "Full-time",
        location: "Manokwari, West Papua",
        description: "Responsible for the installation, configuration, and maintenance of fiber optic and wireless network infrastructure."
      },
      {
        id: 2,
        title: "IT Support Specialist",
        type: "Full-time",
        location: "Sorong, Southwest Papua",
        description: "Providing first and second-level technical support for our corporate clients, ensuring 24/7 service availability."
      },
      {
        id: 3,
        title: "Account Executive",
        type: "Full-time",
        location: "Jakarta (Remote Option)",
        description: "Building relationships with new clients and managing strategic partnerships for enterprise IT solutions."
      }
    ]
  },
  cta: {
    title: "Don't See a Perfect Match?",
    subtitle: "We're always looking for talented individuals. Send your CV and portfolio to our database for future opportunities.",
    button: "Send General CV"
  }
}

const currentCarrierData = computed(() => {
  return currentLanguage.value === 'ID' ? carrierDataIndonesia : carrierDataEnglish
})
</script>

<style scoped>
/* Scoped styles if needed */
</style>
