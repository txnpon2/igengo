<script setup lang="ts">
const { getProducts, getCases, getPosts, about } = useContent()
const { data: featured } = await useAsyncData('home-products', async () =>
  (await getProducts()).filter((p) => p.category === 'enterprise'))
const { data: cases } = await useAsyncData('home-cases', () => getCases())
const { data: news } = await useAsyncData('home-news', async () => (await getPosts()).slice(0, 3))

useSeoMeta({
  title: 'ซอฟต์แวร์องค์กรสำหรับภาครัฐและเอกชน',
  description: 'IGENCO พัฒนา HR.ai, iGenQ, i-SmartSoft, Regist.ai และระบบตามความต้องการ ภายใต้มาตรฐาน ISO/IEC 29110',
})

const finder = [
  { label: 'งานบุคคล', sub: 'HR.ai', to: '/products/hr-ai' },
  { label: 'คิวและลงทะเบียน', sub: 'iGenQ · Regist.ai', to: '/products/igenq' },
  { label: 'สารบรรณและการเงิน', sub: 'i-SmartSoft · i-FinSoft', to: '/products/i-smartsoft' },
  { label: 'พัฒนาระบบและ E-Commerce', sub: 'ตามความต้องการ', to: '/products?category=service' },
]
const quick = ['hr-ai', 'igenq', 'i-smartsoft', 'regist-ai']
</script>

<template>
  <section class="bg-igenco-50">
    <div class="wrap grid items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
      <div class="lg:col-span-7">
        <h1 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          ซอฟต์แวร์องค์กรครบวงจร สำหรับภาครัฐและเอกชน
        </h1>
        <p class="mt-5 max-w-2xl text-lg text-slate-700">
          IGENCO พัฒนาซอฟต์แวร์พร้อมใช้งาน (HR.ai, iGenQ, i-SmartSoft, Regist.ai) และระบบตามความต้องการ ภายใต้มาตรฐานคุณภาพสากล ISO/IEC 29110
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="btn-primary">ขอคำปรึกษาฟรี</NuxtLink>
          <NuxtLink to="/products" class="btn-outline">ดูโซลูชันทั้งหมด (11 ระบบ)</NuxtLink>
        </div>
        <dl class="mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-igenco-200 pt-6">
          <div><dt class="font-heading font-bold text-igenco-900">ISO/IEC 29110</dt><dd class="text-sm text-slate-600">มาตรฐานพัฒนาซอฟต์แวร์</dd></div>
          <div><dt class="font-heading font-bold text-igenco-900">OIIO Winner</dt><dd class="text-sm text-slate-600">รางวัลชนะเลิศนวัตกรรม</dd></div>
          <div><dt class="font-heading font-bold text-igenco-900">11 ระบบ</dt><dd class="text-sm text-slate-600">พร้อมติดตั้ง</dd></div>
        </dl>
      </div>

      <div class="lg:col-span-5">
        <div class="overflow-hidden rounded-3xl border border-igenco-200 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="สำนักงานองค์กร" class="h-48 w-full bg-igenco-100 object-cover" />
          <div class="grid grid-cols-2 gap-3 p-4">
            <template v-for="p in featured?.filter((x) => quick.includes(x.slug))" :key="p.slug">
              <NuxtLink :to="`/products/${p.slug}`" class="rounded-xl bg-igenco-50 p-3 hover:bg-igenco-100">
                <span class="block font-heading font-bold text-igenco-900">{{ p.code }}</span>
                <span class="line-clamp-2 text-sm text-slate-600">{{ p.audience.replace('สำหรับ', '') }}</span>
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-200 bg-white">
      <div class="wrap py-5">
        <p class="mb-3 font-heading font-semibold text-igenco-900">เลือกโซลูชันตามงานของหน่วยงาน</p>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink v-for="f in finder" :key="f.label" :to="f.to" class="rounded-xl border border-igenco-200 bg-igenco-50 px-4 py-3 hover:bg-igenco-100">
            <span class="block font-medium text-slate-900">{{ f.label }}</span>
            <span class="text-sm text-slate-600">{{ f.sub }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div class="max-w-2xl">
          <h2 class="text-2xl font-bold sm:text-3xl">ซอฟต์แวร์บริหารองค์กร</h2>
          <p class="mt-2 text-slate-600">แยกตามงาน ระบุกลุ่มผู้ใช้ชัดเจน เปรียบเทียบได้ทันที</p>
        </div>
        <NuxtLink to="/products" class="font-heading font-semibold text-igenco-800 hover:underline">ดูผลิตภัณฑ์ทั้งหมด</NuxtLink>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard v-for="p in featured" :key="p.slug" :product="p" />
      </div>
    </div>
  </section>

  <section id="results" class="section bg-igenco-50">
    <div class="wrap">
      <div class="max-w-2xl">
        <h2 class="text-2xl font-bold sm:text-3xl">ผลลัพธ์จากการใช้งานจริง</h2>
        <p class="mt-2 text-slate-600">กรณีศึกษาจากหน่วยงานภาครัฐและเอกชนที่ใช้ระบบของเรา</p>
      </div>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <article v-for="c in cases" :key="c.title" class="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div class="flex-1 p-6">
            <p class="flex items-center justify-between gap-2 text-sm">
              <span class="font-semibold text-igenco-700">{{ c.tag }}</span>
              <span class="chip">{{ c.product }}</span>
            </p>
            <h3 class="mt-3 text-lg font-bold">{{ c.title }}</h3>
            <p class="mt-2 text-base text-slate-600">{{ c.text }}</p>
          </div>
          <p class="bg-igenco-100 px-6 py-4 text-base text-igenco-900"><strong>ผลลัพธ์:</strong> {{ c.result }}</p>
        </article>
      </div>

      <div class="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h3 class="text-lg font-bold">กลุ่มลูกค้าที่ไว้วางใจ IGENCO</h3>
        <div class="mt-5 grid gap-6 md:grid-cols-3">
          <div v-for="g in about.clientGroups" :key="g.title">
            <p class="font-heading font-semibold text-igenco-800">{{ g.title }}</p>
            <p class="mt-1 text-base text-slate-600">{{ g.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 class="text-2xl font-bold sm:text-3xl">ข่าวสารและกิจกรรมล่าสุด</h2>
        <NuxtLink to="/news" class="font-heading font-semibold text-igenco-800 hover:underline">ดูข่าวทั้งหมด</NuxtLink>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <PostCard v-for="p in news" :key="p.slug" :post="p" />
      </div>
    </div>
  </section>

  <CtaBand />
</template>
