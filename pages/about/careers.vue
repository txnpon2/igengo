<script setup lang="ts">
const { site } = useContent()

useSeoMeta({
  title: 'ร่วมงานกับเรา (Careers) | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'ตำแหน่งงานที่เปิดรับ สวัสดิการ และโอกาสร่วมสร้างสรรค์ซอฟต์แวร์ระดับองค์กรไปกับ บริษัท ไอเจนโก้ จำกัด',
})

const perks = [
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'ค่าตอบแทนและโบนัสตามผลงาน',
    desc: 'โครงสร้างเงินเดือนแข่งขันได้ พร้อมโบนัสประจำปีตามผลประกอบการและผลการปฏิบัติงานของแต่ละบุคคล',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'ประกันสุขภาพกลุ่มและตรวจสุขภาพ',
    desc: 'ประกันสุขภาพ ประกันอุบัติเหตุ ประกันชีวิตกลุ่ม และการตรวจสุขภาพประจำปีเพื่อสุขภาวะที่ดีของพนักงาน',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'เวลาทำงานยืดหยุ่น (Flexible Hours)',
    desc: 'เวลาเข้า-ออกงานที่ยืดหยุ่น และรูปแบบการทำงานแบบ Hybrid Work ที่เปิดโอกาสให้บาลานซ์ชีวิตและการทำงาน',
  },
  {
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'งบสนับสนุนการเรียนรู้ & สอบ Cer',
    desc: 'งบสำหรับลงคอร์สเรียนออนไลน์ ซื้อหนังสือ และค่าธรรมเนียมสอบใบรับรองมาตรฐานวิชาชีพไอทีสากล',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'อุปกรณ์ทำงานประสิทธิภาพสูง',
    desc: 'จัดสรรคอมพิวเตอร์และอุปกรณ์สเปกแรง (MacBook / PC High-Spec) พร้อมจอ Monitor เพิ่มความสะดวกในการทำงาน',
  },
  {
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'กิจกรรมสังสรรค์ & Company Trip',
    desc: 'กิจกรรม Outing ประจำปี งานเลี้ยงสังสรรค์ และของว่างเครื่องดื่มบริการฟรีตลอดทั้งวันในออฟฟิศ',
  },
]

const jobs = [
  {
    title: 'Senior Full-Stack Developer (Vue / Nuxt / Node.js / Go)',
    dept: 'ฝ่ายพัฒนาซอฟต์แวร์',
    type: 'Full-Time · Hybrid',
    exp: 'ประสบการณ์ 3 ปีขึ้นไป',
    desc: 'ร่วมออกแบบและพัฒนาซอฟต์แวร์ระดับองค์กรชุด i-SmartSoft, HR.ai และ Cloud Microservices ภายใต้มาตรฐาน ISO/IEC 29110',
    tags: ['Vue 3', 'Nuxt 3', 'Node.js / Go', 'PostgreSQL / MongoDB', 'Docker'],
  },
  {
    title: 'System Analyst (SA) / Business Analyst (BA)',
    dept: 'ฝ่ายวิเคราะห์ระบบและประกันคุณภาพ',
    type: 'Full-Time',
    exp: 'ประสบการณ์ 2 ปีขึ้นไป',
    desc: 'รวบรวม Requirement วิเคราะห์กระบวนการทำงานของหน่วยงานภาครัฐและเอกชน จัดทำเอกสาร System Specification, SRS, Wireframe และออกแบบ Data Flow',
    tags: ['System Analysis', 'UML / ERD', 'SRS / FSD', 'Agile / Scrum', 'Enterprise Software'],
  },
  {
    title: 'Quality Assurance & Software Tester (Manual & Automation)',
    dept: 'ฝ่ายวิเคราะห์ระบบและประกันคุณภาพ',
    type: 'Full-Time',
    exp: 'ประสบการณ์ 1-3 ปี',
    desc: 'ออกแบบ Test Case / Test Scenario ดำเนินการทดสอบ Functional, Integration, Performance และบันทึกประเมินตามมาตรฐานคุณภาพ ISO/IEC 29110',
    tags: ['Test Case Design', 'API Testing (Postman)', 'Cypress / Playwright', 'QA Standards'],
  },
  {
    title: 'Enterprise Solution Consultant / Sales Executive',
    dept: 'ฝ่ายขายและการตลาดองค์กร',
    type: 'Full-Time',
    exp: 'ประสบการณ์ 1-3 ปี ด้าน IT/Software Sales',
    desc: 'นำเสนอโซลูชันซอฟต์แวร์ e-Office, HR, Queue แก่ผู้บริหารหน่วยงานภาครัฐและเอกชน จัดทำใบเสนอราคา ประสานงานสาธิตระบบ และปิดการขาย',
    tags: ['B2B Sales', 'Government Tender', 'Solution Presentation', 'Negotiation'],
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- SubNav Component -->
      <AboutSubNav active="careers" />

      <!-- Page Header with High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>CAREERS AT IGENCO · WE ARE HIRING</span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              มาร่วมสร้างอนาคตซอฟต์แวร์ไทย
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ไปกับไอเจนโก้
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>

        <p class="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          หากคุณเป็นคนที่หลงใหลในการเขียนโค้ด การออกแบบระบบ และอยากเห็นผลงานของตัวเองถูกนำไปใช้จริงในองค์กรระดับประเทศ มาร่วมเป็นส่วนหนึ่งของทีมเรา!
        </p>
      </div>

      <!-- Perks & Benefits Grid -->
      <div class="mb-16">
        <div class="text-center max-w-xl mx-auto mb-10">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>WHY JOIN US</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
            สวัสดิการและสิ่งที่คุณจะได้รับ
          </h2>
          <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mx-auto mt-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(p, idx) in perks"
            :key="idx"
            class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all hover:border-[#16834A]/30"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="p.icon" />
              </svg>
            </div>
            <h3 class="text-base font-bold font-heading text-[#171717] mb-2">{{ p.title }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Open Positions Section -->
      <div class="mb-16">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-bold uppercase tracking-wider font-heading mb-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
              <span>CURRENT OPPORTUNITIES</span>
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#171717] tracking-tight">
              ตำแหน่งงานที่กำลังเปิดรับสมัคร
            </h2>
            <div class="h-1 w-20 rounded-full bg-gradient-to-r from-[#16834A] to-emerald-400 mt-3 mb-2"></div>
          </div>
          <span class="text-xs font-semibold text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            เปิดรับทั้งหมด {{ jobs.length }} ตำแหน่ง
          </span>
        </div>

        <div class="space-y-5">
          <div
            v-for="(j, idx) in jobs"
            :key="idx"
            class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#16834A]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div class="space-y-3 flex-1">
              <div class="flex flex-wrap items-center gap-2.5">
                <span class="px-3 py-1 rounded-full bg-[#16834A]/10 text-[#16834A] text-xs font-bold font-heading">
                  {{ j.dept }}
                </span>
                <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                  {{ j.type }}
                </span>
                <span class="text-xs text-slate-400 font-medium">
                  • {{ j.exp }}
                </span>
              </div>

              <h3 class="text-xl font-bold font-heading text-[#171717]">{{ j.title }}</h3>
              <p class="text-slate-600 text-sm leading-relaxed">{{ j.desc }}</p>

              <div class="flex flex-wrap gap-2 pt-1">
                <span
                  v-for="(t, ti) in j.tags"
                  :key="ti"
                  class="text-[11px] font-semibold text-slate-600 bg-[#F4F5F4] px-2.5 py-1 rounded-lg"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <div class="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
              <a
                :href="`mailto:${site.email}?subject=สมัครงานตำแหน่ง ${encodeURIComponent(j.title)}`"
                class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-semibold text-sm transition-all shadow-md active:scale-95 text-center"
              >
                <span>ส่งใบสมัครตำแหน่งนี้</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Guide & Contact Box -->
      <div class="rounded-3xl bg-gradient-to-r from-[#171717] to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            HOW TO APPLY
          </span>
          <h3 class="text-2xl sm:text-3xl font-bold font-heading">
            ไม่พบตำแหน่งที่ตรงกับคุณ?
          </h3>
          <p class="text-slate-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            ส่ง Resume พร้อมผลงาน (Portfolio/GitHub) และระบุตำแหน่งหรือความเชี่ยวชาญที่คุณสนใจมาได้ที่
            <a :href="`mailto:${site.email}`" class="text-emerald-400 font-semibold underline underline-offset-2 ml-1">{{ site.email }}</a>
            ทีมฝ่ายบุคคลจะติดต่อกลับเมื่อมีตำแหน่งที่เหมาะสม
          </p>
        </div>

        <a
          :href="`mailto:${site.email}?subject=สมัครงานกับ บริษัท ไอเจนโก้ จำกัด`"
          class="shrink-0 px-8 py-3.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-semibold text-base transition-all shadow-lg active:scale-95"
        >
          ส่ง Resume ถึงเรา
        </a>
      </div>

    </div>
  </div>
</template>
