<script setup lang="ts">
const { site } = useContent()

useSeoMeta({
  title: 'ประวัติความเป็นมา | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'ประวัติความเป็นมาของ บริษัท ไอเจนโก้ จำกัด ก่อตั้งเมื่อ 15 มีนาคม 2553 ได้รับการส่งเสริมการลงทุนจาก BOI ขึ้นทะเบียนที่ปรึกษากระทรวงการคลัง และมาตรฐาน ISO/IEC 29110',
})

const services = [
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'การให้คำปรึกษาไอที (IT Consultant)',
    desc: 'บริการให้คำปรึกษาด้านเทคโนโลยีสารสนเทศ การวิเคราะห์โครงสร้างระบบ การจัดการฐานข้อมูล และการบริหารโครงการเทคโนโลยีสารสนเทศทั้งในภาครัฐและเอกชน',
  },
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'การพัฒนาซอฟต์แวร์ (Software Development)',
    desc: 'ออกแบบและพัฒนาโปรแกรมระบบงาน Web Application นวัตกรรมใหม่ภายใต้แบรนด์ "IGENCO" ที่มีเสถียรภาพ ความปลอดภัยสูง และตอบสนองกระบวนการทำงานจริง',
  },
  {
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    title: 'วางระบบและเครือข่าย (IT Infrastructure)',
    desc: 'วางระบบคอมพิวเตอร์และเครือข่ายสารสนเทศความมั่นคงสูง ทั้งระบบ On-Premise และ Cloud Datacenter พร้อมระบบสำรองข้อมูลและแผนฟื้นฟูระบบ',
  },
  {
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    title: 'แอพพลิเคชั่นทางธุรกิจ (Business Application)',
    desc: 'ชุดซอฟต์แวร์บริหารจัดการองค์กร e-Office, ระบบบริหารงานบุคคล, ระบบคิวอัจฉริยะ และระบบ ERP ที่ช่วยบูรณาการข้อมูลและลดระยะเวลาการทำงาน',
  },
]

const accreditations = [
  {
    badge: 'BOI APPROVED',
    title: 'ได้รับการส่งเสริมการลงทุนจาก BOI',
    org: 'สำนักงานคณะกรรมการส่งเสริมการลงทุน (BOI)',
    desc: 'ได้รับการส่งเสริมการลงทุนในประเภทกิจการพัฒนาระบบเทคโนโลยีสารสนเทศในด้านซอฟต์แวร์ ตอกย้ำความพร้อมด้านศักยภาพและมาตรฐานระดับอุตสาหกรรม',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    badge: 'MOF REGISTERED',
    title: 'ขึ้นทะเบียนที่ปรึกษา กระทรวงการคลัง',
    org: 'สำนักบริหารหนี้สาธารณะ กระทรวงการคลัง',
    desc: 'ขึ้นทะเบียนที่ปรึกษาประเภทนิติบุคคล หมายเลข 4232 ระดับ 2 สาขาเทคโนโลยีสารสนเทศและการสื่อสาร ได้รับสิทธิ์ในการเป็นที่ปรึกษาโครงการสำคัญของหน่วยงานภาครัฐ',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    badge: 'ISO/IEC 29110',
    title: 'มาตรฐานสากล ISO/IEC 29110:2011',
    org: 'Software Engineering Lifecycle Profiles',
    desc: 'ผ่านการรับรองมาตรฐาน Management Systems as per ISO/IEC 29110 ในกระบวนการบริหารโครงการซอฟต์แวร์ (Project Management) และการพัฒนาติดตั้งระบบ (Software Implementation Process)',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]

const partners = [
  { name: 'depa', label: 'สำนักงานส่งเสริมเศรษฐกิจดิจิทัล', sub: 'Digital Economy Promotion Agency' },
  { name: 'Software Park Thailand', label: 'เขตอุตสาหกรรมซอฟต์แวร์แห่งประเทศไทย', sub: 'ศูนย์กลางบ่มเพาะเทคโนโลยีซอฟต์แวร์ไทย' },
  { name: 'ATSI', label: 'สมาคมอุตสาหกรรมซอฟต์แวร์ไทย', sub: 'Association of Thai Software Industry' },
]

const milestones = [
  {
    year: '15 มี.ค. 2553',
    title: 'ก่อตั้ง บริษัท ไอเจนโก้ จำกัด (IGENCO)',
    desc: 'จัดตั้งอย่างเป็นทางการจากการรวมตัวของบุคลากรสายงาน IT ที่มีประสบการณ์กว่า 20 ปี เพื่อให้บริการที่ปรึกษา พัฒนาระบบคอมพิวเตอร์ และวางโครงสร้างเครือข่ายแก่ภาครัฐและเอกชน',
  },
  {
    year: '2556 - 2561',
    title: 'รับการส่งเสริมจาก BOI & ขึ้นทะเบียนที่ปรึกษากระทรวงการคลัง',
    desc: 'ได้รับการส่งเสริมการลงทุนจาก BOI และขึ้นทะเบียนที่ปรึกษาสำนักบริหารหนี้สาธารณะ กระทรวงการคลัง (นิติบุคคล 4232 ระดับ 2) พร้อมขยายการพัฒนาซอฟต์แวร์ Web Application แบรนด์ IGENCO',
  },
  {
    year: '2562',
    title: 'รางวัลชนะเลิศ The Winner OIIO 2019',
    desc: 'ได้รับรางวัลชนะเลิศการประกวดนวัตกรรมซอฟต์แวร์ภาครัฐและองค์กร ตอกย้ำความเชี่ยวชาญในการพัฒนาระบบ e-Office และ Smart Office',
  },
  {
    year: '2564 - ปัจจุบัน',
    title: 'มาตรฐาน ISO/IEC 29110 & ขยายฐานลูกค้ากว่า 100+ องค์กร',
    desc: 'ได้รับการรับรองมาตรฐานสากล ISO/IEC 29110 อย่างต่อเนื่อง พร้อมพัฒนาโซลูชัน HR.ai, iGenQ Cloud, Regist.ai และโซลูชันระบบสารสนเทศแก่ลูกค้ากว่า 100 องค์กรทั่วประเทศ',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- SubNav Component -->
      <AboutSubNav active="history" />

      <!-- Page Header with Milestone Highlights & High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>ESTABLISHED 15 MARCH 2010 · CORPORATE PROFILE</span>
        </div>
        
        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              ประวัติความเป็นมาและ
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ก้าวสำคัญของ IGENCO
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>
        
        <!-- Key Quick Stat Pills -->
        <div class="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mt-4">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
            จัดตั้ง 15 มีนาคม 2553 (กว่า 15 ปี)
          </span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            ประสบการณ์ทีมงานกว่า 20+ ปีในสายงาน IT
          </span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            ได้รับการส่งเสริมการลงทุนจาก BOI
          </span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            ที่ปรึกษากระทรวงการคลัง (สบน. 4232 ระดับ 2)
          </span>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
            มาตรฐาน ISO/IEC 29110:2011
          </span>
        </div>
      </div>

      <!-- Main Corporate Narrative Section (ข้อมูลจริงของบริษัท) -->
      <div class="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-10 lg:p-12 shadow-sm mb-14 space-y-6">
        
        <div class="flex flex-col lg:flex-row gap-8 items-start justify-between">
          
          <div class="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed flex-1">
            <p>
              <strong class="text-[#171717] font-extrabold text-xl sm:text-2xl font-heading block mb-2">
                บริษัท ไอเจนโก้ จำกัด (IGENCO Co., Ltd.)
              </strong>
              จัดตั้งเมื่อวันที่ <span class="font-bold text-[#16834A]">15 มีนาคม 2553</span> โดยประกอบธุรกิจบริการให้คำปรึกษา พัฒนาระบบคอมพิวเตอร์ และงานเครือข่ายงานด้านเทคโนโลยีสารสนเทศ ให้กับสถาบันและองค์กรต่าง ๆ ทั้งในภาคราชการ รัฐวิสาหกิจ สถาบันการศึกษา และภาคเอกชน
            </p>
            <p>
              ขอบเขตการบริการครอบคลุมตั้งแต่ <strong class="text-[#171717]">การให้คำปรึกษา (IT Consultant)</strong>, <strong class="text-[#171717]">การพัฒนาซอฟต์แวร์ (Software Development)</strong>, <strong class="text-[#171717]">การวางระบบคอมพิวเตอร์และเครือข่ายสารสนเทศ (IT Infrastructure)</strong> ตลอดจน <strong class="text-[#171717]">แอพพลิเคชั่นทางธุรกิจ (Business Application)</strong> มุ่งเน้นในการบริหารองค์กรภายใต้นโยบายการทำงานอย่างใกล้ชิดกับลูกค้า ใส่ใจทุกขั้นตอนของกระบวนการพัฒนาระบบ เพื่อส่งมอบงานระบบและบริการให้ลูกค้าอย่างเหนือความประทับใจ ควบคู่กับการพัฒนาผลิตภัณฑ์ให้เป็นนวัตกรรมใหม่เพื่อเป็นทางเลือกภายใต้แบรนด์ <strong>"IGENCO"</strong> ซึ่งเป็นระบบ Web Application ที่ได้รับการการันตีคุณภาพและความไว้วางใจจากลูกค้าของเราอย่างต่อเนื่อง
            </p>
            <p>
              บริษัทฯ ก่อตั้งจากการรวมตัวของทีมงานบุคลากรทางด้าน IT ที่มีความเชี่ยวชาญในการออกแบบและพัฒนาโปรแกรมระบบงาน การวิเคราะห์โครงสร้างระบบ การจัดการฐานข้อมูล รวมถึงการเป็นที่ปรึกษาโครงการต่าง ๆ ที่เกี่ยวข้องกับงานทางด้านเทคโนโลยีสารสนเทศมาทั้งในภาครัฐและเอกชน <strong class="text-[#16834A]">นับ 100 ราย มากกว่า 20 ปี</strong> ตลอดเส้นทางการทำงานสายงาน IT ปัจจุบันบริษัทฯ เข้าร่วมกิจกรรมกับหน่วยงานที่สนับสนุนการพัฒนาซอฟต์แวร์ของประเทศ เช่น <strong>สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)</strong>, <strong>เขตอุตสาหกรรมซอฟต์แวร์แห่งประเทศไทย (Software Park Thailand)</strong>, <strong>สมาคมอุตสาหกรรมซอฟต์แวร์ไทย (ATSI)</strong> ตลอดจนพันธมิตรทางการค้าอื่น ๆ เพื่อเป็นการเพิ่มศักยภาพด้านการพัฒนาระบบและการบริการให้ดียิ่งขึ้น
            </p>
          </div>

          <!-- Highlight Box: Thai Software Enterprise -->
          <div class="lg:w-80 w-full shrink-0 rounded-2xl bg-gradient-to-br from-[#16834A]/10 via-[#16834A]/5 to-transparent border border-[#16834A]/25 p-6 space-y-4">
            <div class="w-12 h-12 rounded-xl bg-[#16834A] text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-base font-bold font-heading text-[#171717]">บริษัทสัญชาติไทยอย่างแท้จริง</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              เรามีความภาคภูมิใจในฐานะบริษัทซอฟต์แวร์ของคนไทย ที่สร้างสรรค์นวัตกรรมลิขสิทธิ์ของคนไทยเพื่อยกระดับขีดความสามารถการแข่งขันขององค์กรไทยในทุกภาคส่วน
            </p>
            <div class="pt-2 border-t border-[#16834A]/20 flex items-center justify-between text-xs font-semibold text-[#16834A]">
              <span>ISO/IEC 29110 Certified</span>
              <span>100% Thai Tech</span>
            </div>
          </div>

        </div>

      </div>

      <!-- 4 Core Service Scope Pillars -->
      <div class="mb-14">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>CORE SERVICES & EXPERTISE</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            ขอบเขตการให้บริการที่ครอบคลุม
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mx-auto mt-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(s, idx) in services"
            :key="idx"
            class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all hover:border-[#16834A]/40 flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="s.icon" />
                </svg>
              </div>
              <h3 class="text-lg font-bold font-heading text-[#171717] mb-2">{{ s.title }}</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">{{ s.desc }}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>บริการที่ 0{{ idx + 1 }}</span>
              <span class="font-bold text-[#16834A]">IGENCO</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Official Accreditations Cards (BOI, กระทรวงการคลัง สบน., ISO/IEC 29110) -->
      <div class="mb-14">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>STANDARDS & CERTIFICATIONS</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            การรับรองและมาตรฐานระดับประเทศ
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mx-auto mt-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(acc, idx) in accreditations"
            :key="idx"
            class="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all hover:border-[#16834A]/40 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="acc.icon" />
                  </svg>
                </div>
                <span class="px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-bold font-heading">
                  {{ acc.badge }}
                </span>
              </div>

              <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-1">{{ acc.title }}</h3>
              <p class="text-xs font-semibold text-[#16834A] mb-3">{{ acc.org }}</p>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">{{ acc.desc }}</p>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>ความเชื่อมั่นมาตรฐาน</span>
              <span class="font-bold text-[#16834A]">✓ ผ่านการรับรอง</span>
            </div>
          </div>
        </div>
      </div>

      <!-- National Software Ecosystem & Partners (depa, Software Park, ATSI) -->
      <div class="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm mb-14">
        <div class="max-w-2xl mb-8">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>COLLABORATION & PARTNERS</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            เครือข่ายความร่วมมือระดับประเทศ
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mt-3 mb-2"></div>
          <p class="text-slate-600 text-sm mt-1">
            ร่วมส่งเสริมและขับเคลื่อนศักยภาพอุตสาหกรรมดิจิทัลของประเทศอย่างต่อเนื่อง
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(p, i) in partners"
            :key="i"
            class="rounded-2xl bg-[#F8F9FA] p-5 sm:p-6 border border-slate-200/70 hover:border-[#16834A]/30 transition-all flex items-start gap-4"
          >
            <div class="w-10 h-10 rounded-xl bg-white text-[#16834A] flex items-center justify-center shrink-0 border border-slate-200 shadow-sm font-bold font-heading text-sm">
              0{{ i + 1 }}
            </div>
            <div>
              <h3 class="font-bold font-heading text-base text-[#171717]">{{ p.name }}</h3>
              <p class="text-xs font-medium text-slate-700 mt-0.5">{{ p.label }}</p>
              <p class="text-[11px] text-slate-500 mt-1">{{ p.sub }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Executive Commitment Quote Block (คำมั่นสัญญาจากใจจริง) -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#171717] via-slate-900 to-[#111827] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/10 mb-14">
        <!-- Ambient Glowing Background Accents -->
        <div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#16834A]/30 blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <!-- Quote Icon -->
          <div class="w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mx-auto border border-white/15 shadow-sm">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <!-- The Real Quote -->
          <blockquote class="text-lg sm:text-2xl lg:text-[26px] font-heading font-medium leading-relaxed tracking-apple-body text-slate-100">
            "จากการเอาใจใส่ต่อการพัฒนาระบบและบริการของเรา ปัจจุบันบริษัทฯ ได้รับความไว้วางใจจากลูกค้าทั้งองค์กรขนาดใหญ่ในภาครัฐและเอกชน ให้เป็นผู้พัฒนาและติดตั้งระบบงานสารสนเทศภายในองค์กร โดยระบบสามารถตอบสนองความต้องการและลดระยะเวลาในการปฏิบัติงานของผู้ใช้งาน ตลอดจนบูรณาการข้อมูลขององค์กร สามารถนำไปวางแผนทางการบริหารเพื่อพัฒนาองค์กรและศักยภาพของพนักงานให้มีประสิทธิภาพยิ่งขึ้นไป"
          </blockquote>

          <div class="pt-4 border-t border-white/15 inline-block">
            <p class="font-bold font-heading text-emerald-400 text-base">คณะผู้บริหารและทีมงาน</p>
            <p class="text-xs text-slate-400 mt-0.5">บริษัท ไอเจนโก้ จำกัด (IGENCO Co., Ltd.)</p>
          </div>
        </div>
      </div>

      <!-- Timeline & Milestones Journey -->
      <div class="mb-14">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>OUR JOURNEY & MILESTONES</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            เส้นทางแห่งความสำเร็จและก้าวสำคัญ
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mx-auto mt-3"></div>
        </div>

        <div class="relative border-l-2 border-[#16834A]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          <div
            v-for="(m, idx) in milestones"
            :key="idx"
            class="relative group"
          >
            <!-- Timeline Pin -->
            <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#16834A] shadow-md group-hover:scale-125 transition-transform"></div>

            <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#16834A]/40 transition-all">
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <span class="px-3.5 py-1 rounded-full bg-[#16834A] text-white text-xs font-bold font-heading shadow-sm">
                  {{ m.year }}
                </span>
                <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">{{ m.title }}</h3>
              </div>
              <p class="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Consultation CTA -->
      <div class="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span class="text-xs font-bold text-[#16834A] uppercase tracking-wider font-heading">START A PROJECT</span>
          <h3 class="text-xl font-bold font-heading text-[#171717] mt-1">พร้อมร่วมงานกับทีมผู้เชี่ยวชาญ IGENCO</h3>
          <p class="text-slate-600 text-sm mt-1 max-w-xl">
            ติดต่อเพื่อขอรับคำปรึกษา ออกแบบสถาปัตยกรรมระบบ หรือนัดหมายสาธิตระบบซอฟต์แวร์สำหรับองค์กรของท่าน
          </p>
        </div>
        <NuxtLink
          to="/contact/sales"
          class="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-semibold text-sm transition-all shadow-md active:scale-95"
        >
          <span>ติดต่อฝ่ายขาย / นัดสาธิตระบบ</span>
          <span>→</span>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
