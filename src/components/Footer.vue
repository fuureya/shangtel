<template>
  <footer class="footer-section relative">
    <!-- Map Background -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full bg-cover bg-center bg-no-repeat"
        style="background-image: url('/img/map.png')"
      ></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- Left Grid - Navigation & Services -->
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-6">Managed Services</h3>
            <nav class="space-y-3">
              <router-link to="/" class="footer-link">Home</router-link>
              <router-link to="/about" class="footer-link">About</router-link>
              <router-link to="/service" class="footer-link">Services</router-link>
              <router-link to="/contact" class="footer-link">Contact</router-link>
            </nav>
          </div>

          <!-- Social Media -->
          <div class="pt-4">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="social-icon group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="social-icon group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="social-icon group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-icon group">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Middle Grid - Contact Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Contact Info</h3>

          <div class="space-y-4">
            <!-- Address -->
            <div class="flex items-start space-x-3">
              <div class="contact-icon">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-gray-700 leading-relaxed">Jl. Keindahan 1 Blok AA No.4<br>Tamalanrea - Makassar<br>Sulawesi - Indonesia</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p class="text-gray-700">08114499096</p>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="text-gray-700">support@shangtel.co.id</p>
            </div>

            <!-- Website -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <p class="text-gray-700">shangtel.co.id</p>
            </div>

            <!-- Business Hours -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-gray-700">Senin - Sabtu: 8:00 - 17:00</p>
            </div>
          </div>
        </div>

        <!-- Right Grid - Contact Form -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>

          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Full Name -->
            <div>
              <label for="fullname" class="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="fullname"
                v-model="form.fullname"
                type="text"
                required
                class="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                required
                class="form-input"
                placeholder="Enter your company name"
              />
            </div>

            <!-- Question -->
            <div>
              <label for="question" class="block text-sm font-medium text-gray-700 mb-2">
                Your Question
              </label>
              <textarea
                id="question"
                v-model="form.question"
                rows="4"
                required
                class="form-input resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-button group w-full">
              <span class="relative z-10 flex items-center justify-center">
                Send Message
                <svg class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex items-center space-x-3">
            <img src="/img/shangtel.png" alt="Shangtel" class="h-8 w-auto" />
            <p class="text-gray-600 text-sm">
              © 2024 Shangtel. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  fullname: '',
  company: '',
  question: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)

  // Create WhatsApp message
  const message = `Halo saya ${form.value.fullname} berasal dari ${form.value.company}. ${form.value.question}`
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/6208114499096?text=${encodedMessage}`

  // Open WhatsApp
  window.open(whatsappUrl, '_blank')

  // Reset form
  form.value = {
    fullname: '',
    company: '',
    question: ''
  }
}
</script>

<style scoped>
.footer-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.footer-link {
  display: block;
  color: #4b5563;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
}

.footer-link:hover {
  color: #2563eb;
  border-bottom-color: #2563eb;
  transform: translateX(4px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  color: #6b7280;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border-radius: 8px;
  flex-shrink: 0;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.875rem;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-button {
  position: relative;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.submit-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.submit-button:hover::before {
  left: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-section {
    padding: 2rem 0;
  }

  .grid {
    gap: 2rem;
  }

  .form-input {
    padding: 0.625rem 0.875rem;
  }

  .submit-button {
    padding: 0.75rem 1.25rem;
  }
}
</style>