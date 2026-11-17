<script setup lang="ts">
import type { Product } from '~/types/content'
defineProps<{ product: Product }>()
const { categories } = useContent()
</script>

<template>
  <article class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-igenco-500 hover:shadow-md">
    <div class="flex items-center justify-between gap-2">
      <span class="rounded-lg bg-igenco-900 px-3 py-1 font-heading text-sm font-semibold text-white">{{ product.code }}</span>
      <span class="text-sm text-slate-500">{{ categories[product.category].label }}</span>
    </div>
    <h3 class="mt-4 text-lg font-bold">{{ product.title }}</h3>
    <p class="mt-1 text-sm font-medium text-igenco-700">{{ product.audience }}</p>
    <p class="mt-3 line-clamp-3 flex-1 text-base text-slate-600">{{ product.summary }}</p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li v-for="h in product.highlights" :key="h" class="chip">{{ h }}</li>
    </ul>
    <div class="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
      <NuxtLink :to="`/products/${product.slug}`" class="font-heading font-semibold text-igenco-800 hover:underline">ดูรายละเอียด</NuxtLink>
      <NuxtLink :to="{ path: '/contact', query: { product: product.slug } }" class="btn-primary btn-sm">นัดสาธิตระบบ</NuxtLink>
    </div>
  </article>
</template>
