<template>
  <nav class="modern-navbar bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              </div>
              <div class="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                <img class="h-8 w-auto filter brightness-0 invert" src="/img/shangtel.png" alt="Shangtel" />
              </div>
            </div>

          </div>
        </div>

        <!-- Menu Items -->
        <div class="hidden lg:block">
          <div class="flex items-center space-x-8">
            <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">
              Home
            </router-link>
            <router-link to="/about" class="nav-link" :class="{ 'active': $route.path === '/about' }">
              About
            </router-link>
            <router-link to="/service" class="nav-link" :class="{ 'active': $route.path === '/service' }">
              Services
            </router-link>
            <router-link to="/product" class="nav-link" :class="{ 'active': $route.path === '/product' }">
              Products
            </router-link>
            <router-link to="/blog" class="nav-link" :class="{ 'active': $route.path === '/blog' }">
              Resources
            </router-link>

            <!-- CTA Button -->
            <div class="flex items-center space-x-4">
              <router-link to="/contact" class="cta-button group">
                <span class="relative z-10 flex items-center text-sm font-medium">
                  Get Started
                  <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </router-link>
            </div>
          </div>
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
        <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/' }"></div>
            Home
          </span>
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/about' }"></div>
            About
          </span>
        </router-link>
        <router-link to="/service" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/service' }"></div>
            Services
          </span>
        </router-link>
        <router-link to="/product" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/product' }"></div>
            Products
          </span>
        </router-link>
        <router-link to="/blog" class="mobile-nav-link" @click="mobileMenuOpen = false">
          <span class="flex items-center">
            <div class="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 transition-opacity"
              :class="{ 'opacity-100': $route.path === '/blog' }"></div>
            Resources
          </span>
        </router-link>

        <div class="pt-4 mt-4 border-t border-gray-100">
          <router-link to="/contact" class="mobile-cta-button" @click="mobileMenuOpen = false">
            <span class="flex items-center justify-center">
              Get Started
              <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
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
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
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

/* CTA Button */
.cta-button {
  position: relative;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  padding: 0.625rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px 0 rgba(37, 99, 235, 0.4);
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:active {
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

.mobile-cta-button {
  display: block;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}

.mobile-cta-button:hover {
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