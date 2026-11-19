<script setup lang="ts">
import type { Post } from '~/types/content'
defineProps<{ post: Post }>()
const { formatDate } = useContent()
const { t } = useLocale()
</script>

<template>
  <article class="group flex flex-col rounded-[28px] bg-white border border-[#171717]/8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1">
    <!-- Image Thumbnail -->
    <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F4F5F4]">
      <img
        :src="post.image"
        :alt="post.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      <!-- Category Chip on image -->
      <div class="absolute bottom-3 left-4 z-10">
        <span class="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-[#16834A] shadow-sm">
          {{ post.category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-6">
      <time :datetime="post.publishedAt" class="text-xs font-medium text-slate-500">
        {{ formatDate(post.publishedAt) }}
      </time>

      <h3 class="mt-2 text-base sm:text-lg font-semibold font-heading leading-apple-subhead tracking-apple-subhead text-[#171717] group-hover:text-[#16834A] transition-colors">
        <NuxtLink :to="`/news/${post.slug}`" class="hover:underline">
          {{ post.title }}
        </NuxtLink>
      </h3>

      <p class="mt-2.5 line-clamp-2 text-sm text-slate-500 leading-apple-body tracking-apple-body font-normal">
        {{ post.excerpt }}
      </p>

      <div class="mt-4 pt-3 border-t border-[#171717]/5 flex items-center justify-between">
        <NuxtLink
          :to="`/news/${post.slug}`"
          class="inline-flex items-center gap-1 text-xs font-semibold text-[#16834A] group-hover:text-[#106B3B]"
        >
          <span>{{ t('news.readMore') }}</span>
          <span class="transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
