<script setup lang="ts">
const { locale, t } = useLocale()

interface HeroBackground {
  id: string
  image: string
  alt: string
}

// 3 Pristine, ultra-high-definition corporate enterprise background scenes
const backgrounds: HeroBackground[] = [
  {
    id: 'corporate-atrium',
    image: '/images/hero-corporate-clean.jpg',
    alt: 'IGENCO Enterprise Corporate Glass Atrium and Digital Connectivity',
  },
  {
    id: 'cloud-datacenter',
    image: '/images/hero-cloud-datacenter.jpg',
    alt: 'IGENCO Secure Cloud Data Infrastructure and Server Systems',
  },
  {
    id: 'innovation-lab',
    image: '/images/hero-innovation-lab.jpg',
    alt: 'IGENCO Modern Digital Innovation Center',
  },
]

const currentIndex = ref(0)
const totalSlides = computed(() => backgrounds.length)

// Auto carousel slide every 5.0 seconds (Sweet spot: optimal pace, neither too fast nor too slow)
const SLIDE_DURATION = 5000
let timer: ReturnType<typeof setInterval> | null = null

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    nextSlide()
  }, SLIDE_DURATION)
}

function handleNext() {
  nextSlide()
  resetTimer()
}

function handlePrev() {
  prevSlide()
  resetTimer()
}

function handleGoTo(index: number) {
  currentIndex.value = index
  resetTimer()
}

onMounted(() => {
  resetTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

// Permanent, fixed core content (does not change with background slide)
const heroContent = computed(() => ({
  label: t('hero.label'),
  headline: t('hero.headline'),
  subheadline: t('hero.subheadline'),
  description: t('hero.description'),
}))
</script>

<template>
  <!-- Full-Width Greenpacket Corporate Style Hero Section with Carousel Background -->
  <section
    class="relative w-full overflow-hidden bg-[#083B20] text-white select-none min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between"
  >
    <!-- Background Image Carousel Layer with Crossfade Transitions & Cinematic Scale -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(bg, idx) in backgrounds"
        :key="bg.id"
        class="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
        :class="currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
      >
        <img
          :src="bg.image"
          :alt="bg.alt"
          class="h-full w-full object-cover object-center transition-transform duration-[6000ms] ease-out"
          :class="currentIndex === idx ? 'scale-105' : 'scale-100'"
        />
      </div>

      <!-- Greenpacket Signature Green Gradient Overlay for Maximum Readability -->
      <div
        class="absolute inset-0 z-20 bg-gradient-to-r from-[#083B20]/95 via-[#083B20]/80 md:via-[#106B3B]/65 to-black/35 pointer-events-none"
      ></div>

      <!-- Top Vignette for Transparent Navbar Readability -->
      <div class="absolute inset-x-0 top-0 h-36 z-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>

      <!-- Bottom Gradient Vignette merging into Customer Showcase -->
      <div class="absolute inset-x-0 bottom-0 h-40 z-20 bg-gradient-to-t from-[#083B20] to-transparent pointer-events-none"></div>
    </div>

    <!-- Permanent Hero Content (Fixed, Non-Random, Strictly Formatted) -->
    <div class="wrap relative z-30 flex-1 flex flex-col justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 lg:pb-24">
      <div class="max-w-2xl lg:max-w-3xl">
        
        <!-- Label / Eyebrow with Modern Glassmorphism Pill & Glowing Dot -->
        <div class="inline-flex items-center gap-2.5 mb-5 sm:mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>{{ heroContent.label }}</span>
          <span class="text-white/40">|</span>
          <span class="text-emerald-200/90 font-medium text-xs">{{ t('hero.isoCertified') }}</span>
        </div>

        <!-- Headline: บริษัท ไอเจนโก้ จำกัด (Pure White, Bold 800, Apple Tight Tracking with Subtle Text Shadow) -->
        <h1 class="font-heading font-extrabold text-white text-3xl sm:text-5xl lg:text-[62px] tracking-tight leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <span>{{ heroContent.headline }}</span>
        </h1>

        <!-- Subheadline: เทคโนโลยีดิจิทัล เพื่อองค์กรยุคใหม่ (Solid 100% Opaque, Full & Crisp) -->
        <p class="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-[42px] font-extrabold font-heading text-emerald-300 tracking-tight leading-snug drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          {{ heroContent.subheadline }}
        </p>

        <!-- Description: พัฒนาและให้บริการซอฟต์แวร์และโซลูชันดิจิทัล... (Weight 400, Relaxed Apple Body) -->
        <p class="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-100/95 leading-apple-body font-normal tracking-apple-body max-w-2xl">
          {{ heroContent.description }}
        </p>
      </div>
    </div>

    <!-- Pagination Dots at Bottom Center -->
    <div class="relative z-30 pb-6 sm:pb-8 lg:pb-10 flex justify-center items-center gap-2.5 pointer-events-auto">
      <button
        v-for="(bg, idx) in backgrounds"
        :key="bg.id"
        type="button"
        :aria-label="`Slide ${idx + 1}`"
        class="transition-all duration-500 focus:outline-none"
        :class="[
          currentIndex === idx
            ? 'w-8 h-2.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]'
            : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70 rounded-full'
        ]"
        @click="handleGoTo(idx)"
      ></button>
    </div>
  </section>
</template>