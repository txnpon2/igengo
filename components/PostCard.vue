<script setup lang="ts">
import type { Post } from '~/types/content'
defineProps<{ post: Post }>()
const { formatDate } = useContent()
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-igenco-500 hover:shadow-md">
    <img :src="post.image" :alt="post.title" loading="lazy" class="h-48 w-full bg-igenco-100 object-cover" />
    <div class="flex flex-1 flex-col p-5">
      <p class="flex items-center gap-2 text-sm text-slate-500">
        <span class="chip">{{ post.category }}</span>
        <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
      </p>
      <h3 class="mt-3 text-lg font-bold leading-snug">
        <NuxtLink :to="`/news/${post.slug}`" class="hover:text-igenco-700">{{ post.title }}</NuxtLink>
      </h3>
      <p class="mt-2 line-clamp-3 text-base text-slate-600">{{ post.excerpt }}</p>
    </div>
  </article>
</template>
