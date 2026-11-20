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
  title: 'HR.ai – ระบบบริหารจัดการทรัพยากรบุคคลอัจฉริยะ (HRM • HRD • OD) | IGENCO',
  description: 'HR.ai เป็นระบบบริหารจัดการทรัพยากรบุคคลที่ช่วยให้องค์กรจัดการข้อมูลพนักงาน พัฒนาบุคลากร และวางแผนพัฒนาองค์กรได้อย่างเป็นระบบ โดยแบ่งการทำงานออกเป็น 3 ส่วนหลัก ได้แก่ HRM, HRD และ OD',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-20">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <!-- Subtle emerald glow -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/#products" class="hover:text-[#16834A] transition-colors">ผลิตภัณฑ์</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/products/hr-ai" class="hover:text-[#16834A] transition-colors">HR.ai</NuxtLink>
          <span class="text-slate-300">/</span>
          <span class="text-[#16834A] font-semibold">โครงสร้างระบบ 3 เสาหลัก (HRM • HRD • OD)</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider border border-emerald-200/70">
                <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
                HR.ai Core Architecture
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                3 Core Pillars
              </span>
              <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-heading font-medium border border-purple-200/60">
                HRM • HRD • OD
              </span>
              <span class="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-heading font-medium border border-amber-200/60">
                The Winner OIIO 2019
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              HR.ai – ระบบบริหารจัดการทรัพยากรบุคคลอัจฉริยะ
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              HR.ai เป็นระบบบริหารจัดการทรัพยากรบุคคลที่ช่วยให้องค์กรจัดการข้อมูลพนักงาน พัฒนาบุคลากร และวางแผนพัฒนาองค์กรได้อย่างเป็นระบบ โดยแบ่งการทำงานออกเป็น <strong>3 ส่วนหลัก</strong> ได้แก่ <strong>HRM, HRD และ OD</strong>
            </p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <NuxtLink
              to="/products/hr-ai"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold font-heading border border-slate-300 shadow-xs transition-all"
            >
              <svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>กลับสู่หน้า HR.ai</span>
            </NuxtLink>

            <a
              href="https://www.hraicloud.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-semibold font-heading shadow-md transition-all active:scale-95"
            >
              <span>เข้าสู่เว็บไซต์ HR.ai Cloud</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="wrap py-10 sm:py-14 space-y-10 sm:space-y-12 text-left">

      <!-- SECTION 1: Featured Infographic Showcase (Sized elegantly) -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 shadow-sm overflow-hidden text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block">แผนผังโครงสร้างสถาปัตยกรรมระบบ</span>
            <h2 class="text-lg sm:text-2xl font-bold font-heading text-[#171717]">
              สถาปัตยกรรมการทำงาน 3 มิติหลัก: HRM • HRD • OD
            </h2>
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

        <!-- Featured Image Frame: Sized neatly without overwhelming the page -->
        <div class="flex justify-center">
          <div
            class="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80 cursor-pointer group shadow-sm hover:shadow-md transition-all p-2 sm:p-4"
            @click="openLightbox"
            title="คลิกเพื่อขยายภาพขนาดใหญ่"
          >
            <img
              src="/images/products/hr-ai/hraicloud-overview.jpg"
              alt="HR.ai ระบบบริหารจัดการทรัพยากรบุคคลอัจฉริยะ (HRM • HRD • OD)"
              class="w-full max-h-[420px] sm:max-h-[460px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs sm:text-sm font-bold font-heading shadow-lg">
                <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>คลิกเพื่อดูภาพขยายเต็มจอ</span>
              </span>
            </div>
          </div>
        </div>

        <!-- System Overview Banner -->
        <div class="max-w-4xl mx-auto mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-emerald-950 flex items-start sm:items-center gap-3.5">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16834A] text-white shadow-sm font-bold text-sm">
            HR
          </div>
          <div>
            <strong class="font-heading text-sm sm:text-base block">HR.ai ระบบบริหารจัดการทรัพยากรบุคคลอัจฉริยะ ตอบโจทย์ทุกงานบริหารคน</strong>
            <p class="text-xs sm:text-sm text-emerald-900 mt-0.5 leading-relaxed">
              เชื่อมโยงการบริหารข้อมูลพนักงาน การพัฒนาบุคลากร และการพัฒนาองค์กรเข้าด้วยกันอย่างเป็นเอกภาพบนระบบคลาวด์มาตรฐานความปลอดภัยสูง
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 2: 3 Core Pillars Detailed Cards -->
      <section class="space-y-6 text-left">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
            3 CORE MODULES
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">
            การแบ่งการทำงานออกเป็น 3 ส่วนหลัก
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-600">
            โครงสร้างสถาปัตยกรรมที่ออกแบบมาเพื่อครอบคลุมวงจรชีวิตการทำงานของบุคลากร (Employee Lifecycle) ตั้งแต่วันแรกจนถึงการพัฒนาองค์กรในระยะยาว
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <!-- Pillar 1: HRM -->
          <div class="rounded-3xl bg-white border-2 border-emerald-500/25 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-emerald-500 text-white shadow-xs">
                  ส่วนที่ 1 • HRM
                </span>
                <span class="text-xs font-bold text-emerald-700 font-heading">
                  Human Resource Management
                </span>
              </div>

              <h3 class="text-xl font-bold font-heading text-[#171717] mb-3">
                1. HRM – การบริหารทรัพยากรบุคคล
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                บริหารจัดการข้อมูลพนักงาน การลงเวลาเข้า-ออกงาน การลา และเงินเดือน ช่วยลดขั้นตอนการทำงานด้านเอกสารและเพิ่มความสะดวกในการจัดการข้อมูลบุคลากร
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>ทะเบียนประวัติพนักงาน:</strong> จัดเก็บข้อมูลบุคลากรอย่างเป็นระบบ ปลอดภัยตามเกณฑ์ PDPA</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>ระบบการลงเวลา (Time Attendance):</strong> รองรับ GPS Check-in สแกนใบหน้า และจัดการกะ</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>ระบบการลาและอนุมัติออนไลน์:</strong> ส่งคำขอลา ขอโอที พร้อมแจ้งเตือนผ่าน Mobile/Email</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>ระบบเงินเดือน (Payroll):</strong> คำนวณภาษี ประกันสังคม กองทุนฯ และสร้าง e-Payslip</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-emerald-600 font-heading flex items-center gap-1">
                <span>ลดภาระงานเอกสารได้กว่า 60%</span>
              </span>
            </div>
          </div>

          <!-- Pillar 2: HRD -->
          <div class="rounded-3xl bg-white border-2 border-purple-500/25 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-purple-600 text-white shadow-xs">
                  ส่วนที่ 2 • HRD
                </span>
                <span class="text-xs font-bold text-purple-700 font-heading">
                  Human Resource Development
                </span>
              </div>

              <h3 class="text-xl font-bold font-heading text-[#171717] mb-3">
                2. HRD – การพัฒนาทรัพยากรบุคคล
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                สนับสนุนการพัฒนาความรู้และทักษะของพนักงาน ผ่านการฝึกอบรม การเรียนรู้ และการประเมินความสามารถ เพื่อเพิ่มศักยภาพในการทำงาน
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">✓</span>
                  <span><strong>ระบบฝึกอบรมและสัมมนา:</strong> วางแผนงบประมาณ บันทึกประวัติ และติดตามชั่วโมงอบรม</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">✓</span>
                  <span><strong>แผนพัฒนารายบุคคล (IDP):</strong> วางเส้นทางการเติบโตและทักษะเฉพาะด้านของพนักงาน</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">✓</span>
                  <span><strong>ระบบประเมิน KPI / OKRs:</strong> ประเมินผลงานโปร่งใส สอดคล้องกับทิศทางขององค์กร</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">✓</span>
                  <span><strong>ประเมินสมรรถนะ (Competencies):</strong> ตรวจวัดทักษะหลัก ทักษะเฉพาะสายงาน และ 360 องศา</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-purple-600 font-heading flex items-center gap-1">
                <span>ยกระดับขีดความสามารถบุคลากรอย่างต่อเนื่อง</span>
              </span>
            </div>
          </div>

          <!-- Pillar 3: OD -->
          <div class="rounded-3xl bg-white border-2 border-amber-500/30 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-amber-500 text-white shadow-xs">
                  ส่วนที่ 3 • OD
                </span>
                <span class="text-xs font-bold text-amber-800 font-heading">
                  Organization Development
                </span>
              </div>

              <h3 class="text-xl font-bold font-heading text-[#171717] mb-3">
                3. OD – การพัฒนาองค์กร
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                สนับสนุนการวางแผนและพัฒนาโครงสร้างองค์กร ปรับปรุงกระบวนการทำงาน และเพิ่มประสิทธิภาพการดำเนินงานขององค์กร
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">✓</span>
                  <span><strong>ผังโครงสร้างองค์กร (Organization Structure):</strong> แสดงสายการบังคับบัญชาแบบไดนามิก</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">✓</span>
                  <span><strong>กำหนดตำแหน่งและบทบาท:</strong> จัดการ Position และ Career Path อย่างเป็นมาตรฐาน</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">✓</span>
                  <span><strong>ลักษณะงาน (Job Description):</strong> ระบุความรับผิดชอบและขอบเขตงานอย่างชัดเจน</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">✓</span>
                  <span><strong>การจัดการความรู้ (Knowledge Management):</strong> คลังความรู้องค์กรเพื่อการสืบทอดงานที่ราบรื่น</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-amber-700 font-heading flex items-center gap-1">
                <span>ขับเคลื่อนองค์กรให้เติบโตอย่างยั่งยืน</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: Key Advantages (จุดเด่นของระบบ) -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm text-left">
        <div class="max-w-3xl mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
            KEY ADVANTAGES
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">
            จุดเด่นของระบบ HR.ai
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-500">
            4 จุดเด่นสำคัญที่ช่วยให้องค์กรของคุณบริหารงานบุคคลได้อย่างชาญฉลาดและคุ้มค่าที่สุด
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          
          <!-- Advantage 1 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-[#16834A]/40 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#16834A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              1
            </div>
            <div>
              <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] mb-1.5">
                รวมงานบริหารทรัพยากรบุคคลไว้ในระบบเดียว
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                เชื่อมโยงฐานข้อมูลพนักงาน การลงเวลา การคำนวณเงินเดือน แผนฝึกอบรม และโครงสร้างองค์กรไว้ใน Single Platform ไม่ต้องสลับใช้งานหลายโปรแกรมให้ยุ่งยาก
              </p>
            </div>
          </div>

          <!-- Advantage 2 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-[#16834A]/40 transition-all">
            <div class="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              2
            </div>
            <div>
              <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] mb-1.5">
                ช่วยลดขั้นตอนการทำงานของฝ่าย HR
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                เปลี่ยนขั้นตอนการส่งเอกสารกระดาษเป็น Automated Workflow อนุมัติผ่านระบบ e-Service (ESS/MSS) ลดภาระงานเอกสาร ลดความผิดพลาด และประหยัดเวลา
              </p>
            </div>
          </div>

          <!-- Advantage 3 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-[#16834A]/40 transition-all">
            <div class="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              3
            </div>
            <div>
              <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] mb-1.5">
                สนับสนุนการพัฒนาศักยภาพพนักงาน
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ระบบติดตามและประเมินทักษะของบุคลากรรายบุคคล (IDP) อย่างต่อเนื่อง ช่วยวางแผนหลักสูตรฝึกอบรมที่ตรงจุด และประเมิน KPI ได้อย่างโปร่งใส เป็นธรรม
              </p>
            </div>
          </div>

          <!-- Advantage 4 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-[#16834A]/40 transition-all">
            <div class="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
              4
            </div>
            <div>
              <h3 class="font-heading font-bold text-base sm:text-lg text-[#171717] mb-1.5">
                ช่วยให้องค์กรบริหารจัดการบุคลากรได้อย่างมีประสิทธิภาพ
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ผู้บริหารสามารถเรียกดู Dashboard สถิติสำคัญ เช่น อัตราการลาออก, ข้อมูลอัตรากำลังคน และต้นทุนค่าตอบแทน เพื่อวางแผนกลยุทธ์ได้อย่างแม่นยำและทันท่วงที
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 4: System Integration & Award Banner -->
      <section class="rounded-3xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-7 sm:p-10 shadow-lg text-left relative overflow-hidden">
        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-heading font-bold uppercase tracking-wider mb-3">
            OIIO2019 THE WINNER AWARD
          </div>
          <h3 class="text-xl sm:text-3xl font-bold font-heading text-white">
            การันตีด้วยรางวัล The Winner งาน OIIO Thailand Techland 2019
          </h3>
          <p class="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            ระบบบริหารทรัพยากรมนุษย์ของ บริษัท ไอเจนโก้ จำกัด (i-Huris / HR.ai) ได้รับรางวัลชนะเลิศในฐานะระบบที่ช่วยขับเคลื่อนการเปลี่ยนแปลงองค์กรสู่ยุคดิจิทัลไทยแลนด์ 4.0 อย่างแท้จริง
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-4">
            <NuxtLink
              to="/news/hr-ai-oiio-2019-winner"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 hover:bg-emerald-50 text-xs sm:text-sm font-semibold font-heading shadow-md transition-all"
            >
              <span>อ่านบทสรุปผู้บริหารและข่าวรางวัล OIIO2019</span>
              <span>→</span>
            </NuxtLink>
            <a
              href="https://igenco.co.th/index.php/th/product/enterprise-software/i-huris#"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold font-heading border border-white/20 transition-all"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>ดาวน์โหลดคุณสมบัติระบบ (i-Huris)</span>
            </a>
          </div>
        </div>
      </section>

      <!-- SECTION 5: Closing Summary Box -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center max-w-3xl mx-auto">
        <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
          เชื่อมโยงทุกมิติงาน HR สู่ความสำเร็จที่ยั่งยืน
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          HR.ai ช่วยเชื่อมโยงการบริหารบุคลากร การพัฒนาพนักงาน และการพัฒนาองค์กรเข้าด้วยกัน เพื่อให้องค์กรทำงานได้อย่างเป็นระบบและมีประสิทธิภาพมากยิ่งขึ้น
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <NuxtLink
            to="/products/hr-ai"
            class="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold font-heading transition-colors"
          >
            ← กลับสู่ภาพรวมผลิตภัณฑ์ HR.ai
          </NuxtLink>
          <a
            href="https://www.hraicloud.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-semibold font-heading shadow-md transition-all"
          >
            เข้าสู่เว็บไซต์ www.hraicloud.com
          </a>
        </div>
      </section>

    </main>

    <!-- Lightbox Modal for Full Image View -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isLightboxOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 sm:p-6"
          @click="closeLightbox"
        >
          <div
            class="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 text-center"
            @click.stop
          >
            <div class="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 px-2">
              <span class="font-heading font-bold text-sm sm:text-base text-slate-800">
                HR.ai – สถาปัตยกรรม 3 ส่วนหลัก (HRM • HRD • OD)
              </span>
              <button
                type="button"
                class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold transition-colors"
                @click="closeLightbox"
              >
                ✕
              </button>
            </div>
            <img
              src="/images/products/hr-ai/hraicloud-overview.jpg"
              alt="HR.ai Overview Diagram"
              class="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
