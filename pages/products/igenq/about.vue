<script setup lang="ts">
const { locale, t } = useLocale()

// 6 ศูนย์ข้อมูลและบริการ iGenQ
const menuItems = [
  {
    id: 'about',
    title: 'รู้จัก iGenQ',
    sub: 'ภาพรวมระบบคิวอัจฉริยะ',
    image: '/images/products/igenq/menu-about.jpg',
    to: '/products/igenq/about',
    current: true,
  },
  {
    id: 'portfolio',
    title: 'ผลงานของเรา',
    sub: 'หน่วยงานและองค์กรที่ไว้วางใจ',
    image: '/images/products/igenq/menu-portfolio.jpg',
    to: '/contact/sales',
    current: false,
  },
  {
    id: 'pricing',
    title: 'Plans & Pricing',
    sub: 'แพ็กเกจราคาและการบริการ',
    image: '/images/products/igenq/menu-pricing.jpg',
    to: '/contact/sales',
    current: false,
  },
  {
    id: 'contact',
    title: 'ติดต่อทีมงาน',
    sub: 'ปรึกษาและนัดสาธิตระบบ',
    image: '/images/products/igenq/menu-contact.jpg',
    to: '/contact/sales',
    current: false,
  },
  {
    id: 'manual',
    title: 'คู่มือการใช้งาน',
    sub: 'เอกสารแนะนำและคู่มือ PDF',
    image: '/images/products/igenq/menu-manual.jpg',
    to: '/images/products/igenq/Proposal_iGenQ.pdf',
    external: true,
    current: false,
  },
  {
    id: 'products',
    title: 'ผลิตภัณฑ์อื่นๆ ของเรา',
    sub: 'โซลูชันซอฟต์แวร์ IGENCO',
    image: '/images/products/igenq/menu-products.jpg',
    to: '/products',
    current: false,
  },
]

// 8 จุดเด่นและประโยชน์ของ iGenQ
const coreBenefits = [
  {
    id: '01',
    title: 'ลดปัญหาการต่อแถวแบบเดิม',
    desc: 'บอกลาการกดบัตรคิวแบบเดิมและการยืนต่อแถวเข้าคิวยาวนาน ลดความแออัดบริเวณหน้าเคาน์เตอร์บริการอย่างเห็นได้ชัด',
    icon: 'queue',
    tag: 'Frictionless Queue',
  },
  {
    id: '02',
    title: 'ไม่ต้องยืนรอคิว (LINE Alert)',
    desc: 'มีระบบแจ้งเตือนอัตโนมัติผ่าน LINE เมื่อใกล้ถึงคิวของคุณ พร้อมตรวจสอบจำนวนคิวที่กำลังรอเรียกได้แบบ Real-time บนมือถือ',
    icon: 'line',
    tag: 'Real-time & LINE',
  },
  {
    id: '03',
    title: 'ไร้สัมผัส ลดความเสี่ยง (Contactless)',
    desc: 'ลดความเสี่ยงจากการสัมผัสหน้าจอตู้คีออสหรือปุ่มกดบัตรคิวร่วมกับผู้อื่น ป้องกันการแพร่กระจายของเชื้อโรคตามมาตรฐานสุขอนามัย',
    icon: 'shield',
    tag: 'Hygiene & Safe',
  },
  {
    id: '04',
    title: 'กดบัตรคิวออนไลน์ผ่าน Smart Phone',
    desc: 'ผู้รับบริการเพียงใช้สมาร์ทโฟนสแกนคิวอาร์โค้ดของร้านค้าเพื่อรับบัตรคิวดิจิทัล (e-Ticket) ได้ทันที โดยไม่ต้องติดตั้งแอปพลิเคชันใดๆ',
    icon: 'phone',
    tag: 'No App Required',
  },
  {
    id: '05',
    title: 'ลดค่าใช้จ่าย Hardware & Server',
    desc: 'ทำงานบนระบบ Cloud 100% ไม่ต้องซื้อเครื่อง Server เฉพาะทางราคาแพง ไม่ต้องเดินสายสัญญาณ LAN ให้ยุ่งยาก ประหยัดงบประมาณ',
    icon: 'cloud',
    tag: '0 บาท ค่าเดินสาย',
  },
  {
    id: '06',
    title: 'แสดงผล & ออกเสียงเรียกคิวไร้สาย',
    desc: 'รองรับการแสดงผลหน้าจอเรียกคิวและส่งสัญญาณเสียงพูดผ่าน Android TV, Smart TV, ลำโพง Bluetooth, Tablet หรือ Smart Phone ไร้สาย',
    icon: 'tv',
    tag: 'Smart TV & Sound',
  },
  {
    id: '07',
    title: 'ลดการใช้กระดาษ (Paperless)',
    desc: 'ลดการใช้กระดาษความร้อนพิมพ์บัตรคิว ช่วยลดปริมาณขยะ ประหยัดต้นทุนกระดาษต่อเนื่อง และร่วมเป็นส่วนหนึ่งในการช่วยลดภาวะโลกร้อน',
    icon: 'leaf',
    tag: 'Eco-Friendly',
  },
  {
    id: '08',
    title: 'สแกนประเมินความพึงพอใจในตัว',
    desc: 'ผู้รับบริการสามารถสแกนคิวอาร์โค้ดในบัตรคิว (e-Ticket) เพื่อทำแบบประเมินความพึงพอใจ (CSAT) ได้ทันที ช่วยให้ธุรกิจนำข้อมูลไปพัฒนาบริการ',
    icon: 'star',
    tag: 'CSAT Rating',
  },
]

useSeoMeta({
  title: 'รู้จัก iGenQ (About iGenQ) | ระบบบริหารคิวอัจฉริยะแบบ New Normal | IGENCO',
  description: 'รู้จัก iGenQ ระบบบริหารคิวอัจฉริยะ New Normal บน Cloud 100% สแกน QR Code รับคิวผ่านสมาร์ทโฟน ไม่ต้องโหลดแอป แจ้งเตือนผ่าน LINE พัฒนาโดย บริษัท ไอเจนโก้ จำกัด มาตรฐาน ISO/IEC 29110',
})
</script>

<template>
  <div class="min-h-screen bg-slate-50/70 pb-24 font-sans text-slate-800">
    
    <!-- Top Hero Banner -->
    <header class="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-white border-b border-slate-200/80 overflow-hidden text-left">
      <!-- Ambient decorative gradient glow -->
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="wrap relative z-10">
        
        <!-- Breadcrumb & Back Link -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav class="flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-slate-500" aria-label="Breadcrumb">
            <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
            <span class="text-slate-300">/</span>
            <NuxtLink to="/#products" class="hover:text-[#16834A] transition-colors">ผลิตภัณฑ์และบริการ</NuxtLink>
            <span class="text-slate-300">/</span>
            <NuxtLink to="/products/igenq" class="hover:text-[#16834A] transition-colors">iGenQ</NuxtLink>
            <span class="text-slate-300">/</span>
            <span class="text-[#16834A] font-semibold">รู้จัก iGenQ</span>
          </nav>

          <NuxtLink
            to="/products/igenq"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-[#16834A] text-xs font-semibold font-heading transition-all border border-slate-200/80"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>กลับหน้าหลัก iGenQ</span>
          </NuxtLink>
        </div>

        <!-- Hero Content Area -->
        <div class="max-w-4xl mx-auto text-center pt-2">
          
          <!-- Logo & Brand Badge -->
          <div class="flex flex-col items-center justify-center mb-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200 text-[#16834A] text-xs font-bold font-heading mb-4 shadow-xs">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
              </span>
              <span>นวัตกรรมคิว New Normal · ซอฟต์แวร์ไทย 100%</span>
            </div>

            <!-- Official iGenQ Logo -->
            <div class="w-28 sm:w-36 mb-3">
              <img
                src="/images/products/igenq/igenq-logo.png"
                alt="iGenQ Logo"
                class="w-full h-auto object-contain mx-auto filter drop-shadow-xs"
              />
            </div>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-5xl lg:text-5xl font-black font-heading text-[#171717] tracking-tight leading-tight">
            iGenQ ระบบบริหารคิวอัจฉริยะ
            <span class="block bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2 text-2xl sm:text-3xl lg:text-4xl">
              จัดการคิวแบบ New Normal ใช้งานได้ทันทีโดยไม่ต้องติดตั้ง App
            </span>
          </h1>

          <!-- Tagline Description -->
          <p class="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            ช่วยอำนวยความสะดวกให้แก่ทั้งเจ้าของธุรกิจและลูกค้า ลดความแออัด ประหยัดต้นทุนฮาร์ดแวร์ และยกระดับประสบการณ์รับบริการอย่างราบรื่น
          </p>

          <!-- Quick Actions -->
          <div class="flex flex-wrap items-center justify-center gap-3.5 mt-8">
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
              class="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-slate-600 hover:text-[#16834A] text-sm font-semibold font-heading transition-colors"
            >
              <span>เข้าสู่ระบบ iGenQ Web</span>
              <svg class="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </header>

    <!-- Section 1: 8 Core Benefits & Strengths -->
    <section class="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div class="wrap relative z-10">
        
        <!-- Section Title Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-[#16834A] text-xs font-bold font-heading uppercase tracking-wider mb-3">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Core Advantages & Benefits</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
            จุดเด่นและประโยชน์ของ <span class="text-[#16834A]">iGenQ</span>
          </h2>
          <p class="mt-3 text-base text-slate-600">
            ออกแบบมาเพื่อแก้ Pain Points ระบบคิวเดิม ตอบสนองความต้องการของธุรกิจยุคดิจิทัลได้อย่างครบวงจร
          </p>
        </div>

        <!-- 8 Bento Benefit Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="benefit in coreBenefits"
            :key="benefit.id"
            class="group relative rounded-2xl bg-white p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <!-- Top Card Header: ID Badge & Tag -->
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-[#16834A] font-black font-heading text-sm border border-emerald-200/60 group-hover:bg-[#16834A] group-hover:text-white transition-colors duration-300">
                  {{ benefit.id }}
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[11px] font-heading font-medium">
                  {{ benefit.tag }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-base sm:text-lg font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors duration-200 mb-2.5">
                {{ benefit.title }}
              </h3>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {{ benefit.desc }}
              </p>
            </div>

            <!-- Bottom Indicator Bar -->
            <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span class="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-xs">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>รองรับในทุกแพ็กเกจ</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 2: Thai Software & 12+ Years Experience (Company Trust) -->
    <section class="py-16 sm:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div class="wrap relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Company Story & Quality Standard -->
          <div class="lg:col-span-7">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#16834A] text-xs font-bold font-heading uppercase tracking-wider mb-4 border border-emerald-200/70">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>พัฒนาโดยคนไทย 100% · มาตรฐานระดับสากล</span>
            </div>

            <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight leading-snug mb-5">
              มั่นใจในคุณภาพ พัฒนาโดย 
              <span class="text-[#16834A] block sm:inline">บริษัท ไอเจนโก้ จำกัด</span>
            </h2>

            <div class="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              <p>
                <strong>iGenQ เป็นซอฟต์แวร์คนไทย 100%</strong> พัฒนาขึ้นโดยทีมวิศวกรซอฟต์แวร์ของ <strong>บริษัท ไอเจนโก้ จำกัด (IGENCO CO., LTD.)</strong> ซึ่งก่อตั้งและดำเนินกิจการมาเป็นระยะเวลากว่า <strong>12 ปี</strong> (ปัจจุบันก้าวสู่ปีที่ 16) สำนักงานใหญ่ตั้งอยู่ใกล้สนามบินดอนเมือง กรุงเทพมหานคร
              </p>
              <p>
                เรามีความพร้อมสูงสุดในการให้บริการหลังการขาย การดูแลระบบอย่างใกล้ชิด และการสนับสนุนการใช้งานของลูกค้าอย่างต่อเนื่อง ซอฟต์แวร์ได้รับการพัฒนาภายใต้มาตรฐานกระบวนการพัฒนาซอฟต์แวร์ระดับสากล <strong>ISO/IEC 29110</strong> เพื่อให้ทุกองค์กรและธุรกิจมั่นใจได้ในเสถียรภาพ ความปลอดภัย และการส่งมอบบริการที่ดีที่สุด
              </p>
            </div>

            <!-- Bulleted Highlights -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100 text-xs sm:text-sm font-medium text-slate-700">
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16834A] shrink-0">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>สำนักงานใหญ่ ดอนเมือง กรุงเทพฯ</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16834A] shrink-0">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>มาตรฐานสากล ISO/IEC 29110</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16834A] shrink-0">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>บริการหลังการขายดูแลต่อเนื่อง</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16834A] shrink-0">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>ซอฟต์แวร์คนไทย 100% ตอบโจทย์คนไทย</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Visual Trust Badges & Metrics -->
          <div class="lg:col-span-5">
            <div class="rounded-3xl bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/50 p-6 sm:p-8 border border-emerald-100 shadow-md">
              
              <h3 class="text-sm font-bold font-heading text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
                <span>มาตรฐาน & ความน่าเชื่อถือของ IGENCO</span>
              </h3>

              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div class="text-3xl font-extrabold font-heading text-[#16834A]">12+ ปี</div>
                  <div class="text-xs text-slate-500 font-medium mt-1">ประสบการณ์พัฒนาซอฟต์แวร์</div>
                </div>

                <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div class="text-3xl font-extrabold font-heading text-[#16834A]">100%</div>
                  <div class="text-xs text-slate-500 font-medium mt-1">ลิขสิทธิ์คนไทยแท้</div>
                </div>

                <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div class="text-xl sm:text-2xl font-extrabold font-heading text-slate-800">ISO/IEC</div>
                  <div class="text-xs text-[#16834A] font-bold mt-0.5">29110 Standard</div>
                  <div class="text-[11px] text-slate-400 mt-0.5">รับรองกระบวนการผลิต</div>
                </div>

                <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <div class="text-2xl font-extrabold font-heading text-[#16834A]">Cloud</div>
                  <div class="text-xs text-slate-500 font-medium mt-1">เสถียรภาพสูง ปลอดภัย</div>
                </div>
              </div>

              <!-- Location Banner -->
              <div class="mt-5 p-4 rounded-2xl bg-white/90 border border-slate-200/80 flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#16834A] shrink-0 mt-0.5">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="text-xs text-slate-600">
                  <div class="font-bold text-slate-800 text-sm">สำนักงานใหญ่ บริษัท ไอเจนโก้ จำกัด</div>
                  <div class="mt-0.5 leading-relaxed">ตั้งอยู่ใกล้สนามบินดอนเมือง กรุงเทพมหานคร พร้อมทีมงานฝ่ายเทคนิคและฝ่ายขายดูแลคุณ</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Section 3: Easy to Use, Video Learning & Support Hours -->
    <section class="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div class="wrap relative z-10">
        
        <div class="max-w-4xl mx-auto">
          
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-[#16834A] text-xs font-bold font-heading uppercase tracking-wider mb-3">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>User-Friendly & Dedicated Support</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold font-heading text-[#171717] tracking-tight">
              ใช้งานง่าย ไม่ซับซ้อน <span class="text-[#16834A]">พร้อมสื่อการเรียนรู้และทีมดูแล</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Card 1: Online Video Learning -->
            <div class="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-[#16834A] flex items-center justify-center mb-5 border border-emerald-200/60">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 class="text-lg font-bold font-heading text-[#171717] mb-2.5">
                  สื่อการเรียนการสอนวิดีโอออนไลน์
                </h3>

                <p class="text-sm text-slate-600 leading-relaxed font-normal">
                  iGenQ เป็นซอฟต์แวร์ที่ใช้งานง่าย ไม่ซับซ้อน ทางบริษัทฯ ได้จัดทำสื่อการเรียนการสอนใช้งานระบบในรูปแบบ <strong>วีดีโอออนไลน์</strong> ที่มีเนื้อหาง่ายต่อการทำความเข้าใจ ผู้ใช้งานสามารถเข้ามาเรียนรู้ได้ทุกที่ทุกเวลา ทั้งขั้นตอนการตั้งค่า การกดบัตรคิว และการเรียกคิว
                </p>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-100">
                <a
                  href="https://www.youtube.com/watch?v=sR7L1oThLOA"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 text-sm font-bold font-heading text-[#16834A] hover:text-[#126b3c] transition-colors"
                >
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>รับชมวิดีโอสาธิตระบบบน YouTube</span>
                  <svg class="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Card 2: Support Channels & Business Hours -->
            <div class="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-md flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-[#16834A] flex items-center justify-center mb-5 border border-emerald-200/60">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>

                <h3 class="text-lg font-bold font-heading text-[#171717] mb-2.5">
                  ช่องทางติดต่อ & เวลาทำการ
                </h3>

                <p class="text-sm text-slate-600 leading-relaxed font-normal">
                  มีช่องทางสำหรับติดต่อสอบถามข้อมูลและแจ้งปัญหาการใช้งานอย่างเป็นทางการ สามารถติดต่อทีมงานผู้เชี่ยวชาญได้ตลอดเวลาทำการ:
                </p>

                <!-- Support Hours Pill -->
                <div class="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>เวลาทำการฝ่ายบริการลูกค้า:</span>
                  </div>
                  <div class="text-sm font-bold font-heading text-slate-800 mt-1">
                    วันจันทร์ - วันศุกร์ เวลา 08:30 - 17:30 น.
                  </div>
                  <div class="text-[11px] text-slate-400 mt-0.5">(หยุดวันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์)</div>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <a href="tel:025233559" class="font-bold text-slate-700 hover:text-[#16834A] transition-colors">
                  📞 0-2523-3559 / 081-752-9549
                </a>
                <NuxtLink to="/contact/sales" class="font-bold text-[#16834A] hover:underline">
                  ติดต่อฝ่ายขาย & ซัพพอร์ต →
                </NuxtLink>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- Section 4: 6 iGenQ Menu Hub Navigation -->
    <section class="py-14 sm:py-16 bg-white border-t border-slate-200/80">
      <div class="wrap text-center">
        
        <div class="max-w-2xl mx-auto mb-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-heading font-medium mb-2">
            <span>สำรวจศูนย์ข้อมูล iGenQ</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
            เลือกดูเมนูและบริการอื่นๆ ของ iGenQ
          </h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div
            v-for="item in menuItems"
            :key="item.id"
            class="group"
          >
            <component
              :is="item.external ? 'a' : 'NuxtLink'"
              :[item.external?'href':'to']="item.to"
              :[item.external?'target':'']="item.external ? '_blank' : null"
              class="block p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 text-center relative h-full flex flex-col justify-between"
              :class="item.current 
                ? 'bg-emerald-50/60 border-[#16834A] ring-2 ring-[#16834A]/25 shadow-sm' 
                : 'bg-white border-slate-200/80 hover:border-emerald-300 hover:shadow-md'"
            >
              <!-- Icon Container -->
              <div>
                <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 relative flex items-center justify-center">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <!-- Title -->
                <h3 
                  class="text-xs sm:text-sm font-bold font-heading transition-colors"
                  :class="item.current ? 'text-[#16834A]' : 'text-slate-800 group-hover:text-[#16834A]'"
                >
                  {{ item.title }}
                </h3>
              </div>

              <!-- Action Status -->
              <div class="mt-2 pt-2 border-t border-slate-100 text-[11px] font-semibold">
                <span v-if="item.current" class="text-[#16834A] flex items-center justify-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
                  กำลังดูอยู่
                </span>
                <span v-else class="text-slate-400 group-hover:text-[#16834A] flex items-center justify-center gap-1 transition-colors">
                  เข้าสู่เมนู
                  <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </component>
          </div>
        </div>

      </div>
    </section>

    <!-- Bottom CTA Band -->
    <section class="py-14 bg-gradient-to-r from-emerald-900 via-[#16834A] to-teal-900 text-white text-center relative overflow-hidden">
      <div class="wrap relative z-10 max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mb-3">
          เริ่มต้นยกระดับการจัดการคิวของคุณวันนี้กับ iGenQ
        </h2>
        <p class="text-emerald-100 text-sm sm:text-base font-normal mb-8 max-w-xl mx-auto">
          พร้อมให้คำปรึกษา ออกแบบระบบ และจัดส่งใบเสนอราคาให้แก่องค์กร หน่วยงานรัฐ โรงพยาบาล และร้านค้าทุกขนาด
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <NuxtLink
            to="/contact/sales"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#16834A] hover:bg-emerald-50 text-sm font-bold font-heading shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>ขอใบเสนอราคา / ติดต่อฝ่ายขาย</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/products/igenq"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold font-heading border border-white/30 backdrop-blur-xs transition-all"
          >
            <span>กลับหน้าหลัก iGenQ</span>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>
