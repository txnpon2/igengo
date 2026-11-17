<script setup lang="ts">
import type { Post } from '~/types/content'
defineProps<{ post: Post }>()
const { formatDate } = useContent()
</script>

<template>
  <article class="post-row">
    <time class="post-row__date" :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
    <div>
      <h3><NuxtLink :to="`/news/${post.slug}`">{{ post.title }}</NuxtLink></h3>
      <p>{{ post.excerpt }}</p>
      <span class="tag">{{ post.category }}</span>
    </div>
  </article>
</template>
