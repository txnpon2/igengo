<script setup lang="ts">
import type { Post } from '~/types/content'

const props = withDefaults(
  defineProps<{
    posts?: Post[]
    showSeeAll?: boolean
  }>(),
  {
    posts: () => [],
    showSeeAll: true,
  }
)

const { formatDate } = useContent()
const { locale, t } = useLocale()

// Divide posts into 5-post Bento slides for Desktop / Tablet
const bentoSlides = computed<Post[][]>(() => {
  const all = props.posts || []
  if (!all.length) return []
  const slides: Post[][] = []
  for (let i = 0; i < all.length; i += 5) {
    slides.push(all.slice(i, i + 5))
  }
  return slides
})

const totalSlides = computed(() => bentoSlides.value.length)
const currentSlide = ref(0)

// Scroll container reference
const desktopContainer = ref<HTMLElement | null>(null)
const mobileContainer = ref<HTMLElement | null>(null)

const canScrollLeft = ref(false)
const canScrollRight = ref(true)

function getActiveContainer(): HTMLElement | null {
  if (import.meta.client) {
    if (window.innerWidth < 640 && mobileContainer.value) {
      return mobileContainer.value
    }
  }
  return desktopContainer.value || mobileContainer.value
}

function updateScrollState() {
  const container = getActiveContainer()
  if (!container) return
  const { scrollLeft, scrollWidth, clientWidth } = container
  canScrollLeft.value = scrollLeft > 10
  canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 10
  if (clientWidth > 0) {
    currentSlide.value = Math.min(
      Math.max(0, Math.round(scrollLeft / clientWidth)),
      totalSlides.value - 1
    )
  }
}

function scrollNews(direction: 'left' | 'right') {
  const container = getActiveContainer()
  if (!container) return
  const scrollDistance = container.clientWidth * 0.95
  container.scrollBy({
    left: direction === 'left' ? -scrollDistance : scrollDistance,
    behavior: 'smooth',
  })
}

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => {
      updateScrollState()
      window.addEventListener('resize', updateScrollState, { passive: true })
    })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', updateScrollState)
  }
})
</script>

<template>
  <section id="news" class="py-16 sm:py-24 bg-[#F4F5F4] border-b border-slate-200/80 select-none">
    <div class="wrap">
      
      <!-- Section Header with Modern Apple-Tech Eyebrow Badge -->
      <div class="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div class="section-eyebrow mb-3.5">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
            </span>
            <span>{{ t('news.badge') }}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.2]">
            <template v-if="locale === 'th'">
              ข่าวสารและกิจกรรม<span class="text-gradient-emerald">ล่าสุด</span>
            </template>
            <template v-else>
              Latest News & <span class="text-gradient-emerald">Corporate Updates</span>
            </template>
          </h2>
          <p class="section-subtitle max-w-xl">
            {{ t('news.sub') }}
          </p>
        </div>
      </div>

      <!-- Desktop & Tablet Bento Grid Slider (Reference Layout) -->
      <div
        ref="desktopContainer"
        class="hidden sm:flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        @scroll.passive="updateScrollState"
      >
        <div
          v-for="(slide, slideIdx) in bentoSlides"
          :key="`bento-slide-${slideIdx}`"
          class="w-full flex-shrink-0 snap-start"
        >
          <div class="grid grid-cols-12 gap-5 sm:gap-6">
            
            <!-- ROW 1 -->
            <!-- Card 1: Wide Card (spans 7 cols on lg, 6 cols on md) -->
            <div v-if="slide[0]" class="col-span-12 md:col-span-6 lg:col-span-7">
              <NuxtLink
                :to="`/news/${slide[0].slug}`"
                class="group flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:border-[#16834A]/40 transition-all duration-500 h-[380px] sm:h-[420px]"
              >
                <!-- Top Info Bar -->
                <div class="p-6 sm:p-8 flex items-start justify-between gap-4 z-10">
                  <div class="max-w-[80%]">
                    <div class="flex items-center gap-2.5 mb-2">
                      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#16834A] bg-[#16834A]/10">
                        {{ slide[0].category }}
                      </span>
                      <span class="text-xs text-slate-400 font-medium">
                        {{ formatDate(slide[0].publishedAt) }}
                      </span>
                    </div>
                    <h3 class="text-xl sm:text-2xl font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug line-clamp-2">
                      {{ slide[0].title }}
                    </h3>
                    <p class="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-2">
                      {{ slide[0].excerpt }}
                    </p>
                  </div>

                  <div v-if="slide[0].badge" class="flex-shrink-0">
                    <span class="px-3 py-1 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-[#171717] shadow-sm flex items-center gap-1.5 font-heading">
                      <span class="text-[#16834A]">●</span> {{ slide[0].badge }}
                    </span>
                  </div>
                </div>

                <!-- Bottom Photo with Seamless Fade Mask -->
                <div class="relative w-full h-[220px] sm:h-[250px] overflow-hidden mt-auto">
                  <img
                    :src="slide[0].image"
                    :alt="slide[0].title"
                    loading="lazy"
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/95 pointer-events-none"></div>
                </div>
              </NuxtLink>
            </div>

            <!-- Card 2: Regular Card (spans 5 cols on lg, 6 cols on md) -->
            <div v-if="slide[1]" class="col-span-12 md:col-span-6 lg:col-span-5">
              <NuxtLink
                :to="`/news/${slide[1].slug}`"
                class="group flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:border-[#16834A]/40 transition-all duration-500 h-[380px] sm:h-[420px]"
              >
                <!-- Top Info Bar -->
                <div class="p-6 sm:p-8 flex items-start justify-between gap-4 z-10">
                  <div class="max-w-[78%]">
                    <div class="flex items-center gap-2.5 mb-2">
                      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#16834A] bg-[#16834A]/10">
                        {{ slide[1].category }}
                      </span>
                      <span class="text-xs text-slate-400 font-medium">
                        {{ formatDate(slide[1].publishedAt) }}
                      </span>
                    </div>
                    <h3 class="text-lg sm:text-xl font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug line-clamp-2">
                      {{ slide[1].title }}
                    </h3>
                    <p class="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-2">
                      {{ slide[1].excerpt }}
                    </p>
                  </div>

                  <div v-if="slide[1].badge" class="flex-shrink-0">
                    <span class="px-3 py-1 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-[#171717] shadow-sm flex items-center gap-1.5 font-heading">
                      <span class="text-[#16834A]">●</span> {{ slide[1].badge }}
                    </span>
                  </div>
                </div>

                <!-- Bottom Photo with Seamless Fade Mask -->
                <div class="relative w-full h-[220px] sm:h-[250px] overflow-hidden mt-auto">
                  <img
                    :src="slide[1].image"
                    :alt="slide[1].title"
                    loading="lazy"
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/95 pointer-events-none"></div>
                </div>
              </NuxtLink>
            </div>

            <!-- ROW 2: 3 Cards of Equal Width (4 cols each on lg, 6/12 on md) -->
            <div
              v-for="(post, pIdx) in slide.slice(2, 5)"
              :key="`row2-${post.slug}`"
              class="col-span-12 md:col-span-6 lg:col-span-4"
              :class="pIdx === 2 ? 'md:col-span-12 lg:col-span-4' : ''"
            >
              <NuxtLink
                :to="`/news/${post.slug}`"
                class="group flex flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)] hover:border-[#16834A]/40 transition-all duration-500 h-[380px] sm:h-[420px]"
              >
                <!-- Top Info Bar -->
                <div class="p-6 sm:p-7 flex items-start justify-between gap-3 z-10">
                  <div class="max-w-[76%]">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#16834A] bg-[#16834A]/10">
                        {{ post.category }}
                      </span>
                      <span class="text-xs text-slate-400 font-medium">
                        {{ formatDate(post.publishedAt) }}
                      </span>
                    </div>
                    <h3 class="text-base sm:text-lg font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug line-clamp-2">
                      {{ post.title }}
                    </h3>
                    <p class="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-2">
                      {{ post.excerpt }}
                    </p>
                  </div>

                  <div v-if="post.badge" class="flex-shrink-0">
                    <span class="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-[#171717] shadow-sm flex items-center gap-1 font-heading">
                      <span class="text-[#16834A]">●</span> {{ post.badge }}
                    </span>
                  </div>
                </div>

                <!-- Bottom Photo with Seamless Fade Mask -->
                <div class="relative w-full h-[210px] sm:h-[240px] overflow-hidden mt-auto">
                  <img
                    :src="post.image"
                    :alt="post.title"
                    loading="lazy"
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/95 pointer-events-none"></div>
                </div>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>

      <!-- Mobile Horizontal Scroll Container (Card-by-card swipe with smooth snap) -->
      <div
        ref="mobileContainer"
        class="sm:hidden flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 py-2"
        @scroll.passive="updateScrollState"
      >
        <div
          v-for="post in posts"
          :key="`mob-${post.slug}`"
          class="w-[84vw] max-w-[340px] flex-shrink-0 snap-start"
        >
          <NuxtLink
            :to="`/news/${post.slug}`"
            class="group flex flex-col justify-between overflow-hidden rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#16834A]/40 transition-all duration-300 h-[380px]"
          >
            <!-- Top Info Bar -->
            <div class="p-5 flex items-start justify-between gap-3 z-10">
              <div class="max-w-[78%]">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#16834A] bg-[#16834A]/10">
                    {{ post.category }}
                  </span>
                  <span class="text-[11px] text-slate-400 font-medium">
                    {{ formatDate(post.publishedAt) }}
                  </span>
                </div>
                <h3 class="text-base font-bold font-heading text-[#171717] group-hover:text-[#16834A] transition-colors leading-snug line-clamp-2">
                  {{ post.title }}
                </h3>
                <p class="mt-1 text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                  {{ post.excerpt }}
                </p>
              </div>

              <div v-if="post.badge" class="flex-shrink-0">
                <span class="px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-[#171717]">
                  {{ post.badge }}
                </span>
              </div>
            </div>

            <!-- Bottom Photo with Fade -->
            <div class="relative w-full h-[200px] overflow-hidden mt-auto">
              <img
                :src="post.image"
                :alt="post.title"
                loading="lazy"
                class="w-full h-full object-cover object-top"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/95 pointer-events-none"></div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- SECTION FOOTER: Navigation Controls Exclusively on Bottom-Right -->
      <div class="mt-8 sm:mt-12 flex items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
        
        <!-- Left: See All News Link (Optional) -->
        <div>
          <NuxtLink
            v-if="showSeeAll"
            to="/news"
            class="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#16834A] hover:text-[#106B3B] transition-colors font-heading"
          >
            <span>{{ t('news.viewAll') }}</span>
            <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </NuxtLink>
        </div>

        <!-- Right: Circular Minimalist Navigation Buttons (Bottom-Right ONLY) -->
        <div class="flex items-center gap-3">
          
          <!-- Slide Indicator Dots -->
          <div v-if="totalSlides > 1" class="hidden sm:flex items-center gap-1.5 mr-2">
            <span
              v-for="idx in totalSlides"
              :key="`dot-${idx}`"
              class="h-2 rounded-full transition-all duration-300"
              :class="currentSlide === idx - 1 ? 'w-6 bg-[#16834A]' : 'w-2 bg-slate-300'"
            ></span>
          </div>

          <!-- Prev Button -->
          <button
            type="button"
            aria-label="ข่าวก่อนหน้า"
            :disabled="!canScrollLeft"
            class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#171717] border border-slate-200 shadow-sm transition-all duration-300 hover:bg-[#16834A] hover:text-white hover:border-[#16834A] active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#171717] disabled:hover:border-slate-200"
            @click="scrollNews('left')"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Next Button -->
          <button
            type="button"
            aria-label="ข่าวถัดไป"
            :disabled="!canScrollRight"
            class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#171717] border border-slate-200 shadow-sm transition-all duration-300 hover:bg-[#16834A] hover:text-white hover:border-[#16834A] active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#171717] disabled:hover:border-slate-200"
            @click="scrollNews('right')"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>

    </div>
  </section>
</template>
