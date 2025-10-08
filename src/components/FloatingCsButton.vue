<template>
  <div class="floating-cs-container">
    <!-- Main Floating Button -->
    <div
      @click="toggleChat"
      class="floating-cs-button group"
      :class="{ 'active': isOpen }"
    >
      <!-- CS Icon -->
      <div class="cs-icon" :class="{ 'hidden': isOpen }">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Question Mark Icon -->
      <div class="question-icon" :class="{ 'hidden': isOpen }">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Close Icon -->
      <div class="close-icon" :class="{ 'hidden': !isOpen }">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <!-- Pulse Animation -->
      <div class="pulse-ring"></div>
      <div class="pulse-ring-delayed"></div>
    </div>

    <!-- Chat Tooltip -->
    <div
      class="chat-tooltip"
      :class="{ 'show': showTooltip && !isOpen }"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <div class="tooltip-content">
        <span class="tooltip-text">Butuh bantuan? Chat dengan kami!</span>
        <div class="tooltip-arrow"></div>
      </div>
    </div>

    <!-- Chat Widget (Example) -->
    <div
      class="chat-widget"
      :class="{ 'show': isOpen }"
    >
      <div class="chat-header">
        <div class="flex items-center space-x-3">
          <div class="cs-avatar">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 class="text-white font-semibold">Customer Support</h4>
            <p class="text-blue-100 text-sm">Online - Siap membantu Anda</p>
          </div>
        </div>
      </div>

      <div class="chat-body">
        <div class="chat-message bot-message">
          <div class="message-avatar">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="message-content">
            <p>Halo! Selamat datang di Shangtel. Ada yang bisa kami bantu?</p>
          </div>
        </div>

        <div class="quick-actions">
          <button class="quick-action-btn" @click="sendQuickMessage('Konsultasi IT')">
            💼 Konsultasi IT
          </button>
          <button class="quick-action-btn" @click="sendQuickMessage('Layanan Keamanan')">
            🔒 Layanan Keamanan
          </button>
          <button class="quick-action-btn" @click="sendQuickMessage('Harga & Paket')">
            💰 Harga & Paket
          </button>
        </div>
      </div>

      <div class="chat-footer">
        <div class="flex items-center space-x-2">
          <input
            v-model="message"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Ketik pesan Anda..."
            class="chat-input"
          />
          <button @click="sendMessage" class="send-button">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const showTooltip = ref(false)
const message = ref('')

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    showTooltip.value = false
  }
}

const sendMessage = () => {
  if (message.value.trim()) {
    // Here you would integrate with your chat system
    console.log('Sending message:', message.value)
    message.value = ''
  }
}

const sendQuickMessage = (quickMsg) => {
  // Handle quick action messages
  console.log('Quick message:', quickMsg)
}

// Auto-show tooltip after 5 seconds
onMounted(() => {
  setTimeout(() => {
    if (!isOpen.value) {
      showTooltip.value = true
      setTimeout(() => {
        showTooltip.value = false
      }, 3000)
    }
  }, 5000)
})
</script>

<style scoped>
.floating-cs-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

/* Main Floating Button */
.floating-cs-button {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.floating-cs-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
}

.floating-cs-button.active {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

/* Icons */
.cs-icon,
.question-icon,
.close-icon {
  position: absolute;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cs-icon {
  transform: scale(1);
}

.question-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 2px;
  transform: scale(0.8);
}

.hidden {
  opacity: 0;
  transform: scale(0);
}

/* Pulse Animation */
.pulse-ring,
.pulse-ring-delayed {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.pulse-ring-delayed {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Chat Tooltip */
.chat-tooltip {
  position: absolute;
  bottom: 70px;
  right: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.chat-tooltip.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.tooltip-content {
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
}

.tooltip-arrow {
  position: absolute;
  bottom: -6px;
  right: 20px;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.8);
  transform: rotate(45deg);
}

/* Chat Widget */
.chat-widget {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  height: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  overflow: hidden;
}

.chat-widget.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.chat-header {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  padding: 16px;
  color: white;
}

.cs-avatar {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-body {
  padding: 16px;
  height: 280px;
  overflow-y: auto;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  space-x: 8px;
  margin-bottom: 16px;
}

.message-avatar {
  width: 32px;
  height: 32px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.message-content {
  background: #f3f4f6;
  padding: 12px 16px;
  border-radius: 16px;
  border-top-left-radius: 4px;
  max-width: 80%;
}

.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.quick-action-btn {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 12px;
  text-align: left;
  font-size: 14px;
  transition: all 0.2s;
  cursor: pointer;
}

.quick-action-btn:hover {
  background: #e2e8f0;
  border-color: #3b82f6;
}

.chat-footer {
  padding: 16px;
  border-top: 1px solid #e5e7eb;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  outline: none;
  font-size: 14px;
}

.chat-input:focus {
  border-color: #3b82f6;
}

.send-button {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.send-button:hover {
  background: #1d4ed8;
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .floating-cs-container {
    bottom: 1rem;
    right: 1rem;
  }

  .floating-cs-button {
    width: 56px;
    height: 56px;
  }

  .pulse-ring,
  .pulse-ring-delayed {
    width: 56px;
    height: 56px;
  }

  .chat-widget {
    width: calc(100vw - 2rem);
    right: -1rem;
    height: 450px;
  }

  .tooltip-content {
    font-size: 13px;
    padding: 10px 14px;
  }

  .chat-tooltip {
    bottom: 65px;
    right: -80px;
  }
}

@media (max-width: 480px) {
  .chat-widget {
    width: calc(100vw - 1rem);
    right: -1.5rem;
    bottom: 70px;
    height: 400px;
  }

  .floating-cs-button {
    width: 52px;
    height: 52px;
  }
}

/* Animation for smooth transitions */
.floating-cs-button * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>