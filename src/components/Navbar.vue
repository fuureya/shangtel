<template>
  <nav class="modern-navbar bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 ">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center  h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <div class="flex items-center space-x-3">
            <!-- Desktop Logo -->
            <img class="h-10 w-auto hidden sm:block" src="/img/shangtel.png" alt="Shangtel" />
            <!-- Mobile Logo -->
            <img class="h-8 w-auto sm:hidden" src="/img/shangtel-mb.png" alt="Shangtel" />
          </div>
        </div>

        <!-- Menu Items - dengan jarak besar dari logo -->
        <div class="hidden lg:flex flex-1 justify-center ml-40">
          <div class="flex items-center ">
            <a href="#home" class="nav-link" :class="{ 'active': activeSection === 'home' }"
              @click="scrollToSection('home')">
              {{ currentNavData.home }}
            </a>
            <a href="#about" class="nav-link" :class="{ 'active': activeSection === 'about' }"
              @click="scrollToSection('about')">
              {{ currentNavData.about }}
            </a>
            <a href="#services" class="nav-link" :class="{ 'active': activeSection === 'services' }"
              @click="scrollToSection('services')">
              {{ currentNavData.services }}
            </a>
            <a href="#products" class="nav-link" :class="{ 'active': activeSection === 'products' }"
              @click="scrollToSection('products')">
              {{ currentNavData.products }}
            </a>
            <router-link to="/portfolio" class="nav-link" :class="{ 'active': $route.path === '/portfolio' }">
              {{ currentNavData.portfolio }}
            </router-link>
            <router-link to="/carrier" class="nav-link" :class="{ 'active': $route.path === '/carrier' }">
              {{ currentNavData.carrier }}
            </router-link>
            <a href="#contact" class="nav-link" :class="{ 'active': activeSection === 'contact' }"
              @click="scrollToSection('contact')">
              {{ currentNavData.contact }}
            </a>
          </div>
        </div>

        <!-- Language Switcher - Right aligned -->
        <div class="hidden lg:flex items-center">
          <button @click="toggleLanguage" class="language-button group">
            <span class="relative z-10 flex items-center text-sm font-medium">
              <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {{ currentLanguage }}
              <svg class="ml-2 h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-button group">
            <div class="hamburger-line" :class="{ 'hamburger-active': mobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="mobile-menu lg:hidden">
      <div class="px-6 py-4 space-y-1">
        <a href="#home" class="mobile-nav-link" @click="scrollToSection('home'); mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': activeSection === 'home' }"></div>
            {{ currentNavData.home }}
          </span>
        </a>
        <a href="#about" class="mobile-nav-link" @click="scrollToSection('about'); mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': activeSection === 'about' }"></div>
            {{ currentNavData.about }}
          </span>
        </a>
        <a href="#services" class="mobile-nav-link" @click="scrollToSection('services'); mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': activeSection === 'services' }"></div>
            {{ currentNavData.services }}
          </span>
        </a>
        <a href="#products" class="mobile-nav-link" @click="scrollToSection('products'); mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': activeSection === 'products' }"></div>
            {{ currentNavData.products }}
          </span>
        </a>
        <router-link to="/portfolio" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/portfolio' }"></div>
            {{ currentNavData.portfolio }}
          </span>
        </router-link>
        <router-link to="/carrier" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/carrier' }"></div>
            {{ currentNavData.carrier }}
          </span>
        </router-link>
        <a href="#contact" class="mobile-nav-link" @click="scrollToSection('contact'); mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': activeSection === 'contact' }"></div>
            {{ currentNavData.contact }}
          </span>
        </a>

        <div class="pt-4 mt-4 border-t border-gray-100">
          <button @click="toggleLanguage" class="mobile-language-button">
            <span class="flex items-center justify-center">
              <svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {{ currentLanguage === 'ID' ? 'Bahasa Indonesia' : 'English' }}
              <svg class="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const mobileMenuOpen = ref(false)
const activeSection = ref('home')
const { currentLanguage, toggleLanguage } = useLanguage()

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Handle scroll to detect active section
const handleScroll = () => {
  const sections = ['home', 'about', 'services', 'products', 'contact']
  const scrollPos = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetBottom = offsetTop + element.offsetHeight

      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        activeSection.value = section
        break
      }
    }
  }
}

// Setup scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Navigation data
const navDataIndonesia = {
  home: "Beranda",
  about: "Tentang",
  services: "Layanan",
  products: "Produk",
  portfolio: "Portofolio",
  carrier: "Carrier",
  contact: "Kontak"
}

const navDataEnglish = {
  home: "Home",
  about: "About",
  services: "Services",
  products: "Products",
  portfolio: "Portfolio",
  carrier: "Carrier",
  contact: "Contact"
}

const currentNavData = computed(() => {
  return currentLanguage.value === 'ID' ? navDataIndonesia : navDataEnglish
})
</script>

<style scoped>
/* Modern Navbar Base */
.modern-navbar {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.modern-navbar:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Navigation Links */
.nav-link {
  position: relative;
  color: #374151;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #1d4ed8;
  background-color: rgba(59, 130, 246, 0.05);
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link.active {
  color: #1d4ed8;
  font-weight: 600;
}

.nav-link.active::before {
  width: 100%;
}

/* Language Button */
.language-button {
  position: relative;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}

.language-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.language-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px 0 rgba(37, 99, 235, 0.4);
}

.language-button:hover::before {
  left: 100%;
}

.language-button:active {
  transform: translateY(0);
}

/* Mobile Menu Button */
.mobile-menu-button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.mobile-menu-button:hover {
  background-color: rgba(59, 130, 246, 0.05);
}

.hamburger-line {
  width: 20px;
  height: 16px;
  position: relative;
  cursor: pointer;
}

.hamburger-line span {
  display: block;
  width: 100%;
  height: 2px;
  background: #374151;
  border-radius: 1px;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-line span:nth-child(1) {
  top: 0;
}

.hamburger-line span:nth-child(2) {
  top: 7px;
}

.hamburger-line span:nth-child(3) {
  top: 14px;
}

.hamburger-active span:nth-child(1) {
  transform: rotate(45deg);
  top: 7px;
}

.hamburger-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger-active span:nth-child(3) {
  transform: rotate(-45deg);
  top: 7px;
}

/* Mobile Menu */
.mobile-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(229, 231, 235, 0.5);
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link {
  display: block;
  color: #374151;
  font-weight: 500;
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.mobile-nav-link:hover {
  color: #1d4ed8;
  background-color: rgba(59, 130, 246, 0.05);
  transform: translateX(4px);
}

.mobile-language-button {
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}

.mobile-language-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px 0 rgba(37, 99, 235, 0.4);
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .nav-link {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

/* Glassmorphism effect on scroll */
.modern-navbar.scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.3);
}

/* Subtle gradient text for logo */
.logo-gradient {
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>