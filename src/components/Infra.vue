<template>
  <section
    ref="sectionRef"
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800"
  >
    <!-- Bokeh Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-300/15 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-300/25 rounded-full blur-2xl animate-pulse delay-500"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/4 w-56 h-56 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1500"
      ></div>
      <div
        class="absolute top-2/3 right-1/2 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl animate-pulse delay-3000"
      ></div>
    </div>

    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-blue-900/30"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 min-h-screen">
        <!-- Left Side - Image -->
        <div class="relative flex items-center justify-center p-8 lg:p-16">
          <div class="relative">
            <!-- Background decorative elements -->
            <div
              class="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse"
            ></div>
            <div
              class="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"
            ></div>

            <!-- Main Image Grid -->
            <div class="grid grid-cols-2 gap-3">
              <div
                class="col-span-2 relative overflow-hidden rounded-2xl shadow-xl group h-64"
              >
                <img
                  src="/img/service1.jpg"
                  alt="Infrastructure Service 1"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>
              <div
                class="relative overflow-hidden rounded-xl shadow-lg group h-40"
              >
                <img
                  src="/img/service2.jpg"
                  alt="Infrastructure Service 2"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>
              <div
                class="relative overflow-hidden rounded-xl shadow-lg group h-40"
              >
                <img
                  src="/img/service3.jpg"
                  alt="Infrastructure Service 3"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>
              <div
                class="relative overflow-hidden rounded-xl shadow-lg group h-40"
              >
                <img
                  src="/img/service4.jpg"
                  alt="Infrastructure Service 4"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>
              <div
                class="relative overflow-hidden rounded-xl shadow-lg group h-40"
              >
                <img
                  src="/img/service5.jpg"
                  alt="Infrastructure Service 5"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Content -->
        <div class="relative flex items-center">
          <div class="relative z-10 p-8 lg:p-16 w-full">
            <div class="max-w-lg">
              <!-- Badge -->
              <div
                class="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
              >
                <span class="text-white text-sm font-medium">{{
                  currentInfraData.badge
                }}</span>
              </div>

              <!-- Main Title -->
              <h2 class="text-4xl font-black text-white mb-6 leading-tight">
                <span
                  class="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent font-bold"
                >
                  {{ currentInfraData.title }}
                </span>
              </h2>

              <!-- Description -->
              <p class="text-lg text-blue-50 mb-8 leading-relaxed">
                {{ currentInfraData.description }}
              </p>

              <!-- Statistics Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div
                  class="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div class="flex items-center space-x-4">
                    <div
                      class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'satellite-dish']"
                        class="text-blue-600 text-xl"
                      />
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-gray-900">
                        {{ formatNumber(radio1000) }}+
                      </div>
                      <div class="text-sm text-gray-600">
                        {{ currentInfraData.radioLabel }}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div class="flex items-center space-x-4">
                    <div
                      class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'network-wired']"
                        class="text-indigo-600 text-xl"
                      />
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-gray-900">
                        {{ formatNumber(kabel20000) }}+
                      </div>
                      <div class="text-sm text-gray-600">
                        {{ currentInfraData.kabelLabel }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Services List -->
              <div class="mb-10">
                <h3 class="text-white font-bold text-xl mb-4 flex items-center">
                  <span class="mr-2">🔹</span>
                  {{ currentInfraData.servicesTitle }}
                </h3>
                <ul class="space-y-4">
                  <li
                    v-for="(service, index) in currentInfraData.services"
                    :key="index"
                    class="flex items-center text-blue-50 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center mr-4 shrink-0"
                    >
                      <font-awesome-icon
                        :icon="service.icon"
                        class="text-white text-sm"
                      />
                    </div>
                    <span class="text-sm md:text-md font-medium">{{
                      service.text
                    }}</span>
                  </li>
                </ul>
              </div>

              <!-- CTA Button -->
              <div class="flex space-x-4">
                <button
                  class="group bg-gradient-to-r from-white to-blue-50 text-blue-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-white/25 hover:transform hover:scale-105 border border-white/30"
                >
                  <span class="flex items-center">
                    {{ currentInfraData.buttonText }}
                    <svg
                      class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Animated background elements -->
    <div
      class="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"
    ></div>
    <div
      class="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"
    ></div>
    <div
      class="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useLanguage } from "@/composables/useLanguage.js";

const radio1000 = ref(0);
const kabel20000 = ref(0);
const isVisible = ref(false);
const sectionRef = ref(null);
let observer = null;

const { currentLanguage } = useLanguage();

const infraDataIndonesia = {
  badge: "Infrastruktur Handal",
  title: "Jaringan Fiber Optic & Wireless Terpercaya",
  description:
    "Kami menghadirkan solusi infrastruktur telekomunikasi berbasis Fiber Optic dan Wireless yang dirancang untuk memastikan konektivitas stabil, cepat, dan aman. Dengan pengalaman pembangunan jaringan di berbagai wilayah, kami berkomitmen memberikan layanan berkualitas tinggi yang mendukung pertumbuhan bisnis dan transformasi digital. Didukung tenaga ahli berpengalaman serta standar implementasi profesional, setiap proyek kami kerjakan dengan perencanaan matang dan pengawasan ketat untuk menjamin performa maksimal dan keberlanjutan jaringan.",
  servicesTitle: "Layanan Utama Kami:",
  services: [
    {
      text: "Pembangunan Backbone & Distribusi Fiber Optic",
      icon: ["fas", "network-wired"],
    },
    {
      text: "Instalasi Radio Wireless & VSAT",
      icon: ["fas", "satellite-dish"],
    },
    {
      text: "Network Operation Center (NOC) Monitoring",
      icon: ["fas", "desktop"],
    },
    { text: "Maintenance & Support 24/7", icon: ["fas", "tools"] },
    {
      text: "Solusi FTTH untuk Perumahan & Korporasi",
      icon: ["fas", "house-signal"],
    },
  ],
  radioLabel: "Radio dan VSAT",
  radioDesc: "Telah membangun lebih dari 1.000 jaringan Radio dan VSAT",
  kabelLabel: "km Kabel Optik",
  kabelDesc:
    "Memasang lebih dari 20.000 km kabel serat optik untuk mendukung konektivitas handal di seluruh wilayah",
  buttonText: "Pelajari Lebih Lanjut",
};

const infraDataEnglish = {
  badge: "Reliable Infrastructure",
  title: "Trusted Fiber Optic & Wireless Network",
  description:
    "We provide Fiber Optic and Wireless-based telecommunications infrastructure solutions designed to ensure stable, fast, and secure connectivity. With extensive network construction experience across various regions, we are committed to delivering high-quality services that support business growth and digital transformation. Supported by experienced experts and professional implementation standards, every project is executed with careful planning and strict supervision to guarantee maximum performance and network sustainability.",
  servicesTitle: "Our Main Services:",
  services: [
    {
      text: "Backbone & Fiber Optic Distribution Construction",
      icon: ["fas", "network-wired"],
    },
    {
      text: "Radio Wireless & VSAT Installation",
      icon: ["fas", "satellite-dish"],
    },
    {
      text: "Network Operation Center (NOC) Monitoring",
      icon: ["fas", "desktop"],
    },
    { text: "Maintenance & Support 24/7", icon: ["fas", "tools"] },
    {
      text: "FTTH Solutions for Residential & Corporate",
      icon: ["fas", "house-signal"],
    },
  ],
  radioLabel: "Radio and VSAT",
  radioDesc: "Built more than 1,000 Radio and VSAT networks",
  kabelLabel: "km Fiber Optic Cable",
  kabelDesc:
    "Installed more than 20,000 km of fiber optic cables to support reliable connectivity throughout the region",
  buttonText: "Learn More",
};

const currentInfraData = computed(() => {
  return currentLanguage.value === "ID" ? infraDataIndonesia : infraDataEnglish;
});

const animateNumbers = () => {
  if (!isVisible.value) return;

  // Reset numbers
  radio1000.value = 0;
  kabel20000.value = 0;

  // Animate 1000+ Radio dan VSAT
  const radio1000Target = 1000;
  const radio1000Duration = 2000;
  const radio1000Increment = radio1000Target / (radio1000Duration / 16);

  const radio1000Animation = () => {
    if (radio1000.value < radio1000Target && isVisible.value) {
      radio1000.value = Math.min(
        radio1000.value + radio1000Increment,
        radio1000Target,
      );
      requestAnimationFrame(radio1000Animation);
    }
  };

  // Animate 20,000+ km Kabel Optik
  const kabel20000Target = 20000;
  const kabel20000Duration = 2500;
  const kabel20000Increment = kabel20000Target / (kabel20000Duration / 16);

  const kabel20000Animation = () => {
    if (kabel20000.value < kabel20000Target && isVisible.value) {
      kabel20000.value = Math.min(
        kabel20000.value + kabel20000Increment,
        kabel20000Target,
      );
      requestAnimationFrame(kabel20000Animation);
    }
  };

  // Start animations with slight delay
  setTimeout(radio1000Animation, 200);
  setTimeout(kabel20000Animation, 400);
};

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          animateNumbers();
        } else {
          isVisible.value = false;
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
};

const formatNumber = (num) => {
  if (num >= 1000) {
    return (
      Math.floor(num / 1000) +
      "," +
      (Math.floor(num) % 1000).toString().padStart(3, "0")
    );
  }
  return Math.floor(num).toString();
};

onMounted(() => {
  setupIntersectionObserver();
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
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

/* Glassmorphism effects */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Hover effects for statistics cards */
.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .min-h-screen {
    min-height: auto;
  }
}

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

  .lg\:p-16 {
    padding: 2rem;
  }
}
</style>
