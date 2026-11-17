<script setup lang="ts">
import type { Category } from '~/types/content'

const route = useRoute()
const { categories, getProducts } = useContent()
const { data: products } = await useAsyncData('products', () => getProducts())
const view = ref<'list' | 'compare'>('list')

const all = computed(() => products.value ?? [])
const active = computed<Category | 'all'>(() => {
  const c = String(route.query.category ?? 'all')
  return c in categories ? (c as Category) : 'all'
})
const filtered = computed(() => all.value.filter((p) => active.value === 'all' || p.category === active.value))
const core = computed(() => all.value.filter((p) => p.core))
const count = (c: Category) => all.value.filter((p) => p.category === c).length
const tab = (on: boolean) => on ? 'bg-igenco-700 text-white' : 'bg-white text-slate-700 hover:bg-igenco-50'
const side = (on: boolean) => on ? 'bg-igenco-100 font-semibold text-igenco-900' : 'text-slate-700 hover:bg-igenco-50'

useSeoMeta({ title: 'ผลิตภัณฑ์และบริการ' })
</script>

<template>
  <section class="section">
    <div class="wrap">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div class="max-w-2xl">
          <h1 class="text-3xl font-bold">ผลิตภัณฑ์ซอฟต์แวร์และบริการพัฒนาระบบ</h1>
          <p class="mt-2 text-slate-600">แยกหมวดชัดเจนตามลักษณะงาน ระบุกลุ่มผู้ใช้และจุดเด่นของแต่ละระบบ</p>
        </div>
        <div class="inline-flex overflow-hidden rounded-full border border-slate-300 font-heading text-sm">
          <button :class="tab(view === 'list')" class="px-5 py-2.5 font-medium" @click="view = 'list'">รายการ ({{ all.length }})</button>
          <button :class="tab(view === 'compare')" class="px-5 py-2.5 font-medium" @click="view = 'compare'">เปรียบเทียบระบบหลัก</button>
        </div>
      </div>

      <div v-if="view === 'list'" class="grid items-start gap-8 lg:grid-cols-12">
        <aside class="rounded-2xl border border-slate-200 bg-white p-2 font-heading lg:sticky lg:top-28 lg:col-span-3">
          <NuxtLink to="/products" class="flex items-center justify-between rounded-xl px-4 py-3" :class="side(active === 'all')">
            ทั้งหมด <span class="text-sm">{{ all.length }}</span>
          </NuxtLink>
          <NuxtLink
            v-for="(c, key) in categories" :key="key"
            :to="{ path: '/products', query: { category: key } }"
            class="flex items-center justify-between rounded-xl px-4 py-3" :class="side(active === key)"
          >
            <span>{{ c.label }}<span class="block font-sans text-sm font-normal text-slate-500">{{ c.description }}</span></span>
            <span class="text-sm">{{ count(key) }}</span>
          </NuxtLink>
          <div class="m-2 mt-3 rounded-xl bg-igenco-50 p-4">
            <p class="font-semibold text-igenco-900">ไม่แน่ใจว่าควรเลือกระบบไหน?</p>
            <NuxtLink to="/contact" class="btn-primary btn-sm mt-3 w-full">ปรึกษาทีมงาน</NuxtLink>
          </div>
        </aside>

        <div class="grid gap-6 md:grid-cols-2 lg:col-span-9">
          <ProductCard v-for="p in filtered" :key="p.slug" :product="p" />
        </div>
      </div>

      <div v-else class="overflow-x-auto rounded-2xl border border-slate-200">
        <table class="w-full min-w-[820px] border-collapse text-left text-base">
          <thead class="bg-igenco-900 font-heading text-sm text-white">
            <tr>
              <th class="p-4">ระบบ</th><th class="p-4">ผู้ใช้หลัก</th><th class="p-4">หน้าที่และจุดเด่น</th>
              <th class="p-4">การติดตั้ง</th><th class="p-4"><span class="sr-only">ดำเนินการ</span></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr v-for="p in core" :key="p.slug" class="align-top hover:bg-igenco-50/50">
              <td class="p-4 font-heading font-bold text-igenco-800">
                <NuxtLink :to="`/products/${p.slug}`" class="hover:underline">{{ p.code }}</NuxtLink>
              </td>
              <td class="p-4">{{ p.audience.replace('สำหรับ', '') }}</td>
              <td class="p-4 text-slate-600">{{ p.summary }}</td>
              <td class="p-4 text-sm">{{ p.deploy }}</td>
              <td class="p-4">
                <NuxtLink :to="{ path: '/contact', query: { product: p.slug } }" class="btn-primary btn-sm whitespace-nowrap">นัดสาธิต</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <CtaBand />
</template>
