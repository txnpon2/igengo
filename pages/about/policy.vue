<script setup lang="ts">
const { site } = useContent()

useSeoMeta({
  title: 'นโยบายบริษัท | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'นโยบายคุณภาพ นโยบายความมั่นคงปลอดภัยสารสนเทศ และนโยบายการให้บริการของ บริษัท ไอเจนโก้ จำกัด มาตรฐาน ISO/IEC 29110',
})

const policies = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: '1. นโยบายคุณภาพและการพัฒนาซอฟต์แวร์ (Quality Policy)',
    desc: 'ยึดมั่นการพัฒนาซอฟต์แวร์ตามมาตรฐานสากล ISO/IEC 29110 (Software Engineering Lifecycle) มีกระบวนการวิเคราะห์ความต้องการ ออกแบบสถาปัตยกรรม เขียนโปรแกรมตามมาตรฐานความปลอดภัย และทดสอบระบบอย่างครบถ้วน (QA & System Testing) ก่อนการส่งมอบงานทุกโครงการ',
    points: [
      'ควบคุมกระบวนการพัฒนาด้วยเกณฑ์มาตรฐานสากล',
      'มีขั้นตอนการทดสอบฟังก์ชัน ความปลอดภัย และการรองรับโหลด (Performance Test)',
      'การจัดทำคู่มือและฝึกอบรมผู้ใช้งานอย่างละเอียด',
    ],
  },
  {
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: '2. นโยบายความมั่นคงปลอดภัยสารสนเทศ (Information Security Policy)',
    desc: 'ปกป้องข้อมูลและระบบสารสนเทศของลูกค้าด้วยมาตรการระดับสูงสุด ทั้งการเข้ารหัสข้อมูล (Encryption AES-256), การกำหนดสิทธิ์เข้าถึงตามบทบาท (Role-Based Access Control), และการสำรองข้อมูลอัตโนมัติเพื่อรองรับแผนกู้คืนระบบเมื่อเกิดภัยพิบัติ (Disaster Recovery Plan)',
    points: [
      'เข้ารหัสข้อมูลสำคัญทั้งระหว่างส่ง (In-transit) และจัดเก็บ (At-rest)',
      'ระบบบันทึกประวัติการเข้าใช้งาน (Audit Trail & Logging) ตรวจสอบย้อนหลังได้',
      'การป้องกันภัยคุกคามทางไซเบอร์ตามมาตรฐานสากล',
    ],
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: '3. นโยบายการบริการและข้อตกลงระดับบริการ (SLA & Support Policy)',
    desc: 'เราถือว่าความต่อเนื่องในการทำงานของลูกค้าคือสิ่งสำคัญที่สุด จึงกำหนดข้อตกลงระดับการให้บริการ (Service Level Agreement: SLA) ไว้อย่างชัดเจน พร้อมทีมสนับสนุนเทคนิค (Technical Support) คอยประสานงานและแก้ไขปัญหาอย่างทันท่วงที',
    points: [
      'สายด่วนและระบบ Ticket Support สำหรับแจ้งปัญหาตลอดเวลาทำการ',
      'การันตีระยะเวลาตอบกลับและการแก้ไขปัญหาตามระดับความเร่งด่วน',
      'การอัปเดตเวอร์ชันซอฟต์แวร์และแพตช์ความปลอดภัยสม่ำเสมอ',
    ],
  },
  {
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    title: '4. นโยบายธรรมาภิบาลและความซื่อสัตย์สุจริต (Governance & Anti-Corruption)',
    desc: 'ดำเนินธุรกิจด้วยความซื่อสัตย์สุจริต ยึดมั่นในหลักธรรมาภิบาล ความโปร่งใส ตรวจสอบได้ ปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานกำกับดูแลอย่างเคร่งครัด และต่อต้านการทุจริตคอร์รัปชันทุกรูปแบบ',
    points: [
      'การประมูลและทำสัญญาอย่างเป็นธรรมและโปร่งใส',
      'เคารพสิทธิในทรัพย์สินทางปัญญาและลิขสิทธิ์ซอฟต์แวร์',
      'การปฏิบัติตามระเบียบการจัดซื้อจัดจ้างภาครัฐอย่างเคร่งครัด',
    ],
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: '5. นโยบายเพื่อสิ่งแวดล้อมและสังคม (ESG & Paperless Commitment)',
    desc: 'มุ่งมั่นขับเคลื่อนสังคมสู่การลดการใช้กระดาษ (Paperless Society) และการประหยัดพลังงานผ่านโซลูชันระบบสารบรรณอิเล็กทรอนิกส์ (e-Office) และคลาวด์ พร้อมทั้งสนับสนุนการพัฒนาศักยภาพบุคลากรไอทีไทยให้เติบโตอย่างยั่งยืน',
    points: [
      'ส่งเสริมการใช้เอกสารดิจิทัลเพื่อลดการตัดไม้ทำลายป่าและขยะกระดาษ',
      'ออกแบบระบบที่ประหยัดทรัพยากรการประมวลผลและการใช้พลังงาน',
      'สนับสนุนกิจกรรมส่งเสริมการศึกษาด้านวิทยาการคอมพิวเตอร์แก่เยาวชน',
    ],
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- SubNav Component -->
      <AboutSubNav active="policy" />

      <!-- Page Header with High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase mb-4 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
          </span>
          <span>CORPORATE POLICIES & GOVERNANCE</span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              นโยบายและ
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                มาตรฐานการดำเนินงาน
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>

        <p class="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          บริษัท ไอเจนโก้ จำกัด ยึดมั่นในการดำเนินธุรกิจภายใต้กรอบนโยบายคุณภาพ ความปลอดภัยของข้อมูล และหลักธรรมาภิบาล เพื่อส่งมอบบริการที่ดีที่สุดแก่ทุกองค์กร
        </p>
      </div>

      <!-- Policies List Grid -->
      <div class="space-y-6 mb-16">
        <div
          v-for="(p, idx) in policies"
          :key="idx"
          class="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all hover:border-[#16834A]/40"
        >
          <div class="flex items-start gap-5">
            <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center shrink-0 mt-1 shadow-md shadow-emerald-700/20">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="p.icon" />
              </svg>
            </div>
            <div class="space-y-3 flex-1">
              <h2 class="text-xl sm:text-2xl font-black font-heading text-[#171717] tracking-tight">{{ p.title }}</h2>
              <p class="text-slate-600 text-sm sm:text-base leading-relaxed">{{ p.desc }}</p>
              
              <div class="pt-2">
                <ul class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <li
                    v-for="(pt, i) in p.points"
                    :key="i"
                    class="flex items-center gap-2 text-xs font-medium text-slate-700 bg-[#F8F9FA] rounded-xl px-3 py-2 border border-slate-100"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
                    <span>{{ pt }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
