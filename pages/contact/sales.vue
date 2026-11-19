<script setup lang="ts">
const route = useRoute()
const { site, getProducts } = useContent()
const { data: products } = await useAsyncData('contact-sales-products', () => getProducts())

useSeoMeta({
  title: 'ติดต่อฝ่ายขาย / นัดสาธิตระบบ | IGENCO ซอฟต์แวร์มาตรฐาน ISO/IEC 29110',
  description: 'ขอใบเสนอราคา ปรึกษาสถาปัตยกรรมระบบ และนัดหมายสาธิตระบบซอฟต์แวร์องค์กร จากทีมวิศวกร IGENCO',
})

const form = reactive({
  product: String(route.query.product ?? ''),
  name: '',
  org: '',
  phone: '',
  email: '',
  message: '',
})
const sent = ref(false)

function submit() {
  sent.value = true
}

const field = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#171717] focus:border-[#16834A] focus:ring-2 focus:ring-[#16834A]/20 transition-all outline-none'
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
        <span class="text-[#16834A] font-semibold">ติดต่อฝ่ายขาย & นัดสาธิต</span>
      </nav>

      <!-- Page Header & Tab Switcher -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16834A]/10 border border-[#16834A]/20 text-[#16834A] text-xs font-heading font-semibold tracking-wider uppercase mb-3 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#16834A]"></span>
          <span>SALES & DEMONSTRATION</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.2]">
              ติดต่อฝ่ายขาย / <span class="text-[#16834A]">นัดสาธิตระบบ</span>
            </h1>
            <p class="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl font-normal">
              ปรึกษาวิศวกรระบบ ขอใบเสนอราคา และนัดหมายสาธิตระบบจริง เจ้าหน้าที่ติดต่อกลับใน 1 วันทำการ
            </p>
          </div>

          <!-- Tab Navigation Switcher -->
          <div class="flex items-center gap-2 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm shrink-0 font-heading">
            <NuxtLink
              to="/contact/company"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-slate-600 hover:text-[#16834A] hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-all"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>1. ติดต่อบริษัท & แผนที่</span>
            </NuxtLink>

            <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16834A] text-white text-xs sm:text-sm font-semibold shadow-sm">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>2. ติดต่อฝ่ายขาย / นัดสาธิต</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Main Layout: Contact Sales Details (Left) + Demo Request Form (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Sales Info & Guarantee -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <h2 class="text-lg font-bold font-heading text-[#171717] mb-4">ช่องทางติดต่อฝ่ายขายโดยตรง</h2>
            
            <dl class="space-y-4 text-sm">
              <div class="flex items-start gap-3.5 pb-3.5 border-b border-slate-100">
                <div class="w-10 h-10 rounded-xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <dt class="font-bold text-slate-400 text-xs uppercase tracking-wider">สายด่วนฝ่ายขาย / ใบเสนอราคา</dt>
                  <dd class="mt-0.5"><a :href="`tel:${site.phoneHref}`" class="text-base font-bold text-[#171717] hover:text-[#16834A]">{{ site.phone }}</a></dd>
                </div>
              </div>

              <div class="flex items-start gap-3.5 pb-3.5 border-b border-slate-100">
                <div class="w-10 h-10 rounded-xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <dt class="font-bold text-slate-400 text-xs uppercase tracking-wider">อีเมลฝ่ายขาย</dt>
                  <dd class="mt-0.5"><a :href="`mailto:${site.email}`" class="text-base font-bold text-[#171717] hover:text-[#16834A]">{{ site.email }}</a></dd>
                </div>
              </div>

              <div class="flex items-start gap-3.5 pb-3.5 border-b border-slate-100">
                <div class="w-10 h-10 rounded-xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <dt class="font-bold text-slate-400 text-xs uppercase tracking-wider">LINE Official</dt>
                  <dd class="mt-0.5 text-base font-bold text-[#171717]">{{ site.line }}</dd>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-[#16834A]/10 text-[#16834A] flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <dt class="font-bold text-slate-400 text-xs uppercase tracking-wider">เวลาให้บริการฝ่ายขาย</dt>
                  <dd class="mt-0.5 text-sm font-semibold text-[#171717]">{{ site.hours || 'จันทร์ – ศุกร์ 08:30 – 17:30 น.' }}</dd>
                </div>
              </div>
            </dl>
          </div>

          <!-- Trust Badges Card -->
          <div class="rounded-3xl bg-[#16834A]/8 border border-[#16834A]/20 p-6 space-y-3">
            <div class="flex items-center gap-2 text-sm font-bold font-heading text-[#16834A]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>การรับประกันและมาตรฐานความเชื่อมั่น</span>
            </div>
            <ul class="text-xs text-slate-600 space-y-2 list-disc list-inside">
              <li>มาตรฐานวิศวกรรมซอฟต์แวร์ระดับสากล <strong>ISO/IEC 29110</strong></li>
              <li>การคุ้มครองข้อมูลส่วนบุคคลตามกฎหมาย <strong>PDPA Compliant</strong></li>
              <li>บริการดูแลรักษาระบบ (SLA) และให้คำปรึกษาตลอดอายุสัญญา</li>
            </ul>
          </div>

        </div>

        <!-- Right Column: Sales Consultation & Demo Form -->
        <div class="lg:col-span-7">
          <div class="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-10 shadow-sm">
            
            <div v-if="sent" class="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center" role="status">
              <div class="w-16 h-16 rounded-full bg-[#16834A] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/30">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold font-heading text-[#171717] mb-2">รับข้อมูลของท่านเรียบร้อยแล้ว</h3>
              <p class="text-slate-600 text-sm max-w-md mx-auto">
                ทีมวิศวกรและผู้เชี่ยวชาญฝ่ายขายของ IGENCO จะติดต่อกลับเพื่อประสานงานและจัดส่งเอกสารใบเสนอราคาภายใน 1 วันทำการ
              </p>
              <button
                type="button"
                class="mt-6 px-6 py-2.5 rounded-full bg-[#16834A] text-white text-xs font-semibold hover:bg-[#106B3B] transition-all"
                @click="sent = false"
              >
                ส่งคำขอเพิ่มเติม
              </button>
            </div>

            <form v-else class="space-y-5" @submit.prevent="submit">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-1">
                  ระบบหรือบริการที่ต้องการขอใบเสนอราคา / นัดสาธิต *
                </label>
                <select v-model="form.product" :class="field" required>
                  <option value="">-- กรุณาเลือกระบบที่สนใจ --</option>
                  <option value="all">ขอคำปรึกษาภาพรวมและออกแบบระบบองค์กรทั้งหมด</option>
                  <option v-for="p in products" :key="p.slug" :value="p.slug">
                    {{ p.code }} · {{ p.title }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-1">
                  ชื่อ-นามสกุล ผู้ติดต่อ *
                </label>
                <input
                  v-model="form.name"
                  required
                  placeholder="เช่น สมชาย ใจดี"
                  autocomplete="name"
                  :class="field"
                />
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-1">
                    หน่วยงาน / บริษัท *
                  </label>
                  <input
                    v-model="form.org"
                    required
                    placeholder="ชื่อองค์กรหรือบริษัท"
                    autocomplete="organization"
                    :class="field"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-1">
                    เบอร์โทรศัพท์ติดต่อ *
                  </label>
                  <input
                    v-model="form.phone"
                    required
                    type="tel"
                    placeholder="08X-XXX-XXXX"
                    autocomplete="tel"
                    :class="field"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-1">
                  อีเมลติดต่อ *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="name@company.com"
                  autocomplete="email"
                  :class="field"
                  required
                />
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 font-heading mb-1">
                  รายละเอียดความต้องการหรือจำนวนผู้ใช้งาน
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  placeholder="ระบุจำนวนผู้ใช้งานโดยประมาณ วันที่สะดวกให้นัดสาธิต หรือข้อกำหนดพิเศษของระบบ"
                  :class="field"
                ></textarea>
              </div>

              <div class="pt-2">
                <button
                  type="submit"
                  class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#16834A] hover:bg-[#106B3B] px-8 py-3.5 text-base font-semibold font-heading text-white shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all active:scale-98"
                >
                  <span>ส่งข้อมูลเพื่อนัดสาธิต / ขอใบเสนอราคา</span>
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              <p class="text-center text-xs text-slate-400">
                ข้อมูลของท่านจะถูกเก็บรักษาอย่างปลอดภัยตามนโยบาย PDPA
              </p>
            </form>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>
