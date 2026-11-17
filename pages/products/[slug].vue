<script setup lang="ts">
const route = useRoute()
const { getProduct, getProducts, categories } = useContent()
const slug = String(route.params.slug)
const { data: product } = await useAsyncData(`product-${slug}`, () => getProduct(slug))
if (!product.value) throw createError({ statusCode: 404, statusMessage: 'ไม่พบผลิตภัณฑ์นี้', fatal: true })
const { data: related } = await useAsyncData(`related-${slug}`, async () =>
  (await getProducts()).filter((p) => p.category === product.value!.category && p.slug !== slug))
useSeoMeta({ title: product.value.code, description: product.value.summary })
</script>

<template>
  <article v-if="product">
    <section class="bg-igenco-50">
      <div class="wrap py-12 lg:py-16">
        <NuxtLink :to="{ path: '/products', query: { category: product.category } }" class="text-igenco-800 hover:underline">
          ← {{ categories[product.category].label }}
        </NuxtLink>
        <h1 class="mt-4 text-3xl font-bold sm:text-4xl">{{ product.code }} <span class="block text-xl font-medium text-slate-700 sm:text-2xl">{{ product.title }}</span></h1>
        <p class="mt-4 max-w-3xl text-lg text-slate-700">{{ product.summary }}</p>
        <p class="mt-3"><span class="chip">{{ product.audience }}</span></p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink :to="{ path: '/contact', query: { product: product.slug } }" class="btn-primary">นัดสาธิตระบบ / ขอใบเสนอราคา</NuxtLink>
          <NuxtLink to="/products" class="btn-outline">ดูระบบอื่น</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid gap-10 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold">ความสามารถหลักของระบบ</h2>
          <ul class="mt-5 space-y-4">
            <li v-for="f in product.features" :key="f" class="flex gap-3">
              <svg class="mt-1.5 h-5 w-5 shrink-0 text-igenco-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" /></svg>
              <span>{{ f }}</span>
            </li>
          </ul>
        </div>
        <aside class="h-fit rounded-2xl border border-slate-200 bg-igenco-50 p-6">
          <p class="font-heading font-semibold text-igenco-900">จุดเด่น</p>
          <ul class="mt-3 flex flex-wrap gap-2"><li v-for="h in product.highlights" :key="h" class="chip bg-white">{{ h }}</li></ul>
          <p v-if="product.deploy" class="mt-5 text-base"><span class="font-semibold">การติดตั้ง:</span> {{ product.deploy }}</p>
        </aside>
      </div>
    </section>

    <section v-if="related?.length" class="section bg-igenco-50 !pt-12">
      <div class="wrap">
        <h2 class="text-xl font-bold">ระบบอื่นในหมวดเดียวกัน</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="p in related.slice(0, 3)" :key="p.slug" :product="p" />
        </div>
      </div>
    </section>
  </article>
</template>
