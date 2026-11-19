<script setup lang="ts">
defineProps<{
  active: 'history' | 'policy' | 'culture' | 'organization' | 'careers' | 'privacy' | 'cookies'
}>()

const items = [
  { id: 'history', label: 'ประวัติความเป็นมา', to: '/about/history', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'policy', label: 'นโยบายบริษัท', to: '/about/policy', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'culture', label: 'ค่านิยมและวัฒนธรรมองค์กร', to: '/about/culture', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'organization', label: 'แผนผังการบริหาร', to: '/about/organization', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'careers', label: 'สมัครงาน', to: '/about/careers', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { id: 'privacy', label: 'นโยบายความเป็นส่วนตัว', to: '/about/privacy', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'cookies', label: 'นโยบายการใช้คุกกี้', to: '/about/cookies', icon: 'M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14a1.5 1.5 0 11-1.5-1.5A1.5 1.5 0 0113 16zm-1-5a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 11zm4 1a1 1 0 11-1-1 1 1 0 011 1zm-8 1a1 1 0 11-1-1 1 1 0 011 1z' },
] as const
</script>

<template>
  <div class="mb-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6 font-heading" aria-label="Breadcrumb">
      <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
      <span>/</span>
      <NuxtLink to="/about" class="hover:text-[#16834A] transition-colors">เกี่ยวกับเรา</NuxtLink>
      <span>/</span>
      <span class="text-[#16834A] font-semibold">{{ items.find(i => i.id === active)?.label }}</span>
    </nav>

    <!-- Sub-page Navigation Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-heading">
      <NuxtLink
        v-for="item in items"
        :key="item.id"
        :to="item.to"
        class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all border shadow-sm"
        :class="[
          active === item.id
            ? 'bg-[#16834A] text-white border-[#16834A] shadow-md shadow-emerald-700/20'
            : 'bg-white text-slate-700 border-slate-200 hover:text-[#16834A] hover:border-[#16834A]/30 hover:bg-slate-50'
        ]"
      >
        <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
        </svg>
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
