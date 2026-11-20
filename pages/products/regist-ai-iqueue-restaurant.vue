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
  title: 'ขั้นตอนการใช้งานระบบจัดคิว (ร้านอาหาร) | i-Queue - IGENCO',
  description: 'ระบบจัดคิวร้านอาหาร i-Queue by Regist.ai ออกบัตรคิว ระบุจำนวนที่นั่ง เรียกคิวระบุเบอร์โต๊ะ พร้อมแจ้งเตือนเวลาโต๊ะครบกำหนดบน Tablet/Smart Phone',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-20">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

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
          <span class="text-amber-700 font-semibold">ขั้นตอนจัดคิวร้านอาหาร</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div class="max-w-3xl">
            <div class="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-heading font-bold uppercase tracking-wider border border-amber-200">
                <span class="w-2 h-2 rounded-full bg-amber-600"></span>
                Restaurant Queue Flow
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                ร้านอาหาร & คาเฟ่
              </span>
              <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-heading font-medium border border-purple-200">
                Table & Dining Management
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              ขั้นตอนการใช้งานระบบจัดคิว (ร้านอาหาร)
            </h1>
            <p class="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              ระบบบริหารจัดการคิวสำหรับร้านอาหารและคาเฟ่ ให้ลูกค้ากดบัตรคิว ระบุชื่อและจำนวนที่นั่งผ่าน Tablet หรือ Smart Phone เจ้าหน้าที่เรียกคิวระบุหมายเลขโต๊ะอัตโนมัติ พร้อมระบบแจ้งเตือนระยะเวลาการใช้บริการ
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
      <section class="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 shadow-sm overflow-hidden text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-heading block">แผนผังขั้นตอน</span>
            <h2 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">แผนผังขั้นตอนการใช้งานระบบจัดคิว (ร้านอาหาร)</h2>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-heading transition-colors shrink-0"
            @click="openLightbox"
          >
            <svg class="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <span>คลิกดูภาพขยาย</span>
          </button>
        </div>

        <!-- Centered moderate-sized image frame -->
        <div class="flex justify-center">
          <div
            class="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/80 cursor-pointer group shadow-sm hover:shadow-md transition-all p-2 sm:p-3"
            @click="openLightbox"
            title="คลิกเพื่อขยายภาพขนาดใหญ่"
          >
            <img
              src="/images/products/regist-ai/iqueue-flow-restaurant.jpg"
              alt="ขั้นตอนการใช้งานระบบจัดคิว ร้านอาหาร"
              class="w-full max-h-[360px] sm:max-h-[400px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs sm:text-sm font-bold font-heading shadow-lg">
                <svg class="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>คลิกเพื่อดูภาพขยาย</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: 3 Core Steps in Restaurant Flow -->
      <section class="space-y-6 text-left">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-heading block mb-1">กระบวนการ 3 ขั้นตอน</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">ขั้นตอนการจัดคิวหน้าร้านอาหาร (Step-by-Step)</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Step 1 -->
          <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold font-heading border border-amber-200">ขั้นตอนที่ 1</span>
                <span class="text-slate-400 text-xs font-heading">Tablet / Mobile</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-[#171717] mb-2">กดบัตรคิวหน้าร้าน / พิมพ์บัตรคิว</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                ลูกค้ากดบัตรคิวที่หน้าร้านบน Tablet หรือ Smart Phone พร้อมระบุชื่อลูกค้าและจำนวนที่นั่ง
              </p>
              <div class="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-950 space-y-1">
                <div class="font-bold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  หน้าจอออกบัตรคิว (ใช้ Tablet)
                </div>
                <p class="text-slate-600">ตอนกดบัตรคิวจะมีช่องให้ระบุชื่อลูกค้า จำนวนที่นั่ง และสามารถดูจอเรียกคิวที่ระบุเบอร์โต๊ะได้ทันที</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-amber-800 font-semibold">
              ✓ ลูกค้าจองคิวสะดวก ไม่ต้องยืนออหน้าร้าน
            </div>
          </div>

          <!-- Step 2 -->
          <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold font-heading border border-purple-200">ขั้นตอนที่ 2</span>
                <span class="text-slate-400 text-xs font-heading">เคาน์เตอร์พนักงาน</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-[#171717] mb-2">จุดเรียกคิวเข้าใช้บริการ</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                พนักงานกดเรียกคิวผ่าน Smart Phone หรือ Tablet ประจำเคาน์เตอร์ เพื่อจัดสรรโต๊ะอาหารที่ว่าง
              </p>
              <div class="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/60 text-xs text-purple-950 space-y-1">
                <div class="font-bold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                  หน้าจอเรียกคิว (ใช้ Notebook / PC / Tablet)
                </div>
                <p class="text-slate-600">รองรับระบบแจ้งเตือนโต๊ะที่กำลังจะครบกำหนดเวลาได้ เช่น 1 ชั่วโมง บน Tablet หรือ Smart Phone</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-purple-700 font-semibold">
              ✓ ควบคุมรอบโต๊ะ Turn-over ได้อย่างแม่นยำ
            </div>
          </div>

          <!-- Step 3 -->
          <div class="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-bold font-heading border border-emerald-200/60">ขั้นตอนที่ 3</span>
                <span class="text-slate-400 text-xs font-heading">Smart TV / จอกลาง</span>
              </div>
              <h3 class="font-heading font-bold text-lg text-[#171717] mb-2">หน้าจอแสดงผลคิว & เสียงเรียก</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                จอแสดงผลคิวสำหรับลูกค้า พร้อมระบบกระจายเสียงเรียกคิวที่สามารถระบุหมายเลขโต๊ะได้ชัดเจน
              </p>
              <div class="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 text-xs text-emerald-950 space-y-1">
                <div class="font-bold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
                  เสียงและจอเรียกคิวระบุเบอร์โต๊ะ
                </div>
                <p class="text-slate-600">ตัวอย่าง: "เชิญคุณ วี หมายเลข 5 ที่โต๊ะ 7 ค่ะ" แสดงผลบน PC, Monitor หรือ Smart TV</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#16834A] font-semibold">
              ✓ ลูกค้าเดินเข้าโต๊ะได้ถูกต้อง รวดเร็ว
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: Key Features for Restaurants -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="max-w-2xl mb-6">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-heading block mb-1">จุดเด่นระบบร้านอาหาร</span>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">ฟังก์ชันพิเศษที่ออกแบบเพื่อธุรกิจร้านอาหารโดยเฉพาะ</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-sm mb-3">01</span>
            <h4 class="font-heading font-bold text-sm text-slate-900">แยกกลุ่มตามจำนวนที่นั่ง</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              จัดกลุ่มคิวตามขนาดโต๊ะ เช่น 1-2 ท่าน, 3-4 ท่าน หรือโต๊ะกลุ่มใหญ่ 5 ท่านขึ้นไป เพื่อจัดสรรโต๊ะได้อย่างมีประสิทธิภาพ
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white font-bold text-sm mb-3">02</span>
            <h4 class="font-heading font-bold text-sm text-slate-900">แจ้งเตือนเวลาทานอาหาร</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              สำหรับร้านอาหารบุฟเฟ่ต์หรือร้านที่มีรอบเวลา ระบบสามารถแจ้งเตือนสถานะโต๊ะที่ใกล้ครบกำหนดเวลาได้แบบ Real-time
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-[#16834A] text-white font-bold text-sm mb-3">03</span>
            <h4 class="font-heading font-bold text-sm text-slate-900">ระบุเบอร์โต๊ะในเสียงเรียก</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              ระบบเรียกคิวภาษาไทยอัตโนมัติ ระบุชื่อลูกค้า หมายเลขคิว และโต๊ะเป้าหมาย เช่น "เชิญคุณ วี หมายเลข 5 ที่โต๊ะ 7 ค่ะ"
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span class="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm mb-3">04</span>
            <h4 class="font-heading font-bold text-sm text-slate-900">ไร้สาย รองรับทุกอุปกรณ์</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">
              ทำงานผ่านบราวเซอร์ ไม่ต้องลงโปรแกรมซับซ้อน รองรับทั้ง iPad, Android Tablet, Smart Phone และ Smart TV
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Bottom Navigation & Contact -->
      <section class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-700 font-heading block mb-1">โซลูชันระบบจัดคิว</span>
            <h3 class="font-heading font-bold text-lg text-[#171717]">i-Queue by Regist.ai ระบบจัดคิวร้านอาหาร</h3>
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
              to="/products/regist-ai-iqueue-hospital"
              class="px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold font-heading border border-emerald-200 transition-colors"
            >
              ดูคิวโรงพยาบาล →
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
              src="/images/products/regist-ai/iqueue-flow-restaurant.jpg"
              alt="ขั้นตอนการใช้งานระบบจัดคิว ร้านอาหาร"
              class="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
            <div class="mt-4 text-center text-white font-heading max-w-3xl">
              <h4 class="text-base sm:text-xl font-bold">ขั้นตอนการใช้งานระบบจัดคิว (ร้านอาหาร)</h4>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>
