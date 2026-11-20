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
  title: 'ขั้นตอนการจัดคิวหน้างาน (โรงพยาบาล, จุดฉีดวัคซีน, ตรวจสุขภาพ) | i-Queue - IGENCO',
  description: 'การเรียกคิวแบบหลายช่องบริการต่อเนื่อง เช่น การจัดคิวฉีดวัคซีน และตรวจสุขภาพ เมื่อ Check-in จะได้เลขคิว เจ้าหน้าที่เรียกคิวเดียวกันตาม 5 จุดบริการได้ต่อเนื่อง',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-20">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden text-left">
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
          <NuxtLink to="/products/regist-ai-iqueue" class="hover:text-[#16834A] transition-colors">i-Queue</NuxtLink>
          <span class="text-slate-300">/</span>
          <span class="text-[#16834A] font-semibold">ขั้นตอนจัดคิวจุดบริการต่อเนื่อง</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider border border-emerald-200/60">
                <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
                Continuous Queue Management
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                โรงพยาบาล & ตรวจสุขภาพ
              </span>
              <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-heading font-medium border border-purple-200">
                5 Check-Points
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              ขั้นตอนการจัดคิวหน้างาน (โรงพยาบาล, จุดฉีดวัคซีน, ตรวจสุขภาพ)
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              การเรียกคิวแบบหลายช่องบริการต่อเนื่อง เช่น การจัดคิวฉีดวัคซีน หรือการตรวจสุขภาพประจำปี เมื่อผู้รับบริการ Check-in จะได้เลขคิว โดยเจ้าหน้าที่สามารถเรียกคิวเดียวกันตามจุดบริการต่าง ๆ ได้ต่อเนื่องอย่างเป็นระบบ
            </p>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <NuxtLink
              to="/products/regist-ai-iqueue"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold font-heading border border-slate-300 shadow-xs transition-all"
            >
              <svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>กลับหน้า i-Queue</span>
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

      <!-- SECTION 1: Featured High-Res Infographic Display -->
      <section class="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-lg shadow-slate-200/40 overflow-hidden">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block">แผนผังจุดบริการต่อเนื่อง</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">แผนผังขั้นตอนการจัดคิวหน้างาน (Check-in & Multi Check-Point)</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors"
            @click="openLightbox"
          >
            <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span>คลิกดูภาพเต็มจอ</span>
          </button>
        </div>

        <div
          class="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 cursor-pointer group shadow-inner"
          @click="openLightbox"
          title="คลิกเพื่อขยายภาพขนาดใหญ่"
        >
          <img
            src="/images/products/regist-ai/iqueue-flow-hospital.jpg"
            alt="ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง (โรงพยาบาล, จุดฉีดวัคซีน, ตรวจสุขภาพ)"
            class="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-[#171717] text-xs sm:text-sm font-bold font-heading shadow-xl">
              <svg class="w-5 h-5 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
              <span>คลิกเพื่อดูภาพความละเอียดสูง (Full Screen)</span>
            </span>
          </div>
        </div>
      </section>

      <!-- SECTION 2: 3 Major Workflows on Site -->
      <section class="space-y-6 text-left">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">ขั้นตอนหลัก 3 ขั้นตอน</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">ขั้นตอนการดำเนินงานหน้างาน (On-Site Operations)</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Step 1 -->
          <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-bold font-heading border border-emerald-200/60">ขั้นตอนที่ 1</span>
                <span class="text-slate-400 text-xs font-heading">จุดที่ 1</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-[#171717] mb-2">ระบบรายงานตัว (Check-in)</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ผู้รับบริการเข้ามายังจุดต้อนรับหน้างาน เพื่อยืนยันตัวตนผ่านบัตรประชาชน, พาสปอร์ต หรือสแกน QR Code เพื่อรับหมายเลขคิว
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#16834A] font-semibold">
              ✓ รายงานตัวและออกเลขคิวประจำตัว
            </div>
          </div>

          <!-- Step 2 -->
          <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold font-heading border border-purple-200">ขั้นตอนที่ 2</span>
                <span class="text-slate-400 text-xs font-heading">อุปกรณ์ควบคุม</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-[#171717] mb-2">Queue Management & Check Point</h3>
              <ul class="text-xs sm:text-sm text-slate-600 space-y-2 mt-2 leading-relaxed">
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">•</span>
                  <span><strong>อุปกรณ์เรียกคิว:</strong> ใช้งานผ่าน Mobile หรือ Tablet ประจำเคาน์เตอร์</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">•</span>
                  <span><strong>แสดงผลคิว:</strong> ขึ้นจอ Smart TV ส่วนกลางคมชัด</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-600 font-bold">•</span>
                  <span><strong>ออกบัตรคิว:</strong> สั่งพิมพ์ผ่าน Tablet และ Thermal Printer</span>
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-purple-700 font-semibold">
              ✓ ควบคุมคิวไร้สาย Real-time
            </div>
          </div>

          <!-- Step 3 -->
          <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold font-heading border border-amber-200">ขั้นตอนที่ 3</span>
                <span class="text-slate-400 text-xs font-heading">5 สถานี</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-[#171717] mb-2">ระบบ Check Point จุดบริการ</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                การไหลของคิวต่อเนื่องตามสถานีบริการทางการแพทย์ โดยไม่ต้องกดบัตรคิวใหม่ในแต่ละห้องตรวจ
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-amber-700 font-semibold">
              ✓ คิวเดียวกันต่อเนื่องครบทุกสถานี
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: Detailed 5 Check-Point Stations -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="max-w-2xl mb-6">
          <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">สถานีบริการต่อเนื่อง</span>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">รายละเอียด 5 จุดบริการหน้างาน (Check-Point Flow)</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div class="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <span class="flex h-7 w-7 items-center justify-center rounded-xl bg-[#16834A] text-white font-bold text-xs font-heading mb-2.5">01</span>
            <h4 class="font-heading font-bold text-sm text-emerald-950">จุดบริการที่ 1</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              พิมพ์แบบฟอร์มลงนามในใบยินยอมการรับวัคซีน คัดกรอง / ซักประวัติ และประเมินความเสี่ยง
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <span class="flex h-7 w-7 items-center justify-center rounded-xl bg-[#16834A] text-white font-bold text-xs font-heading mb-2.5">02</span>
            <h4 class="font-heading font-bold text-sm text-emerald-950">จุดบริการที่ 2</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              ชั่งน้ำหนัก วัดความดันโลหิต บันทึกค่าสุขภาพเข้าระบบอัตโนมัติ
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <span class="flex h-7 w-7 items-center justify-center rounded-xl bg-[#16834A] text-white font-bold text-xs font-heading mb-2.5">03</span>
            <h4 class="font-heading font-bold text-sm text-emerald-950">จุดบริการที่ 3</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              ฉีดวัคซีน หรือเข้ารับการตรวจวินิจฉัยจากแพทย์ผู้เชี่ยวชาญ
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <span class="flex h-7 w-7 items-center justify-center rounded-xl bg-[#16834A] text-white font-bold text-xs font-heading mb-2.5">04</span>
            <h4 class="font-heading font-bold text-sm text-emerald-950">จุดบริการที่ 4</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              จุดตรวจสอบก่อนกลับ พร้อมรับเอกสารการปฏิบัติตัวหลังฉีดวัคซีน
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
            <span class="flex h-7 w-7 items-center justify-center rounded-xl bg-[#16834A] text-white font-bold text-xs font-heading mb-2.5">05</span>
            <h4 class="font-heading font-bold text-sm text-emerald-950">จุดบริการที่ 5</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              จุดพักสังเกตอาการ 30 นาที พร้อมระบบจับเวลาและแจ้งเตือนเมื่อครบกำหนด
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Bottom Navigation & Contact -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading block mb-1">โซลูชันระบบจัดคิว</span>
            <h3 class="font-heading font-bold text-lg text-[#171717]">i-Queue by Regist.ai จุดบริการต่อเนื่อง</h3>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">ผู้ประสานงานโครงการ: คุณทวีวัตร์ ทรรศนะประทีป | โทร: 02-532-5151, 081-752-9549</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <NuxtLink
              to="/products/regist-ai-iqueue"
              class="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold font-heading transition-colors"
            >
              ← หน้ารวม i-Queue
            </NuxtLink>
            <NuxtLink
              to="/products/regist-ai-iqueue-restaurant"
              class="px-4 py-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs sm:text-sm font-semibold font-heading border border-amber-200 transition-colors"
            >
              ดูคิวร้านอาหาร →
            </NuxtLink>
            <NuxtLink
              :to="{ path: '/contact', query: { product: 'regist-ai' } }"
              class="px-5 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-semibold font-heading shadow-md transition-all active:scale-95"
            >
              ขอใบเสนอราคา
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
              src="/images/products/regist-ai/iqueue-flow-hospital.jpg"
              alt="ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง (โรงพยาบาล, จุดฉีดวัคซีน, ตรวจสุขภาพ)"
              class="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
            <div class="mt-4 text-center text-white font-heading max-w-3xl">
              <h4 class="text-base sm:text-xl font-bold">ขั้นตอนการจัดคิวหน้างาน จุดบริการต่อเนื่อง (5 สถานี)</h4>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
