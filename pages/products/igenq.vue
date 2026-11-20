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

// 5 Key Advantages
const advantages = [
  {
    num: '01',
    title: 'ไม่ต้องซื้อ Server ไม่ต้องเดินสาย',
    en: 'Zero Server / Zero Wiring',
    desc: 'ระบบทำงานบน Cloud Hosting 100% ใช้งานได้ทันทีผ่าน Wi-Fi ไม่ต้องลงทุนค่า Server ราคาแพง และไม่ต้องเดินสาย LAN ให้ยุ่งยาก',
    icon: 'cloud',
  },
  {
    num: '02',
    title: 'ขยายจุดบริการได้ไม่จำกัด',
    en: 'Unlimited Counter Expansion',
    desc: 'สามารถเพิ่มจุดบริการ (Counter Service) หรือขยายช่องบริการได้ทันทีตามต้องการ โดยไม่ต้องซื้อหรือติดตั้งอุปกรณ์ฮาร์ดแวร์เสริม',
    icon: 'counters',
  },
  {
    num: '03',
    title: 'แสดงผลบน Smart TV ไร้สาย',
    en: 'Wireless Smart TV Display',
    desc: 'แสดงผลคิวแบบ Real-time บนจอ Google TV, Android TV หรือจอแสดงผลใดๆ ผ่าน Wi-Fi พร้อมเสียงเรียกคิวอัตโนมัติภาษาไทยและอังกฤษ',
    icon: 'tv',
  },
  {
    num: '04',
    title: 'ประเมินความพึงพอใจดิจิทัล',
    en: 'Integrated CSAT Survey',
    desc: 'สร้างฟอร์มแบบประเมินความพึงพอใจผูกกับแต่ละจุดบริการ (Counter Service) ให้ผู้รับบริการประเมินผลผ่านมือถือได้ทันทีหลังเสร็จสิ้นบริการ',
    icon: 'survey',
  },
  {
    num: '05',
    title: 'Omnichannel & LINE Notify',
    en: 'Smart Notification & Tracking',
    desc: 'เจ้าหน้าที่เรียกคิวผ่าน Smartphone, Tablet, PC หรือ Notebook ได้ทันที ลูกค้าติดตามสถานะคิว Real-time พร้อมแจ้งเตือนผ่าน LINE Notify',
    icon: 'bell',
  },
]

// 5 Steps Customer Flow
const steps = [
  {
    step: '01',
    title: 'สแกนรับบัตรคิว',
    sub: 'Scan QR Code / Kiosk',
    desc: 'ลูกค้าสแกน QR Code หน้าเคาน์เตอร์ด้วยโทรศัพท์มือถือ หรือกดรับบัตรคิวผ่าน Tablet / ตู้ Kiosk เพื่อรับบัตรคิวดิจิทัล (e-Ticket) ทันทีโดยไม่ต้องติดตั้งแอป',
  },
  {
    step: '02',
    title: 'ติดตามสถานะคิว',
    sub: 'Real-time e-Ticket',
    desc: 'หน้าจอมือถือแสดงหมายเลขคิว ลำดับคิวที่รอ เคาน์เตอร์ และเวลาคาดการณ์ ลูกค้าสามารถไปทำธุระอื่นได้โดยไม่ต้องยืนออหน้าเคาน์เตอร์',
  },
  {
    step: '03',
    title: 'เจ้าหน้าที่เรียกคิว',
    sub: 'Multi-Device Calling',
    desc: 'เจ้าหน้าที่กดเรียกคิวผ่านเว็บเบราว์เซอร์บน Smartphone, Tablet หรือ PC รองรับทั้งการเรียกตามลำดับ (FIFO), หมุนเวียน (Round-Robin) หรือคิวพิเศษ (Priority)',
  },
  {
    step: '04',
    title: 'แจ้งเตือนอัตโนมัติ',
    sub: 'LINE & Smart TV Alert',
    desc: 'ระบบส่งข้อความแจ้งเตือนผ่าน LINE Notify เมื่อใกล้ถึงคิว พร้อมขึ้นหมายเลขและเปิดเสียงประกาศเรียกคิวอัตโนมัติคมชัดบนจอ Smart TV',
  },
  {
    step: '05',
    title: 'รับบริการและประเมินผล',
    sub: 'Service & Rating',
    desc: 'ลูกค้าเข้ารับบริการ ณ เคาน์เตอร์อย่างสะดวกรวดเร็ว และคลิกทำแบบประเมินความพึงพอใจออนไลน์ได้ทันทีเพื่อยกระดับคุณภาพบริการ',
  },
]


// Customer References & Use Cases
const clients = [
  {
    name: 'ศูนย์บริการภาครัฐจังหวัดจันทบุรี (CGSC)',
    location: 'บิ๊กซี ซูเปอร์เซ็นเตอร์ จันทบุรี',
    badge: 'ภาครัฐ 8 หน่วยงาน',
    desc: 'จุดบริการร่วมภาครัฐ 8 เคาน์เตอร์ ให้บริการประชาชนครบวงจร (งานทะเบียน, ปกครอง, ประกันสังคม, ขนส่ง, ไฟฟ้า, ประปา) ได้รับหนังสือรับรองผลงานอย่างเป็นทางการจากผู้ว่าราชการจังหวัดจันทบุรี',
    hasCert: true,
  },
  {
    name: 'บริษัท เพอร์เฟค คอมพาเนียน กรุ๊ป จำกัด (PCG)',
    location: 'ในเครือเจริญโภคภัณฑ์ (CP Group)',
    badge: 'โลจิสติกส์ & ซัพพลายเชน',
    desc: 'ระบบคิวโลจิสติกส์การขนส่งอาหารสัตว์ขนาดใหญ่ รองรับฟังก์ชัน Geofencing กำหนดพิกัด GPS ให้กดคิวได้เมื่อรถเข้าสู่รัศมีโรงงาน พร้อมระบบเรียกเทียบช่องสินค้า (Loading Bay) แจ้งเตือนผ่าน LINE',
    hasCert: false,
  },
  {
    name: 'ที่ทำการปกครองอำเภอเขาคิชฌกูฏ',
    location: 'จังหวัดจันทบุรี',
    badge: 'งานทะเบียนและบัตรประชาชน',
    desc: 'ให้บริการจัดการคิวประชาชนสำหรับงานทะเบียนราษฎร บัตรประจำตัวประชาชน และงานบริการอำเภอ ลดความแออัด เพิ่มความโปร่งใสและตรวจสอบได้',
    hasCert: false,
  },
  {
    name: 'โรงพยาบาลซีจีเอช (CGH Hospital) & เครือข่ายการแพทย์',
    location: 'โรงพยาบาลและคลินิกเวชกรรม',
    badge: 'การแพทย์และโรงพยาบาล',
    desc: 'จัดการคิวทางการแพทย์และจุดบริการฉีดวัคซีน จุดคัดกรอง วัดความดัน-ชั่งน้ำหนัก ห้องตรวจแพทย์ จุดรับยา และการเงินอย่างเป็นระบบ',
    hasCert: false,
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

    <!-- Section 1: Comparison - ปัญหาของระบบคิวเดิม vs iGenQ New Normal -->
    <section class="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div class="wrap">
        
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-bold uppercase tracking-wider mb-2">
            Comparison & Pain Points
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            ทำไมต้องเปลี่ยนมาใช้ <span class="text-[#16834A]">iGenQ</span>?
          </h2>
          <p class="mt-3 text-slate-600 text-sm sm:text-base">
            เปรียบเทียบความแตกต่างระหว่างระบบบัตรคิวแบบดั้งเดิม กับระบบบริหารคิวอัจฉริยะยุคดิจิทัล
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <!-- Traditional Queue (จุดอ่อนของระบบเดิม) -->
          <div class="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">
                  ✕
                </div>
                <div>
                  <h3 class="text-lg font-bold font-heading text-rose-900">ระบบคิวแบบเดิม (Traditional Queue)</h3>
                  <p class="text-xs text-rose-700">ข้อจำกัดและปัญหาที่พบในชีวิตประจำวัน</p>
                </div>
              </div>

              <ul class="space-y-3.5 text-sm text-slate-700">
                <li class="flex items-start gap-2.5">
                  <span class="text-rose-500 font-bold mt-0.5">•</span>
                  <span><strong>ต้นทุนฮาร์ดแวร์สูง:</strong> ต้องซื้อ Server เฉพาะทาง ตู้กดคิวราคาแพง และเดินสาย LAN ยุ่งยาก</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-rose-500 font-bold mt-0.5">•</span>
                  <span><strong>ความแออัดหน้าร้าน:</strong> ลูกค้าต้องยืนออรอบริเวณเคาน์เตอร์ ทำให้พื้นที่บริการคับแคบและเสียบรรยากาศ</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-rose-500 font-bold mt-0.5">•</span>
                  <span><strong>ไม่รู้เวลาที่แน่นอน:</strong> ลูกค้าไม่สามารถคาดการณ์เวลาได้ เกิดความหงุดหงิดและยกเลิกคิวกลางคัน</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-rose-500 font-bold mt-0.5">•</span>
                  <span><strong>สิ้นเปลืองกระดาษ:</strong> ใช้กระดาษความร้อนจำนวนมาก มีขยะเกลื่อนกลาด และเสี่ยงสัมผัสเชื้อโรค</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-rose-500 font-bold mt-0.5">•</span>
                  <span><strong>ขยายจุดบริการยาก:</strong> หากต้องการเพิ่มเคาน์เตอร์ต้องติดตั้งอุปกรณ์และเดินสายสัญญาณใหม่ทั้งหมด</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 pt-4 border-t border-rose-200/60 text-xs text-rose-700 font-medium">
              ⚠️ ทำให้เสียโอกาสทางธุรกิจ และสร้างความเหนื่อยล้าให้แก่เจ้าหน้าที่ผู้ให้บริการ
            </div>
          </div>

          <!-- iGenQ Smart Solution -->
          <div class="rounded-2xl border-2 border-[#16834A] bg-emerald-50/40 p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-emerald-900/5">
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-[#16834A] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  ✓
                </div>
                <div>
                  <h3 class="text-lg font-bold font-heading text-[#171717]">ระบบคิวอัจฉริยะ iGenQ New Normal</h3>
                  <p class="text-xs text-[#16834A] font-semibold">โซลูชันทันสมัย ติดตั้งบน Cloud 100%</p>
                </div>
              </div>

              <ul class="space-y-3.5 text-sm text-slate-800">
                <li class="flex items-start gap-2.5">
                  <span class="text-[#16834A] font-bold mt-0.5">✓</span>
                  <span><strong>0 บาท ค่า Server & เดินสาย:</strong> ทำงานบน Cloud Hosting 100% เชื่อมต่อผ่าน Wi-Fi ทันที</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#16834A] font-bold mt-0.5">✓</span>
                  <span><strong>รอที่ไหนก็ได้ ไม่ต้องยืนรอ:</strong> สแกน QR Code รับ e-Ticket ดูสถานะบนมือถือ และแจ้งเตือนผ่าน LINE</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#16834A] font-bold mt-0.5">✓</span>
                  <span><strong>รู้เวลารอคอยแบบ Real-time:</strong> หน้าจอแสดงจำนวนคิวที่เหลือก่อนถึงรอบ และเวลาคาดการณ์แม่นยำ</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#16834A] font-bold mt-0.5">✓</span>
                  <span><strong>ไร้สัมผัส ไร้กระดาษ (Paperless):</strong> ลดการสัมผัสปุ่มกด เป็นมิตรต่อสิ่งแวดล้อม และถูกสุขอนามัย</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-[#16834A] font-bold mt-0.5">✓</span>
                  <span><strong>ขยายเคาน์เตอร์ได้ไม่จำกัด:</strong> เพิ่มจุดบริการได้ทันทีโดยไม่ต้องซื้ออุปกรณ์ฮาร์ดแวร์เฉพาะทาง</span>
                </li>
              </ul>
            </div>

            <div class="mt-6 pt-4 border-t border-emerald-200 text-xs text-[#16834A] font-bold">
              🌟 เพิ่มความพึงพอใจของลูกค้า (CSAT) สูงสุด และเพิ่มผลิตภาพการทำงานขององค์กร
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Section 2: 5 ข้อดีหลักของ iGenQ (5 Key Advantages) -->
    <section class="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div class="wrap">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
            Core Strengths
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            5 ข้อดีของ iGenQ ระบบบริหารคิวอัจฉริยะ
          </h2>
          <p class="mt-3 text-slate-600 text-sm sm:text-base">
            ออกแบบให้ตอบโจทย์การใช้งานจริงสำหรับธุรกิจและหน่วยงานทุกระดับ ตั้งแต่ร้านอาหารไปจนถึงศูนย์บริการภาครัฐ
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="adv in advantages"
            :key="adv.num"
            class="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all hover:border-[#16834A]/40 group flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-300 group-hover:text-[#16834A] transition-colors">
                  {{ adv.num }}
                </span>
                <span class="w-8 h-8 rounded-lg bg-emerald-50 text-[#16834A] flex items-center justify-center font-bold text-xs">
                  ★
                </span>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors">
                {{ adv.title }}
              </h3>
              <p class="text-xs font-semibold text-slate-400 mt-0.5 mb-3 uppercase tracking-wider">
                {{ adv.en }}
              </p>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ adv.desc }}
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#16834A] font-semibold">
              <span>มาตรฐาน ISO/IEC 29110</span>
              <span>→</span>
            </div>
          </div>

          <!-- Feature Highlight Card -->
          <div class="rounded-2xl border-2 border-dashed border-[#16834A]/30 bg-emerald-50/50 p-6 sm:p-7 flex flex-col justify-center items-center text-center">
            <div class="w-12 h-12 rounded-full bg-[#16834A] text-white flex items-center justify-center mb-3 text-xl font-bold shadow-md">
              ⚡
            </div>
            <h3 class="text-lg font-bold font-heading text-[#171717]">
              พร้อมใช้งานทันทีภายใน 24 ชม.
            </h3>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed">
              ไม่มีขั้นตอนการติดตั้งที่ซับซ้อน เพียงสมัครสมาชิกและตั้งค่าจุดบริการ ก็สามารถเปิดรับคิวและประกาศผลได้ทันที
            </p>
            <NuxtLink
              to="/contact/sales"
              class="mt-4 inline-flex items-center gap-1 text-xs font-bold font-heading text-[#16834A] hover:underline"
            >
              <span>ติดต่อขอทดสอบระบบฟรี</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 3: 5 ขั้นตอนการใช้งาน (5-Step Customer Journey) -->
    <section class="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div class="wrap">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-bold uppercase tracking-wider mb-2">
            How It Works
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            5 ขั้นตอนการทำงานที่ง่ายและสะดวก
          </h2>
          <p class="mt-3 text-slate-600 text-sm sm:text-base">
            สร้างประสบการณ์รับบริการที่ราบรื่น (Frictionless Customer Experience) ตั้งแต่ต้นจนจบ
          </p>
        </div>

        <div class="relative">
          <!-- Flow Line for Desktop -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-6 z-0"></div>

          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            <div
              v-for="s in steps"
              :key="s.step"
              class="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs hover:border-[#16834A] transition-all flex flex-col justify-between"
            >
              <div>
                <div class="w-12 h-12 rounded-full bg-[#16834A] text-white flex items-center justify-center mx-auto mb-3 font-bold text-sm shadow-md shadow-[#16834A]/20">
                  {{ s.step }}
                </div>
                <h3 class="text-base font-bold font-heading text-[#171717]">
                  {{ s.title }}
                </h3>
                <p class="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  {{ s.sub }}
                </p>
                <p class="text-xs text-slate-600 leading-relaxed text-left">
                  {{ s.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 4: Proven Use Cases & References (ผลงานและลูกค้าอ้างอิง) -->
    <section class="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div class="wrap">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div class="max-w-2xl">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-[#16834A] text-xs font-heading font-bold uppercase tracking-wider mb-2">
              Proven Track Record
            </span>
            <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
              ผลงานและกรณีศึกษาจริง (Our Customers)
            </h2>
            <p class="mt-2 text-slate-600 text-sm sm:text-base">
              iGenQ ได้รับความไว้วางใจจากหน่วยงานภาครัฐ องค์กรธุรกิจชั้นนำ และโรงพยาบาลระดับประเทศ
            </p>
          </div>

          <NuxtLink
            to="/contact/sales"
            class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold font-heading text-[#16834A] hover:underline shrink-0"
          >
            <span>ปรึกษาการออกแบบระบบคิวสำหรับองค์กร</span>
            <span>→</span>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(client, idx) in clients"
            :key="idx"
            class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span class="px-2.5 py-1 rounded-md bg-emerald-50 text-[#16834A] font-bold text-xs border border-emerald-200/60 font-heading">
                  {{ client.badge }}
                </span>
                <span v-if="client.hasCert" class="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 font-bold text-xs border border-amber-200/60">
                  ★ มีหนังสือรับรองผลงานราชการ
                </span>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#171717] mb-1">
                {{ client.name }}
              </h3>
              <p class="text-xs text-slate-400 font-medium mb-3">
                📍 {{ client.location }}
              </p>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ client.desc }}
              </p>
            </div>

            <div v-if="client.hasCert" class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                @click="openModal(galleryItems[3])"
                class="inline-flex items-center gap-1.5 text-xs font-bold text-[#16834A] hover:underline"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>ดูหนังสือรับรองผลงาน (Certificate)</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 5: Contact & Support CTA -->
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
