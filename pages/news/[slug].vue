<script setup lang="ts">
const route = useRoute()
const { getPost, getPosts, formatDate } = useContent()
const { locale, t } = useLocale()

const slug = String(route.params.slug)
const { data: post } = await useAsyncData(`post-${slug}`, () => getPost(slug))
const { data: allPosts } = await useAsyncData('all-posts-related', () => getPosts())

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'ไม่พบข่าวสารที่ต้องการ', fatal: true })
}

// 2-3 Related posts excluding current
const relatedPosts = computed(() => {
  const list = allPosts.value || []
  return list.filter((p) => p.slug !== slug).slice(0, 3)
})

useSeoMeta({
  title: `${post.value.title} | IGENCO News`,
  description: post.value.excerpt,
  ogTitle: post.value.title,
  ogDescription: post.value.excerpt,
  ogImage: post.value.image,
})
</script>

<template>
  <div v-if="post" class="min-h-screen bg-white">
    
    <!-- Top Breadcrumb & Navigation Bar -->
    <div class="bg-white border-b border-slate-100 py-4 sm:py-5">
      <div class="wrap">
        <div class="flex items-center justify-between gap-4">
          <!-- Back to News Button -->
          <NuxtLink
            to="/news"
            class="group inline-flex items-center gap-2 text-sm font-semibold text-[#16834A] hover:text-[#106B3B] transition-colors font-heading"
          >
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#16834A]/10 text-[#16834A] group-hover:bg-[#16834A] group-hover:text-white transition-all">
              ←
            </span>
            <span>กลับหน้าข่าวสารและกิจกรรม</span>
          </NuxtLink>

          <!-- Category Pill -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#16834A] bg-[#16834A]/10 border border-[#16834A]/20">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>{{ post.category }}</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Article Header & Content -->
    <article class="py-10 sm:py-16">
      <div class="wrap-narrow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Meta Details (Date & Product Badge) -->
        <div class="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 mb-4">
          <time :datetime="post.publishedAt" class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ formatDate(post.publishedAt) }}</span>
          </time>
          <span class="text-slate-300">•</span>
          <span v-if="post.badge" class="font-semibold text-[#171717] flex items-center gap-1">
            <span class="text-[#16834A]">●</span> {{ post.badge }}
          </span>
          <span class="text-slate-300">•</span>
          <span class="text-slate-500 font-medium">มาตรฐาน ISO/IEC 29110</span>
        </div>

        <!-- Main Article Title -->
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#171717] tracking-tight leading-[1.2] mb-6">
          {{ post.title }}
        </h1>

        <!-- Lead / Excerpt Paragraph -->
        <p class="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 border-l-4 border-[#16834A] pl-5 py-1 bg-slate-50/70 rounded-r-2xl">
          {{ post.excerpt }}
        </p>

        <!-- Main Cover Photo (ภาพปก) -->
        <div class="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#F4F5F4] shadow-xl border border-slate-200/80 mb-10">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-[320px] sm:h-[480px] object-cover object-center"
          />
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 sm:p-6 text-white text-xs sm:text-sm">
            <span>{{ post.title }}</span>
          </div>
        </div>

        <!-- Article Body Text -->
        <div class="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          <p
            v-for="(para, idx) in post.body.split('\n\n')"
            :key="idx"
            class="leading-relaxed"
          >
            {{ para }}
          </p>
        </div>

        <!-- Key Highlights Box -->
        <div class="my-10 rounded-[24px] bg-[#F0FDF4] border border-[#BBF7D0] p-6 sm:p-8">
          <h3 class="text-lg sm:text-xl font-bold font-heading text-[#16834A] mb-3 flex items-center gap-2">
            <span>✓</span> จุดเด่นและความสำคัญ
          </h3>
          <ul class="space-y-2 text-sm sm:text-base text-slate-700">
            <li class="flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#16834A] mt-2"></span>
              <span>พัฒนาภายใต้กระบวนการวิศวกรรมซอฟต์แวร์มาตรฐานสากล ISO/IEC 29110</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#16834A] mt-2"></span>
              <span>รองรับการทำงานร่วมกับระบบเดิม (Legacy Systems) และ Single Sign-On (SSO)</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#16834A] mt-2"></span>
              <span>การรับประกันและการสนับสนุนทางเทคนิคระดับองค์กร (Enterprise SLA)</span>
            </li>
          </ul>
        </div>

        <!-- Photo Gallery / Illustrations (ภาพประกอบข่าว) -->
        <div v-if="post.gallery && post.gallery.length" class="my-10">
          <h3 class="text-xl font-bold font-heading text-[#171717] mb-4">
            ภาพประกอบข่าวและกิจกรรม
          </h3>
          <div class="grid gap-4 sm:gap-6" :class="post.gallery.length > 1 ? 'sm:grid-cols-2' : ''">
            <div
              v-for="(imgUrl, gIdx) in post.gallery"
              :key="`gallery-${gIdx}`"
              class="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/70"
            >
              <img
                :src="imgUrl"
                :alt="`${post.title} - ภาพประกอบ ${gIdx + 1}`"
                loading="lazy"
                class="w-full h-[240px] sm:h-[280px] object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>

        <!-- Author / PR Attribution Card -->
        <div class="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">ผู้เผยแพร่ข้อมูล</span>
            <p class="font-heading font-bold text-[#171717] text-sm sm:text-base">ทีมประชาสัมพันธ์และสื่อสารองค์กร บริษัท ไอเจนโก้ จำกัด</p>
            <p class="text-xs text-slate-500">สอบถามข้อมูลเพิ่มเติม: info@igenco.co.th | โทร 0-2523-3559</p>
          </div>

          <NuxtLink
            to="/news"
            class="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-[#171717] hover:bg-[#16834A] hover:text-white hover:border-[#16834A] transition-all shadow-sm font-heading flex-shrink-0"
          >
            ← กลับหน้าข่าวสารทั้งหมด
          </NuxtLink>
        </div>

      </div>
    </article>

    <!-- Related News Section (ข่าวสารอื่น ๆ ที่น่าสนใจ) -->
    <section v-if="relatedPosts.length" class="py-16 bg-[#F4F5F4] border-t border-slate-200/80">
      <div class="wrap">
        <div class="flex items-end justify-between mb-8">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#16834A] font-heading block mb-1">
              RELATED UPDATES
            </span>
            <h2 class="text-2xl sm:text-3xl font-bold font-heading text-[#171717]">
              ข่าวสารอื่น ๆ <span class="text-gradient-emerald">ที่น่าสนใจ</span>
            </h2>
          </div>
          <NuxtLink to="/news" class="text-sm font-semibold text-[#16834A] hover:underline font-heading">
            ดูทั้งหมด →
          </NuxtLink>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <NuxtLink
            v-for="rel in relatedPosts"
            :key="rel.slug"
            :to="`/news/${rel.slug}`"
            class="group flex flex-col justify-between overflow-hidden rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-[#16834A]/40 transition-all duration-300 h-[360px]"
          >
            <div class="p-6 z-10">
              <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#16834A] bg-[#16834A]/10 mb-2">
                {{ rel.category }}
              </span>
              <h3 class="text-base font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors line-clamp-2">
                {{ rel.title }}
              </h3>
              <p class="mt-1 text-xs text-slate-500 line-clamp-2">
                {{ rel.excerpt }}
              </p>
            </div>
            <div class="relative w-full h-[180px] overflow-hidden mt-auto">
              <img :src="rel.image" :alt="rel.title" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/95 pointer-events-none"></div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Global CTA Band -->
    <CtaBand />

  </div>
</template>
