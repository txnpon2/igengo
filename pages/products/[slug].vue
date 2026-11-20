<script setup lang="ts">
const route = useRoute()
const { getProduct, getProducts, categories } = useContent()
const { locale, t } = useLocale()

const slug = String(route.params.slug)
const { data: product } = await useAsyncData(`product-${slug}`, () => getProduct(slug))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'ไม่พบผลิตภัณฑ์นี้', fatal: true })
}

const { data: allProducts } = await useAsyncData(`all-products-for-${slug}`, () => getProducts())

// 6 Core Suite Product Icon mapping fallback
const suiteIcons: Record<string, string> = {
  'regist-ai': '/images/products/icon-regist-ai.png',
  'hr-ai': '/images/products/icon-hr-ai.png',
  'igenq': '/images/products/icon-igenq.png',
  'i-finsoft': '/images/products/icon-i-finsoft.png',
  'i-smartsoft': '/images/products/icon-i-smartsoft.png',
  'i-smartflow': '/images/products/icon-i-smartflow.png',
}

const productIcon = computed(() => {
  return product.value?.icon || suiteIcons[slug] || '/images/products/icon-regist-ai.png'
})

// Related products from the same suite
const relatedProducts = computed(() => {
  const list = allProducts.value || []
  return list.filter((p) => p.slug !== slug).slice(0, 3)
})

// Gallery Lightbox modal state
const activeGalleryImage = ref<{ title: string; image: string; caption?: string } | null>(null)
const openGalleryModal = (item: { title: string; image: string; caption?: string }) => {
  activeGalleryImage.value = item
}
const closeGalleryModal = () => {
  activeGalleryImage.value = null
}

useSeoMeta({
  title: `${product.value.code} - ${product.value.title} | IGENCO`,
  description: product.value.summary,
})
</script>

<template>
  <article v-if="product" class="min-h-screen bg-white">
    
    <!-- Hero Banner with Soft Emerald Gradient & High-Detail Showcase -->
    <section class="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-[#F4F6F4] via-white to-white border-b border-slate-200/80 overflow-hidden">
      
      <!-- Subtle Ambient Glow -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        
        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/#products" class="hover:text-[#16834A] transition-colors">ผลิตภัณฑ์และบริการ</NuxtLink>
          <span class="text-slate-300">/</span>
          <span class="text-[#16834A] font-semibold">{{ product.code }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Main Information & Hero Content -->
          <div class="lg:col-span-8">
            
            <!-- Badges Bar -->
            <div class="flex flex-wrap items-center gap-2.5 mb-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 border border-[#16834A]/25 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
                </span>
                <span>มาตรฐาน ISO/IEC 29110</span>
              </div>

              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                PDPA Compliant
              </span>

              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                {{ product.deploy || 'On-Premise / Cloud' }}
              </span>
            </div>

            <!-- Product Icon + Title Block -->
            <div class="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              <!-- Squircle Icon -->
              <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] overflow-hidden shadow-xl shadow-slate-900/10 shrink-0 bg-white border border-slate-100 flex items-center justify-center">
                <img
                  :src="productIcon"
                  :alt="product.code"
                  class="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-[1.15]">
                  {{ product.code }}
                </h1>
                <p class="mt-2 text-xl sm:text-2xl font-bold font-heading text-[#16834A] tracking-tight">
                  {{ product.title }}
                </p>
              </div>
            </div>

            <!-- Target Audience Badge -->
            <div class="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100/90 text-slate-700 text-xs sm:text-sm font-medium">
              <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{{ product.audience }}</span>
            </div>

            <!-- Summary Description -->
            <p class="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {{ product.summary }}
            </p>

            <!-- Highlights Chips -->
            <div class="mt-6">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">ฟังก์ชันเด่นสำคัญ (Key Highlights)</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="h in product.highlights"
                  :key="h"
                  class="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-[#16834A] text-xs sm:text-sm font-semibold border border-emerald-200/60 shadow-sm"
                >
                  ✓ {{ h }}
                </span>
              </div>
            </div>

            <!-- Primary CTAs -->
            <div class="mt-8 flex flex-wrap gap-3.5 items-center">
              <NuxtLink
                :to="{ path: '/contact', query: { product: product.slug } }"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-semibold text-sm transition-all shadow-lg shadow-[#16834A]/25 active:scale-95"
              >
                <span>นัดหมายสาธิตระบบ / ขอใบเสนอราคา</span>
                <span class="text-base">→</span>
              </NuxtLink>

              <NuxtLink
                to="/#products"
                class="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-heading font-semibold text-sm transition-all border border-slate-300"
              >
                <span>ดูระบบอื่นทั้งหมด</span>
              </NuxtLink>
            </div>

          </div>

          <!-- Right Column: Enterprise Architecture & Specs Card -->
          <div class="lg:col-span-4 w-full">
            <div class="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/50">
              <h3 class="font-heading font-bold text-base text-[#171717] pb-3 border-b border-slate-100">
                ข้อมูลสถาปัตยกรรมระบบ
              </h3>

              <dl class="mt-4 space-y-4 text-xs sm:text-sm">
                <div>
                  <dt class="text-slate-400 font-medium">รูปแบบการติดตั้ง (Deployment)</dt>
                  <dd class="mt-0.5 font-semibold text-[#171717]">{{ product.deploy || 'On-Premise / Private Cloud' }}</dd>
                </div>

                <div>
                  <dt class="text-slate-400 font-medium">มาตรฐานการพัฒนาซอฟต์แวร์</dt>
                  <dd class="mt-0.5 font-semibold text-emerald-700">ISO/IEC 29110 Certified</dd>
                </div>

                <div>
                  <dt class="text-slate-400 font-medium">ความมั่นคงปลอดภัยและการคุ้มครองข้อมูล</dt>
                  <dd class="mt-0.5 font-semibold text-[#171717]">Thailand PDPA & Data Encryption</dd>
                </div>

                <div>
                  <dt class="text-slate-400 font-medium">การเชื่อมต่อระบบเดิม (Integration)</dt>
                  <dd class="mt-0.5 font-semibold text-[#171717]">RESTful API, Webhook, SSO, LDAP</dd>
                </div>

                <div>
                  <dt class="text-slate-400 font-medium">การสนับสนุนทางเทคนิค (Support & SLA)</dt>
                  <dd class="mt-0.5 font-semibold text-[#171717]">Enterprise Support & SLA Guarantee</dd>
                </div>
              </dl>

              <!-- Direct Download Brochures -->
              <div v-if="product.brochures && product.brochures.length" class="mt-5 pt-4 border-t border-slate-100 text-left">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">เอกสารดาวน์โหลด (Brochures)</h4>
                <div class="space-y-2">
                  <a
                    v-for="b in product.brochures"
                    :key="b.title"
                    :href="b.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 text-xs font-semibold text-[#16834A] hover:text-[#106B3B] hover:underline p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 transition-colors"
                  >
                    <svg class="w-4 h-4 text-[#16834A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="truncate">{{ b.title }}</span>
                  </a>
                </div>
              </div>

              <!-- Official Website External Link -->
              <div v-if="product.externalUrl" class="mt-4 pt-3 border-t border-slate-100 text-left">
                <a
                  :href="product.externalUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-heading font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>เยี่ยมชมเว็บไซต์ {{ product.externalUrl.replace('https://www.', '').replace('https://', '').replace('http://www.', '').replace('http://', '').replace(/\/$/, '') }}</span>
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <!-- Direct Contact Person -->
              <div v-if="product.contact" class="mt-4 pt-3 border-t border-slate-100 text-left text-xs text-slate-600">
                <span class="text-slate-400 font-medium block">ผู้ประสานงานโครงการ</span>
                <span class="font-bold text-[#171717] block mt-0.5">{{ product.contact.name }}</span>
                <span class="block text-slate-500 mt-0.5">โทร: {{ product.contact.phone }}</span>
                <a :href="'mailto:' + product.contact.email" class="text-[#16834A] hover:underline block mt-0.5 font-medium">
                  {{ product.contact.email }}
                </a>
              </div>

              <div class="mt-5 pt-4 border-t border-slate-100">
                <p class="text-xs text-slate-500 leading-relaxed">
                  ต้องการปรับแต่งหรือเชื่อมต่อกับฐานข้อมูลเดิมขององค์กร ทีม System Analyst ของเราพร้อมให้คำปรึกษา
                </p>
                <NuxtLink
                  to="/contact"
                  class="mt-3 block text-center text-xs font-bold text-[#16834A] hover:text-[#106B3B] hover:underline"
                >
                  ติดต่อทีมวิศวกรซอฟต์แวร์ →
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Infographics & Workflow Diagrams Section -->
    <section v-if="product.gallery && product.gallery.length" class="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200/80">
      <div class="wrap">
        <div class="max-w-3xl mb-10 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <span>WORKFLOW & INFOGRAPHICS</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            แผนผังกระบวนการทำงานและภาพรวมระบบ
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-500">
            {{ product.gallerySubtitle || 'คลิกที่ภาพเพื่อดูรายละเอียดขนาดใหญ่ แสดงขั้นตอนกระบวนการทำงานและภาพรวมของระบบ' }}
          </p>
        </div>

        <div :class="product.gallery.length === 1 ? 'max-w-4xl' : 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'">
          <NuxtLink
            v-for="(item, idx) in product.gallery"
            :key="idx"
            :to="item.link || '#'"
            class="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#16834A]/50 transition-all duration-300 flex flex-col text-left cursor-pointer"
            @click="!item.link ? openGalleryModal(item) : null"
          >
            <!-- Image Thumbnail with Zoom Overlay -->
            <div class="relative aspect-[16/9] bg-gradient-to-b from-slate-50 to-slate-100/70 overflow-hidden flex items-center justify-center border-b border-slate-100 p-3 sm:p-4">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs font-bold font-heading shadow-md">
                  <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{{ item.link ? 'คลิกเพื่อดูภาพและรายละเอียดทั้งหมด' : 'คลิกเพื่อดูภาพขนาดใหญ่' }}</span>
                </span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug">
                  {{ item.title }}
                </h3>
                <p v-if="item.caption" class="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {{ item.caption }}
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#16834A]">
                <span class="font-bold">{{ item.link ? 'ดูภาพและรายละเอียดฉบับเต็ม' : 'ดูภาพความละเอียดเต็ม' }}</span>
                <span class="transform group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Role-Based Features: Admin vs Attendees -->
    <section v-if="product.adminFeatures || product.userFeatures" class="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div class="wrap">
        <div class="max-w-3xl mb-12 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <span>ROLE-BASED CAPABILITIES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            คุณสมบัติการใช้งานแยกตามบทบาท
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-500">
            ออกแบบให้ผู้ดูแลระบบควบคุมการทำงานได้เบ็ดเสร็จ และผู้เข้าร่วมงานใช้งานได้สะดวก รวดเร็ว
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          <!-- Column 1: For Administrators -->
          <div v-if="product.adminFeatures" class="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16834A] text-white shadow-md shadow-[#16834A]/25 shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span class="text-xs font-bold font-heading text-[#16834A] uppercase tracking-wider block">Administrator Controls</span>
                  <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">คุณสมบัติการใช้งานสำหรับผู้ดูแลระบบ</h3>
                </div>
              </div>

              <ul class="space-y-3.5">
                <li
                  v-for="(feat, idx) in product.adminFeatures"
                  :key="idx"
                  class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">
                    <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Column 2: For General Users / Attendees -->
          <div v-if="product.userFeatures" class="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-md shadow-slate-900/20 shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span class="text-xs font-bold font-heading text-slate-500 uppercase tracking-wider block">Attendee & Public Portal</span>
                  <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">คุณสมบัติสำหรับสมาชิกและผู้ใช้งานทั่วไป</h3>
                </div>
              </div>

              <ul class="space-y-3.5">
                <li
                  v-for="(feat, idx) in product.userFeatures"
                  :key="idx"
                  class="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">
                    <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Submodules Section (e.g. i-Queue by Regist.ai) -->
    <section v-if="product.subModules && product.subModules.length" class="py-16 sm:py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      <div class="wrap text-left">
        <div v-for="sub in product.subModules" :key="sub.code" class="space-y-8">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-heading font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
              <span>SPECIAL INTEGRATED MODULE</span>
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
              {{ sub.title }}
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {{ sub.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              v-for="(feat, fIdx) in sub.features"
              :key="fIdx"
              class="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-all flex items-start gap-3.5 backdrop-blur-sm"
            >
              <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-xs font-heading">
                0{{ fIdx + 1 }}
              </div>
              <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {{ feat }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Capabilities Section (ความสามารถหลักของระบบ) -->
    <section class="py-16 sm:py-24 bg-white">
      <div class="wrap">
        
        <div class="max-w-2xl mb-12">
          <div class="section-eyebrow mb-3">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
            </span>
            <span>SYSTEM CAPABILITIES</span>
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            ความสามารถหลักของระบบ <span class="text-gradient-emerald">{{ product.code }}</span>
          </h2>
          <p class="mt-3 text-base text-slate-500">
            ออกแบบโครงสร้างการทำงานให้ครอบคลุม ตอบโจทย์ผู้ใช้งานทั้งระดับปฏิบัติการและระดับบริหาร
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(f, idx) in product.features"
            :key="f"
            class="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#16834A]/30 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div class="h-8 w-8 rounded-full bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0 font-bold text-xs font-heading">
              0{{ idx + 1 }}
            </div>
            <div>
              <p class="text-base font-semibold text-[#171717] leading-snug">
                {{ f }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Related Products Section (ระบบอื่นในชุดผลิตภัณฑ์) -->
    <section v-if="relatedProducts.length" class="py-16 sm:py-20 bg-[#F4F5F4] border-t border-slate-200/80">
      <div class="wrap">
        
        <div class="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
              โซลูชันอื่นในชุดผลิตภัณฑ์ <span class="text-[#16834A]">IGENCO</span>
            </h2>
            <p class="text-sm text-slate-500 mt-1">สามารถเชื่อมต่อและทำงานร่วมกันได้อย่างไร้รอยต่อ</p>
          </div>
          <NuxtLink to="/#products" class="text-sm font-semibold text-[#16834A] hover:underline">
            ดูทั้งหมด →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="p in relatedProducts"
            :key="p.slug"
            :to="`/products/${p.slug}`"
            class="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#16834A]/40 shadow-sm hover:shadow-lg transition-all flex items-start gap-4"
          >
            <div class="w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img
                :src="p.icon || suiteIcons[p.slug] || '/images/products/icon-regist-ai.png'"
                :alt="p.code"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 class="font-heading font-bold text-base text-[#171717] group-hover:text-[#16834A] transition-colors">
                {{ p.code }}
              </h3>
              <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                {{ p.title }}
              </p>
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- CTA Band at Bottom -->
    <CtaBand />

    <!-- Gallery Image Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeGalleryImage"
          class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
          @click="closeGalleryModal"
        >
          <div class="relative max-w-6xl max-h-[92vh] flex flex-col items-center justify-center" @click.stop>
            <button
              type="button"
              aria-label="ปิดรูปภาพ"
              class="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all focus:outline-none"
              @click="closeGalleryModal"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              :src="activeGalleryImage.image"
              :alt="activeGalleryImage.title"
              class="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
            <div class="mt-4 text-center text-white font-heading max-w-3xl">
              <h4 class="text-base sm:text-xl font-bold">{{ activeGalleryImage.title }}</h4>
              <p v-if="activeGalleryImage.caption" class="text-xs sm:text-sm text-slate-300 mt-1 font-normal font-sans">
                {{ activeGalleryImage.caption }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </article>
</template>
