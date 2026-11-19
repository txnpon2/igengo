<script setup lang="ts">
const { site } = useContent()
const { locale } = useLocale()

useSeoMeta({
  title: 'ติดต่อบริษัท ไอเจนโก้ จำกัด | สถานที่ตั้งและแผนที่สำนักงานใหญ่',
  description: 'ข้อมูลสถานที่ตั้ง แผนที่การเดินทาง และช่องทางการติดต่อสำนักงานใหญ่ บริษัท ไอเจนโก้ จำกัด',
})
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-24 pt-28">
    <div class="wrap">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6 font-heading" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
        <span>/</span>
        <NuxtLink to="/contact" class="hover:text-[#16834A] transition-colors">ติดต่อเรา</NuxtLink>
        <span>/</span>
        <span class="text-[#16834A] font-semibold">ติดต่อบริษัท</span>
      </nav>

      <!-- Page Header & Tab Switcher -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 border border-[#16834A]/20 text-[#16834A] text-xs font-heading font-semibold tracking-wider uppercase mb-3 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
          <span>IGENCO HEADQUARTERS & OFFICE</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.2]">
              ติดต่อบริษัท <span class="text-[#16834A]">ไอเจนโก้ จำกัด</span>
            </h1>
            <p class="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl font-normal">
              ข้อมูลสถานที่ตั้งสำนักงานใหญ่ แผนที่การเดินทาง และช่องทางการติดต่อประสานงานองค์กร
            </p>
          </div>

          <!-- Tab Navigation Switcher -->
          <div class="flex items-center gap-2 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm shrink-0 font-heading">
            <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16834A] text-white text-xs sm:text-sm font-semibold shadow-sm">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>1. ติดต่อบริษัท & แผนที่</span>
            </span>

            <NuxtLink
              to="/contact/sales"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-slate-600 hover:text-[#16834A] hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-all"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2. ติดต่อฝ่ายขาย / นัดสาธิต →</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Main Layout: Company Information & Photos/Map Placeholders -->
      <div class="space-y-10">

        <!-- 1. Company Information Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Card 1: Headquarters Address -->
          <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center mb-5">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-base font-bold font-heading text-[#171717] mb-2">สถานที่ตั้งสำนักงานใหญ่</h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ site.address || 'เลขที่ 99/99 อาคารไอเจนโก้ ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110' }}
            </p>
            <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>มาตรฐานรับรอง</span>
              <span class="font-semibold text-[#16834A]">ISO/IEC 29110</span>
            </div>
          </div>

          <!-- Card 2: Contact Channels -->
          <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center mb-5">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-base font-bold font-heading text-[#171717] mb-2">เบอร์โทรศัพท์และอีเมล</h3>
            <div class="space-y-2 text-sm text-slate-600">
              <p>โทรศัพท์กลาง: <a :href="`tel:${site.phoneHref}`" class="font-semibold text-[#171717] hover:text-[#16834A]">{{ site.phone }}</a></p>
              <p>อีเมลประสานงาน: <a :href="`mailto:${site.email}`" class="font-semibold text-[#171717] hover:text-[#16834A]">{{ site.email }}</a></p>
              <p>LINE Official: <span class="font-semibold text-[#171717]">{{ site.line }}</span></p>
            </div>
            <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>ติดต่อฝ่ายธุรการ</span>
              <span class="font-semibold text-slate-700">ต่อ 101 - 105</span>
            </div>
          </div>

          <!-- Card 3: Business Hours & Tax Info -->
          <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center mb-5">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-base font-bold font-heading text-[#171717] mb-2">เวลาทำการและข้อมูลนิติบุคคล</h3>
            <div class="space-y-2 text-sm text-slate-600">
              <p>เวลาทำการ: <span class="font-semibold text-[#171717]">{{ site.hours || 'จันทร์ – ศุกร์ 08:30 – 17:30 น.' }}</span></p>
              <p>วันหยุด: <span class="text-slate-500">เสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์</span></p>
              <p>เลขประจำตัวผู้เสียภาษี: <span class="font-mono text-xs text-slate-700">010555XXXXXXXX</span></p>
            </div>
            <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>สถานะนิติบุคคล</span>
              <span class="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                จดทะเบียนถูกต้อง
              </span>
            </div>
          </div>

        </div>

        <!-- 2. Office Photos Placeholder Section (พื้นที่ใส่รูปภาพสำนักงานจริง) -->
        <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#16834A] uppercase tracking-wider mb-1">
                <span>OFFICE GALLERY</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
                บรรยากาศสำนักงานและพื้นที่ต้อนรับ
              </h2>
            </div>
            <span class="text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
              พื้นที่สำหรับใส่รูปภาพจริง
            </span>
          </div>

          <!-- Photo Grid Placeholders (ผู้ใช้สามารถนำ URL รูปจริงมาใส่แทนได้ทันที) -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Photo Slot 1: Building Exterior -->
            <div class="group relative rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 hover:border-[#16834A] transition-all aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="อาคารสำนักงาน IGENCO"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="relative z-10 text-white mt-auto w-full text-left">
                <span class="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">รูปที่ 1</span>
                <p class="font-bold font-heading text-sm sm:text-base">อาคารสำนักงานใหญ่</p>
                <p class="text-xs text-slate-300">Exterior Building & Entrance</p>
              </div>
            </div>

            <!-- Photo Slot 2: Lobby & Meeting Area -->
            <div class="group relative rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 hover:border-[#16834A] transition-all aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                alt="พื้นที่ต้อนรับและห้องประชุม"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="relative z-10 text-white mt-auto w-full text-left">
                <span class="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">รูปที่ 2</span>
                <p class="font-bold font-heading text-sm sm:text-base">พื้นที่ต้อนรับและห้องประชุม</p>
                <p class="text-xs text-slate-300">Reception & Conference Center</p>
              </div>
            </div>

            <!-- Photo Slot 3: Engineering & Tech Workspace -->
            <div class="group relative rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 hover:border-[#16834A] transition-all aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="พื้นที่ปฏิบัติงานทีมวิศวกรรม"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div class="relative z-10 text-white mt-auto w-full text-left">
                <span class="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">รูปที่ 3</span>
                <p class="font-bold font-heading text-sm sm:text-base">พื้นที่ปฏิบัติงานทีมวิศวกรรม</p>
                <p class="text-xs text-slate-300">Software Engineering Space</p>
              </div>
            </div>

          </div>
        </div>

        <!-- 3. Google Maps & Travel Guide (พื้นที่ใส่แผนที่แมพ) -->
        <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#16834A] uppercase tracking-wider mb-1">
                <span>LOCATION & MAP</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-bold font-heading text-[#171717]">
                แผนที่การเดินทาง (Google Map)
              </h2>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-slate-100 hover:bg-[#16834A] text-slate-700 hover:text-white transition-all self-start sm:self-auto"
            >
              <span>เปิดใน Google Maps</span>
              <span>↗</span>
            </a>
          </div>

          <!-- Map Container Placeholder -->
          <div class="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner aspect-[16/9] sm:aspect-[21/9] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.765646702657!2d100.560123!3d13.725892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzMzLjIiTiAxMDDCsDMzJzM2LjQiRQ!5e0!3m2!1sth!2sth!4v1680000000000!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="แผนที่ที่ตั้งสำนักงานใหญ่ IGENCO"
              class="w-full h-full"
            ></iframe>
          </div>

          <!-- Transportation Directions Guide -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-slate-100 text-[#16834A] flex items-center justify-center shrink-0">
                🚗
              </div>
              <div>
                <h4 class="text-sm font-bold font-heading text-[#171717]">รถยนต์ส่วนตัว</h4>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  มีพื้นที่จอดรถสำหรับผู้มาติดต่อสำนักงานใหญ่ พร้อมระบบรักษาความปลอดภัย 24 ชม.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-slate-100 text-[#16834A] flex items-center justify-center shrink-0">
                🚆
              </div>
              <div>
                <h4 class="text-sm font-bold font-heading text-[#171717]">รถไฟฟ้า BTS / MRT</h4>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  ลงสถานีใกล้เคียง ต่อรถโดยสารหรือมอเตอร์ไซค์รับจ้างเข้ามายังอาคารสำนักงาน
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-slate-100 text-[#16834A] flex items-center justify-center shrink-0">
                🚌
              </div>
              <div>
                <h4 class="text-sm font-bold font-heading text-[#171717]">รถประจำทาง</h4>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  มีป้ายหยุดรถประจำทางบริเวณด้านหน้าอาคาร เดินทางสะดวกทุกเส้นทาง
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- 4. Quick Link to Sales & Demo -->
        <div class="rounded-3xl bg-gradient-to-r from-[#171717] to-slate-900 p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
              SALES & DEMONSTRATION
            </span>
            <h3 class="text-xl sm:text-2xl font-bold font-heading">
              ต้องการขอใบเสนอราคา หรือนัดหมายสาธิตระบบซอฟต์แวร์?
            </h3>
            <p class="text-sm text-slate-400 mt-1">
              ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษา ออกแบบสถาปัตยกรรมระบบ และนัดหมายสาธิตระบบ
            </p>
          </div>

          <NuxtLink
            to="/contact/sales"
            class="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#16834A] hover:bg-[#106B3B] text-white font-heading font-semibold text-sm transition-all shadow-lg active:scale-95"
          >
            <span>ไปยังหน้าติดต่อฝ่ายขาย / นัดสาธิต</span>
            <span>→</span>
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>
