<script setup lang="ts">
const route = useRoute()
const { getPost, formatDate } = useContent()
const slug = String(route.params.slug)
const { data: post } = await useAsyncData(`post-${slug}`, () => getPost(slug))
if (!post.value) throw createError({ statusCode: 404, statusMessage: 'ไม่พบข่าวนี้', fatal: true })
useSeoMeta({ title: post.value.title, description: post.value.excerpt })
</script>

<template>
  <article v-if="post" class="section">
    <div class="mx-auto w-full max-w-3xl px-4">
      <NuxtLink to="/news" class="text-igenco-800 hover:underline">← กลับไปหน้าข่าว</NuxtLink>
      <h1 class="mt-4 text-3xl font-bold">{{ post.title }}</h1>
      <p class="mt-3 flex items-center gap-3 text-slate-500">
        <span class="chip">{{ post.category }}</span>
        <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
      </p>
      <img :src="post.image" :alt="post.title" class="mt-6 h-72 w-full rounded-2xl bg-igenco-100 object-cover" />
      <div class="mt-6 space-y-5 text-lg">
        <p v-for="(para, i) in post.body.split('\n\n')" :key="i">{{ para }}</p>
      </div>
    </div>
  </article>
</template>
