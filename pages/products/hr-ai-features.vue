<script setup lang="ts">
const { locale, t } = useLocale()

// Lightbox modal state for viewing the full poster
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
  title: 'HR.ai – ระบบบริหารทรัพยากรมนุษย์อัจฉริยะ (EIS • HRM • HRD • OD) | IGENCO',
  description: 'HR.ai เป็นระบบบริหารทรัพยากรมนุษย์อัจฉริยะของบริษัท IGENCO ที่นำเทคโนโลยี AI เข้ามาช่วยจัดการงานด้านบุคลากรและการบริหารองค์กร แบ่งการทำงานออกเป็น 4 ส่วนหลัก: EIS, HRM, HRD, OD',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-20">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <!-- Ambient Glow -->
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
          <span class="text-[#16834A] font-semibold">ระบบบริหารทรัพยากรมนุษย์อัจฉริยะ (4 ส่วนหลัก)</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider border border-emerald-200/70">
                <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
                AI-Powered HR System
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                4 ส่วนหลัก: EIS • HRM • HRD • OD
              </span>
              <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-heading font-medium border border-blue-200/60">
                Voice Command & AI
              </span>
              <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-heading font-medium border border-purple-200/60">
                ISO/IEC 29110
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              HR.ai – ระบบบริหารทรัพยากรมนุษย์อัจฉริยะ
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              HR.ai เป็นระบบบริหารทรัพยากรมนุษย์อัจฉริยะของบริษัท IGENCO ที่นำเทคโนโลยี AI เข้ามาช่วยจัดการงานด้านบุคลากรและการบริหารองค์กร โดยรวบรวมข้อมูลและกระบวนการทำงานไว้ในระบบเดียว รองรับการใช้งานผ่านเว็บไซต์ คอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน
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
              <span>เข้าสู่ระบบ HR.ai Cloud</span>
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

      <!-- SECTION 1: Featured Poster Infographic (Sized elegantly) -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 shadow-sm overflow-hidden text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block">เอกสารแนะนำระบบ (Brochure Poster)</span>
            <h2 class="text-lg sm:text-2xl font-bold font-heading text-[#171717]">
              สถาปัตยกรรมและรายละเอียดคุณสมบัติระบบ HR.ai
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

        <!-- Featured Image Frame: Sized neatly, max-w-2xl for vertical posters -->
        <div class="flex justify-center">
          <div
            class="relative w-full max-w-xl rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80 cursor-pointer group shadow-sm hover:shadow-md transition-all p-2 sm:p-3"
            @click="openLightbox"
            title="คลิกเพื่อขยายภาพขนาดใหญ่"
          >
            <img
              src="/images/products/hr-ai/hr-ai-brochure-poster.jpg"
              alt="HR.ai ระบบบริหารทรัพยากรมนุษย์อัจฉริยะ IGENCO"
              class="w-full max-h-[520px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs sm:text-sm font-bold font-heading shadow-lg">
                <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>คลิกเพื่อดูภาพโปสเตอร์ขนาดเต็ม</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Interactive AI Feature Highlights Bar -->
        <div class="max-w-4xl mx-auto mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16834A] text-white shadow-sm font-bold text-sm">
              AI
            </div>
            <div>
              <strong class="font-heading text-sm sm:text-base block">Two-Way Voice Communication & AI Intelligence</strong>
              <p class="text-xs sm:text-sm text-emerald-900 mt-0.5 leading-relaxed">
                สั่งงานด้วยเสียง (Voice Command) เช่น พูดคำว่า "Absent" หรือ "สลิปเงินเดือน" พร้อมระบบ Face Recognition และ Chat Bot
              </p>
            </div>
          </div>
          <button
            type="button"
            class="px-4 py-2 rounded-xl bg-white text-emerald-800 text-xs font-bold font-heading border border-emerald-300 hover:bg-emerald-100/50 transition-colors shrink-0 shadow-xs"
            @click="openLightbox"
          >
            ดูภาพขยายเต็มจอ
          </button>
        </div>
      </section>

      <!-- SECTION 2: 4 Main Modules (4 ส่วนหลัก) -->
      <section class="space-y-6 text-left">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
            4 MAIN MODULES
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">
            ระบบแบ่งการทำงานออกเป็น 4 ส่วนหลัก
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-600">
            ครอบคลุมทุกกระบวนการทำงานด้านทรัพยากรบุคคล การบริการตนเองของพนักงาน และการพัฒนาโครงสร้างองค์กรอย่างสมบูรณ์แบบ
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          <!-- Module 1: EIS -->
          <div class="rounded-3xl bg-white border-2 border-blue-500/25 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-blue-600 text-white shadow-xs">
                  ส่วนที่ 1 • EIS
                </span>
                <span class="text-xs font-bold text-blue-700 font-heading">
                  Employee Information System
                </span>
              </div>

              <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
                1. EIS – ระบบจัดการข้อมูลสารสนเทศของพนักงาน
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                ระบบจัดการข้อมูลสารสนเทศของพนักงาน เช่น ข้อมูลบุคลากร การอนุมัติเอกสาร และการจัดการข้อมูลภายในองค์กร
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold mt-0.5">●</span>
                  <span><strong>หน้าหลัก (HOME):</strong> แสดงผังโครงสร้างองค์กร ทำเนียบผู้บริหาร และข่าวสาร (Say-Org, Say-News)</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold mt-0.5">●</span>
                  <span><strong>บริการตนเอง (e-Service):</strong> ESS / MSS ลงเวลาออนไลน์ ขอลา และดู e-Payslip (Say-Absent, Say-Slip)</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold mt-0.5">●</span>
                  <span><strong>ข้อมูลสถิติ (e-MIS):</strong> แดชบอร์ดสรุปสถิติสำคัญสำหรับผู้บริหาร (Say-Dashboard)</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold mt-0.5">●</span>
                  <span><strong>การอนุมัติและติดตาม (e-Workflow):</strong> ระบบแจ้งเตือนและอนุมัติคำขอออนไลน์ (Say-Approve)</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold mt-0.5">●</span>
                  <span><strong>กระดานข่าว (e-Webboard):</strong> แลกเปลี่ยนข้อมูลภายในและ Live Chat Customer Care</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-blue-600 font-heading">
                รองรับการสั่งการด้วยเสียง AI Voice Command
              </span>
            </div>
          </div>

          <!-- Module 2: HRM -->
          <div class="rounded-3xl bg-white border-2 border-emerald-500/25 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-emerald-600 text-white shadow-xs">
                  ส่วนที่ 2 • HRM
                </span>
                <span class="text-xs font-bold text-emerald-700 font-heading">
                  Human Resource Management
                </span>
              </div>

              <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
                2. HRM – ระบบบริหารงานบุคคล
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                ระบบบริหารงานบุคคล เช่น การลงเวลาเข้า-ออกงาน การลา การสรรหาพนักงาน การจัดการเงินเดือน และการประเมินผล
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">●</span>
                  <span><strong>ระบบทะเบียนประวัติ (Employee Profile):</strong> บันทึกประวัติบุคลากรครบถ้วน ปลอดภัยตาม PDPA</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">●</span>
                  <span><strong>ระบบการลงเวลา (Time Attendance):</strong> รองรับ Face Recognition สแกนใบหน้า และ GPS Check-in</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">●</span>
                  <span><strong>ระบบสรรหา บรรจุ แต่งตั้ง (Recruitment):</strong> สรรหาบุคลากรทั้งภายในและภายนอก</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">●</span>
                  <span><strong>ระบบเงินเดือนและค่าตอบแทน (Payroll):</strong> คำนวณเงินเดือน ภาษี ประกันสังคม กองทุนฯ อัตโนมัติ</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-emerald-600 font-bold mt-0.5">●</span>
                  <span><strong>สวัสดิการ & วินัย & พ้นหน้าที่:</strong> เบิกค่ารักษาพยาบาล จัดการวินัย และกระบวนการลาออก</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-emerald-600 font-heading">
                ลดขั้นตอนการจัดการเอกสารงานบุคคลได้ทันที
              </span>
            </div>
          </div>

          <!-- Module 3: HRD -->
          <div class="rounded-3xl bg-white border-2 border-purple-500/25 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-purple-600 text-white shadow-xs">
                  ส่วนที่ 3 • HRD
                </span>
                <span class="text-xs font-bold text-purple-700 font-heading">
                  Human Resource Development
                </span>
              </div>

              <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
                3. HRD – ระบบพัฒนาบุคลากร
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                ระบบพัฒนาบุคลากร เช่น การฝึกอบรม การพัฒนาทักษะ และการติดตามผลการทำงานของพนักงาน
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">●</span>
                  <span><strong>ระบบฝึกอบรมและพัฒนา (Training):</strong> จัดการหลักสูตร วางงบประมาณ และติดตามประวัติการอบรม</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">●</span>
                  <span><strong>การประเมิน KPI / OKRs:</strong> วัดผลงานรายบุคคลและแผนก สอดคล้องกับเป้าหมายองค์กร</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">●</span>
                  <span><strong>พัฒนาทักษะ (Competency Development):</strong> ประเมินสมรรถนะหลักและสมรรถนะเฉพาะสายงาน</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold mt-0.5">●</span>
                  <span><strong>E-Learning Integration:</strong> รองรับการเชื่อมต่อระบบการเรียนรู้ เช่น Moodle</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-purple-600 font-heading">
                สนับสนุนการเรียนรู้ตลอดชีวิตและการเติบโตในสายอาชีพ
              </span>
            </div>
          </div>

          <!-- Module 4: OD -->
          <div class="rounded-3xl bg-white border-2 border-amber-500/30 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/5 rounded-full pointer-events-none"></div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold font-heading bg-amber-500 text-white shadow-xs">
                  ส่วนที่ 4 • OD
                </span>
                <span class="text-xs font-bold text-amber-800 font-heading">
                  Organization Development
                </span>
              </div>

              <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
                4. OD – ระบบพัฒนาองค์กร
              </h3>

              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                ระบบพัฒนาองค์กร เช่น การวางแผนกลยุทธ์ การจัดการโครงสร้างองค์กร และการบริหารกำลังคน
              </p>

              <div class="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">●</span>
                  <span><strong>ผังโครงสร้างองค์กร (Organization Strategy):</strong> บันทึกและปรับปรุงสายการบังคับบัญชา</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">●</span>
                  <span><strong>บริหารอัตรากำลัง (Manpower Management):</strong> วางแผนกรอบกำลังคนให้เหมาะสมกับทิศทางธุรกิจ</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">●</span>
                  <span><strong>ลักษณะงานและความรับผิดชอบ (JD/JS):</strong> กำหนด Job Description และขอบเขตงานชัดเจน</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold mt-0.5">●</span>
                  <span><strong>ข้อมูลพื้นฐานเชิงนโยบาย (Policy):</strong> บันทึกและเผยแพร่นโยบาย กฎระเบียบข้อบังคับองค์กร</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100">
              <span class="text-xs font-bold text-amber-700 font-heading">
                วางรากฐานการเติบโตขององค์กรอย่างยั่งยืน
              </span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: Key Advantages (จุดเด่นของระบบ 5 ข้อ) -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm text-left">
        <div class="max-w-3xl mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
            HIGHLIGHTS
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">
            จุดเด่นของระบบ HR.ai
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-500">
            5 จุดเด่นที่ผสานพลังปัญญาประดิษฐ์เพื่อการบริหารทรัพยากรบุคคลยุคดิจิทัล
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          <!-- Item 1 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[#16834A]/40 transition-all">
            <span class="w-10 h-10 rounded-xl bg-[#16834A] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              ✓
            </span>
            <div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#171717] mb-1">
                ใช้ AI ช่วยสนับสนุนการทำงานด้านทรัพยากรบุคคล
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                นำเทคโนโลยีปัญญาประดิษฐ์ คำสั่งเสียง (Voice Command) และ Face Recognition มาช่วยลดเวลาทำงานและเพิ่มความแม่นยำ
              </p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[#16834A]/40 transition-all">
            <span class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              ✓
            </span>
            <div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#171717] mb-1">
                รวมข้อมูลพนักงานและงาน HR ไว้ในระบบเดียว
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                รวมศูนย์ฐานข้อมูลและกระบวนการทำงานทั้ง 4 ส่วนหลัก (EIS, HRM, HRD, OD) ไว้บนแพลตฟอร์มเดียว สะดวก รวดเร็ว
              </p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[#16834A]/40 transition-all">
            <span class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              ✓
            </span>
            <div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#171717] mb-1">
                ลดขั้นตอนการทำงานและการจัดการเอกสาร
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                เปลี่ยนผ่านสู่ออฟฟิศไร้กระดาษ (Paperless) ด้วยระบบอนุมัติอัตโนมัติ e-Workflow และ e-Service Self-Service
              </p>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[#16834A]/40 transition-all">
            <span class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              ✓
            </span>
            <div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#171717] mb-1">
                รองรับการใช้งานผ่านคอมพิวเตอร์และโทรศัพท์มือถือ
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ออกแบบหน้าจอแบบ Auto Responsive & Progressive Web App ใช้งานลื่นไหลบน PC, แล็ปท็อป, แท็บเล็ต และสมาร์ตโฟน
              </p>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[#16834A]/40 transition-all sm:col-span-2 lg:col-span-2">
            <span class="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
              ✓
            </span>
            <div>
              <h3 class="font-heading font-bold text-sm sm:text-base text-[#171717] mb-1">
                ช่วยให้ผู้บริหารสามารถติดตามข้อมูลและประเมินผลการทำงานได้
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                เข้าถึง e-MIS Dashboard วิเคราะห์ข้อมูลสถิติ อัตรากำลังคน และผลการประเมิน KPI ได้แบบ Real-Time เพื่อการตัดสินใจทางธุรกิจที่ทันการณ์
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 4: Technology & Enterprise Architecture -->
      <section class="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-lg text-left relative overflow-hidden">
        <div class="relative z-10">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 font-heading block mb-1">
                ENTERPRISE SPECIFICATIONS
              </span>
              <h3 class="text-xl sm:text-2xl font-bold font-heading text-white">
                สถาปัตยกรรมทางเทคนิคและมาตรฐานความปลอดภัย
              </h3>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#16834A] text-white">
                ISO/IEC 29110 Certified
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-300">
                Oracle RDBMS Ready
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
            <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 class="font-heading font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                Web-Based & Cloud Architecture
              </h4>
              <p class="leading-relaxed text-slate-400">
                รองรับ Intranet / Internet พัฒนาด้วย Python, PHP, Yii Framework, Web Services (SOAP/WSDL), HTTPS/SSL และ Oracle Database Concurrency Control
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 class="font-heading font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                Mobile Hybrid Applications
              </h4>
              <p class="leading-relaxed text-slate-400">
                แอปพลิเคชันบนสมาร์ตโฟนและแท็บเล็ต พัฒนาด้วย Swift / Objective-C สำหรับ iOS และ Java / Android Studio สำหรับ Android
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 class="font-heading font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                AI & Intelligence Engine
              </h4>
              <p class="leading-relaxed text-slate-400">
                ผสานเทคโนโลยี Artificial Intelligence, Voice Command, Face Recognition, Chat Bot และ Machine Learning ตรวจสอบข้อผิดพลาดอัตโนมัติ
              </p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p class="text-xs text-slate-400">
              องค์กรชั้นนำที่ไว้วางใจใช้งาน: AOT (ท่าอากาศยานไทย), Feel The Joy, TCEB, THAIRUNG, KTBGS
            </p>
            <div class="flex items-center gap-3 shrink-0">
              <NuxtLink
                to="/news/hr-ai-oiio-2019-winner"
                class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold font-heading transition-colors"
              >
                ดูรางวัล The Winner OIIO 2019 →
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: Closing Summary & CTA -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center max-w-3xl mx-auto">
        <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
          เริ่มต้นบริหารงานบุคคลด้วย HR.ai วันนี้
        </h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          เชื่อมโยงการบริหารบุคลากร การพัฒนาพนักงาน และการพัฒนาองค์กรเข้าด้วยกัน เพื่อให้องค์กรทำงานได้อย่างเป็นระบบ รวดเร็ว และแม่นยำ
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <NuxtLink
            to="/products/hr-ai"
            class="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold font-heading transition-colors"
          >
            ← กลับสู่หน้าหลัก HR.ai
          </NuxtLink>
          <a
            href="https://igenco.co.th/index.php/th/product/enterprise-software/i-huris#"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold font-heading transition-colors"
          >
            ดาวน์โหลดคุณสมบัติระบบ (i-Huris)
          </a>
          <a
            href="https://www.hraicloud.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-semibold font-heading shadow-md transition-all"
          >
            เข้าสู่ระบบ www.hraicloud.com
          </a>
        </div>
      </section>

    </main>

    <!-- Lightbox Modal for Full Poster Image View -->
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
            class="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4 text-center"
            @click.stop
          >
            <div class="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 px-2">
              <span class="font-heading font-bold text-sm sm:text-base text-slate-800">
                HR.ai – ระบบบริหารทรัพยากรมนุษย์อัจฉริยะ (EIS • HRM • HRD • OD)
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
              src="/images/products/hr-ai/hr-ai-brochure-poster.jpg"
              alt="HR.ai Poster Full Details"
              class="w-full max-h-[82vh] object-contain rounded-lg"
            />
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
