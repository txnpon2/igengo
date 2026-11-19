<script setup lang="ts">
const { about } = useContent()

useSeoMeta({
  title: 'ค่านิยมและวัฒนธรรมองค์กร | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'ค่านิยมหลัก I-G-E-N-C-O และวัฒนธรรมการทำงานของทีมวิศวกรและนักวิเคราะห์ระบบ บริษัท ไอเจนโก้ จำกัด',
})

const coreValues = [
  {
    letter: 'I',
    title: 'Innovation & Agility',
    subtitle: 'นวัตกรรมและความคล่องตัว',
    desc: 'ไม่หยุดนิ่งที่จะค้นคว้า วิจัย และนำเทคโนโลยีสมัยใหม่มาประยุกต์ใช้เพื่อแก้ไขปัญหาจริงขององค์กรได้อย่างคล่องตัวและทันท่วงที',
    color: 'from-emerald-500 to-green-600',
  },
  {
    letter: 'G',
    title: 'Genuine Quality',
    subtitle: 'คุณภาพแท้จริงตามมาตรฐาน',
    desc: 'มุ่งมั่นสร้างสรรค์ซอฟต์แวร์ที่มีคุณภาพสูง เสถียร และปลอดภัย ตามมาตรฐานสากล ISO/IEC 29110 ในทุกขั้นตอนการพัฒนา',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    letter: 'E',
    title: 'Empathy & Client Success',
    subtitle: 'เข้าใจและใส่ใจความสำเร็จลูกค้า',
    desc: 'รับฟัง เข้าใจกระบวนการทำงานจริง และมองเป้าหมายความสำเร็จของลูกค้าเป็นที่ตั้ง เพื่อสร้างระบบที่ผู้ใช้งานพึงพอใจอย่างแท้จริง',
    color: 'from-teal-600 to-emerald-700',
  },
  {
    letter: 'N',
    title: 'Next-Gen Engineering',
    subtitle: 'วิศวกรรมซอฟต์แวร์ยุคใหม่',
    desc: 'เขียนโค้ดที่สะอาด (Clean Code) มีสถาปัตยกรรมระบบที่รองรับการเติบโต (Scalable Architecture) และปลอดภัยตามมาตรฐานสากล',
    color: 'from-green-600 to-emerald-800',
  },
  {
    letter: 'C',
    title: 'Collaboration',
    subtitle: 'พลังแห่งความร่วมมือ',
    desc: 'ทำงานร่วมกันเป็นทีมด้วยความเคารพซึ่งกันและกัน สื่อสารอย่างตรงไปตรงมา และพร้อมช่วยเหลือซึ่งกันและกันเพื่อบรรลุเป้าหมายร่วม',
    color: 'from-emerald-500 to-green-700',
  },
  {
    letter: 'O',
    title: 'Openness & Integrity',
    subtitle: 'ความเปิดกว้างและความซื่อสัตย์',
    desc: 'เปิดกว้างรับฟังความคิดเห็นใหม่ ๆ ดำเนินงานด้วยความโปร่งใส ซื่อสัตย์สุจริต และรักษาคำมั่นสัญญาที่ให้ไว้กับลูกค้าทุกท่าน',
    color: 'from-emerald-700 to-teal-800',
  },
]

const culturePillars = [
  {
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'วัฒนธรรมการเรียนรู้อย่างต่อเนื่อง (Continuous Learning)',
    desc: 'เราส่งเสริมให้ทีมงานทุกคนได้เรียนรู้ทักษะใหม่ ค้นคว้าเทคโนโลยี AI และ Cloud พร้อมงบสนับสนุนการเข้าคอร์สและสอบใบรับรองสากล',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'สภาพแวดล้อมที่เปิดกว้างและยืดหยุ่น (Flat & Flexible Culture)',
    desc: 'เปิดรับทุกมุมมองและไอเดียสร้างสรรค์ โดยไม่มีกรอบตำแหน่งมากั้น พร้อมรูปแบบการทำงานที่ยืดหยุ่นและสมดุลชีวิตการทำงาน (Work-Life Balance)',
  },
  {
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'ความภาคภูมิใจในผลงานจริง (Impact-Driven Pride)',
    desc: 'ทุกโค้ดและทุกโมดูลที่พัฒนา ถูกนำไปใช้จริงในหน่วยงานภาครัฐและเอกชนระดับประเทศ ส่งผลต่อคุณภาพชีวิตของผู้ใช้งานนับล้านคน',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- SubNav Component -->
      <AboutSubNav active="culture" />

      <!-- Page Header with High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>VALUES & CORPORATE CULTURE</span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              ค่านิยมและ
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                วัฒนธรรมองค์กร
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>

        <p class="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          DNA ความเป็นไอเจนโก้ที่หลอมรวมเป็นหลักคิดและวิธีปฏิบัติตนของบุคลากรทุกคน เพื่อส่งมอบผลงานซอฟต์แวร์ที่ดีที่สุดให้แก่สังคม
        </p>
      </div>

      <!-- Core Values: I-G-E-N-C-O Grid -->
      <div class="mb-16">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>OUR DNA</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            ค่านิยมหลัก 6 ประการ (I-G-E-N-C-O)
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mx-auto mt-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(val, idx) in coreValues"
            :key="idx"
            class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all hover:border-[#16834A]/40 flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br text-white font-extrabold font-heading text-xl flex items-center justify-center mb-5 shadow-md shadow-emerald-700/20" :class="val.color">
                {{ val.letter }}
              </div>
              <h3 class="text-lg font-bold font-heading text-[#171717]">{{ val.title }}</h3>
              <p class="text-xs font-semibold text-[#16834A] mb-3">{{ val.subtitle }}</p>
              <p class="text-slate-600 text-sm leading-relaxed">{{ val.desc }}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>IGENCO Value</span>
              <span class="font-bold text-[#16834A]">0{{ idx + 1 }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Corporate Culture Pillars -->
      <div class="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm mb-16">
        <div class="max-w-2xl mb-10">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>WORKPLACE CULTURE</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            วัฒนธรรมการทำงานของทีมไอเจนโก้
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mt-3 mb-2"></div>
          <p class="text-slate-600 text-sm sm:text-base mt-2">
            เราสร้างบรรยากาศที่เปิดกว้าง ให้ทุกคนได้ปลดปล่อยความคิดสร้างสรรค์และศักยภาพสูงสุด
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(c, i) in culturePillars"
            :key="i"
            class="space-y-3"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="c.icon" />
              </svg>
            </div>
            <h3 class="text-base font-bold font-heading text-[#171717]">{{ c.title }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
