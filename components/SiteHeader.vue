<script setup lang="ts">
const { site, categories } = useContent()
const route = useRoute()
const open = ref(false)
watch(() => route.fullPath, () => (open.value = false))

const links = [
  { label: 'ผลงานและลูกค้า', to: '/#results' },
  { label: 'ข่าวสาร', to: '/news' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
  { label: 'ติดต่อเรา', to: '/contact' },
]
</script>

<template>
  <div class="bg-igenco-900 text-sm text-slate-200">
    <div class="wrap flex h-10 items-center justify-between">
      <div class="flex items-center gap-5">
        <a :href="`tel:${site.phoneHref}`" class="hover:text-white">โทร {{ site.phone }}</a>
        <a :href="`mailto:${site.email}`" class="hidden hover:text-white sm:inline">{{ site.email }}</a>
      </div>
      <span class="hidden text-igenco-100 md:inline">ISO/IEC 29110 Certified</span>
    </div>
  </div>

  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="wrap flex h-20 items-center justify-between gap-6">
      <NuxtLink to="/" class="flex items-center gap-3">
        <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-igenco-700 font-heading text-xl font-bold text-white">IG</span>
        <span class="leading-tight">
          <span class="block font-heading text-xl font-bold text-igenco-700">{{ site.name }}</span>
          <span class="block text-sm text-slate-600">{{ site.legalName }}</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 font-heading text-base font-medium text-slate-700 lg:flex" aria-label="เมนูหลัก">
        <div class="group relative">
          <NuxtLink to="/products" class="flex items-center gap-1 rounded-full px-4 py-2 hover:bg-igenco-50 hover:text-igenco-700">
            ผลิตภัณฑ์และบริการ
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.5 7.5 10 12l4.5-4.5-1.1-1.1L10 9.8 6.6 6.4z" /></svg>
          </NuxtLink>
          <div class="invisible absolute left-0 top-full w-72 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            <NuxtLink
              v-for="(c, key) in categories" :key="key"
              :to="{ path: '/products', query: { category: key } }"
              class="block rounded-xl px-3 py-2 hover:bg-igenco-50"
            >
              <span class="block font-semibold text-slate-900">{{ c.label }}</span>
              <span class="block text-sm text-slate-500">{{ c.description }}</span>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="rounded-full px-4 py-2 hover:bg-igenco-50 hover:text-igenco-700">
          {{ l.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/contact" class="btn-primary btn-sm hidden lg:inline-flex">ขอใบเสนอราคา</NuxtLink>

      <button
        class="rounded-full border border-slate-300 px-4 py-2 font-heading text-sm lg:hidden"
        :aria-expanded="open" aria-controls="mobile-nav" @click="open = !open"
      >
        {{ open ? 'ปิด' : 'เมนู' }}
      </button>
    </div>

    <nav v-show="open" id="mobile-nav" class="border-t border-slate-200 bg-white px-4 pb-5 pt-2 font-heading lg:hidden" aria-label="เมนูมือถือ">
      <NuxtLink to="/products" class="block rounded-lg px-3 py-3 font-medium hover:bg-igenco-50">ผลิตภัณฑ์และบริการ</NuxtLink>
      <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="block rounded-lg px-3 py-3 font-medium hover:bg-igenco-50">{{ l.label }}</NuxtLink>
      <NuxtLink to="/contact" class="btn-primary mt-3 w-full">ขอใบเสนอราคา</NuxtLink>
    </nav>
  </header>
</template>
