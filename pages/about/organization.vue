<script setup lang="ts">
const { about } = useContent()

useSeoMeta({
  title: 'แผนผังการบริหาร | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'โครงสร้างการบริหารและแผนผังองค์กร บริษัท ไอเจนโก้ จำกัด ตามมาตรฐาน ISO/IEC 29110',
})

const executive = {
  role: 'กรรมการผู้จัดการ (Managing Director)',
  roleEn: 'Executive Management & Board of Directors',
  desc: 'กำหนดทิศทางยุทธศาสตร์องค์กร กำกับดูแลการดำเนินงานตามหลักธรรมาภิบาล และผลักดันนวัตกรรมซอฟต์แวร์ไทยสู่มาตรฐานสากล',
}

const divisions = [
  {
    name: 'ฝ่ายพัฒนาซอฟต์แวร์ (Software Engineering)',
    code: 'DEV',
    color: 'bg-emerald-500',
    desc: 'วิศวกรรมซอฟต์แวร์ ออกแบบสถาปัตยกรรม เขียนโปรแกรม Frontend, Backend, Mobile Apps และ Cloud Native Solutions',
    teams: ['Frontend & Web Experience', 'Backend & Cloud API', 'Mobile & Embedded Solutions', 'AI & Data Integration'],
  },
  {
    name: 'ฝ่ายวิเคราะห์ระบบและประกันคุณภาพ (SA & QA)',
    code: 'QA',
    color: 'bg-teal-500',
    desc: 'วิเคราะห์กระบวนการทำงาน ออกแบบ UX/UI ควบคุมคุณภาพซอฟต์แวร์ และประสานมาตรฐาน ISO/IEC 29110',
    teams: ['System Analysts (SA)', 'UI/UX Design Studio', 'Software QA & Test Automation', 'ISO Quality Standards Committee'],
  },
  {
    name: 'ฝ่ายสถาปัตยกรรมคลาวด์และความปลอดภัย (Cloud & Security)',
    code: 'SEC',
    color: 'bg-blue-600',
    desc: 'บริหารจัดการโครงสร้างคลาวด์ ความมั่นคงปลอดภัยไซเบอร์ ระบบสำรองข้อมูล และแผนฟื้นฟูภัยพิบัติ (Disaster Recovery)',
    teams: ['Cloud Infrastructure & DevOps', 'Cybersecurity Operations', 'Database & Backup Administration', 'PDPA & Compliance'],
  },
  {
    name: 'ฝ่ายขายและการตลาดองค์กร (Enterprise Sales & Marketing)',
    code: 'SALES',
    color: 'bg-green-600',
    desc: 'ให้คำปรึกษาโซลูชันแก่ลูกค้าภาครัฐและเอกชน จัดทำใบเสนอราคา สาธิตระบบ และบริหารความสัมพันธ์ลูกค้าองค์กร',
    teams: ['Government & State Enterprise Sales', 'Corporate & B2B Solutions', 'Digital Marketing & Events', 'Strategic Partnerships'],
  },
  {
    name: 'ฝ่ายบริการลูกค้าและสนับสนุนเทคนิค (Customer Support & SLA)',
    code: 'SUP',
    color: 'bg-amber-600',
    desc: 'ให้บริการหลังการขาย ฝึกอบรมผู้ใช้งาน แก้ไขปัญหาตามข้อตกลง SLA และดูแลรักษาระบบ (Maintenance Service)',
    teams: ['Technical Helpdesk 24/7', 'On-site Implementation', 'User Training & Documentation', 'SLA & Warranty Service'],
  },
  {
    name: 'ฝ่ายทรัพยากรบุคคลและบริหารงานทั่วไป (HR & Administration)',
    code: 'HR',
    color: 'bg-indigo-600',
    desc: 'บริหารจัดการทรัพยากรบุคคล การสรรหาบุคลากร การฝึกอบรมพัฒนาทักษะ บัญชีการเงิน และกฎหมายองค์กร',
    teams: ['Talent Acquisition & HR', 'Employee Experience & Welfare', 'Finance & Accounting', 'Legal & Office Operations'],
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- SubNav Component -->
      <AboutSubNav active="organization" />

      <!-- Page Header with High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>MANAGEMENT STRUCTURE & ORGANIZATION</span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              โครงสร้างและ
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                แผนผังการบริหาร
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>

        <p class="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          โครงสร้างการบริหารงานที่ชัดเจน คล่องตัว และเชื่อมโยงกันอย่างเป็นระบบ เพื่อขับเคลื่อนการพัฒนาซอฟต์แวร์มาตรฐานสากล ISO/IEC 29110
        </p>
      </div>

      <!-- Organizational Chart Visualization -->
      <div class="space-y-10 mb-16">
        
        <!-- Level 1: Managing Director -->
        <div class="flex flex-col items-center">
          <div class="w-full max-w-xl rounded-3xl bg-gradient-to-r from-[#171717] to-slate-900 text-white p-7 sm:p-8 text-center shadow-xl border border-white/10 relative">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16834A] text-white text-xs font-bold uppercase tracking-wider mb-3">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 class="text-2xl font-bold font-heading">{{ executive.role }}</h2>
            <p class="text-xs text-slate-400 font-medium mt-1">{{ executive.roleEn }}</p>
            <p class="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-md mx-auto">
              {{ executive.desc }}
            </p>
          </div>

          <!-- Vertical Connector Line -->
          <div class="w-0.5 h-10 bg-[#16834A]"></div>
          
          <!-- Horizontal Branch Bar (Desktop) -->
          <div class="hidden lg:block w-5/6 h-0.5 bg-[#16834A]"></div>
        </div>

        <!-- Level 2: Divisions Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(div, idx) in divisions"
            :key="idx"
            class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all hover:border-[#16834A]/40 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-xs font-bold font-heading shadow-sm" :class="div.color">
                  {{ div.code }}
                </span>
                <span class="text-xs font-semibold text-slate-400 font-heading">ฝ่ายบริหาร 0{{ idx + 1 }}</span>
              </div>

              <h3 class="text-base sm:text-lg font-bold font-heading text-[#171717] mb-2">{{ div.name }}</h3>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{{ div.desc }}</p>
            </div>

            <div class="pt-4 border-t border-slate-100">
              <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">ทีมงานในสังกัด:</span>
              <ul class="space-y-1.5">
                <li
                  v-for="(tm, tIdx) in div.teams"
                  :key="tIdx"
                  class="flex items-center gap-2 text-xs text-slate-700 font-medium"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
                  <span>{{ tm }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- ISO Quality Assurance Banner -->
      <div class="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span class="text-xs font-bold text-[#16834A] uppercase tracking-wider font-heading">GOVERNANCE & STANDARDS</span>
          <h3 class="text-xl font-bold font-heading text-[#171717] mt-1">บริหารงานด้วยระบบคุณภาพมาตรฐานสากล</h3>
          <p class="text-slate-600 text-sm mt-1 max-w-2xl">
            ทุกฝ่ายในโครงสร้างการบริหารปฏิบัติงานร่วมกันอย่างสอดประสานตามข้อกำหนด ISO/IEC 29110 มีการตรวจสอบภายใน (Internal Audit) อย่างสม่ำเสมอ
          </p>
        </div>
        <NuxtLink
          to="/about/policy"
          class="shrink-0 px-6 py-3 rounded-full border-2 border-[#16834A] text-[#16834A] font-heading font-semibold text-sm hover:bg-[#16834A] hover:text-white transition-all shadow-sm active:scale-95"
        >
          ดูนโยบายบริษัท →
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
