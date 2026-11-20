<script setup lang="ts">
const { locale, t } = useLocale()

// Lightbox state for expanding gallery / brochure images
const activeModalImage = ref<{ title: string; image: string; caption?: string } | null>(null)
const currentSlide = ref(0)

function openModal(item: { title: string; image: string; caption?: string }) {
  activeModalImage.value = item
}

function closeModal() {
  activeModalImage.value = null
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + galleryItems.length) % galleryItems.length
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % galleryItems.length
}

function goToSlide(index: number) {
  currentSlide.value = index
}

function prevModalImage() {
  if (!activeModalImage.value) return
  const currentIndex = galleryItems.findIndex(i => i.image === activeModalImage.value?.image)
  const prevIdx = (currentIndex - 1 + galleryItems.length) % galleryItems.length
  activeModalImage.value = galleryItems[prevIdx]
}

function nextModalImage() {
  if (!activeModalImage.value) return
  const currentIndex = galleryItems.findIndex(i => i.image === activeModalImage.value?.image)
  const nextIdx = (currentIndex + 1) % galleryItems.length
  activeModalImage.value = galleryItems[nextIdx]
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && activeModalImage.value) {
    closeModal()
  } else if (activeModalImage.value) {
    if (e.key === 'ArrowLeft') prevModalImage()
    if (e.key === 'ArrowRight') nextModalImage()
  } else {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
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

// Gallery Images from igenq.com
const galleryItems = [
  {
    title: 'iGenQ ระบบบริหารคิวอัจฉริยะแบบ New Normal',
    image: '/images/products/igenq/banner-igenq-v4.jpg',
    caption: 'สแกน QR Code เพื่อกดรับบัตรคิวผ่านมือถือโดยไม่ต้องติดตั้งแอป รองรับระบบแจ้งเตือนผ่าน LINE Notify',
  },
  {
    title: 'เปรียบเทียบจุดอ่อนของระบบคิวเดิม vs จุดเด่นของ iGenQ',
    image: '/images/products/igenq/banner-igenq-weakness.jpg',
    caption: 'แก้ปัญหาความแออัดหน้าเคาน์เตอร์ ลดต้นทุนฮาร์ดแวร์ ไม่ต้องเดินสาย LAN และไม่ต้องซื้อ Server ราคาแพง',
  },
  {
    title: 'แผนภาพกระบวนการทำงานของระบบคิวยุคปัจจุบัน',
    image: '/images/products/igenq/banner-igenq-current.jpg',
    caption: 'ขั้นตอนการกดบัตรคิวผ่านมือถือ การเรียกคิว และการแสดงผลบน Smart TV อย่างเป็นระบบ',
  },
  {
    title: 'หนังสือรับรองผลงานจากศูนย์บริการภาครัฐจังหวัดจันทบุรี (CGSC)',
    image: '/images/products/igenq/certificate-cgsc.jpg',
    caption: 'หนังสือรับรองผลงานการติดตั้งและใช้งานระบบคิวอย่างเป็นทางการ จากผู้ว่าราชการจังหวัดจันทบุรี ณ บิ๊กซี จันทบุรี',
  },
  {
    title: 'IGENCO Ecosystem — 16 ปีแห่งความเชี่ยวชาญด้านซอฟต์แวร์',
    image: '/images/products/igenq/igenco-16th.jpg',
    caption: 'ระบบไอเจนคิวพัฒนาโดย บริษัท ไอเจนโก้ จำกัด ผู้พัฒนาซอฟต์แวร์มาตรฐานสากล ISO/IEC 29110',
  },
]

// ข้อดีของ iGenQ ระบบบริหารคิวอัจฉริยะ (จากสื่อแนะนำอย่างเป็นทางการ)
const coreAdvantages = [
  {
    num: '1',
    title: 'ไม่ต้องซื้อ Server ไม่ต้องเดินสาย',
    desc: 'เนื่องจากระบบติดตั้งและทำงานบน Cloud Hosting ใช้งานผ่านอินเทอร์เน็ตได้ทันที ประหยัดต้นทุนอุปกรณ์และค่าบำรุงรักษา',
  },
  {
    num: '2',
    title: 'ขยายจุดบริการ (Counter Service) ได้ไม่จำกัด',
    desc: 'สามารถเพิ่มจุดบริการหรือเปิดเคาน์เตอร์บริการใหม่ได้ทันทีตามต้องการ โดยไม่ต้องติดตั้งอุปกรณ์เพิ่มเติม',
  },
  {
    num: '3',
    title: 'แสดงผลคิวที่เรียกบนจอทีวีไร้สาย',
    desc: 'แสดงผลบนจอทีวี Google TV / Android TV คมชัดระดับ HD โดยเชื่อมต่อไร้สายผ่านระบบ Wi-Fi พร้อมเสียงเรียกคิวอัตโนมัติ',
  },
  {
    num: '4',
    title: 'สร้างฟอร์มแบบประเมินความพึงพอใจผูกกับจุดบริการได้',
    desc: 'สามารถสร้างฟอร์มแบบประเมินความพึงพอใจผูกกับจุดบริการ (Counter Service) ให้ผู้รับบริการทำแบบประเมินผ่านมือถือได้ทันที',
  },
  {
    num: '5',
    title: 'เรียกคิวได้จากทุกอุปกรณ์ พร้อมแจ้งเตือน LINE Notify',
    desc: 'สามารถเรียกคิวผ่านมือถือ / Tablet / PC / Notebook มีระบบแจ้งสถานะคิวที่ให้บริการปัจจุบัน อีกกี่คิวถึงคุณ และระยะเวลารอคอย พร้อมแจ้งเตือนทาง LINE Notify',
  },
]

useSeoMeta({
  title: 'iGenQ (ไอเจนคิว) ระบบจัดการคิวอัจฉริยะแบบ New Normal | IGENCO',
  description: 'iGenQ ระบบบริหารคิวอัจฉริยะบน Cloud ทำงานง่ายผ่านสมาร์ทโฟน ไม่ต้องติดตั้งแอป สแกน QR Code รับ e-Ticket แจ้งเตือนผ่าน LINE Notify และแสดงผลบน Smart TV ไร้สาย พัฒนาโดย บริษัท ไอเจนโก้ จำกัด มาตรฐาน ISO/IEC 29110',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/60 pb-24 font-sans text-slate-800">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <!-- Glow ambient background -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        
        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-slate-500 mb-6" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
          <span class="text-slate-300">/</span>
          <NuxtLink to="/#products" class="hover:text-[#16834A] transition-colors">ผลิตภัณฑ์และบริการ</NuxtLink>
          <span class="text-slate-300">/</span>
          <span class="text-[#16834A] font-semibold">iGenQ</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left Content -->
          <div class="lg:col-span-7">
            
            <!-- Badges -->
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider border border-[#16834A]/20">
                <span class="w-2 h-2 rounded-full bg-[#16834A] animate-pulse"></span>
                iGenQ Smart Queue System
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                มาตรฐาน ISO/IEC 29110
              </span>
              <span class="px-3 py-1 rounded-full bg-emerald-50 text-[#16834A] text-xs font-heading font-medium border border-emerald-200/60">
                Cloud SaaS 100%
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium border border-slate-200">
                New Normal QR Code
              </span>
            </div>

            <h1 class="text-3xl sm:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
              iGenQ <span class="text-[#16834A]">(ไอเจนคิว)</span>
              <span class="block text-xl sm:text-2xl font-bold text-slate-700 mt-2 font-heading">
                ระบบจัดการคิวอัจฉริยะรูปแบบใหม่ ไม่ต้องติดตั้ง App
              </span>
            </h1>

            <p class="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              ปฏิวัติการรอคิวด้วยระบบจัดการคิวบน <strong>Cloud Hosting 100%</strong> ผู้รับบริการสามารถสแกน QR Code เพื่อรับบัตรคิวดิจิทัล (e-Ticket) ผ่านโทรศัพท์มือถือ ตรวจสอบสถานะคิวแบบ Real-time และรับการแจ้งเตือนผ่าน <strong>LINE Notify</strong> โดยไม่ต้องยืนรอหน้าเคาน์เตอร์ ลดความแออัด ประหยัดต้นทุน และยกระดับการบริการสู่สากล
            </p>

            <!-- Key Metric Pills -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 pt-2">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div class="text-xl sm:text-2xl font-bold font-heading text-[#16834A]">0 บาท</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">ค่าเดินสาย & Server</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div class="text-xl sm:text-2xl font-bold font-heading text-[#16834A]">100%</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">ไม่ต้องโหลดแอปพลิเคชัน</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div class="text-xl sm:text-2xl font-bold font-heading text-[#16834A]">ไม่จำกัด</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">ขยายเคาน์เตอร์บริการ</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div class="text-xl sm:text-2xl font-bold font-heading text-[#16834A]">Real-time</div>
                <div class="text-xs text-slate-500 font-medium mt-0.5">แจ้งเตือน LINE Notify</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <NuxtLink
                to="/contact/sales"
                class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#16834A] hover:bg-[#126b3c] text-white text-sm font-bold font-heading shadow-md shadow-[#16834A]/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>ปรึกษา / ขอใบเสนอราคา</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>

              <a
                href="/images/products/igenq/Proposal_iGenQ.pdf"
                target="_blank"
                class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold font-heading border border-slate-300 shadow-xs transition-all"
              >
                <svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>ดาวน์โหลด Proposal (PDF)</span>
              </a>

              <a
                href="https://app.igenq.com/igenq-client/index.php"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#171717] text-sm font-semibold font-heading transition-all"
              >
                <span>เข้าสู่ระบบคิว iGenQ Web</span>
                <svg class="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>

          <!-- Right Showcase Image Carousel / Slider -->
          <div class="lg:col-span-5">
            <div class="relative">
              
              <!-- Main Slide Card with Next/Prev Controls -->
              <div 
                class="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group cursor-pointer"
                @click="openModal(galleryItems[currentSlide])"
              >
                <!-- Aspect Ratio Container -->
                <div class="relative aspect-[16/10] bg-slate-900/5 overflow-hidden flex items-center justify-center">
                  <img
                    :key="galleryItems[currentSlide].image"
                    :src="galleryItems[currentSlide].image"
                    :alt="galleryItems[currentSlide].title"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />

                  <!-- Slide Counter Badge (Top-Left) -->
                  <div class="absolute top-3 left-3 z-10 pointer-events-none">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold font-heading shadow-md">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
                      {{ currentSlide + 1 }} / {{ galleryItems.length }}
                    </span>
                  </div>

                  <!-- Zoom Hint Badge (Top-Right) -->
                  <div class="absolute top-3 right-3 z-10 pointer-events-none">
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#171717] text-[11px] font-bold font-heading shadow-md">
                      <svg class="w-3.5 h-3.5 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      ขยายภาพ
                    </span>
                  </div>

                  <!-- Hover Overlay -->
                  <div class="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs font-bold font-heading shadow-lg">
                      <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      คลิกเพื่อดูภาพขนาดเต็ม (Lightbox)
                    </span>
                  </div>
                </div>

                <!-- Floating Prev Button (Left) -->
                <button
                  type="button"
                  aria-label="Previous Slide"
                  @click.stop="prevSlide"
                  class="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#16834A] shadow-lg border border-slate-200/80 flex items-center justify-center transition-all transform hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-[#16834A]"
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <!-- Floating Next Button (Right) -->
                <button
                  type="button"
                  aria-label="Next Slide"
                  @click.stop="nextSlide"
                  class="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#16834A] shadow-lg border border-slate-200/80 flex items-center justify-center transition-all transform hover:scale-110 z-20 focus:outline-none focus:ring-2 focus:ring-[#16834A]"
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <!-- Slide Title, Description & Indicators -->
              <div class="mt-3.5 px-1">
                <div class="flex items-center justify-between gap-3 mb-1">
                  <h3 class="text-sm font-bold font-heading text-[#171717] line-clamp-1">
                    {{ galleryItems[currentSlide].title }}
                  </h3>
                  
                  <!-- Dots Indicator -->
                  <div class="flex items-center gap-1.5 shrink-0">
                    <button
                      v-for="(item, idx) in galleryItems"
                      :key="idx"
                      type="button"
                      :aria-label="`ไปยังภาพที่ ${idx + 1}`"
                      @click="goToSlide(idx)"
                      class="transition-all rounded-full h-2 focus:outline-none"
                      :class="currentSlide === idx ? 'w-5 bg-[#16834A]' : 'w-2 bg-slate-300 hover:bg-slate-400'"
                    ></button>
                  </div>
                </div>

                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {{ galleryItems[currentSlide].caption }}
                </p>

                <!-- Clickable Thumbnails Row -->
                <div class="grid grid-cols-5 gap-2 mt-3 pt-2.5 border-t border-slate-200/70">
                  <button
                    v-for="(item, idx) in galleryItems"
                    :key="idx"
                    type="button"
                    @click="goToSlide(idx)"
                    :aria-label="item.title"
                    class="relative rounded-lg overflow-hidden border-2 transition-all aspect-[16/10] bg-slate-100 focus:outline-none"
                    :class="currentSlide === idx ? 'border-[#16834A] ring-2 ring-[#16834A]/25 shadow-xs scale-102' : 'border-slate-200 opacity-60 hover:opacity-100'"
                  >
                    <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                  </button>
                </div>

                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-0.5">
                  <span>💡 กดลูกศร ‹ › หรือคลิกรูปย่อเพื่อเปลี่ยนรูป</span>
                  <span>คลิกรูปใหญ่เพื่อขยาย</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </header>

    <!-- Section 1: New Normal Smart Queue System & Official Video Showcase -->
    <section class="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden text-left">
      <!-- Glow ambient decorative lights -->
      <div class="absolute -top-24 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 right-1/4 w-80 h-80 bg-[#16834A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        
        <!-- Section Header Area -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold font-heading uppercase tracking-wider border border-amber-200/80 mb-4 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>กดบัตรคิวแบบ New Normal</span>
          </div>

          <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight leading-tight">
            ผู้ใช้งานสามารถสแกนคิวอาร์โค้ดร้านเพื่อกดบัตรคิวผ่านโทรศัพท์
            <span class="block text-[#16834A] mt-2">
              โดยไม่ต้องติดตั้งแอปบนมือถือ
            </span>
          </h2>
          
          <p class="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            สัมผัสนวัตกรรมการบริการที่สะดวกรวดเร็ว ไร้สัมผัส (Touchless) และไร้กระดาษ (Paperless) ลูกค้ากดรับบัตรคิวได้ทันทีผ่านสมาร์ตโฟน พร้อมติดตามสถานะแบบ Real-time ได้จากทุกที่
          </p>
        </div>

        <!-- 2 Columns Grid: 5 Core Advantages on Left, YouTube Video Showcase on Right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Core Advantages List -->
          <div class="lg:col-span-7 space-y-3.5">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 text-[#16834A] text-xs sm:text-sm font-bold font-heading border border-emerald-200/80 mb-1">
              <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
              <span>ข้อดีของ iGenQ ระบบบริหารคิวอัจฉริยะ</span>
            </div>

            <!-- 5 Item Cards -->
            <div
              v-for="adv in coreAdvantages"
              :key="adv.num"
              class="group rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:border-[#16834A]/50 hover:-translate-y-0.5"
            >
              <div class="flex items-start gap-3.5 sm:gap-4">
                <!-- Number Circle Badge -->
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white group-hover:bg-[#16834A] text-[#16834A] group-hover:text-white font-extrabold font-heading text-sm sm:text-base flex items-center justify-center shrink-0 border border-slate-200/90 group-hover:border-[#16834A] shadow-xs transition-all">
                  {{ adv.num }}
                </div>

                <!-- Text Info -->
                <div class="flex-1 min-w-0">
                  <h3 class="text-sm sm:text-base font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug">
                    {{ adv.title }}
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {{ adv.desc }}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Official YouTube Video Player Frame -->
          <div class="lg:col-span-5">
            <div class="relative">
              
              <!-- Device Frame Container -->
              <div class="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                
                <!-- Mac-style Window Top Bar -->
                <div class="px-4 py-3 bg-slate-800/90 border-b border-slate-700/80 flex items-center justify-between">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span class="text-[11px] font-medium text-slate-300 ml-2 font-mono">iGenQ System Video</span>
                  </div>
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                    <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                    YouTube HD
                  </span>
                </div>

                <!-- Responsive 16:9 Video Embed -->
                <div class="relative aspect-video w-full bg-black">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/sR7L1oThLOA?rel=0"
                    title="ไอเจนคิว (iGenQ): ระบบจัดการคิวอัจฉริยะ i-Regist By IGENCO"
                    class="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                </div>

                <!-- Video Title & Description Underneath -->
                <div class="p-4 bg-slate-900 text-white text-left">
                  <div class="flex items-center justify-between gap-2">
                    <h4 class="text-xs sm:text-sm font-bold font-heading text-slate-100 line-clamp-1">
                      ไอเจนคิว (iGenQ): ระบบจัดการคิวอัจฉริยะ i-Regist By IGENCO
                    </h4>
                    <a
                      href="https://www.youtube.com/watch?v=sR7L1oThLOA"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold font-heading shrink-0 transition-colors shadow-xs"
                      title="ดูคลิปวิดีโอบน YouTube"
                    >
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>เปิดดูบน YouTube</span>
                    </a>
                  </div>
                  <p class="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    ระบบคิวแบบ New Normal ใช้งานได้ทันทีโดยไม่ต้องติดตั้ง App สแกน QR Code รับ e-Ticket ดูสถานะบนมือถือ พร้อมแจ้งเตือนผ่าน LINE Notify และแสดงผลบน Android/Google TV
                  </p>
                </div>

              </div>

              <!-- Quick Video Feature Badges -->
              <div class="grid grid-cols-3 gap-2.5 mt-3 text-center">
                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="block text-xs font-bold text-[#16834A] font-heading">New Normal</span>
                  <span class="block text-[10px] text-slate-500 mt-0.5">สแกน QR ผ่านมือถือ</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="block text-xs font-bold text-[#16834A] font-heading">LINE Notify</span>
                  <span class="block text-[10px] text-slate-500 mt-0.5">แจ้งเตือน Real-time</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="block text-xs font-bold text-[#16834A] font-heading">Smart TV</span>
                  <span class="block text-[10px] text-slate-500 mt-0.5">เชื่อมต่อ Wi-Fi ไร้สาย</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Section 2: Contact & Support CTA -->
    <section class="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200 text-center">
      <div class="wrap max-w-4xl mx-auto">
        <span class="inline-block px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-3">
          Get in Touch
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
          เริ่มต้นยกระดับการจัดการคิวของคุณวันนี้กับ <span class="text-[#16834A]">iGenQ</span>
        </h2>
        <p class="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          ปรึกษาทีมวิศวกรซอฟต์แวร์ IGENCO นัดหมายสาธิตระบบออนไลน์ (Demo) หรือขอใบเสนอราคาได้ทันที
        </p>

        <!-- Direct Contact Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 text-left">
          <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span class="block text-xs font-bold text-[#16834A] uppercase tracking-wider">ฝ่ายขาย / นัดสาธิตระบบ</span>
            <span class="block font-bold text-sm text-[#171717] mt-1">คุณทวีวัตร์ (081-752-9549)</span>
            <span class="block text-xs text-slate-500 mt-0.5">LINE ID: thaweewat_wee</span>
          </div>
          <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span class="block text-xs font-bold text-[#16834A] uppercase tracking-wider">โทรศัพท์ส่วนกลาง</span>
            <span class="block font-bold text-sm text-[#171717] mt-1">02-532-5151, 02-532-5160-2</span>
            <span class="block text-xs text-slate-500 mt-0.5">จันทร์ - ศุกร์ 08:30 - 17:30 น.</span>
          </div>
          <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span class="block text-xs font-bold text-[#16834A] uppercase tracking-wider">อีเมลติดต่อ</span>
            <span class="block font-bold text-sm text-[#171717] mt-1">info@igenco.co.th</span>
            <span class="block text-xs text-slate-500 mt-0.5">เว็บไซต์: www.igenco.co.th</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <NuxtLink
            to="/contact/sales"
            class="px-8 py-3.5 rounded-full bg-[#16834A] hover:bg-[#126b3c] text-white text-sm font-bold font-heading shadow-md transition-all"
          >
            ส่งข้อความติดต่อฝ่ายขาย
          </NuxtLink>
          <NuxtLink
            to="/products"
            class="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold font-heading border border-slate-300 transition-all"
          >
            ดูผลิตภัณฑ์ทั้งหมดของ IGENCO
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal for Full-Size Images -->
    <Teleport to="body">
      <div
        v-if="activeModalImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
        @click.self="closeModal"
      >
        <div class="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl">
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
            <div class="pr-4">
              <h3 class="text-base sm:text-lg font-bold font-heading text-[#171717]">
                {{ activeModalImage.title }}
              </h3>
              <p v-if="activeModalImage.caption" class="text-xs text-slate-500 mt-0.5">
                {{ activeModalImage.caption }}
              </p>
            </div>
            <button
              type="button"
              class="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors shrink-0 ml-2"
              @click="closeModal"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <!-- Modal Body Image with Prev/Next Controls -->
          <div class="relative p-3 sm:p-4 overflow-auto flex items-center justify-center bg-slate-900/5 max-h-[calc(92vh-80px)] group">
            <img
              :src="activeModalImage.image"
              :alt="activeModalImage.title"
              class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-md"
            />

            <!-- Prev Button -->
            <button
              type="button"
              aria-label="Previous image"
              @click.stop="prevModalImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 focus:outline-none"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Next Button -->
            <button
              type="button"
              aria-label="Next image"
              @click.stop="nextModalImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 focus:outline-none"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>
