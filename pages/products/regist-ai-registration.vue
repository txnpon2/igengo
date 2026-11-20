<script setup lang="ts">
const { locale, t } = useLocale()

// Lightbox state for expanding image
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
  title: 'ขั้นตอนการลงทะเบียนออนไลน์ง่ายๆ ด้วยตัวคุณเอง | Regist.ai - IGENCO',
  description: 'แผนผังกระบวนการลงทะเบียนออนไลน์ (3 ขั้นตอน / 6 ขั้นตอน) ระบบบริหารการลงทะเบียนและงานสัมมนาฝึกอบรมอัจฉริยะ Regist.ai',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-20">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <!-- Subtle glow -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/#products" class="hover:text-[#16834A] transition-colors">ผลิตภัณฑ์</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/products/regist-ai" class="hover:text-[#16834A] transition-colors">Regist.ai</NuxtLink>
          <span class="text-slate-300">/</span>
          <span class="text-[#16834A] font-semibold">ขั้นตอนการลงทะเบียนออนไลน์</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16834A]/10 border border-[#16834A]/25 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
                i-Regist Registration Workflow
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                มาตรฐาน ISO/IEC 29110
              </span>
              <span class="px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-heading font-medium border border-emerald-200/60">
                Online & Offline Ready
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              ลงทะเบียนออนไลน์ง่ายๆ ด้วยตัวคุณเอง
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              แผนผังแสดงกระบวนการลงทะเบียนผ่านระบบ Regist.ai (i-Regist) ทั้งแบบไม่มีค่าใช้จ่าย (3 ขั้นตอน) และแบบมีค่าใช้จ่าย (6 ขั้นตอน) รองรับทั้ง Online / Offline และเชื่อมต่อ CMS องค์กรได้ทันที
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

      <!-- SECTION 1: High-Res Infographic Display with Zoom Feature -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 shadow-sm overflow-hidden text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block">แผนผังขั้นตอนกระบวนการ</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">แผนผังขั้นตอนการลงทะเบียนออนไลน์ (Process Infographic)</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors shrink-0"
            @click="openLightbox"
          >
            <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span>คลิกดูภาพขยาย</span>
          </button>
        </div>

        <!-- The Image Showcase: Centered, balanced & neat -->
        <div class="flex justify-center">
          <div
            class="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80 cursor-pointer group shadow-sm hover:shadow-md transition-all p-2 sm:p-3"
            @click="openLightbox"
            title="คลิกเพื่อขยายภาพขนาดใหญ่"
          >
            <img
              src="/images/products/regist-ai/regist-steps.jpg"
              alt="ลงทะเบียนออนไลน์ง่ายๆ ด้วยตัวคุณเอง - Regist.ai"
              class="w-full max-h-[340px] sm:max-h-[380px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs sm:text-sm font-bold font-heading shadow-lg">
                <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>คลิกเพื่อดูภาพขยาย</span>
              </span>
            </div>
          </div>
        </div>

        <!-- 3-Step vs 6-Step Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 pt-6 border-t border-slate-100">
          <!-- กรณีไม่มีค่าลงทะเบียน: 3 ขั้นตอน -->
          <div class="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/70">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-heading font-bold text-base text-sky-900 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span>กรณีไม่มีค่าลงทะเบียน (3 ขั้นตอน)</span>
              </h3>
              <span class="px-2.5 py-0.5 rounded-full bg-sky-200/80 text-sky-800 text-xs font-bold font-heading">3 STEPS</span>
            </div>
            <ol class="space-y-2.5 text-xs sm:text-sm text-sky-950 font-medium">
              <li class="flex items-start gap-2.5">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold">1</span>
                <span><strong>ลงทะเบียน:</strong> สมาชิกหรือบุคคลทั่วไปกรอกข้อมูลลงทะเบียนผ่านระบบ i-regist</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold">2</span>
                <span><strong>ตรวจสอบ E-mail:</strong> ผู้ลงทะเบียนทำการตรวจสอบข้อมูลการตอบรับทางอีเมล</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white text-xs font-bold">3</span>
                <span><strong>พิมพ์แบบฟอร์ม QR Code:</strong> พิมพ์ใบตอบรับที่มี QR Code เพื่อใช้สแกน Check-in เข้าร่วมงาน</span>
              </li>
            </ol>
          </div>

          <!-- กรณีมีค่าลงทะเบียน: 6 ขั้นตอน -->
          <div class="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-heading font-bold text-base text-emerald-900 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#16834A]"></span>
                <span>กรณีมีค่าลงทะเบียน (6 ขั้นตอน)</span>
              </h3>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-200/80 text-emerald-800 text-xs font-bold font-heading">6 STEPS</span>
            </div>
            <ol class="space-y-2 text-xs sm:text-sm text-emerald-950 font-medium">
              <li class="flex items-start gap-2">
                <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16834A] text-white text-[10px] font-bold mt-0.5">1</span>
                <span><strong>ลงทะเบียน:</strong> กรอกข้อมูลลงทะเบียนผ่านระบบ i-regist</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16834A] text-white text-[10px] font-bold mt-0.5">2</span>
                <span><strong>พิมพ์ใบแจ้งชำระเงิน:</strong> รับแบบฟอร์มผ่านหน้าจอหรือทางอีเมล</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16834A] text-white text-[10px] font-bold mt-0.5">3</span>
                <span><strong>ชำระเงิน:</strong> โอนเงินผ่านมือถือหรือชำระที่เคาน์เตอร์ธนาคาร</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16834A] text-white text-[10px] font-bold mt-0.5">4</span>
                <span><strong>แนบหลักฐาน:</strong> ถ่ายรูปสลิปและแนบหลักฐานกลับเข้ามาในระบบ</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16834A] text-white text-[10px] font-bold mt-0.5">5</span>
                <span><strong>ตรวจสอบ E-mail:</strong> เจ้าหน้าที่ตรวจสอบและส่งอีเมลยืนยันผล</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#16834A] text-white text-[10px] font-bold mt-0.5">6</span>
                <span><strong>พิมพ์แบบฟอร์ม QR Code:</strong> รับ e-Ticket พร้อม QR Code ใช้สแกนเข้างาน</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- SECTION 2: System Flexibility Overview -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
        <div class="flex items-start gap-4">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#16834A] text-white shadow-md shadow-[#16834A]/25">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <span class="text-xs font-bold font-heading text-[#16834A] uppercase tracking-wider block mb-1">ความยืดหยุ่นสูงระดับองค์กร</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
              ระบบมีความยืดหยุ่นในการใช้งานสูงและรองรับการทำงานที่หลากหลาย
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              ผู้ดูแลระบบสามารถจัดการข้อมูลพื้นฐานเกี่ยวกับ <strong>การเปิดโครงการสัมมนาเชิงวิชาการหรือหลักสูตรฝึกอบรมใหม่ ๆ</strong> การเพิ่มลดข้อมูลเกี่ยวกับสถานที่จัด ค่าใช้จ่าย ค่าสมัครสมาชิกและลงทะเบียน ห้องที่จัดสามารถกำหนดจำนวนคนที่รองรับได้ สามารถกำหนดประเภทอาหารให้ผู้ลงทะเบียนเลือก เป็นต้น นอกจากนี้ยังสามารถตรวจสอบรายชื่อผู้ลงทะเบียนและลงทะเบียนแบบกลุ่ม และการพิมพ์รายงานต่าง ๆ เช่น <strong>รายชื่อสมาชิก รายชื่อผู้ลงทะเบียน ใบเซ็นชื่อ ป้ายชื่อ หนังสือรับรอง และใบเสร็จรับเงิน</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Public & Attendee Workflow Card -->
      <section class="p-6 sm:p-8 rounded-3xl bg-slate-100/80 border border-slate-200/90 shadow-sm">
        <div class="flex items-start gap-4">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-md shadow-slate-900/20">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span class="text-xs font-bold font-heading text-slate-500 uppercase tracking-wider block mb-1">สำหรับสมาชิกและบุคคลทั่วไป</span>
            <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
              หน้าลงทะเบียนที่ใช้งานง่าย สะดวกรวดเร็วทุกขั้นตอน
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              สมาชิกและบุคคลทั่วไปจะสามารถเข้ามาสอบถามข้อมูลที่ประชาสัมพันธ์ พร้อมทั้งสามารถสมัครสมาชิกและลงทะเบียนเข้าร่วมการสัมมนาในหลักสูตรที่สนใจ (ภายในระยะเวลาที่ผู้จัดทำกำหนดไว้) มีระบบพิมพ์แบบฟอร์มชำระเงินเพื่อนำไปชำระค่าลงทะเบียนที่ธนาคาร การแจ้งหลักฐานการโอนเงิน การพิมพ์ใบยืนยันการลงทะเบียน และการตรวจสอบผลการลงทะเบียนได้อย่างรวดเร็วและถูกต้อง
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Dual Capabilities Grid (Admin vs General Users) -->
      <section class="space-y-6">
        <div class="text-left">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
            DETAILED CAPABILITIES
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717] tracking-tight">
            คุณสมบัติการใช้งานระบบแบบเจาะลึก
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          <!-- Column 1: ผู้ดูแลระบบ -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16834A] text-white shadow-md shadow-[#16834A]/25 shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span class="text-xs font-bold font-heading text-[#16834A] uppercase tracking-wider block">Administrator</span>
                  <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">คุณสมบัติการใช้งานสำหรับผู้ดูแลระบบ</h3>
                </div>
              </div>

              <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <!-- Highlight: Master Tables -->
                <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/50">
                  <span class="font-bold text-[#16834A] block mb-1.5 font-heading">
                    รองรับการกำหนดข้อมูลพื้นฐานครบวงจร
                  </span>
                  <p class="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    ประกอบด้วย ตารางประเภทสมาชิก, ตารางคำนำหน้าชื่อ, ตารางหลักสูตร, ตารางอัตราค่าธรรมเนียมลงทะเบียน และค่าสมัครสมาชิก, ตารางสถานที่, ตารางห้อง, ตารางเก็บโซนและสีที่นั่ง, ประเภทอาหาร, ตารางอำเภอ และตารางจังหวัด
                  </p>
                </div>

                <ul class="space-y-3">
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">✓</span>
                    <span><strong>การบันทึกข้อมูลสมาชิก:</strong> บันทึกประวัติและจัดการฐานข้อมูลสมาชิกอย่างเป็นระบบ</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">✓</span>
                    <span><strong>ข้อมูลวิทยากร:</strong> บันทึกประวัติวิทยากร ความเชี่ยวชาญ และข้อมูลติดต่อ</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">✓</span>
                    <span><strong>บันทึกข้อมูลโครงการ:</strong> จัดการรายละเอียดหลักสูตร และแบนเนอร์ประชาสัมพันธ์ (Banner)</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">✓</span>
                    <span><strong>การลงทะเบียนแบบกลุ่ม (Excel Loader):</strong> อัปโหลดไฟล์ Excel นำเข้ารายชื่อครั้งละจำนวนมากอย่างแม่นยำ</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">✓</span>
                    <span><strong>การอนุมัติ:</strong> อนุมัติหรือยืนยันการสมัครสมาชิกใหม่ และยืนยันผลการลงทะเบียน</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#16834A]">✓</span>
                    <span><strong>การพิมพ์รายงานต่าง ๆ ครบวงจร:</strong> เช่น ใบแจ้งหนี้, ใบตอบรับ, ใบเซ็นชื่อ, ป้ายชื่อ (Badge), ใบเสร็จรับเงิน และใบประกาศนียบัตร / เกียรติบัตร</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Column 2: ผู้ใช้งานทั่วไป -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100">
                <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-md shadow-slate-900/20 shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <span class="text-xs font-bold font-heading text-slate-500 uppercase tracking-wider block">Attendee & Public</span>
                  <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">คุณสมบัติการใช้งานสำหรับผู้ใช้งานทั่วไป</h3>
                </div>
              </div>

              <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <span class="font-bold text-slate-800 block mb-1.5 font-heading">
                    เข้าถึงสะดวกผ่านคอมพิวเตอร์ แท็บเล็ต และสมาร์ทโฟน
                  </span>
                  <p class="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    ผู้เข้าร่วมงานสามารถตรวจสอบข้อมูล ค้นหากำหนดการ และดำเนินการลงทะเบียนด้วยตัวเองได้ตลอด 24 ชั่วโมง
                  </p>
                </div>

                <ul class="space-y-3.5">
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>การสอบถามข้อมูลโครงการ:</strong> เช่น สถานที่จัด, วันและเวลาที่จัด, ตารางกำหนดการ และดูแผนที่การเดินทางผ่าน Google Maps</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>การสมัครสมาชิก:</strong> สร้างบัญชีผู้ใช้งานเพื่อบันทึกประวัติการอบรม</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>การลงทะเบียน:</strong> ลงทะเบียนเข้าร่วมการสัมมนาหรือการอบรมหลักสูตรที่เปิดรับ</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>ตรวจสอบผลการลงทะเบียน:</strong> เช็กสถานะการอนุมัติและประวัติการลงทะเบียนได้ทันที</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>การแจ้งชำระเงินและพิมพ์ใบตอบรับ (QR Code):</strong> แนบหลักฐานการโอนเงินและรับเอกสารยืนยันพร้อม QR Code สำหรับสแกนเข้างาน</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>ทำแบบประเมินออนไลน์:</strong> เชื่อมต่อกับ Google Forms เพื่อประเมินความพึงพอใจ</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-800">✓</span>
                    <span><strong>การแก้ไขข้อมูลส่วนตัว:</strong> ปรับปรุงข้อมูลผู้ใช้งานหรือเปลี่ยนรหัสผ่านได้ตลอดเวลา</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 5: Target Organizations (โปรแกรมนี้เหมาะสำหรับ) -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="max-w-3xl mb-6">
          <span class="text-xs font-bold font-heading text-[#16834A] uppercase tracking-wider block mb-1">TARGET AUDIENCE</span>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">โปรแกรมนี้เหมาะสำหรับองค์กรประเภทใด?</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16834A] font-bold text-xs">01</span>
            <div>
              <h4 class="font-heading font-bold text-sm text-[#171717]">บริษัทและสถาบันฝึกอบรม</h4>
              <p class="text-xs text-slate-500 mt-0.5">ผู้จัดงานสัมมนา อบรมวิชาชีพ และคอร์สระยะสั้น</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16834A] font-bold text-xs">02</span>
            <div>
              <h4 class="font-heading font-bold text-sm text-[#171717]">บริษัทออกมาตรฐานรับรอง</h4>
              <p class="text-xs text-slate-500 mt-0.5">องค์กรตรวจประเมิน และหน่วยงานรับรองมาตรฐานการทำงาน</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16834A] font-bold text-xs">03</span>
            <div>
              <h4 class="font-heading font-bold text-sm text-[#171717]">หน่วยงานภาครัฐและรัฐวิสาหกิจ</h4>
              <p class="text-xs text-slate-500 mt-0.5">กระทรวง กรม สำนักงาน และองค์การมหาชน</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16834A] font-bold text-xs">04</span>
            <div>
              <h4 class="font-heading font-bold text-sm text-[#171717]">มหาวิทยาลัยและสถาบันการศึกษา</h4>
              <p class="text-xs text-slate-500 mt-0.5">งานประชุมวิชาการระดับชาติ/นานาชาติ และปฐมนิเทศ</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16834A] font-bold text-xs">05</span>
            <div>
              <h4 class="font-heading font-bold text-sm text-[#171717]">สมาคม มูลนิธิ และโรงพยาบาล</h4>
              <p class="text-xs text-slate-500 mt-0.5">การประชุมวิชาการแพทย์ คอนเฟอเรนซ์ และการสัมมนาสมาชิก</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16834A] font-bold text-xs">06</span>
            <div>
              <h4 class="font-heading font-bold text-sm text-[#171717]">งานกิจกรรมและวิ่งมาราธอน</h4>
              <p class="text-xs text-slate-500 mt-0.5">ผู้จัดงานกีฬา งานอีเวนต์การกุศล และกิจกรรมสาธารณะขนาดใหญ่</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: Promotion Callout Box -->
      <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white shadow-xl relative overflow-hidden text-left">
        <div class="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <span>PROMOTION & GUARANTEE</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight">
            ไอรีจิส "ตอบโจทย์ทุกการลงทะเบียน"
          </h2>
          <p class="mt-2 text-sm sm:text-base text-emerald-100 leading-relaxed">
            พร้อมติดตั้งและเปิดให้ใช้งานได้อย่างรวดเร็วภายใน 1 สัปดาห์ รองรับการเชื่อมต่อกับเว็บไซต์เดิมขององค์กร (Joomla, WordPress) ได้ทันที
          </p>

          <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div class="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <span class="text-xs font-bold text-emerald-200 block uppercase font-heading">ระยะเวลาการส่งมอบ</span>
              <span class="text-base font-extrabold text-white mt-0.5 block">ติดตั้งและใช้งานได้ภายใน 1 สัปดาห์</span>
              <span class="text-[11px] text-emerald-100/80">ทีมวิศวกรพร้อมสนับสนุนการ Deploy และตั้งค่าระบบ</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <span class="text-xs font-bold text-emerald-200 block uppercase font-heading">บริการดูแลระบบ</span>
              <span class="text-base font-extrabold text-white mt-0.5 block">เงื่อนไขเป็นไปตามที่บริษัทกำหนด</span>
              <span class="text-[11px] text-emerald-100/80">พร้อมบริการ Support และให้คำปรึกษาตลอดการใช้งาน</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: Downloads, Official Site & Contact -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <!-- Col 1: Brochure Download Links -->
          <div class="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 pb-5 md:pb-0 md:pr-6">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading block mb-2">ดาวน์โหลดเอกสาร</span>
            <h3 class="font-heading font-bold text-base text-[#171717] mb-3">โบรชัวร์แนะนำระบบ</h3>
            <div class="space-y-2">
              <a
                href="https://www.i-regist.com/index.php/brochure-i-regist/member-management-system"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-xs font-semibold text-[#16834A] hover:bg-emerald-100 transition-colors"
              >
                <svg class="w-4 h-4 shrink-0 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="truncate">ดาวน์โหลดคุณสมบัติระบบไอรีจิส</span>
              </a>

              <a
                href="https://i-regist.com/index.php/th/brochure-i-regist/registration-system"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-xs font-semibold text-[#16834A] hover:bg-emerald-100 transition-colors"
              >
                <svg class="w-4 h-4 shrink-0 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="truncate">Download i-Regist Brochure</span>
              </a>
            </div>
          </div>

          <!-- Col 2: Official Website -->
          <div class="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 pb-5 md:pb-0 md:pr-6">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading block mb-2">เว็บไซต์ทางการ</span>
            <h3 class="font-heading font-bold text-base text-[#171717] mb-2">i-regist.com</h3>
            <p class="text-xs text-slate-500 mb-3">เข้าชมข้อมูลเพิ่มเติม ตัวอย่างการใช้งาน และระบบสาธิตออนไลน์</p>
            <a
              href="https://www.i-regist.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-heading font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>เยี่ยมชมเว็บไซต์ i-regist.com</span>
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Col 3: Direct Contact Person -->
          <div class="md:col-span-1">
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">สนใจติดต่อสอบถาม</span>
            <h3 class="font-heading font-bold text-base text-[#171717]">คุณทวีวัตร์ ทรรศนะประทีป</h3>
            <div class="mt-2 text-xs text-slate-600 space-y-1">
              <p>โทร: <a href="tel:025325151" class="font-bold text-[#171717] hover:text-[#16834A]">02-532-5151</a>, <a href="tel:0817529549" class="font-bold text-[#171717] hover:text-[#16834A]">081-752-9549</a></p>
              <p>อีเมล: <a href="mailto:thaweewat@igenco.co.th" class="text-[#16834A] hover:underline">thaweewat@igenco.co.th</a></p>
            </div>
            <NuxtLink
              :to="{ path: '/contact', query: { product: 'regist-ai' } }"
              class="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#16834A] hover:text-[#106B3B] hover:underline"
            >
              <span>ส่งข้อความขอใบเสนอราคา</span>
              <span>→</span>
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
              src="/images/products/regist-ai/regist-steps.jpg"
              alt="ลงทะเบียนออนไลน์ง่ายๆ ด้วยตัวคุณเอง"
              class="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
            <div class="mt-4 text-center text-white font-heading max-w-3xl">
              <h4 class="text-base sm:text-xl font-bold">ขั้นตอนการลงทะเบียนออนไลน์ง่ายๆ ด้วยตัวคุณเอง (Regist.ai)</h4>
              <p class="text-xs sm:text-sm text-slate-300 mt-1 font-normal font-sans">
                กรณีไม่มีค่าลงทะเบียน (3 ขั้นตอน) และกรณีมีค่าลงทะเบียน (6 ขั้นตอน)
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
