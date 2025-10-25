<template>
  <Navbar />

  <!-- Hero Section with Background Image -->
  <section class="relative h-96 flex items-center justify-center text-white">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/img/carousel/c1.jpg');">
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div class="relative z-10 text-center">
      <h1 class="text-5xl font-extrabold mb-4">Tentang Shangtel</h1>
      <p class="text-xl">Solusi IT, Layanan Terkelola, dan Integrasi Sistem Terbaik</p>
    </div>
  </section>

  <!-- About Us Content with Image -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <img src="/img/infra/fiber.jpg" alt="Fiber Optic" class="rounded-lg shadow-2xl w-full">
        </div>
        <div class="md:w-1/2 md:pl-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">We Do IT With Passion</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            PT. Shangkuriang Telekomunikasi Indonesia adalah perusahaan yang bergerak di bidang IT Solution, Manage Service, dan System Integrator, khususnya dalam penyediaan jaringan internet. Kami berpengalaman dalam instalasi jaringan Fiber Optic dan Wireless di berbagai kota besar dan daerah pedesaan.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Kepercayaan dari produsen Wireless Equipment mancanegara telah menjadikan kami distributor eksklusif di Asia Pasifik. Dengan lebih dari 300 klien domestik dan internasional, motto “We Do IT With Passion” menjadi landasan kami untuk memberikan pelayanan 24x7.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Visi & Misi Section with Image -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Visi & Misi</h2>
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-blue-600 mb-3">Visi</h3>
            <p class="text-gray-600 leading-relaxed">
              Menjadi perusahaan penyedia teknologi informasi dan komunikasi bertaraf internasional dengan layanan terbaik dalam pemberian solusi yang terpercaya dan bernilai tambah bagi pelanggan dan stakeholder.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-blue-600 mb-3">Misi</h3>
            <ul class="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li>Menjalin kerjasama dengan perusahaan ICT baik dari dalam negeri maupun luar negeri.</li>
              <li>Bertekad membawa merek sendiri untuk berkembang menjadi industri manufacturing terkemuka di Indonesia.</li>
              <li>Mengembangkan Industri ICT dengan orientasi bisnis dan kultur profesional.</li>
              <li>Mengembangkan sumber daya dan potensi bisnis yang ada di lingkungan Indonesia timur.</li>
              <li>Meningkatkan benefit dan value bagi konsumen dan stakeholder.</li>
            </ul>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="/img/infra/satelite.jpg" alt="Satelite" class="rounded-lg shadow-2xl w-full">
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
/* Scoped styles for custom animations or effects if needed */
</style>
