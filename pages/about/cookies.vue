<script setup lang="ts">
const { site } = useContent()

useSeoMeta({
  title: 'นโยบายการใช้คุกกี้ (Cookies Policy) | บริษัท ไอเจนโก้ จำกัด (IGENCO)',
  description: 'นโยบายการใช้คุกกี้ (Cookies Policy) ของ บริษัท ไอเจนโก้ จำกัด (www.igenco.co.th) รายละเอียดประเภทคุกกี้ ตัวอย่างคุกกี้ และวิธีการจัดการตั้งค่าบนเบราว์เซอร์',
})

// 4 Cookie Categories with real tokens from IGENCO
const cookieCategories = [
  {
    id: 'strictly',
    badge: 'จำเป็นอย่างยิ่ง (Strictly Necessary)',
    badgeColor: 'bg-emerald-500/10 text-emerald-800 border-emerald-500/30',
    title: '1. คุกกี้ที่มีความจำเป็น (Strictly Necessary Cookies)',
    purpose: 'คุกกี้ประเภทนี้มีความจำเป็นต่อการให้บริการเว็บไซต์ของ IGENCO เพื่อให้ท่านสามารถเข้าใช้งานในส่วนต่าง ๆ ของเว็บไซต์ได้ รวมถึงช่วยจดจำข้อมูลที่ท่านเคยให้ไว้ผ่านเว็บไซต์',
    impact: 'การปิดการใช้งานคุกกี้ประเภทนี้จะส่งผลให้ท่านไม่สามารถใช้บริการในสาระสำคัญของ IGENCO ซึ่งจำเป็นต้องเรียกใช้คุกกี้ได้',
    tokens: ['PHPSESSID', 'JSESSIONID'],
    storageType: 'Session (ลบเมื่อปิดเบราว์เซอร์)',
  },
  {
    id: 'performance',
    badge: 'วิเคราะห์และประเมินผล (Performance & Analytics)',
    badgeColor: 'bg-blue-500/10 text-blue-800 border-blue-500/30',
    title: '2. คุกกี้เพื่อการวิเคราะห์และประเมินผลการใช้งาน (Performance Cookies)',
    purpose: 'ช่วยให้ IGENCO ทราบถึงการปฏิสัมพันธ์ของผู้ใช้งานในการใช้บริการเว็บไซต์ รวมถึงหน้าเพจหรือพื้นที่ใดของเว็บไซต์ที่ได้รับความนิยม ตลอดจนการวิเคราะห์ข้อมูลด้านอื่น ๆ IGENCO ยังใช้ข้อมูลนี้เพื่อการปรับปรุงการทำงานของเว็บไซต์ และเข้าใจพฤติกรรมของผู้ใช้งานมากขึ้น',
    impact: 'ข้อมูลที่เก็บรวบรวมเป็นข้อมูลที่ไม่สามารถระบุตัวตนได้ (Anonymous) นำมาใช้วิเคราะห์ทางสถิติเท่านั้น การปิดการใช้งานจะส่งผลให้ IGENCO ไม่สามารถทราบปริมาณผู้เข้าเยี่ยมชม และไม่สามารถประเมินคุณภาพการให้บริการได้',
    tokens: [
      '__utmc',
      '_hjIncludedInPageviewSample',
      '_hjTLDTest',
      '_gid',
      '__utma',
      '__utmb',
      '__utmt',
      '__utmz',
      '_hjid',
      '_ga',
      '_hjAbsoluteSessionInProgress',
      '_hjFirstSeen',
    ],
    storageType: 'Persistent (1 วัน – 2 ปี)',
  },
  {
    id: 'functional',
    badge: 'เพื่อการใช้งานเว็บไซต์ (Functional)',
    badgeColor: 'bg-teal-500/10 text-teal-800 border-teal-500/30',
    title: '3. คุกกี้เพื่อการใช้งานเว็บไซต์ (Functional Cookies)',
    purpose: 'ช่วยให้เว็บไซต์ของ IGENCO จดจำตัวเลือกต่าง ๆ ที่ท่านได้ตั้งค่าไว้ และช่วยให้เว็บไซต์ส่งมอบคุณสมบัติและเนื้อหาเพิ่มเติมให้ตรงกับการใช้งานของท่านได้ เช่น ช่วยจดจำชื่อบัญชีผู้ใช้งาน หรือจดจำการเปลี่ยนแปลงขนาดฟอนต์และการตั้งค่าหน้าเพจ',
    impact: 'การปิดการใช้งานคุกกี้ประเภทนี้อาจส่งผลให้เว็บไซต์ไม่สามารถทำงานได้อย่างสมบูรณ์ หรือสูญเสียการจดจำตัวเลือกของท่านในการเข้าชมครั้งถัดไป',
    tokens: ['fbsr_340486642645761'],
    storageType: 'Persistent (30 วัน – 1 ปี)',
  },
  {
    id: 'targeting',
    badge: 'โฆษณาและกลุ่มเป้าหมาย (Targeting & Marketing)',
    badgeColor: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
    title: '4. คุกกี้เพื่อการโฆษณาไปยังกลุ่มเป้าหมาย (Targeting Cookies)',
    purpose: 'คุกกี้ที่เกิดจากการเชื่อมโยงเว็บไซต์ของบุคคลที่สาม ซึ่งเก็บข้อมูลการเข้าใช้งานและเว็บไซต์ที่ท่านได้เข้าเยี่ยมชม เพื่อนำเสนอสินค้าหรือบริการบนเว็บไซต์อื่นที่ไม่ใช่เว็บไซต์ของ IGENCO ให้ตรงกับความสนใจของท่าน',
    impact: 'หากท่านปิดการใช้งานคุกกี้ประเภทนี้ จะไม่ส่งผลต่อการใช้งานเว็บไซต์ของ IGENCO แต่จะส่งผลให้การนำเสนอข้อมูลหรือบริการบนเว็บไซต์ภายนอกไม่สอดคล้องกับความสนใจของท่าน',
    tokens: ['VISITOR_INFO1_LIVE'],
    storageType: 'Persistent (ตามบุคคลภายนอกกำหนด)',
  },
]

// Browser management links provided by user
const browserGuides = [
  { name: 'Google Chrome (Desktop)', url: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en', platform: 'Windows / Mac', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9' },
  { name: 'Apple Safari (Mac)', url: 'https://support.apple.com/en-gb/guide/safari/sfri11471/mac', platform: 'macOS', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd', platform: 'Windows / Mac', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US', platform: 'All Devices', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { name: 'Opera Browser', url: 'https://help.opera.com/en/latest/web-preferences/', platform: 'Desktop', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Android (Chrome Mobile)', url: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en&oco=1', platform: 'Android Mobile', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'iPhone / iPad (Safari)', url: 'https://support.apple.com/en-us/HT201265', platform: 'iOS', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'iPhone / iPad (Chrome)', url: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DiOS&hl=en&oco=1', platform: 'iOS', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Internet Explorer', url: 'https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d', platform: 'Legacy Windows', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { name: 'BlackBerry', url: 'https://docs.blackberry.com/content/dam/docs-blackberry-com/release-pdfs/en/device-user-guides/BlackBerry-Classic-Smartphone-10.3.3-User-Guide-en.pdf', platform: 'BlackBerry OS', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
]
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap max-w-5xl">
      
      <!-- SubNav Component -->
      <AboutSubNav active="cookies" />

      <!-- Page Header with Clean Metadata & High-Impact Styling -->
      <div class="mb-14 relative">
        <!-- Floating Ambient Glow -->
        <div class="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-wrap items-center gap-2 mb-4">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#16834A] text-xs font-heading font-bold tracking-wider uppercase shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
            </span>
            <span>หมวด: ABOUT US · PDPA</span>
          </span>
          <span class="text-xs text-slate-600 font-bold bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            ⏱️ อ่าน 2 นาที
          </span>
          <span class="text-xs text-slate-600 font-bold bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            📅 สร้างเมื่อ: 01 มิถุนายน 2565
          </span>
          <span class="text-xs text-emerald-800 font-bold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300/80 shadow-sm">
            🌐 www.igenco.co.th
          </span>
        </div>

        <!-- H1 Main Header with prominent vertical indicator bar & gradient text -->
        <div class="flex items-start sm:items-center gap-3.5 sm:gap-4">
          <div class="w-2.5 sm:w-3 h-12 sm:h-16 rounded-full bg-gradient-to-b from-[#16834A] via-emerald-500 to-teal-400 shrink-0 shadow-sm shadow-emerald-600/30"></div>
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.15]">
              นโยบายการใช้คุกกี้
              <span class="bg-gradient-to-r from-[#16834A] via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                (Cookies Policy)
              </span>
            </h1>
          </div>
        </div>

        <!-- Accent Underline Divider -->
        <div class="h-1.5 w-32 rounded-full bg-gradient-to-r from-[#16834A] via-emerald-400 to-transparent mt-4 mb-4"></div>
        
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
          เมื่อท่านได้เข้าสู่เว็บไซต์ (www.igenco.co.th) ข้อมูลที่เกี่ยวข้องกับการเข้าสู่เว็บไซต์ของท่านจะถูกบันทึกไว้ในรูปแบบของคุกกี้ โดยนโยบายคุกกี้นี้จะอธิบายถึงความหมาย การทำงาน วัตถุประสงค์ รวมถึงการลบและการปฏิเสธการเก็บคุกกี้ เพื่อความเป็นส่วนตัวของท่าน โดยการเข้าสู่เว็บไซต์นี้ถือว่าท่านได้อนุญาตให้เราใช้คุกกี้ตามนโยบายคุกกี้ที่มีรายละเอียดดังต่อไปนี้
        </p>
      </div>

      <!-- Main Structured Content Flow (เต็มพื้นที่ อ่านง่าย โปร่ง โล่ง สบายตา) -->
      <div class="space-y-10">

        <!-- 1. คุกกี้คืออะไร -->
        <section class="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
            <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center font-black font-heading text-xl shadow-md shadow-emerald-700/20 shrink-0">
              01
            </div>
            <div>
              <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">OVERVIEW & DEFINITION</span>
              <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">คุกกี้คืออะไร</h2>
            </div>
          </div>

          <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>คุกกี้ คือ ไฟล์เล็ก ๆ</strong> เพื่อจัดเก็บข้อมูลการเข้าใช้งานเว็บไซต์ เช่น วันเวลา ลิงก์ที่คลิก หน้าที่เข้าชม เงื่อนไขการตั้งค่าต่าง ๆ โดยจะบันทึกลงไปในอุปกรณ์คอมพิวเตอร์ และ/หรือ เครื่องมือสื่อสารที่เข้าใช้งานของท่าน เช่น โน้ตบุ๊ก แท็บเล็ต หรือสมาร์ทโฟน ผ่านทางเว็บเบราว์เซอร์ในขณะที่ท่านเข้าสู่เว็บไซต์ โดยคุกกี้จะไม่ก่อให้เกิดอันตรายต่ออุปกรณ์คอมพิวเตอร์ และ/หรือ เครื่องมือสื่อสารของท่าน
            </p>
            
            <div class="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-5 text-emerald-950 text-sm leading-relaxed space-y-2">
              <span class="font-bold flex items-center gap-2 text-base text-[#16834A]">
                <span>🛡️</span>
                <span>การคุ้มครองและการเพิ่มประสบการณ์ใช้งาน:</span>
              </span>
              <p>
                ในกรณีดังต่อไปนี้ ข้อมูลส่วนบุคคลของท่านอาจถูกจัดเก็บเพื่อใช้เพิ่มประสบการณ์การใช้งานบริการทางออนไลน์ โดยจะจำเอกลักษณ์ของภาษาและปรับแต่งข้อมูลการใช้งานตามความต้องการของท่าน เป็นการยืนยันคุณลักษณะเฉพาะตัว ข้อมูลความปลอดภัยของท่าน รวมถึงบริการที่ท่านสนใจ นอกจากนี้คุกกี้ยังถูกใช้เพื่อวัดปริมาณการเข้าใช้งานบริการทางออนไลน์ การปรับเปลี่ยนเนื้อหาตามการใช้งานของท่านโดยพิจารณาจากพฤติกรรมการเข้าใช้งานครั้งก่อน ๆ และ ณ ปัจจุบัน และอาจมีวัตถุประสงค์เพื่อการโฆษณาประชาสัมพันธ์
              </p>
            </div>

            <p class="text-xs text-slate-500 pt-1">
              * ทั้งนี้ท่านสามารถค้นหาข้อมูลเพิ่มเติมเกี่ยวกับคุกกี้ได้ที่:
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" class="text-[#16834A] font-semibold underline hover:text-[#106B3B] ml-1">
                www.allaboutcookies.org ↗
              </a>
            </p>
          </div>
        </section>

        <!-- 2. บริษัท ไอเจนโก้ จำกัด ใช้คุกกี้อย่างไร -->
        <section class="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
            <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center font-black font-heading text-xl shadow-md shadow-emerald-700/20 shrink-0">
              02
            </div>
            <div>
              <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">USAGE & PURPOSE</span>
              <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">บริษัท ไอเจนโก้ จำกัด ใช้คุกกี้อย่างไร</h2>
            </div>
          </div>

          <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>IGENCO</strong> ใช้คุกกี้เพื่อบันทึกการเข้าเยี่ยมชมและสมัครเข้าใช้งานเว็บไซต์ของท่าน โดยทำให้ IGENCO สามารถจดจำการใช้งานเว็บไซต์ของท่านได้ง่ายขึ้น และข้อมูลเหล่านี้จะถูกนำไปเพื่อปรับปรุงเว็บไซต์ของ IGENCO ให้ตรงกับความต้องการของท่านมากยิ่งขึ้น เพื่ออำนวยความสะดวกให้เกิดความรวดเร็วในการใช้งานเว็บไซต์ของท่าน
            </p>
            <div class="rounded-2xl bg-[#F8F9FA] p-5 border border-slate-200/80">
              <h3 class="text-sm font-bold text-[#171717] mb-1.5 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
                <span>การประมวลผลร่วมกับบุคคลที่สาม (Third-Party Processing)</span>
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ในบางกรณี IGENCO จำเป็นต้องให้บุคคลที่สามช่วยดำเนินการดังกล่าว ซึ่งอาจจะต้องใช้อินเทอร์เน็ตโปรโตคอลแอดเดรส (IP Address) และคุกกี้เพื่อวิเคราะห์ทางสถิติ ตลอดจนเชื่อมโยงข้อมูล และประมวลผลตามวัตถุประสงค์ทางการตลาดอย่างปลอดภัยและอยู่ภายใต้กรอบของกฎหมาย
              </p>
            </div>
          </div>
        </section>

        <!-- 3. คุกกี้ที่ IGENCO ใช้แบ่งตามการจัดเก็บ (Session vs Persistent) -->
        <section class="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
            <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center font-black font-heading text-xl shadow-md shadow-emerald-700/20 shrink-0">
              03
            </div>
            <div>
              <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">STORAGE DURATION</span>
              <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">คุกกี้ที่ IGENCO ใช้ แบ่งตามการจัดเก็บ</h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Session Cookies -->
            <div class="rounded-2xl bg-gradient-to-br from-emerald-50/60 via-white to-white border border-emerald-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
              <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16834A] text-white text-xs font-bold font-heading mb-3 shadow-sm">
                  ⚡ 1. Session Cookies (คุกกี้ชั่วคราว)
                </span>
                <p class="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                  เป็นคุกกี้ที่จะอยู่ชั่วคราวเพื่อจดจำท่านในระหว่างที่ท่านเข้าเยี่ยมชมเว็บไซต์ของ IGENCO เช่น เฝ้าติดตามภาษาที่ท่านได้ตั้งค่าและเลือกใช้ เป็นต้น
                </p>
              </div>
              <div class="mt-5 pt-3.5 border-t border-emerald-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <span class="text-base">✓</span>
                <span>จะมีการลบออกจากเครื่องคอมพิวเตอร์หรืออุปกรณ์เมื่อท่านออกจากเว็บไซต์หรือปิดเว็บเบราว์เซอร์</span>
              </div>
            </div>

            <!-- Persistent Cookies -->
            <div class="rounded-2xl bg-gradient-to-br from-slate-50 via-white to-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
              <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] text-white text-xs font-bold font-heading mb-3 shadow-sm">
                  💾 2. Persistent Cookies (คุกกี้ตามระยะเวลา)
                </span>
                <p class="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                  เป็นคุกกี้ที่จะอยู่ตามระยะเวลาที่กำหนดหรือจนกว่าท่านจะลบออก คุกกี้ประเภทนี้จะช่วยให้เว็บไซต์ของ IGENCO จดจำท่านและการตั้งค่าต่าง ๆ เมื่อท่านกลับมาใช้บริการอีกครั้ง
                </p>
              </div>
              <div class="mt-5 pt-3.5 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span class="text-base">✓</span>
                <span>ช่วยให้ท่านเข้าใช้บริการเว็บไซต์ได้สะดวกรวดเร็วยิ่งขึ้นโดยไม่ต้องตั้งค่าใหม่ทุกครั้ง</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 4. วัตถุประสงค์ในการใช้งานคุกกี้ & ตารางประเภทคุกกี้พร้อมตัวอย่างจริง -->
        <section class="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm space-y-6 hover:shadow-md transition-all">
          <div class="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
            <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center font-black font-heading text-xl shadow-md shadow-emerald-700/20 shrink-0">
              04
            </div>
            <div>
              <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">CATEGORIES & IDENTIFIERS</span>
              <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">
                วัตถุประสงค์ในการใช้งานคุกกี้และตัวอย่างคุกกี้จริง
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="cat in cookieCategories"
              :key="cat.id"
              class="rounded-3xl bg-[#F8F9FA] border border-slate-200/80 p-6 sm:p-7 space-y-3.5 flex flex-col justify-between hover:bg-white hover:border-[#16834A]/40 hover:shadow-md transition-all"
            >
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="px-3 py-1 rounded-full text-xs font-bold border" :class="cat.badgeColor">
                    {{ cat.badge }}
                  </span>
                  <span class="text-[11px] text-slate-400 font-medium font-mono">{{ cat.storageType }}</span>
                </div>

                <h3 class="text-base sm:text-lg font-bold font-heading text-[#171717] mt-1">{{ cat.title }}</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">{{ cat.purpose }}</p>
              </div>

              <div class="space-y-3 pt-3 border-t border-slate-200">
                <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-950 text-xs leading-relaxed">
                  <strong class="font-semibold block mb-0.5">ผลกระทบหากปิดการใช้งาน:</strong>
                  {{ cat.impact }}
                </div>

                <div>
                  <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    ตัวอย่างคุกกี้จริง (Cookie Identifiers):
                  </span>
                  <div class="flex flex-wrap gap-1.5">
                    <code
                      v-for="t in cat.tokens"
                      :key="t"
                      class="px-2 py-0.5 rounded-md bg-slate-900 text-emerald-300 font-mono text-[11px] font-medium"
                    >
                      {{ t }}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. ท่านจะจัดการคุกกี้ได้อย่างไร (Browser Guides 10 แพลตฟอร์ม) -->
        <section class="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm space-y-6 hover:shadow-md transition-all">
          <div class="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
            <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#16834A] to-emerald-700 text-white flex items-center justify-center font-black font-heading text-xl shadow-md shadow-emerald-700/20 shrink-0">
              05
            </div>
            <div>
              <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">BROWSER SETTINGS</span>
              <h2 class="text-2xl sm:text-3xl font-black font-heading text-[#171717] tracking-tight">ท่านจะจัดการคุกกี้ได้อย่างไร</h2>
            </div>
          </div>

          <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              เบราว์เซอร์ส่วนใหญ่จะมีการตั้งค่าให้มีการยอมรับคุกกี้เป็นค่าเริ่มต้น อย่างไรก็ตาม ท่านสามารถปฏิเสธการใช้งานหรือลบคุกกี้ในหน้าการตั้งค่าของเบราว์เซอร์ที่ท่านใช้งานอยู่ ทั้งนี้ หากท่านทำการปรับเปลี่ยนการตั้งค่าเบราว์เซอร์ของท่านอาจส่งผลกระทบต่อรูปแบบและการใช้งานบนหน้าเว็บไซต์ของเราได้
            </p>

            <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-950 leading-relaxed space-y-1">
              <strong class="font-bold block">⚠️ ข้อควรทราบและข้อจำกัดความรับผิดชอบ:</strong>
              <p>
                โปรดทราบว่า หากท่านเลือกที่จะปิดการใช้งานคุกกี้บนเบราว์เซอร์หรืออุปกรณ์ของท่าน อาจส่งผลกระทบกับการทำงานบางส่วนของเว็บไซต์ของ IGENCO ที่ไม่สามารถทำงานหรือให้บริการได้เป็นปกติ
              </p>
              <p class="text-xs text-amber-800">
                IGENCO จะไม่รับผิดชอบและไม่ได้มีความเกี่ยวข้องกับเว็บไซต์ รวมทั้งเนื้อหาในเว็บไซต์ต่าง ๆ ที่กล่าวมาข้างต้น
              </p>
            </div>

            <!-- 10 Browser Link Cards Grid -->
            <div class="pt-2">
              <span class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-3">
                เลือกลิงก์คู่มือการตั้งค่าคุกกี้ตามเบราว์เซอร์และระบบปฏิบัติการของท่าน:
              </span>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <a
                  v-for="(b, i) in browserGuides"
                  :key="i"
                  :href="b.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 hover:border-[#16834A] hover:bg-emerald-50/40 hover:shadow-sm transition-all"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#16834A]/10 text-slate-600 group-hover:text-[#16834A] flex items-center justify-center transition-colors">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="b.icon" />
                      </svg>
                    </div>
                    <div>
                      <span class="block text-xs font-bold text-[#171717] group-hover:text-[#16834A] transition-colors">
                        {{ b.name }}
                      </span>
                      <span class="text-[11px] text-slate-400 font-medium">{{ b.platform }}</span>
                    </div>
                  </div>
                  <span class="text-[#16834A] font-bold text-xs group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </div>
            </div>

            <p class="text-xs text-slate-500 pt-2">
              สำหรับข้อมูลอื่น ๆ เพิ่มเติมในเรื่องนี้ ท่านสามารถเข้าไปอ่านได้ที่:
              <a href="https://www.aboutcookies.org/how-to-delete-cookies" target="_blank" rel="noopener noreferrer" class="text-[#16834A] font-semibold underline hover:text-[#106B3B] ml-1">
                https://www.aboutcookies.org/how-to-delete-cookies ↗
              </a>
            </p>
          </div>
        </section>

        <!-- 6. การเชื่อมโยงข้อมูลกับเว็บไซต์อื่น & การเปลี่ยนแปลงประกาศ -->
        <section class="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm space-y-6 hover:shadow-md transition-all">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-7 rounded-full bg-gradient-to-b from-[#16834A] to-emerald-400 shrink-0"></span>
              <div>
                <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">EXTERNAL LINKS</span>
                <h2 class="text-xl sm:text-2xl font-black font-heading text-[#171717] tracking-tight">การเชื่อมโยงข้อมูลกับเว็บไซต์อื่น</h2>
              </div>
            </div>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              เว็บไซต์ของ IGENCO อาจมีการเชื่อมโยงไปยังเว็บไซต์หรือโซเชียลมีเดียของบุคคลภายนอก รวมถึงอาจมีการฝังเนื้อหาหรือวีดีโอที่มาจากโซเชียลมีเดีย เช่น YouTube หรือ Facebook เป็นต้น ซึ่งจะช่วยให้ท่านเข้าถึงเนื้อหาและสร้างการปฏิสัมพันธ์กับบุคคลอื่นบนโซเชียลมีเดียจากเว็บไซต์ของ IGENCO ได้
            </p>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              ซึ่งเว็บไซต์หรือโซเชียลมีเดียของบุคคลภายนอกจะมีการกำหนดและตั้งค่าคุกกี้ขึ้นมาเอง โดยที่ IGENCO ไม่สามารถควบคุมหรือรับผิดชอบต่อคุกกี้เหล่านั้นได้ และขอแนะนำให้ท่านควรเข้าไปอ่านและศึกษานโยบายหรือประกาศการใช้คุกกี้ของบุคคลภายนอกเหล่านั้นด้วย
            </p>
          </div>

          <div class="pt-6 border-t border-slate-100 space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-7 rounded-full bg-gradient-to-b from-[#16834A] to-emerald-400 shrink-0"></span>
              <div>
                <span class="text-xs font-bold text-[#16834A] uppercase tracking-widest font-heading block">POLICY UPDATES</span>
                <h2 class="text-xl sm:text-2xl font-black font-heading text-[#171717] tracking-tight">การเปลี่ยนแปลงประกาศ</h2>
              </div>
            </div>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              ประกาศนี้อาจมีการปรับปรุงให้เหมาะสมและสอดคล้องกับสถานการณ์และตามการให้บริการจริง โดย IGENCO จะมีการแจ้งประกาศที่มีการปรับปรุงใหม่บนเว็บไซต์นี้ ดังนั้น IGENCO ขอแนะนำให้ท่านตรวจสอบให้แน่ใจว่าท่านได้เข้าใจการเปลี่ยนแปลงตามข้อกำหนดดังกล่าว
            </p>
          </div>
        </section>

        <!-- Bottom Link to Privacy Policy Banner -->
        <div class="rounded-3xl bg-gradient-to-r from-[#171717] to-slate-900 text-white p-7 sm:p-9 shadow-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
              PDPA PRIVACY POLICY
            </span>
            <h3 class="text-xl sm:text-2xl font-bold font-heading">
              ต้องการอ่านนโยบายความเป็นส่วนตัวฉบับเต็ม?
            </h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">
              ศึกษาข้อมูลสิทธิของเจ้าของข้อมูล และมาตรการรักษาความปลอดภัยของ บริษัท ไอเจนโก้ จำกัด
            </p>
          </div>

          <NuxtLink
            to="/about/privacy"
            class="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-semibold text-sm transition-all shadow-lg active:scale-95"
          >
            <span>นโยบายความเป็นส่วนตัว</span>
            <span>→</span>
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>
