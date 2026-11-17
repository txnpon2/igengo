<script setup lang="ts">
const { getPosts } = useContent()
const { data: posts } = await useAsyncData('all-posts', () => getPosts())
useSeoMeta({ title: 'ข่าวสารและกิจกรรม' })
</script>

<template>
  <section class="section">
    <div class="wrap">
      <h1 class="text-3xl font-bold">ข่าวสารและกิจกรรม</h1>
      <p class="mt-2 text-slate-600">อัปเดตผลิตภัณฑ์ โครงการส่งมอบ และข่าวองค์กร</p>
      <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PostCard v-for="p in posts" :key="p.slug" :post="p" />
      </div>
      <p v-if="!posts?.length" class="mt-8">ยังไม่มีข่าวในขณะนี้ กลับมาดูใหม่ภายหลังได้</p>
    </div>
  </section>
</template>
