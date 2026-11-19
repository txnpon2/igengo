<script setup lang="ts">
const { locale } = useLocale()
const { openProduct } = useAppleModal()
const { getProduct } = useContent()

interface SuiteProduct {
  slug: string
  code: string
  title: string
  icon: string
}

// 6 Core Enterprise Products in the exact sequence specified
const suiteProducts: SuiteProduct[] = [
  {
    slug: 'regist-ai',
    code: 'Regist.ai',
    title: 'ระบบบริหารการลงทะเบียนอัจฉริยะ',
    icon: '/images/products/icon-regist-ai.png',
  },
  {
    slug: 'hr-ai',
    code: 'HR.ai',
    title: 'ระบบบริหารทรัพยากรมนุษย์อัจฉริยะ',
    icon: '/images/products/icon-hr-ai.png',
  },
  {
    slug: 'igenq',
    code: 'iGenQ',
    title: 'โปรแกรมระบบจัดการคิวอัจฉริยะ',
    icon: '/images/products/icon-igenq.png',
  },
  {
    slug: 'i-finsoft',
    code: 'i-FinSoft',
    title: 'โปรแกรมเพื่อการบริหารทรัพยากรขององค์กร (ERP)',
    icon: '/images/products/icon-i-finsoft.png',
  },
  {
    slug: 'i-smartsoft',
    code: 'i-SmartSoft',
    title: 'โปรแกรมระบบบริหารสำนักงานอิเล็กทรอนิกส์ (e-Office)',
    icon: '/images/products/icon-i-smartsoft.png',
  },
  {
    slug: 'i-smartflow',
    code: 'i-SmartFlow',
    title: 'เครื่องมือสำหรับการออกแบบกระบวนการทำงานและกำหนดเส้นทางการทำงาน (Workflow)',
    icon: '/images/products/icon-i-smartflow.png',
  },
]

// Open Apple Product Modal popup on card click
async function handleOpenPopup(slug: string) {
  const p = await getProduct(slug)
  if (p) {
    openProduct(p)
  }
}
</script>

<template>
  <!-- Apple-Style Compact "ดูข้อมูลผลิตภัณฑ์ตระกูลนี้" Section -->
  <section id="products" class="py-12 sm:py-16 bg-white border-b border-slate-200/80">
    <div class="wrap">
      
      <!-- Section Header -->
      <div class="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
        <!-- Eyebrow Pill with Pulsing Dot -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 border border-[#16834A]/20 text-[#16834A] text-xs font-heading font-semibold tracking-wider uppercase mb-2.5 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>IGENCO ENTERPRISE FAMILY</span>
        </div>

        <!-- Main Headline -->
        <h2 class="text-2xl sm:text-3xl lg:text-[38px] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.2]">
          <template v-if="locale === 'th'">
            ดูข้อมูลผลิตภัณฑ์ตระกูลนี้
          </template>
          <template v-else>
            Explore the Product Family
          </template>
        </h2>
      </div>

      <!-- 6-Product Compact Grid: Only Icon + Name -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        <article
          v-for="p in suiteProducts"
          :key="p.slug"
          class="group relative flex flex-col items-center justify-center rounded-[24px] sm:rounded-[28px] bg-[#F5F5F7] border border-black/[0.04] hover:border-[#16834A]/30 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1.5 cursor-pointer text-center select-none"
          title="คลิกเพื่อดูข้อมูลระบบ"
          @click="handleOpenPopup(p.slug)"
        >
          <!-- High-Res Squircle App Icon (512x512) -->
          <div class="w-22 h-22 sm:w-28 sm:h-28 rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)] group-hover:scale-108 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition-all duration-300 flex items-center justify-center bg-white">
            <img
              :src="p.icon"
              :alt="p.code"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Program Name Only -->
          <h3 class="mt-4 text-xl sm:text-2xl font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors tracking-tight">
            {{ p.code }}
          </h3>
        </article>
      </div>

      <!-- Bottom Compare / All Products Bar -->
      <div class="mt-10 text-center">
        <NuxtLink
          to="/products"
          class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F5F5F7] hover:bg-[#16834A] text-slate-700 hover:text-white font-heading font-semibold text-xs sm:text-sm transition-all shadow-sm border border-black/[0.04]"
        >
          <span>{{ locale === 'th' ? 'สำรวจและเปรียบเทียบระบบทั้งหมด' : 'Explore All Products & Matrix' }}</span>
          <span class="text-base">→</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
