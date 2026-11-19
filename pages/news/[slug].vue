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

// Modal lightbox for images/diagrams
const activePreviewImage = ref<{ src: string; title: string; caption?: string } | null>(null)

function openImagePreview(src: string, title: string, caption?: string) {
  activePreviewImage.value = { src, title, caption }
}

function closeImagePreview() {
  activePreviewImage.value = null
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && activePreviewImage.value) {
    closeImagePreview()
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', onKeyDown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeyDown)
  }
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
        
        <!-- Meta Details (Date, Product Badge, Author) -->
        <div class="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 mb-5">
          <time :datetime="post.publishedAt" class="flex items-center gap-1.5 font-medium">
            <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ formatDate(post.publishedAt) }}</span>
          </time>
          <span class="text-slate-300">•</span>
          <span v-if="post.badge" class="font-semibold text-[#171717] flex items-center gap-1">
            <span class="text-[#16834A]">●</span> {{ post.badge }}
          </span>
          <template v-if="post.author">
            <span class="text-slate-300">•</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
              <svg class="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>ผู้แต่ง : <strong class="text-[#171717] font-semibold">{{ post.author }}</strong></span>
            </span>
          </template>
        </div>

        <!-- Main Article Title -->
        <h1 class="text-2xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.25] mb-4">
          {{ post.title }}
        </h1>

        <!-- Subtitle if available -->
        <p v-if="post.subtitle" class="text-lg sm:text-xl text-[#16834A] font-medium font-heading mb-6">
          {{ post.subtitle }}
        </p>

        <!-- Lead / Excerpt Paragraph -->
        <div class="relative p-6 sm:p-7 rounded-[22px] bg-gradient-to-r from-slate-50 to-[#F0FDF4]/50 border-l-4 border-[#16834A] border-y border-r border-slate-200/80 mb-8 shadow-sm">
          <p class="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            {{ post.excerpt }}
          </p>
        </div>

        <!-- Main Cover Photo (รูปแรกคือหน้าปกที่จะเห็น) -->
        <div class="mb-10">
          <div
            class="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-slate-900 border border-slate-200/80 shadow-xl cursor-pointer"
            @click="openImagePreview(post.image, post.title, post.imageCaption)"
          >
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-auto max-h-[680px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex items-end p-5 sm:p-7">
              <div class="flex items-center justify-between w-full text-white">
                <span class="text-xs sm:text-sm font-medium line-clamp-1 max-w-[85%] drop-shadow">
                  {{ post.title }}
                </span>
                <span class="flex items-center gap-1 text-[11px] bg-white/20 hover:bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium transition-all">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>ขยายภาพ</span>
                </span>
              </div>
            </div>
          </div>
          <p v-if="post.imageCaption" class="mt-2.5 text-xs text-slate-500 text-center italic">
            {{ post.imageCaption }}
          </p>
        </div>

        <!-- Certificate Badge Feature Card (TUV NORD Certification) -->
        <div v-if="post.certBadge" class="my-10 p-6 sm:p-8 rounded-[28px] bg-white border-2 border-[#16834A]/20 shadow-[0_8px_30px_rgba(22,131,74,0.06)] flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
          <div class="absolute -right-8 -bottom-8 w-44 h-44 bg-[#16834A]/5 rounded-full pointer-events-none"></div>

          <!-- Logo Badge with click-to-preview -->
          <div
            class="flex-shrink-0 cursor-pointer group"
            @click="openImagePreview(post.certBadge.image, post.certBadge.title, post.certBadge.details)"
          >
            <div class="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img
                :src="post.certBadge.image"
                :alt="post.certBadge.title"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="block text-center text-[10px] text-slate-400 mt-1.5 group-hover:text-[#16834A] transition-colors">
              คลิกดูตราสัญลักษณ์
            </span>
          </div>

          <!-- Certificate Info -->
          <div class="flex-1 text-center sm:text-left">
            <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <span class="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#16834A] text-white">
                {{ post.certBadge.standard }}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#16834A]/10 text-[#16834A]">
                ผ่านการประเมิน 2 ปีซ้อน
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600">
                TUV NORD (Thailand)
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] mb-2">
              การรับรองคุณภาพมาตรฐานสากล {{ post.certBadge.standard }}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ post.certBadge.details }}
            </p>
            <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500">
              <span class="flex items-center gap-1 font-medium text-[#16834A]">
                ✓ Software Management
              </span>
              <span class="flex items-center gap-1 font-medium text-[#16834A]">
                ✓ Software Implementation Process
              </span>
              <span class="flex items-center gap-1 font-medium text-[#16834A]">
                ✓ VSE (Very Small Enterprises)
              </span>
            </div>
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

        <!-- Core Process Diagrams (2 กระบวนการหลักตาม ISO 29110) -->
        <div v-if="post.diagrams && post.diagrams.length" class="my-12">
          <div class="text-center sm:text-left mb-6">
            <span class="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#16834A] font-heading bg-[#16834A]/10 px-3 py-1 rounded-full mb-2">
              ISO/IEC 29110 CORE PROCESSES
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-[#171717]">
              2 กระบวนการหลักตามมาตรฐาน <span class="text-gradient-emerald">ISO 29110</span>
            </h2>
            <p class="text-sm sm:text-base text-slate-500 mt-1">
              ผังแสดงกระบวนการทำงานที่เป็นระบบและได้มาตรฐานสากลของ บริษัท ไอเจนโก้ จำกัด
            </p>
          </div>

          <!-- Diagrams Grid / Stack -->
          <div class="space-y-8">
            <div
              v-for="(diag, dIdx) in post.diagrams"
              :key="`diagram-${dIdx}`"
              class="rounded-[26px] bg-slate-50/70 border border-slate-200 p-6 sm:p-8 transition-all hover:border-[#16834A]/40 shadow-sm"
            >
              <!-- Diagram Header -->
              <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <span v-if="diag.figureNumber" class="inline-block px-2.5 py-0.5 rounded-lg text-xs font-bold bg-[#16834A] text-white font-mono mb-2">
                    {{ diag.figureNumber }}
                  </span>
                  <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717]">
                    {{ diag.title }}
                  </h3>
                  <p v-if="diag.caption" class="text-xs sm:text-sm text-slate-500 mt-1">
                    {{ diag.caption }}
                  </p>
                </div>

                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#16834A] hover:bg-[#16834A] hover:text-white transition-all shadow-sm"
                  @click="openImagePreview(diag.image, diag.title, diag.caption)"
                >
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>คลิกดูภาพเต็ม</span>
                </button>
              </div>

              <!-- Diagram Image Display with Zoom capability -->
              <div
                class="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm p-3 sm:p-5 flex items-center justify-center cursor-pointer hover:border-[#16834A]/50 transition-all"
                @click="openImagePreview(diag.image, diag.title, diag.caption)"
              >
                <img
                  :src="diag.image"
                  :alt="diag.title"
                  loading="lazy"
                  class="w-full max-h-[520px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none">
                  <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    คลิกเพื่อขยายภาพ
                  </span>
                </div>
              </div>

              <!-- Diagram Highlight Steps -->
              <div v-if="diag.highlights && diag.highlights.length" class="mt-5 pt-4 border-t border-slate-200/80">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-heading">
                  ขั้นตอนและองค์ประกอบสำคัญในกระบวนการ:
                </h4>
                <div class="grid gap-2 sm:grid-cols-2">
                  <div
                    v-for="(point, pIdx) in diag.highlights"
                    :key="`point-${pIdx}`"
                    class="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-100 text-xs sm:text-sm text-slate-700"
                  >
                    <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#16834A]/10 text-[#16834A] flex items-center justify-center font-bold text-[11px] mt-0.5">
                      {{ pIdx + 1 }}
                    </span>
                    <span>{{ point }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Highlights Box -->
        <div class="my-10 rounded-[26px] bg-[#F0FDF4] border border-[#BBF7D0] p-6 sm:p-8">
          <h3 class="text-lg sm:text-xl font-bold font-heading text-[#16834A] mb-3 flex items-center gap-2">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#16834A] text-white text-xs">✓</span>
            <span>จุดเด่นและความสำคัญของมาตรฐาน ISO/IEC 29110</span>
          </h3>
          <ul class="space-y-3 text-sm sm:text-base text-slate-700">
            <template v-if="post.highlights && post.highlights.length">
              <li
                v-for="(hl, hIdx) in post.highlights"
                :key="`hl-${hIdx}`"
                class="flex items-start gap-3"
              >
                <span class="w-2 h-2 rounded-full bg-[#16834A] mt-2 flex-shrink-0"></span>
                <span class="leading-relaxed">{{ hl }}</span>
              </li>
            </template>
            <template v-else>
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
            </template>
          </ul>
        </div>

        <!-- Additional Photo Gallery (ภาพประกอบข่าวอื่น ๆ) -->
        <div v-if="post.gallery && post.gallery.length && !post.diagrams" class="my-10">
          <h3 class="text-xl font-bold font-heading text-[#171717] mb-4">
            ภาพประกอบข่าวและกิจกรรม
          </h3>
          <div class="grid gap-4 sm:gap-6" :class="post.gallery.length > 1 ? 'sm:grid-cols-2' : ''">
            <div
              v-for="(imgUrl, gIdx) in post.gallery"
              :key="`gallery-${gIdx}`"
              class="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/70 cursor-pointer group"
              @click="openImagePreview(imgUrl, `${post.title} - ภาพประกอบ ${gIdx + 1}`)"
            >
              <img
                :src="imgUrl"
                :alt="`${post.title} - ภาพประกอบ ${gIdx + 1}`"
                loading="lazy"
                class="w-full h-[240px] sm:h-[280px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>

        <!-- Author / PR Attribution Card -->
        <div class="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-slate-50 p-6 sm:p-7 rounded-[22px] border border-slate-200/60">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-[#16834A]">ผู้แต่ง / ผู้เรียบเรียง</span>
              <span v-if="post.author" class="text-xs font-bold text-slate-800 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                {{ post.author }}
              </span>
            </div>
            <p class="font-heading font-bold text-[#171717] text-sm sm:text-base">
              {{ post.author ? `${post.author} — ` : '' }}บริษัท ไอเจนโก้ จำกัด (IGENCO Co., Ltd.)
            </p>
            <p class="text-xs text-slate-500">
              สอบถามข้อมูลหรือขอคำปรึกษาการพัฒนาระบบ: info@igenco.co.th | โทร 0-2523-3559
            </p>
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

    <!-- Image Preview / Lightbox Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activePreviewImage"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          @click.self="closeImagePreview"
        >
          <div class="relative max-w-4xl max-h-[90vh] bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col">
            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white z-10">
              <div class="pr-6">
                <h4 class="text-sm sm:text-base font-bold font-heading text-[#171717] line-clamp-1">
                  {{ activePreviewImage.title }}
                </h4>
                <p v-if="activePreviewImage.caption" class="text-xs text-slate-500 line-clamp-1">
                  {{ activePreviewImage.caption }}
                </p>
              </div>
              <button
                type="button"
                aria-label="ปิดรูปภาพ"
                class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all flex-shrink-0"
                @click="closeImagePreview"
              >
                ✕
              </button>
            </div>

            <!-- Modal Image Body -->
            <div class="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-slate-50">
              <img
                :src="activePreviewImage.src"
                :alt="activePreviewImage.title"
                class="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

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
