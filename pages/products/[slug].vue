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

              <div class="mt-6 pt-5 border-t border-slate-100">
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

  </article>
</template>
