<script setup lang="ts">
import type { Product } from '~/types/content'

const props = defineProps<{ product: Product }>()
const { categories } = useContent()
const { openProduct } = useAppleModal()
const { t } = useLocale()
</script>

<template>
  <article class="group flex flex-col rounded-[28px] bg-white border border-[#171717]/8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5">
    
    <!-- Top Image Preview with Soft Vignette -->
    <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F4F5F4]">
      <img
        :src="product.image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'"
        :alt="product.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>

      <!-- Floating Badges on Image -->
      <div class="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
        <span class="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 font-heading text-xs font-bold text-[#16834A] tracking-wide shadow-sm">
          {{ product.code }}
        </span>
        <span class="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-medium text-white border border-white/20">
          {{ categories[product.category]?.label }}
        </span>
      </div>

      <!-- Target Audience Banner at bottom of Image -->
      <div class="absolute bottom-3 left-4 right-4 z-10">
        <span class="text-xs font-medium text-emerald-200 drop-shadow-sm">
          {{ product.audience }}
        </span>
      </div>
    </div>

    <!-- Card Body Content -->
    <div class="flex flex-1 flex-col p-6 sm:p-7">
      
      <!-- Product Title (Subheading 600, Apple Tracking) -->
      <h3 class="text-lg sm:text-xl font-semibold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-apple-subhead tracking-apple-subhead">
        <NuxtLink :to="`/products/${product.slug}`" class="hover:underline">
          {{ product.title }}
        </NuxtLink>
      </h3>

      <!-- Summary Description (Normal 400, Relaxed Apple Body) -->
      <p class="mt-2.5 line-clamp-3 flex-1 text-sm text-slate-500 leading-apple-body font-normal tracking-apple-body">
        {{ product.summary }}
      </p>

      <!-- Highlight Feature Chips -->
      <ul class="mt-4 flex flex-wrap gap-1.5">
        <li
          v-for="h in product.highlights"
          :key="h"
          class="inline-flex items-center rounded-full bg-[#F4F5F4] px-2.5 py-0.5 text-xs font-medium text-[#171717]/80"
        >
          {{ h }}
        </li>
      </ul>

      <!-- Card Action Footer -->
      <div class="mt-6 flex items-center justify-between gap-3 border-t border-[#171717]/8 pt-4">
        <!-- Quick View Button (Triggers Spring Modal) -->
        <button
          type="button"
          class="inline-flex items-center gap-1.5 font-heading text-xs sm:text-sm font-semibold text-[#16834A] hover:text-[#106B3B] transition-colors focus:outline-none"
          @click="openProduct(product)"
        >
          <span>{{ t('products.viewDetail') }}</span>
          <svg class="w-4 h-4 text-[#16834A] transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Book Demo CTA Pill Button -->
        <NuxtLink
          :to="{ path: '/contact', query: { product: product.slug } }"
          class="inline-flex items-center justify-center rounded-full bg-[#171717] px-4 py-1.5 font-heading text-xs font-semibold text-white hover:bg-[#16834A] transition-all transform active:scale-95 shadow-sm"
        >
          {{ t('products.bookDemo') }}
        </NuxtLink>
      </div>

    </div>
  </article>
</template>
