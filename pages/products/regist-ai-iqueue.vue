<script setup lang="ts">
const { locale, t } = useLocale()

// Lightbox state for expanding images
const isLightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxTitle = ref('')

function openLightbox(src: string, title: string) {
  lightboxSrc.value = src
  lightboxTitle.value = title
  isLightboxOpen.value = true
}

function closeLightbox() {
  isLightboxOpen.value = false
  lightboxSrc.value = ''
  lightboxTitle.value = ''
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
  description: 'ระบบจัดการคิวหน้างานอัจฉริยะ i-Queue เหมาะสำหรับการตรวจสุขภาพ ฉีดวัคซีนให้พนักงาน โรงพยาบาล ร้านอาหาร คลินิก รองรับ Smart Phone, Tablet, Thermal Printer',
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
                PDPA Compliant
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              ระบบการจัดการคิว i-Queue by Regist.ai
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              ระบบบริหารคิวอัจฉริยะ เหมาะสำหรับ <strong>การตรวจสุขภาพ, ฉีดวัคซีนให้พนักงาน, โรงพยาบาล, ร้านอาหาร และศูนย์บริการอื่น ๆ</strong> ช่วยลดความเสี่ยงในการสัมผัสหน้าจอกดบัตรคิว ใช้งานสะดวกผ่าน Tablet / Smart Phone
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
    <main class="wrap py-10 sm:py-14 space-y-10 sm:space-y-14 text-left">

      <!-- SECTION 1: Featured Overview Infographic & Core Specs -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-lg shadow-slate-200/40 overflow-hidden">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-purple-700 font-heading block">แผนผังภาพรวมระบบ</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">ระบบการจัดการคิว i-Queue by Regist.ai (New Normal)</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors"
            @click="openLightbox('/images/products/regist-ai/iqueue-overview.jpg', 'ระบบการจัดการคิว i-Queue by Regist.ai')"
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
          @click="openLightbox('/images/products/regist-ai/iqueue-overview.jpg', 'ระบบการจัดการคิว i-Queue by Regist.ai')"
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

        <!-- Target Business Checklist (ธุรกิจที่เหมาะสำหรับโปรแกรม) -->
        <div class="mt-6 pt-6 border-t border-slate-100">
          <div class="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-purple-900 font-heading block">กลุ่มธุรกิจเป้าหมาย</span>
              <h3 class="text-base font-bold font-heading text-purple-950 mt-0.5">ธุรกิจที่เหมาะสำหรับโปรแกรมการจัดการคิว</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-purple-200/80 text-xs font-bold text-purple-900 shadow-xs">
                <span class="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>โรงพยาบาล</span>
              </div>
              <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-purple-200/80 text-xs font-bold text-purple-900 shadow-xs">
                <span class="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>โรงพยาบาลสนาม</span>
              </div>
              <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-purple-200/80 text-xs font-bold text-purple-900 shadow-xs">
                <span class="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>คลินิก</span>
              </div>
              <div class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-purple-200/80 text-xs font-bold text-purple-900 shadow-xs">
                <span class="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">✓</span>
                <span>ร้านอาหาร</span>
              </div>
            </div>
          </div>
        </div>

        <!-- System Capabilities Grid (คุณสมบัติโปรแกรม) -->
        <div class="mt-6 pt-2">
          <h3 class="font-heading font-bold text-base text-[#171717] mb-3.5 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            <span>คุณสมบัติโปรแกรม i-Queue by Regist.ai</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
              <div>
                <strong class="text-slate-900 block font-heading mb-0.5">จองคิวออนไลน์ล่วงหน้าผ่านสมาร์ทโฟน</strong>
                <p class="text-slate-600">ผู้รับบริการสามารถลงทะเบียนจองคิวออนไลน์ล่วงหน้าผ่านสมาร์ทโฟน โดยการสแกน QR Code</p>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
              <div>
                <strong class="text-slate-900 block font-heading mb-0.5">สแกนและพิมพ์บัตรคิวหน้างาน (Thermal Printer)</strong>
                <p class="text-slate-600">ผู้รับบริการแสดงคิวให้เจ้าหน้าที่สแกน และสั่งพิมพ์บัตรคิวและแบบฟอร์มเข้าร่วมงานได้อย่างรวดเร็ว</p>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
              <div>
                <strong class="text-slate-900 block font-heading mb-0.5">ระบบบริหารคิวหน้างานแบบหลายจุดบริการ</strong>
                <p class="text-slate-600">สร้างจุดบริการได้หลายจุดต่อหนึ่งสถานที่ พร้อมระบบเรียกคิวเข้ารับบริการอย่างเป็นระเบียบ</p>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
              <div>
                <strong class="text-slate-900 block font-heading mb-0.5">รายงานสถิติตามจุด Check-Point แบบ Real-time</strong>
                <p class="text-slate-600">สามารถพิมพ์รายงานและตรวจสอบจำนวนผู้รับบริการตามจุด Check-Point แต่ละแห่งได้ทันที</p>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
              <div>
                <strong class="text-slate-900 block font-heading mb-0.5">เชื่อมโยงข้อมูลกับระบบ Regist.ai</strong>
                <p class="text-slate-600">เชื่อมโยงข้อมูลการลงทะเบียนจองคิวล่วงหน้าเพื่อรับ e-Ticket ผ่านระบบ Regist.ai ได้อย่างไร้รอยต่อ</p>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold text-xs">✓</span>
              <div>
                <strong class="text-slate-900 block font-heading mb-0.5">ระบบจัดการนโยบายความเป็นส่วนตัว (PDPA Ready)</strong>
                <p class="text-slate-600">มีระบบจัดการนโยบายความเป็นส่วนตัวและการให้ความยินยอมในการเก็บรวบรวมข้อมูลตามกฎหมาย</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Multi-Checkpoint Continuous Flow (จุดบริการต่อเนื่อง เช่น ฉีดวัคซีน / ตรวจสุขภาพ) -->
      <section id="hospital-flow" class="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-lg shadow-slate-200/40 overflow-hidden">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block">การเรียกคิวแบบหลายช่องบริการต่อเนื่อง</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">ขั้นตอนการจัดคิวหน้างาน (โรงพยาบาล, จุดฉีดวัคซีน, ตรวจสุขภาพ)</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors"
            @click="openLightbox('/images/products/regist-ai/iqueue-flow-hospital.jpg', 'ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง (โรงพยาบาล / ฉีดวัคซีน / ตรวจสุขภาพ)')"
          >
            <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span>คลิกดูภาพเต็มจอ</span>
          </button>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 mb-5 text-xs sm:text-sm text-emerald-950 font-medium">
          <strong>การทำงานต่อเนื่อง:</strong> เช่น การจัดคิวฉีดวัคซีน เมื่อผู้รับบริการ Check-in จะได้เลขคิว โดยเจ้าหน้าที่สามารถเรียกคิวเดียวกันตามจุดบริการต่างๆ ได้ต่อเนื่อง ไม่ต้องกดบัตรคิวใหม่ในแต่ละจุด
        </div>

        <div
          class="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 cursor-pointer group shadow-inner"
          @click="openLightbox('/images/products/regist-ai/iqueue-flow-hospital.jpg', 'ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง (โรงพยาบาล / ฉีดวัคซีน / ตรวจสุขภาพ)')"
        >
          <img
            src="/images/products/regist-ai/iqueue-flow-hospital.jpg"
            alt="ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง"
            class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>

        <!-- 5 Continuous Steps -->
        <div class="mt-6 pt-6 border-t border-slate-100">
          <h3 class="font-heading font-bold text-base text-[#171717] mb-3">กระบวนการไหลของคิว 5 จุดบริการ (Continuous Multi Check-Point):</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span class="font-bold text-[#16834A] block mb-1">จุดบริการที่ 1</span>
              <p class="text-slate-700">Check-in รายงานตัว พิมพ์แบบฟอร์มลงนามยินยอม / คัดกรองซักประวัติ</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span class="font-bold text-[#16834A] block mb-1">จุดบริการที่ 2</span>
              <p class="text-slate-700">ชั่งน้ำหนัก วัดความดันโลหิต บันทึกผลเข้าระบบ</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span class="font-bold text-[#16834A] block mb-1">จุดบริการที่ 3</span>
              <p class="text-slate-700">ฉีดวัคซีน / พบแพทย์ผู้เชี่ยวชาญ</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span class="font-bold text-[#16834A] block mb-1">จุดบริการที่ 4</span>
              <p class="text-slate-700">ตรวจสอบความเรียบร้อยก่อนกลับ พร้อมรับเอกสารคำแนะนำ</p>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span class="font-bold text-[#16834A] block mb-1">จุดบริการที่ 5</span>
              <p class="text-slate-700">พักสังเกตอาการ 30 นาที พร้อมระบบจับเวลาอัตโนมัติ</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Single-Counter Flow (ร้านอาหาร และศูนย์บริการ) -->
      <section id="restaurant-flow" class="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-lg shadow-slate-200/40 overflow-hidden">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600 font-heading block">การเรียกคิวแบบหนึ่งช่องบริการ</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">ขั้นตอนการใช้งานระบบจัดคิว (ร้านอาหาร และศูนย์บริการ)</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors"
            @click="openLightbox('/images/products/regist-ai/iqueue-flow-restaurant.jpg', 'ขั้นตอนการใช้งานระบบจัดคิว ร้านอาหารและศูนย์บริการ')"
          >
            <svg class="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span>คลิกดูภาพเต็มจอ</span>
          </button>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 mb-5 text-xs sm:text-sm text-amber-950 font-medium">
          <strong>การทำงานหน้าร้าน:</strong> เมื่อผู้รับบริการกดบัตรคิว เจ้าหน้าที่สามารถเรียกคิวเข้ารับบริการผ่าน Tablet / Smart Phone หน้าจอแสดงผล และมีระบบแจ้งเตือนโต๊ะที่กำลังจะครบกำหนดเวลา
        </div>

        <div
          class="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 cursor-pointer group shadow-inner"
          @click="openLightbox('/images/products/regist-ai/iqueue-flow-restaurant.jpg', 'ขั้นตอนการใช้งานระบบจัดคิว ร้านอาหารและศูนย์บริการ')"
        >
          <img
            src="/images/products/regist-ai/iqueue-flow-restaurant.jpg"
            alt="ขั้นตอนการใช้งานระบบจัดคิว ร้านอาหาร"
            class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
            <span class="font-bold text-amber-950 block font-heading mb-1">1. กดบัตรคิวหน้าร้าน</span>
            <p class="text-amber-900 text-xs">กดบัตรคิวที่หน้าร้านบน Tablet / Smart Phone หรือพิมพ์บัตรคิว (มีให้ใส่ชื่อลูกค้า และจำนวนที่นั่ง)</p>
          </div>
          <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
            <span class="font-bold text-amber-950 block font-heading mb-1">2. จุดเรียกคิวเข้าใช้บริการ</span>
            <p class="text-amber-900 text-xs">เจ้าหน้าที่จะเรียกคิวโดยใช้ Tablet / Smart Phone ผ่านหน้าจอแสดงผล เช่น "เชิญคุณ วี หมายเลข 5 ที่โต๊ะ 7 ค่ะ"</p>
          </div>
          <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
            <span class="font-bold text-amber-950 block font-heading mb-1">3. หน้าจอแสดงผลคิว & แจ้งเตือนเวลา</span>
            <p class="text-amber-900 text-xs">ลูกค้าดูจอแสดงคิวผ่านมือถือได้ทันที พร้อมระบบแจ้งเตือนโต๊ะที่กำลังจะครบกำหนดเวลาได้</p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Contact & Brochure Footer -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">สนใจสอบถามหรือติดตั้งระบบ</span>
            <h3 class="font-heading font-bold text-lg text-[#171717]">i-Queue by Regist.ai ระบบบริหารคิวอัจฉริยะ</h3>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">ผู้ประสานงานโครงการ: คุณทวีวัตร์ ทรรศนะประทีป | โทร: 02-532-5151, 081-752-9549</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <NuxtLink
              to="/products/regist-ai-registration"
              class="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold font-heading transition-colors"
            >
              ดูแผนผังการลงทะเบียน 3/6 ขั้นตอน →
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
              :src="lightboxSrc"
              :alt="lightboxTitle"
              class="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
            <div class="mt-4 text-center text-white font-heading max-w-3xl">
              <h4 class="text-base sm:text-xl font-bold">{{ lightboxTitle }}</h4>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
