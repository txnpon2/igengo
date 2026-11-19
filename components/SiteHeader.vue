<script setup lang="ts">
const { site, categories, getProducts } = useContent()
const { locale, setLocale, t } = useLocale()
const { data: allProducts } = await useAsyncData('header-products', () => getProducts())
const route = useRoute()
const open = ref(false)
const dropdownOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')

const isHome = computed(() => route.path === '/')

function checkScroll() {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 40
    if (route.path === '/' && window.scrollY < 200) {
      activeSection.value = ''
    }
  }
}

// Active state detection
const isHomeActive = computed(() => {
  return route.path === '/' && !activeSection.value
})

const isProductsActive = computed(() => {
  return route.path.startsWith('/products') || (route.path === '/' && activeSection.value === 'products')
})

const isAboutActive = computed(() => {
  return route.path.startsWith('/about')
})

const isNewsActive = computed(() => {
  return route.path.startsWith('/news') || (route.path === '/' && (route.hash === '#news' || activeSection.value === 'news'))
})

const isContactActive = computed(() => {
  return route.path.startsWith('/contact')
})

function isLinkActive(key: string) {
  if (key === 'about') return isAboutActive.value
  if (key === 'news') return isNewsActive.value
  if (key === 'contact') return isContactActive.value
  return false
}

let observer: IntersectionObserver | null = null

function setupIntersectionObserver() {
  if (!import.meta.client || route.path !== '/') return
  if (observer) observer.disconnect()

  const sections = ['products', 'news']

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    }
    if (window.scrollY < 200) {
      activeSection.value = ''
    }
  }, {
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.1,
  })

  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el && observer) observer.observe(el)
  })
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    nextTick(() => {
      setupIntersectionObserver()
    })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', checkScroll)
    if (observer) observer.disconnect()
  }
})

watch(() => route.fullPath, () => {
  open.value = false
  dropdownOpen.value = false
  checkScroll()
  activeSection.value = ''
  nextTick(() => {
    setupIntersectionObserver()
  })
})

const links = computed(() => [
  { label: t('nav.news'), to: '/news', key: 'news' },
])

// Transparent when at top of homepage, solid white when scrolled or on inner pages
const isTransparent = computed(() => isHome.value && !isScrolled.value && !open.value)
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300 font-heading"
    :class="[
      isTransparent
        ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white border-transparent'
        : 'bg-white/95 text-[#171717] shadow-md backdrop-blur-xl border-b border-[#171717]/10'
    ]"
  >
    <div class="wrap flex h-20 items-center justify-between gap-4">
      
      <!-- Logo IGENCO on the Left -->
      <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none">
        <div class="relative flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-108 shrink-0">
          <img
            src="/images/logo.png"
            alt="IGENCO Logo"
            class="w-full h-full object-contain drop-shadow-md"
          />
        </div>
        <div class="leading-tight">
          <span
            class="block text-xl sm:text-2xl font-bold tracking-tight transition-colors"
            :class="isTransparent ? 'text-white group-hover:text-emerald-300' : 'text-[#171717] group-hover:text-[#16834A]'"
          >
            {{ site.name }}
          </span>
          <span
            class="block text-xs font-normal transition-colors"
            :class="isTransparent ? 'text-white/80' : 'text-slate-500'"
          >
            {{ locale === 'th' ? site.legalName : 'IGENCO Co., Ltd.' }}
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation on the Right -->
      <nav class="hidden lg:flex items-center gap-1.5 text-[15px] font-medium" aria-label="เมนูหลัก">
        
        <!-- Home Link (หน้าแรก) -->
        <NuxtLink
          to="/"
          class="relative px-3.5 py-2 transition-all font-heading"
          :class="[
            isHomeActive
              ? (isTransparent
                  ? 'text-white font-bold'
                  : 'text-[#16834A] font-bold')
              : (isTransparent
                  ? 'text-white/85 hover:text-white'
                  : 'text-[#171717]/85 hover:text-[#16834A]')
          ]"
        >
          <span>{{ t('nav.home') }}</span>
          <!-- Sleek Green Bottom Underline -->
          <span
            v-if="isHomeActive"
            class="absolute -bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full transition-all"
            :class="isTransparent ? 'bg-white shadow-sm' : 'bg-[#16834A] shadow-sm'"
          ></span>
        </NuxtLink>

        <!-- Products Mega Menu Dropdown -->
        <div class="group relative py-2">
          <NuxtLink
            to="/products"
            class="relative flex items-center gap-1.5 px-3.5 py-2 transition-all font-heading"
            :class="[
              isProductsActive
                ? (isTransparent
                    ? 'text-white font-bold'
                    : 'text-[#16834A] font-bold')
                : (isTransparent
                    ? 'text-white/85 hover:text-white'
                    : 'text-[#171717]/85 hover:text-[#16834A]')
            ]"
          >
            <span>{{ t('nav.products') }}</span>
            <svg class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <!-- Sleek Green Bottom Underline -->
            <span
              v-if="isProductsActive"
              class="absolute -bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full transition-all"
              :class="isTransparent ? 'bg-white shadow-sm' : 'bg-[#16834A] shadow-sm'"
            ></span>
          </NuxtLink>

          <!-- Mega Menu Panel -->
          <div class="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            <div class="w-[580px] rounded-2xl border border-black/10 bg-white p-5 shadow-2xl backdrop-blur-2xl text-[#171717]">
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span class="text-xs font-bold uppercase tracking-wider text-[#16834A]">
                  {{ locale === 'th' ? 'โซลูชันซอฟต์แวร์มาตรฐาน ISO/IEC 29110' : 'ISO/IEC 29110 Certified Software Solutions' }}
                </span>
                <NuxtLink to="/products" class="text-xs font-semibold text-[#16834A] hover:underline">
                  {{ t('nav.allProducts') }} →
                </NuxtLink>
              </div>

              <!-- 2-Column Categories -->
              <div class="grid grid-cols-2 gap-3">
                <NuxtLink
                  v-for="(c, key) in categories"
                  :key="key"
                  :to="{ path: '/products', query: { category: key } }"
                  class="rounded-xl p-3 hover:bg-[#F4F5F4] transition-all group/item border border-transparent hover:border-[#16834A]/20"
                >
                  <span class="block text-sm font-bold text-[#171717] group-hover/item:text-[#16834A] transition-colors">
                    {{ c.label }}
                  </span>
                  <span class="block text-xs text-slate-500 mt-1 leading-snug">
                    {{ c.description }}
                  </span>
                </NuxtLink>
              </div>

              <!-- Quick Systems Direct Links -->
              <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                <span class="text-slate-400 font-normal">{{ t('nav.popularSystems') }}</span>
                <NuxtLink to="/products/hr-ai" class="font-semibold text-[#171717] hover:text-[#16834A]">HR.ai</NuxtLink>
                <span class="text-slate-300">·</span>
                <NuxtLink to="/products/igenq" class="font-semibold text-[#171717] hover:text-[#16834A]">iGenQ</NuxtLink>
                <span class="text-slate-300">·</span>
                <NuxtLink to="/products/i-smartsoft" class="font-semibold text-[#171717] hover:text-[#16834A]">i-SmartSoft</NuxtLink>
                <span class="text-slate-300">·</span>
                <NuxtLink to="/products/i-finsoft" class="font-semibold text-[#171717] hover:text-[#16834A]">i-FinSoft</NuxtLink>
                <span class="text-slate-300">·</span>
                <NuxtLink to="/products/regist-ai" class="font-semibold text-[#171717] hover:text-[#16834A]">Regist.ai</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- News Link with Sleek Green Bottom Underline -->
        <NuxtLink
          to="/news"
          class="relative px-3.5 py-2 transition-all font-heading"
          :class="[
            isNewsActive
              ? (isTransparent
                  ? 'text-white font-bold'
                  : 'text-[#16834A] font-bold')
              : (isTransparent
                  ? 'text-white/85 hover:text-white'
                  : 'text-[#171717]/85 hover:text-[#16834A]')
          ]"
        >
          <span>{{ t('nav.news') }}</span>
          <!-- Sleek Green Bottom Underline -->
          <span
            v-if="isNewsActive"
            class="absolute -bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full transition-all"
            :class="isTransparent ? 'bg-white shadow-sm' : 'bg-[#16834A] shadow-sm'"
          ></span>
        </NuxtLink>

        <!-- About Dropdown (เกี่ยวกับเรา) with 6 Separate Sub-pages -->
        <div class="group relative py-2">
          <NuxtLink
            to="/about"
            class="relative flex items-center gap-1.5 px-3.5 py-2 transition-all font-heading"
            :class="[
              isAboutActive
                ? (isTransparent
                    ? 'text-white font-bold'
                    : 'text-[#16834A] font-bold')
                : (isTransparent
                    ? 'text-white/85 hover:text-white'
                    : 'text-[#171717]/85 hover:text-[#16834A]')
            ]"
          >
            <span>{{ t('nav.about') }}</span>
            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <!-- Sleek Green Bottom Underline -->
            <span
              v-if="isAboutActive"
              class="absolute -bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full transition-all"
              :class="isTransparent ? 'bg-white shadow-sm' : 'bg-[#16834A] shadow-sm'"
            ></span>
          </NuxtLink>

          <!-- About Dropdown Menu matching User Screenshot -->
          <div class="invisible absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            <div class="w-64 rounded-2xl border border-black/10 bg-white p-2 shadow-2xl backdrop-blur-2xl text-[#171717] space-y-0.5 font-heading">
              
              <NuxtLink
                to="/about/history"
                class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#F4F5F4] transition-all group/item"
                :class="route.path === '/about/history' ? 'text-[#16834A] font-bold bg-[#F4F5F4]' : 'text-[#171717] hover:text-[#16834A]'"
              >
                <span>ประวัติความเป็นมา</span>
              </NuxtLink>

              <NuxtLink
                to="/about/policy"
                class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#F4F5F4] transition-all group/item"
                :class="route.path === '/about/policy' ? 'text-[#16834A] font-bold bg-[#F4F5F4]' : 'text-[#171717] hover:text-[#16834A]'"
              >
                <span>นโยบายบริษัท</span>
              </NuxtLink>

              <NuxtLink
                to="/about/culture"
                class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#F4F5F4] transition-all group/item"
                :class="route.path === '/about/culture' ? 'text-[#16834A] font-bold bg-[#F4F5F4]' : 'text-[#171717] hover:text-[#16834A]'"
              >
                <span>ค่านิยมและวัฒนธรรมองค์กร</span>
              </NuxtLink>

              <NuxtLink
                to="/about/organization"
                class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#F4F5F4] transition-all group/item"
                :class="route.path === '/about/organization' ? 'text-[#16834A] font-bold bg-[#F4F5F4]' : 'text-[#171717] hover:text-[#16834A]'"
              >
                <span>แผนผังการบริหาร</span>
              </NuxtLink>

              <NuxtLink
                to="/about/careers"
                class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#F4F5F4] transition-all group/item"
                :class="route.path === '/about/careers' ? 'text-[#16834A] font-bold bg-[#F4F5F4]' : 'text-[#171717] hover:text-[#16834A]'"
              >
                <span>สมัครงาน</span>
              </NuxtLink>

              <!-- Item 6: การคุ้มครองข้อมูลส่วนบุคคล with Flyout Sub-menu (แยกออกมาแบบในรูป) -->
              <div class="relative group/privacy">
                <NuxtLink
                  to="/about/privacy"
                  class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all group-hover/privacy:bg-[#16834A] group-hover/privacy:text-white"
                  :class="[
                    (route.path === '/about/privacy' || route.path === '/about/cookies')
                      ? 'bg-[#16834A] text-white font-bold'
                      : 'text-[#171717] hover:bg-[#16834A] hover:text-white'
                  ]"
                >
                  <span>การคุ้มครองข้อมูลส่วนบุคคล</span>
                  <svg class="w-4 h-4 transition-transform group-hover/privacy:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>

                <!-- Flyout Nested Sub-menu to the right (ตรงตามรูปภาพ: นโยบายความเป็นส่วนตัว / นโยบายการใช้คุกกี้) -->
                <div class="invisible opacity-0 group-hover/privacy:visible group-hover/privacy:opacity-100 group-focus-within/privacy:visible group-focus-within/privacy:opacity-100 transition-all duration-150 absolute left-full top-0 pl-1 z-50">
                  <div class="w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-2xl backdrop-blur-2xl text-[#171717] space-y-0.5 font-heading">
                    <NuxtLink
                      to="/about/privacy"
                      class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
                      :class="route.path === '/about/privacy' ? 'bg-[#16834A]/10 text-[#16834A] font-bold' : 'text-[#171717] hover:bg-[#F4F5F4] hover:text-[#16834A]'"
                    >
                      <span>นโยบายความเป็นส่วนตัว</span>
                    </NuxtLink>
                    <NuxtLink
                      to="/about/cookies"
                      class="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
                      :class="route.path === '/about/cookies' ? 'bg-[#16834A]/10 text-[#16834A] font-bold' : 'text-[#171717] hover:bg-[#F4F5F4] hover:text-[#16834A]'"
                    >
                      <span>นโยบายการใช้คุกกี้</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Contact Dropdown (ติดต่อเรา) with 2 Separate Sub-pages -->
        <div class="group relative py-2">
          <NuxtLink
            to="/contact/sales"
            class="relative flex items-center gap-1 px-3.5 py-2 transition-all font-heading"
            :class="[
              isContactActive
                ? (isTransparent
                    ? 'text-white font-bold'
                    : 'text-[#16834A] font-bold')
                : (isTransparent
                    ? 'text-white/85 hover:text-white'
                    : 'text-[#171717]/85 hover:text-[#16834A]')
            ]"
          >
            <span>{{ t('nav.contact') }}</span>
            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <!-- Sleek Green Bottom Underline -->
            <span
              v-if="isContactActive"
              class="absolute -bottom-0.5 left-3.5 right-3.5 h-[3px] rounded-full transition-all"
              :class="isTransparent ? 'bg-white shadow-sm' : 'bg-[#16834A] shadow-sm'"
            ></span>
          </NuxtLink>

          <!-- Contact Dropdown Menu -->
          <div class="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            <div class="w-80 rounded-2xl border border-black/10 bg-white p-3 shadow-2xl backdrop-blur-2xl text-[#171717] space-y-1">
              
              <!-- Sub-page 1: Contact Company / Office & Map -->
              <NuxtLink
                to="/contact/company"
                class="flex items-start gap-3 rounded-xl p-3 hover:bg-[#F4F5F4] transition-all group/item"
              >
                <div class="w-9 h-9 rounded-lg bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span class="block text-sm font-bold text-[#171717] group-hover/item:text-[#16834A] transition-colors">
                    1. ติดต่อบริษัท (สถานที่ & แผนที่)
                  </span>
                  <span class="block text-xs text-slate-500 mt-0.5 leading-snug">
                    สถานที่ตั้งสำนักงานใหญ่ แผนที่การเดินทาง
                  </span>
                </div>
              </NuxtLink>

              <!-- Sub-page 2: Contact Sales / Book Demo -->
              <NuxtLink
                to="/contact/sales"
                class="flex items-start gap-3 rounded-xl p-3 hover:bg-[#F4F5F4] transition-all group/item"
              >
                <div class="w-9 h-9 rounded-lg bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-sm font-bold text-[#171717] group-hover/item:text-[#16834A] transition-colors">
                    2. ติดต่อฝ่ายขาย / นัดสาธิตระบบ
                  </span>
                  <span class="block text-xs text-slate-500 mt-0.5 leading-snug">
                    ขอใบเสนอราคา และนัดหมายสาธิตระบบ
                  </span>
                </div>
              </NuxtLink>

            </div>
          </div>
        </div>

        <!-- Functional Thai / English Language Switcher -->
        <div class="ml-4 flex items-center">
          <div
            class="flex items-center rounded-full p-1 border transition-all shadow-sm"
            :class="[
              isTransparent
                ? 'bg-black/40 border-white/30 text-white'
                : 'bg-[#F4F5F4] border-slate-200 text-[#171717]'
            ]"
            role="group"
            aria-label="เปลี่ยนภาษา / Language Switcher"
          >
            <button
              type="button"
              aria-label="เปลี่ยนภาษาเป็นไทย (TH)"
              class="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-heading font-bold transition-all focus:outline-none"
              :class="[
                locale === 'th'
                  ? 'bg-[#16834A] text-white shadow-sm ring-1 ring-white/20'
                  : isTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-[#171717]/70 hover:text-[#171717] hover:bg-white/60'
              ]"
              @click="setLocale('th')"
            >
              <span>TH</span>
            </button>

            <span class="text-[11px] opacity-25 px-0.5 select-none">|</span>

            <button
              type="button"
              aria-label="Switch to English (EN)"
              class="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-heading font-bold transition-all focus:outline-none"
              :class="[
                locale === 'en'
                  ? 'bg-[#16834A] text-white shadow-sm ring-1 ring-white/20'
                  : isTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-[#171717]/70 hover:text-[#171717] hover:bg-white/60'
              ]"
              @click="setLocale('en')"
            >
              <span>EN</span>
            </button>
          </div>
        </div>

      </nav>

      <!-- Mobile Right Container: Language Switcher + Hamburger Button -->
      <div class="flex items-center gap-3 lg:hidden">
        <!-- Mobile Language Toggle Pill -->
        <div
          class="flex items-center rounded-full p-0.5 border text-xs"
          :class="isTransparent ? 'bg-black/40 border-white/30 text-white' : 'bg-slate-100 border-slate-200 text-[#171717]'"
        >
          <button
            type="button"
            class="px-2.5 py-1 rounded-full font-bold transition-all"
            :class="locale === 'th' ? 'bg-[#16834A] text-white shadow-sm' : 'opacity-70'"
            @click="setLocale('th')"
          >
            TH
          </button>
          <button
            type="button"
            class="px-2.5 py-1 rounded-full font-bold transition-all"
            :class="locale === 'en' ? 'bg-[#16834A] text-white shadow-sm' : 'opacity-70'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <!-- Mobile Hamburger Button -->
        <button
          class="flex items-center justify-center w-10 h-10 rounded-xl transition-colors focus:outline-none"
          :class="isTransparent ? 'text-white bg-white/15 hover:bg-white/25' : 'text-[#171717] bg-black/5 hover:bg-black/10'"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <span class="sr-only">{{ open ? 'ปิดเมนู' : 'เปิดเมนู' }}</span>
          <svg v-if="!open" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>

    <!-- Mobile Drawer -->
    <div
      v-show="open"
      id="mobile-nav"
      class="lg:hidden border-t border-[#171717]/10 bg-white/98 backdrop-blur-2xl px-6 py-6 text-[#171717] shadow-xl space-y-2"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all"
        :class="[
          isHomeActive
            ? 'bg-[#16834A]/10 text-[#16834A] font-bold border-l-4 border-[#16834A]'
            : 'text-[#171717] hover:bg-[#F4F5F4]'
        ]"
      >
        <span>{{ t('nav.home') }}</span>
        <span v-if="isHomeActive" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
      </NuxtLink>

      <NuxtLink
        to="/products"
        class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all"
        :class="[
          isProductsActive
            ? 'bg-[#16834A]/10 text-[#16834A] font-bold border-l-4 border-[#16834A]'
            : 'text-[#171717] hover:bg-[#F4F5F4]'
        ]"
      >
        <span>{{ t('nav.products') }}</span>
        <span v-if="isProductsActive" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
      </NuxtLink>

      <NuxtLink
        v-for="l in links"
        :key="l.to"
        :to="l.to"
        class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all"
        :class="[
          isLinkActive(l.key)
            ? 'bg-[#16834A]/10 text-[#16834A] font-bold border-l-4 border-[#16834A]'
            : 'text-[#171717] hover:bg-[#F4F5F4]'
        ]"
      >
        <span>{{ l.label }}</span>
        <span v-if="isLinkActive(l.key)" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
      </NuxtLink>

      <!-- Mobile About Section with 6 Sub-items -->
      <div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 space-y-1">
        <span class="block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#16834A]">
          {{ t('nav.about') }}
        </span>
        <NuxtLink
          to="/about/history"
          class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all"
          :class="route.path === '/about/history' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>ประวัติความเป็นมา</span>
          <span v-if="route.path === '/about/history'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
        <NuxtLink
          to="/about/policy"
          class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all"
          :class="route.path === '/about/policy' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>นโยบายบริษัท</span>
          <span v-if="route.path === '/about/policy'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
        <NuxtLink
          to="/about/culture"
          class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all"
          :class="route.path === '/about/culture' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>ค่านิยมและวัฒนธรรมองค์กร</span>
          <span v-if="route.path === '/about/culture'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
        <NuxtLink
          to="/about/organization"
          class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all"
          :class="route.path === '/about/organization' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>แผนผังการบริหาร</span>
          <span v-if="route.path === '/about/organization'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
        <NuxtLink
          to="/about/careers"
          class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all"
          :class="route.path === '/about/careers' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>สมัครงาน</span>
          <span v-if="route.path === '/about/careers'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
        <!-- Mobile Privacy & Cookies Sub-section -->
        <div class="pt-1 mt-1 border-t border-slate-200/60">
          <span class="block px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            การคุ้มครองข้อมูลส่วนบุคคล
          </span>
          <div class="pl-2 space-y-0.5">
            <NuxtLink
              to="/about/privacy"
              class="flex items-center justify-between rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all"
              :class="route.path === '/about/privacy' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
            >
              <span>↳ นโยบายความเป็นส่วนตัว</span>
              <span v-if="route.path === '/about/privacy'" class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            </NuxtLink>
            <NuxtLink
              to="/about/cookies"
              class="flex items-center justify-between rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all"
              :class="route.path === '/about/cookies' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
            >
              <span>↳ นโยบายการใช้คุกกี้</span>
              <span v-if="route.path === '/about/cookies'" class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile Contact Section with 2 Sub-items -->
      <div class="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 space-y-1">
        <span class="block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#16834A]">
          {{ t('nav.contact') }}
        </span>
        <NuxtLink
          to="/contact/company"
          class="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
          :class="route.path === '/contact/company' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>🏢 1. ติดต่อบริษัท & แผนที่</span>
          <span v-if="route.path === '/contact/company'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
        <NuxtLink
          to="/contact/sales"
          class="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
          :class="route.path === '/contact/sales' || route.path === '/contact' ? 'bg-white text-[#16834A] font-bold shadow-sm' : 'text-[#171717] hover:bg-white'"
        >
          <span>💼 2. ติดต่อฝ่ายขาย / นัดสาธิต</span>
          <span v-if="route.path === '/contact/sales' || route.path === '/contact'" class="w-2 h-2 rounded-full bg-[#16834A]"></span>
        </NuxtLink>
      </div>
      
      <!-- Mobile Language Switcher Row in Drawer -->
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between px-2">
        <span class="text-xs text-slate-500 font-medium">{{ t('nav.lang') }} / Language:</span>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all"
            :class="locale === 'th' ? 'bg-[#16834A] text-white shadow-sm' : 'bg-slate-100 text-[#171717]'"
            @click="setLocale('th')"
          >
            ภาษาไทย (TH)
          </button>
          <button
            type="button"
            class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all"
            :class="locale === 'en' ? 'bg-[#16834A] text-white shadow-sm' : 'bg-slate-100 text-[#171717]'"
            @click="setLocale('en')"
          >
            English (EN)
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
