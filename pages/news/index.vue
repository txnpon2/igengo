<script setup lang="ts">
import type { Post } from '~/types/content'

const { getPosts } = useContent()
const { data: posts } = await useAsyncData('all-posts', () => getPosts())

useSeoMeta({
  title: 'ข่าวสารและกิจกรรมล่าสุด | IGENCO',
  description: 'ติดตามข่าวสารการเปิดตัวผลิตภัณฑ์ โครงการส่งมอบงาน และความเคลื่อนไหวทางเทคโนโลยีของ บริษัท ไอเจนโก้ จำกัด',
})
</script>

<template>
  <div class="bg-white min-h-screen">
    <!-- Breadcrumb -->
    <div class="bg-white pt-8 pb-2 border-b border-slate-100">
      <div class="wrap">
        <nav class="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <NuxtLink to="/" class="hover:text-[#16834A] transition-colors">หน้าแรก</NuxtLink>
          <span>/</span>
          <span class="text-[#171717] font-medium">ข่าวสารและกิจกรรม</span>
        </nav>
      </div>
    </div>

    <!-- Bento Grid Section with Bottom-Right Navigation Controls -->
    <NewsBentoSection :posts="posts || []" :show-see-all="false" />

    <!-- CTA Band -->
    <CtaBand />
  </div>
</template>
