<script setup lang="ts">
const { site } = useContent()

useSeoMeta({
  title: 'เกี่ยวกับเรา (About Us) | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'ข้อมูลองค์กร ประวัติความเป็นมา นโยบายบริษัท ค่านิยม แผนผังการบริหาร สมัครงาน และการคุ้มครองข้อมูลส่วนบุคคล บริษัท ไอเจนโก้ จำกัด',
})

const sections = [
  {
    to: '/about/history',
    title: 'ประวัติความเป็นมา',
    titleEn: 'Milestones & History',
    desc: 'จัดตั้ง 15 มีนาคม 2553 ส่งเสริมการลงทุน BOI ที่ปรึกษากระทรวงการคลัง (สบน.) และมาตรฐานสากล ISO/IEC 29110',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    to: '/about/policy',
    title: 'นโยบายบริษัท',
    titleEn: 'Corporate Policies',
    desc: 'นโยบายคุณภาพ มาตรฐานความมั่นคงปลอดภัยสารสนเทศ ข้อตกลงระดับบริการ (SLA) และหลักธรรมาภิบาล',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    to: '/about/culture',
    title: 'ค่านิยมและวัฒนธรรมองค์กร',
    titleEn: 'Values & Culture',
    desc: 'ค่านิยมหลัก I-G-E-N-C-O และวัฒนธรรมการทำงานแบบวิศวกรซอฟต์แวร์ยุคใหม่ที่เปิดกว้างและมุ่งเน้นผลลัพธ์จริง',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    to: '/about/organization',
    title: 'แผนผังการบริหาร',
    titleEn: 'Management Structure',
    desc: 'โครงสร้างการบริหารและแผนผังหน่วยงานหลัก 6 ฝ่ายที่ขับเคลื่อนการส่งมอบงานคุณภาพระดับองค์กร',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    to: '/about/careers',
    title: 'สมัครงาน',
    titleEn: 'Careers & Hiring',
    desc: 'ร่วมงานกับไอเจนโก้ ตำแหน่งงานที่เปิดรับ สวัสดิการพรีเมียม และโอกาสในการเติบโตในสายงานเทคโนโลยี',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    to: '/about/privacy',
    title: 'การคุ้มครองข้อมูลส่วนบุคคล',
    titleEn: 'PDPA Compliance',
    desc: 'ประกาศนโยบายความเป็นส่วนตัวตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 และช่องทางติดต่อเจ้าหน้าที่ DPO',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6 font-heading" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
        <span>/</span>
        <span class="text-[#16834A] font-semibold">เกี่ยวกับเรา</span>
      </nav>

      <!-- Page Header with High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>ABOUT IGENCO CO., LTD.</span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              เกี่ยวกับ
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {{ site.legalName }}
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>

        <p class="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          ผู้พัฒนาซอฟต์แวร์ระดับองค์กรและที่ปรึกษาไอทีมาตรฐานสากล ISO/IEC 29110 เลือกดูข้อมูลหัวข้อที่คุณสนใจด้านล่าง
        </p>
      </div>

      <!-- 6-Section Hub Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <NuxtLink
          v-for="(s, idx) in sections"
          :key="idx"
          :to="s.to"
          class="group rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#16834A]/40 transition-all flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
        >
          <!-- Top Card Accent line -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16834A] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div>
            <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center mb-5 group-hover:bg-[#16834A] group-hover:text-white transition-all shadow-sm">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="s.icon" />
              </svg>
            </div>
            
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading block mb-1">
              {{ s.titleEn }}
            </span>
            <h2 class="text-xl sm:text-[22px] font-black font-heading text-[#171717] group-hover:text-[#16834A] transition-colors tracking-tight leading-snug">
              {{ s.title }}
            </h2>
            <p class="mt-2.5 text-slate-600 text-sm leading-relaxed">
              {{ s.desc }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#16834A] group-hover:text-[#106B3B]">
            <span>ดูรายละเอียด</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
