<script setup lang="ts">
const { locale, t } = useLocale()

// Lightbox state for expanding images
const isLightboxOpen = ref(false)

function openLightbox() {
  isLightboxOpen.value = true
}

function closeLightbox() {
  isLightboxOpen.value = false
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isLightboxOpen.value) {
    closeLightbox()
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', onKeyDown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeyDown)
  }
})

useSeoMeta({
  title: 'i-Queue by Regist.ai ระบบบริหารคิวอัจฉริยะแบบ New Normal | IGENCO',
  description: 'ระบบบริหารคิว i-Queue by Regist.ai เหมาะสำหรับการตรวจสุขภาพ ฉีดวัคซีนให้พนักงาน โรงพยาบาล ร้านอาหาร คลินิก ลดความเสี่ยงการสัมผัสหน้าจอกดบัตรคิว',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-20">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/#products" class="hover:text-[#16834A] transition-colors">ผลิตภัณฑ์</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/products/regist-ai" class="hover:text-[#16834A] transition-colors">Regist.ai</NuxtLink>
          <span class="text-slate-300">/</span>
          <span class="text-purple-700 font-semibold">i-Queue ระบบการจัดการคิว</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-heading font-bold uppercase tracking-wider border border-purple-200">
                <span class="w-2 h-2 rounded-full bg-purple-600"></span>
                i-Queue by Regist.ai
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                New Normal Solution
              </span>
              <span class="px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-heading font-medium border border-emerald-200/60">
                PDPA Ready
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              ระบบการจัดการคิว i-Queue by Regist.ai
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              ระบบบริหารคิว เหมาะสำหรับ <strong>การตรวจสุขภาพ ฉีดวัคซีนให้พนักงาน โรงพยาบาล ร้านอาหาร และอื่นๆ</strong> ช่วยลดความเสี่ยงในการสัมผัสหน้าจอกดบัตรคิว สามารถใช้งานได้อย่างสะดวกบน Tablet / Smart Phone
            </p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <NuxtLink
              to="/products/regist-ai"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold font-heading border border-slate-300 shadow-xs transition-all"
            >
              <svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>กลับสู่หน้า Regist.ai</span>
            </NuxtLink>

            <NuxtLink
              :to="{ path: '/contact', query: { product: 'regist-ai' } }"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-semibold font-heading shadow-md transition-all active:scale-95"
            >
              <span>นัดหมายสาธิตระบบ</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="wrap py-10 sm:py-14 space-y-10 sm:space-y-12 text-left">

      <!-- SECTION 1: Featured Image Showcase -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-lg shadow-slate-200/40 overflow-hidden">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-purple-700 font-heading block">แผนผังระบบ</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">ระบบ I - Queue ระบบจัดการคิวแบบ New Normal</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors"
            @click="openLightbox"
          >
            <svg class="w-4 h-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span>คลิกดูภาพเต็มจอ</span>
          </button>
        </div>

        <!-- Featured Image Frame -->
        <div
          class="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 cursor-pointer group shadow-inner"
          @click="openLightbox"
          title="คลิกเพื่อขยายภาพขนาดใหญ่"
        >
          <img
            src="/images/products/regist-ai/iqueue-overview.jpg"
            alt="ระบบการจัดการคิว i-Queue by Regist.ai"
            class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-[#171717] text-xs sm:text-sm font-bold font-heading shadow-xl">
              <svg class="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              <span>คลิกเพื่อดูภาพความละเอียดสูง (Full Screen)</span>
            </span>
          </div>
        </div>

        <!-- Core Highlight Banner -->
        <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-200/70 text-purple-950 flex items-start sm:items-center gap-3.5">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white shadow-sm font-bold">
            iQ
          </div>
          <div>
            <strong class="font-heading text-sm sm:text-base block">ระบบ I - Queue ระบบจัดการคิวแบบ New Normal</strong>
            <p class="text-xs sm:text-sm text-purple-900 mt-0.5 leading-relaxed">
              ช่วยลดความเสี่ยงในการสัมผัสหน้าจอกดบัตรคิว สามารถใช้ใน Tablet / Smart Phone ได้อย่างสะดวก รวดเร็ว ปลอดภัย
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Target Businesses Checklist -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="max-w-2xl mb-6">
          <span class="text-xs font-bold uppercase tracking-wider text-purple-700 font-heading block mb-1">กลุ่มเป้าหมาย</span>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">ธุรกิจที่เหมาะสำหรับโปรแกรมการจัดการคิว</h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">ออกแบบให้รองรับทั้งธุรกิจบริการทางการแพทย์ และธุรกิจบริการอาหารและเครื่องดื่ม</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/80 text-center">
            <span class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold shadow-xs">✓</span>
            <span class="font-heading font-bold text-sm text-purple-950 block">โรงพยาบาล</span>
            <span class="text-[11px] text-purple-800">Hospital</span>
          </div>

          <div class="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/80 text-center">
            <span class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold shadow-xs">✓</span>
            <span class="font-heading font-bold text-sm text-purple-950 block">โรงพยาบาลสนาม</span>
            <span class="text-[11px] text-purple-800">Field Hospital</span>
          </div>

          <div class="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/80 text-center">
            <span class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold shadow-xs">✓</span>
            <span class="font-heading font-bold text-sm text-purple-950 block">คลินิก</span>
            <span class="text-[11px] text-purple-800">Clinic / Healthcare</span>
          </div>

          <div class="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/80 text-center">
            <span class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold shadow-xs">✓</span>
            <span class="font-heading font-bold text-sm text-purple-950 block">ร้านอาหาร</span>
            <span class="text-[11px] text-purple-800">Restaurant / Cafe</span>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Program Capabilities -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="max-w-2xl mb-6">
          <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">SYSTEM FEATURES</span>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">คุณสมบัติโปรแกรม i-Queue</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
            <div>
              <strong class="text-slate-900 block font-heading mb-0.5">จองคิวออนไลน์ล่วงหน้าผ่านสมาร์ทโฟน</strong>
              <p class="text-slate-600 leading-relaxed">สามารถลงทะเบียนจองคิวล่วงหน้าออนไลน์ผ่านสมาร์ทโฟน โดยการสแกน QR Code</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
            <div>
              <strong class="text-slate-900 block font-heading mb-0.5">สแกนและสั่งพิมพ์บัตรคิวหน้างาน</strong>
              <p class="text-slate-600 leading-relaxed">ผู้รับบริการแสดงคิวให้เจ้าหน้าที่สแกน และสั่งพิมพ์บัตรคิวและแบบฟอร์มเข้าร่วมงานผ่าน Thermal Printer</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
            <div>
              <strong class="text-slate-900 block font-heading mb-0.5">ระบบบริหารคิวหน้างานแบบหลายจุดบริการ</strong>
              <p class="text-slate-600 leading-relaxed">สร้างจุดบริการได้หลายจุดต่อหนึ่งสถานที่ พร้อมระบบเรียกคิวเข้ารับบริการอย่างเป็นระบบ</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
            <div>
              <strong class="text-slate-900 block font-heading mb-0.5">พิมพ์รายงานจำนวนผู้รับบริการตามจุด Check-Point</strong>
              <p class="text-slate-600 leading-relaxed">สามารถพิมพ์รายงานจำนวนผู้รับบริการตามจุด Check-Point แต่ละแห่งได้แบบ Real-time</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
            <div>
              <strong class="text-slate-900 block font-heading mb-0.5">เชื่อมโยงข้อมูลกับระบบ Regist.ai</strong>
              <p class="text-slate-600 leading-relaxed">สามารถเชื่อมโยงข้อมูลการลงทะเบียนจองคิวล่วงหน้าเพื่อรับ e-Ticket ผ่านระบบ Regist.ai ได้ทันที</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
            <div>
              <strong class="text-slate-900 block font-heading mb-0.5">ระบบจัดการนโยบายความเป็นส่วนตัว (PDPA)</strong>
              <p class="text-slate-600 leading-relaxed">มีระบบจัดการนโยบายความเป็นส่วนตัว และการให้ความยินยอมในการเก็บรวบรวมข้อมูลส่วนบุคคลตามกฎหมาย</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Dedicated Sub-Pages Navigation Cards -->
      <section class="space-y-4 text-left">
        <div class="max-w-2xl">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading block mb-1">ขั้นตอนการทำงานหน้างาน</span>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">ดูขั้นตอนการจัดคิวแยกตามรูปแบบการใช้งาน</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Card 1: โรงพยาบาล / ฉีดวัคซีน / ตรวจสุขภาพ -->
          <NuxtLink
            to="/products/regist-ai-iqueue-hospital"
            class="group p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                <img
                  src="/images/products/regist-ai/iqueue-flow-hospital.jpg"
                  alt="ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">รูปแบบที่ 1 (Multi Check-point)</span>
              <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] group-hover:text-[#16834A] transition-colors">
                ขั้นตอนการจัดคิวหน้างาน (โรงพยาบาล, จุดฉีดวัคซีน, ตรวจสุขภาพ)
              </h3>
              <p class="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                การเรียกคิวแบบหลายช่องบริการต่อเนื่อง เมื่อ Check-in จะได้เลขคิว เจ้าหน้าที่สามารถเรียกคิวเดียวกันตาม 5 จุดบริการได้ต่อเนื่อง
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#16834A]">
              <span>ดูแผนผังและขั้นตอนฉบับเต็ม</span>
              <span class="transform group-hover:translate-x-1.5 transition-transform">→</span>
            </div>
          </NuxtLink>

          <!-- Card 2: ร้านอาหาร และศูนย์บริการ -->
          <NuxtLink
            to="/products/regist-ai-iqueue-restaurant"
            class="group p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                <img
                  src="/images/products/regist-ai/iqueue-flow-restaurant.jpg"
                  alt="ขั้นตอนการใช้งานระบบจัดคิว ร้านอาหาร"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-600 font-heading block mb-1">รูปแบบที่ 2 (Single Counter)</span>
              <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] group-hover:text-amber-600 transition-colors">
                ขั้นตอนการใช้งานระบบจัดคิว (ร้านอาหาร และศูนย์บริการ)
              </h3>
              <p class="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                การเรียกคิวแบบหนึ่งช่องบริการ กดบัตรคิวหน้าร้านบน Tablet/มือถือ เจ้าหน้าที่เรียกคิวระบุโต๊ะ และแจ้งเตือนเวลา
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>ดูแผนผังและขั้นตอนฉบับเต็ม</span>
              <span class="transform group-hover:translate-x-1.5 transition-transform">→</span>
            </div>
          </NuxtLink>

        </div>
      </section>

      <!-- SECTION 5: Contact Footer -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">สนใจสอบถามหรือติดตั้งระบบ</span>
            <h3 class="font-heading font-bold text-lg text-[#171717]">i-Queue by Regist.ai ระบบบริหารคิวอัจฉริยะ</h3>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">ผู้ประสานงานโครงการ: คุณทวีวัตร์ ทรรศนะประทีป | โทร: 02-532-5151, 081-752-9549</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <NuxtLink
              to="/products/regist-ai"
              class="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold font-heading transition-colors"
            >
              ← กลับสู่ Regist.ai
            </NuxtLink>
            <NuxtLink
              :to="{ path: '/contact', query: { product: 'regist-ai' } }"
              class="px-5 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-semibold font-heading shadow-md transition-all active:scale-95"
            >
              ติดต่อขอใบเสนอราคา
            </NuxtLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Fullscreen Lightbox Modal -->
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
          v-if="isLightboxOpen"
          class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
          @click="closeLightbox"
        >
          <div class="relative max-w-6xl max-h-[92vh] flex flex-col items-center justify-center" @click.stop>
            <button
              type="button"
              aria-label="ปิดรูปภาพ"
              class="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all focus:outline-none"
              @click="closeLightbox"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/images/products/regist-ai/iqueue-overview.jpg"
              alt="ระบบการจัดการคิว i-Queue by Regist.ai"
              class="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
            <div class="mt-4 text-center text-white font-heading max-w-3xl">
              <h4 class="text-base sm:text-xl font-bold">ระบบการจัดการคิว i-Queue by Regist.ai (New Normal)</h4>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
