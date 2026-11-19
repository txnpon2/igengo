<script setup lang="ts">
const items = [
  {
    id: 'hr-ai',
    title: 'HR.ai',
    sub: 'งานบุคคลและเงินเดือน',
    to: '/products/hr-ai',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />`,
  },
  {
    id: 'igenq',
    title: 'iGenQ',
    sub: 'ระบบจัดการคิว QR',
    to: '/products/igenq',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />`,
  },
  {
    id: 'i-smartsoft',
    title: 'i-SmartSoft',
    sub: 'e-Office สำนักงานดิจิทัล',
    to: '/products/i-smartsoft',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />`,
  },
  {
    id: 'i-smartflow',
    title: 'i-SmartFlow',
    sub: 'ระบบเส้นทางอนุมัติ',
    to: '/products/i-smartflow',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />`,
  },
  {
    id: 'i-finsoft',
    title: 'i-FinSoft',
    sub: 'งบประมาณและการเงิน',
    to: '/products/i-finsoft',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />`,
  },
  {
    id: 'regist-ai',
    title: 'Regist.ai',
    sub: 'ระบบลงทะเบียนอัจฉริยะ',
    to: '/products/regist-ai',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z" />`,
  },
  {
    id: 'custom-dev',
    title: 'Custom Dev',
    sub: 'พัฒนาระบบตามความต้องการ',
    to: '/products/custom-development',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`,
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    sub: 'ที่ปรึกษา Cloud & API',
    to: '/products/it-consulting',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />`,
  },
  {
    id: 'ecommerce',
    title: 'B2B & Commerce',
    sub: 'i-Mall · i-Shop · POS',
    to: '/products?category=ecommerce',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />`,
  },
]

const scrollContainer = ref<HTMLElement | null>(null)

function scrollLeft() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -280, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 280, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="relative py-6 sm:py-8 bg-[#F5F5F7] border-b border-[#171717]/5">
    <div class="wrap-wide relative">
      
      <!-- Left scroll arrow button -->
      <button
        type="button"
        aria-label="Scroll left"
        class="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171717] shadow-md backdrop-blur hover:bg-white hover:scale-105 transition-all focus:outline-none"
        @click="scrollLeft"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Horizontal Carousel Shelf -->
      <div
        ref="scrollContainer"
        class="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-6 py-2"
      >
        <NuxtLink
          v-for="item in items"
          :key="item.id"
          :to="item.to"
          class="group flex flex-col items-center flex-shrink-0 text-center focus:outline-none transition-transform hover:-translate-y-0.5 duration-200"
        >
          <!-- Icon Circle Container -->
          <div class="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white border border-[#171717]/5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] group-hover:border-[#16834A]/40 group-hover:shadow-[0_8px_20px_rgba(22,131,74,0.12)] transition-all">
            <svg
              class="h-7 w-7 sm:h-9 sm:w-9 text-[#171717]/70 group-hover:text-[#16834A] transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-html="item.icon"
            ></svg>
          </div>

          <!-- Product Code & Title -->
          <span class="mt-2.5 block font-heading text-xs sm:text-sm font-semibold text-[#171717] group-hover:text-[#16834A] transition-colors">
            {{ item.title }}
          </span>
          <span class="block text-[11px] text-apple-subtext whitespace-nowrap">
            {{ item.sub }}
          </span>
        </NuxtLink>
      </div>

      <!-- Right scroll arrow button -->
      <button
        type="button"
        aria-label="Scroll right"
        class="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171717] shadow-md backdrop-blur hover:bg-white hover:scale-105 transition-all focus:outline-none"
        @click="scrollRight"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </div>
</template>
