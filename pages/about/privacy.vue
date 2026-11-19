<script setup lang="ts">
const { site } = useContent()

useSeoMeta({
  title: 'นโยบายความเป็นส่วนตัว (Privacy Policy) | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'นโยบายการคุ้มครองข้อมูลส่วนบุคคล แบบคำร้องขอใช้สิทธิ (DSAR) ประกาศความเป็นส่วนตัวกล้อง CCTV และประกาศสำหรับผู้สมัครงาน บริษัท ไอเจนโก้ จำกัด',
})

/**
 * กำหนดรายการเอกสาร PDF ทั้ง 4 ฉบับ
 * เชื่อมต่อไปยังไฟล์ PDF จริงบนระบบ พร้อมตกแต่งให้หัวข้อโดดเด่น สวยงาม และน่าเชื่อถือ
 */
const pdfDocuments = [
  {
    id: 'privacy-policy',
    number: '01',
    code: 'DOC-PDPA-01',
    badge: 'นโยบายหลักขององค์กร',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    numberGradient: 'from-emerald-600 to-teal-600',
    cardBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-900/10',
    accentBar: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400',
    title: 'นโยบายการคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)',
    titleEn: 'General Data Protection & Privacy Policy',
    desc: 'ประกาศนโยบายการคุ้มครองข้อมูลส่วนบุคคลฉบับหลัก ชี้แจงการจัดเก็บ ใช้ เปิดเผย และมาตรการรักษาความมั่นคงปลอดภัยตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)',
    fileUrl: 'https://igenco.co.th/attactment/pdpa/02-privacyPolicy.pdf',
    fileSize: 'เอกสาร PDF ทางการ (Official PDF)',
  },
  {
    id: 'dsar-form',
    number: '02',
    code: 'FORM-DSAR-02',
    badge: 'แบบฟอร์มคำร้องขอใช้สิทธิ',
    badgeClass: 'bg-blue-50 text-blue-800 border-blue-200',
    numberGradient: 'from-blue-600 to-indigo-600',
    cardBorder: 'hover:border-blue-500/50 hover:shadow-blue-900/10',
    accentBar: 'bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400',
    title: 'แบบคำร้องขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล',
    titleEn: 'Data Subject Access Request Form (DSAR)',
    desc: 'แบบฟอร์มอย่างเป็นทางการสำหรับเจ้าของข้อมูลส่วนบุคคล เพื่อยื่นคำร้องขอเข้าถึง ขอรับสำเนา ขอแก้ไข ขอให้ระงับการใช้ หรือขอลบทำลายข้อมูลส่วนบุคคล',
    fileUrl: 'https://igenco.co.th/attactment/pdpa/09-privacyPolicy.pdf',
    fileSize: 'แบบฟอร์ม PDF ทางการ (Official PDF Form)',
  },
  {
    id: 'cctv-notice',
    number: '03',
    code: 'NOTICE-CCTV-03',
    badge: 'คำประกาศกล้องวงจรปิด',
    badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    numberGradient: 'from-indigo-600 to-purple-600',
    cardBorder: 'hover:border-indigo-500/50 hover:shadow-indigo-900/10',
    accentBar: 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-400',
    title: 'คำประกาศเกี่ยวกับความเป็นส่วนตัวในการใช้กล้องวงจรปิด (CCTV Privacy Notice)',
    titleEn: 'CCTV Surveillance Privacy Notice',
    desc: 'คำประกาศและหลักเกณฑ์การบันทึกภาพนิ่งและภาพเคลื่อนไหวผ่านระบบกล้องวงจรปิด (CCTV) ภายในอาคารสำนักงานและพื้นที่โดยรอบเพื่อรักษาความปลอดภัย',
    fileUrl: 'https://igenco.co.th/attactment/pdpa/12-privacyPolicy.pdf',
    fileSize: 'ประกาศ PDF ทางการ (Official Notice)',
  },
  {
    id: 'hr-notice',
    number: '04',
    code: 'NOTICE-HR-04',
    badge: 'สำหรับผู้สมัครงาน & บุคลากร',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
    numberGradient: 'from-amber-600 to-orange-600',
    cardBorder: 'hover:border-amber-500/50 hover:shadow-amber-900/10',
    accentBar: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400',
    title: 'คำประกาศเกี่ยวกับความเป็นส่วนตัวสำหรับผู้สมัครงานและผู้ปฏิบัติงาน',
    titleEn: 'Job Applicant & Employee Privacy Notice',
    desc: 'นโยบายการคุ้มครองข้อมูลส่วนบุคคลสำหรับผู้ยื่นใบสมัครงาน ผู้เข้ารับการคัดเลือก พนักงานประจำ พนักงานสัญญาจ้าง และบุคลากรของบริษัท ไอเจนโก้ จำกัด',
    fileUrl: 'https://igenco.co.th/attactment/pdpa/15-privacyPolicy.pdf',
    fileSize: 'ประกาศ PDF ทางการ (Official Notice)',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap max-w-5xl">
      
      <!-- SubNav Component -->
      <AboutSubNav active="privacy" />

      <!-- Page Header: ออกแบบหัวข้อให้เด่น ชัดเจน สวยงามระดับพรีเมียม -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow behind title -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
            </span>
            <span>ABOUT US · PDPA COMPLIANCE</span>
          </span>
          <span class="text-xs text-slate-600 font-bold bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            มาตรฐาน ISO/IEC 29110
          </span>
          <span class="text-xs text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300/80 shadow-sm">
            เอกสารทางการ (Official PDF Documents)
          </span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              นโยบายความเป็นส่วนตัว
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                (Privacy Policy)
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>

        <p class="text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          บริษัท ไอเจนโก้ จำกัด ยึดมั่นในการปกป้องและคุ้มครองข้อมูลส่วนบุคคลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) ท่านสามารถดาวน์โหลดหรือเปิดดูเอกสารนโยบายและแบบฟอร์มคำร้องฉบับเต็มในรูปแบบไฟล์ PDF ได้ตามรายการด้านล่าง
        </p>
      </div>

      <!-- Section Title for PDF Documents -->
      <div class="flex items-center gap-3 mb-8">
        <span class="w-2 h-7 rounded-full bg-gradient-to-b from-[#16834A] to-emerald-400 shrink-0"></span>
        <div>
          <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">OFFICIAL PDPA DOCUMENTS</span>
          <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">
            เอกสารนโยบายและแบบฟอร์มทางการ (4 ฉบับ)
          </h2>
        </div>
      </div>

      <!-- 4 PDF Documents Grid: การ์ดหัวข้อเด่น สวยงาม ทันสมัย ชัดเจน -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
        
        <div
          v-for="doc in pdfDocuments"
          :key="doc.id"
          class="group relative rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          :class="doc.cardBorder"
        >
          <!-- Top Decorative Accent Bar -->
          <div :class="['h-2 w-full', doc.accentBar]"></div>

          <div class="p-7 sm:p-8">
            <!-- Header Block with Large Number Badge, Badges, and Prominent Title -->
            <div class="flex items-start gap-4 mb-4">
              <!-- Prominent Number Circle -->
              <div
                class="w-13 h-13 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center font-heading font-black text-xl shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105"
                :class="doc.numberGradient"
              >
                {{ doc.number }}
              </div>

              <!-- Badges & Code -->
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span :class="['inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-heading border shadow-2xs', doc.badgeClass]">
                    {{ doc.badge }}
                  </span>
                  <span class="font-mono text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {{ doc.code }}
                  </span>
                </div>

                <!-- English Title Tag -->
                <span class="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                  {{ doc.titleEn }}
                </span>
              </div>
            </div>

            <!-- Highly Prominent Title (หัวข้อเด่นและสวยงาม) -->
            <h3 class="text-xl sm:text-[22px] font-black font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug tracking-tight mb-3">
              {{ doc.title }}
            </h3>

            <!-- Description -->
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {{ doc.desc }}
            </p>
          </div>

          <!-- Bottom Action Bar with Big Prominent Button -->
          <div class="px-7 sm:px-8 pb-7 pt-4 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span class="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
              <span class="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-200">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>{{ doc.fileSize }}</span>
            </span>

            <a
              :href="doc.fileUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white text-xs sm:text-sm font-bold font-heading shadow-md hover:shadow-lg transition-all active:scale-95 group-hover:bg-[#106B3B]"
              :title="`เปิดดู ${doc.title}`"
            >
              <span>เปิดดูเอกสาร PDF</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Contact DPO Section: ตกแต่งหัวข้อให้โดดเด่น น่าเชื่อถือ -->
      <div class="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm mb-12 relative overflow-hidden">
        <!-- Accent Glow -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

        <div class="max-w-3xl relative">
          <!-- DPO Header with Icon Badge -->
          <div class="flex items-center gap-3.5 mb-4">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">DATA PROTECTION OFFICER</span>
              <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">
                ติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)
              </h2>
            </div>
          </div>

          <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            หากท่านมีข้อสงสัย ข้อเสนอแนะ หรือต้องการส่งแบบคำร้องขอใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล สามารถส่งแบบฟอร์มและเอกสารประกอบมาได้ที่ช่องทางติดต่อด้านล่าง:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-slate-100">
            <!-- Organization -->
            <div class="space-y-1">
              <span class="block text-xs font-bold uppercase tracking-wider text-slate-400">หน่วยงาน</span>
              <p class="text-sm font-black text-[#171717]">คณะทำงานคุ้มครองข้อมูลส่วนบุคคล (DPO)</p>
              <p class="text-xs text-slate-500">{{ site.legalName }}</p>
            </div>

            <!-- Email -->
            <div class="space-y-1">
              <span class="block text-xs font-bold uppercase tracking-wider text-slate-400">อีเมลยื่นคำร้อง</span>
              <p class="text-sm font-black text-[#16834A]">
                <a :href="`mailto:${site.email}?subject=ยื่นแบบคำร้องขอใช้สิทธิ PDPA`" class="hover:underline">
                  {{ site.email }}
                </a>
              </p>
              <p class="text-xs text-slate-500">ตอบกลับภายในระยะเวลาที่กฎหมายกำหนด</p>
            </div>

            <!-- Phone & Hours -->
            <div class="space-y-1">
              <span class="block text-xs font-bold uppercase tracking-wider text-slate-400">เบอร์โทรศัพท์</span>
              <p class="text-sm font-black text-[#171717]">
                <a :href="`tel:${site.phoneHref}`" class="hover:text-[#16834A]">{{ site.phone }}</a>
              </p>
              <p class="text-xs text-slate-500">{{ site.hours || 'จันทร์ – ศุกร์ 08:30 – 17:30 น.' }}</p>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
            <span class="font-bold text-slate-700">สถานที่ติดต่อ:</span>
            <span>{{ site.address }}</span>
          </div>
        </div>
      </div>

      <!-- Quick Link to Cookies Policy: ออกแบบหัวข้อให้โดดเด่น -->
      <div class="rounded-3xl bg-gradient-to-r from-[#171717] via-slate-900 to-emerald-950 text-white p-8 sm:p-10 shadow-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 font-heading">
            COOKIES POLICY
          </span>
          <h3 class="text-xl sm:text-2xl font-black font-heading text-white tracking-tight">
            ต้องการอ่านนโยบายการใช้คุกกี้ (Cookies Policy)?
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">
            ศึกษาประเภทคุกกี้ ตัวอย่างคุกกี้ และวิธีการจัดการตั้งค่าบนเบราว์เซอร์
          </p>
        </div>

        <NuxtLink
          to="/about/cookies"
          class="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-bold text-sm transition-all shadow-lg active:scale-95"
        >
          <span>นโยบายการใช้คุกกี้</span>
          <span class="text-base">→</span>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
