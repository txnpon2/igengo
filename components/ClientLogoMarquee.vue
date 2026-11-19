<script setup lang="ts">
import { clientLogosRow1, clientLogosRow2, type ClientLogo } from '~/data/clientLogos'

const { locale, t } = useLocale()

// Duplicate Row 1 (7 logos) 6 times = 42 cards
const row1Repeated = computed<ClientLogo[]>(() => {
  const list: ClientLogo[] = []
  for (let i = 0; i < 6; i++) {
    list.push(...clientLogosRow1)
  }
  return list
})

// Duplicate Row 2 (6 logos) 7 times = 42 cards
const row2Repeated = computed<ClientLogo[]>(() => {
  const list: ClientLogo[] = []
  for (let i = 0; i < 7; i++) {
    list.push(...clientLogosRow2)
  }
  return list
})
</script>

<template>
  <!-- Apple Store Style Client Logo Section with Refined, Sleek Dimensions & Header -->
  <section
    class="relative w-full overflow-hidden bg-white pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-slate-100 select-none"
    aria-label="กลุ่มผู้ใช้ผลิตภัณฑ์ IGENCO"
  >
    <!-- Section Header (Modern, Prominent & Elegant) -->
    <div class="wrap text-center mb-7 sm:mb-9 relative">
      <!-- Eyebrow Pill with Pulsing Indicator -->
      <div class="section-eyebrow mb-3">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
        </span>
        <span>{{ t('clients.badge') }}</span>
      </div>

      <!-- Main Headline with Ambient Glow and Dual-tone Gradient Accent -->
      <div class="relative block">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-80 h-24 bg-[#16834A]/8 rounded-full blur-2xl pointer-events-none"></div>
        <h2 class="relative text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-[#171717] tracking-tight leading-snug">
          <template v-if="locale === 'th'">
            กลุ่มผู้ใช้<span class="text-gradient-emerald">ผลิตภัณฑ์</span>
          </template>
          <template v-else>
            Our Valued <span class="text-gradient-emerald">Clients</span>
          </template>
        </h2>
      </div>

      <p class="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed tracking-apple-body max-w-xl mx-auto">
        {{ t('clients.sub') }}
      </p>
    </div>

    <!-- Marquee Track Wrapper with Soft Ambient Gradient Fade Edges -->
    <div class="relative w-full overflow-hidden">
      <!-- Left & Right Soft Ambient Gradient Fade Masks for Seamless Edge Transitions -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-white via-white/90 to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-white via-white/90 to-transparent"
      ></div>

      <div class="space-y-3 sm:space-y-4">
        <!-- Row 1: Moves Left-to-Right (Right Direction) -->
        <div class="marquee-row group relative flex overflow-hidden">
          <div class="marquee-track marquee-track-right flex shrink-0 items-center gap-3 sm:gap-4 py-1.5">
            <div
              v-for="(logo, idx) in row1Repeated"
              :key="`r1-${logo.id}-${idx}`"
              class="group/card flex h-[65px] w-[130px] sm:h-[84px] sm:w-[175px] shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] hover:border-[#16834A]/25"
            >
              <img
                :src="logo.image"
                :alt="logo.name"
                loading="lazy"
                class="max-h-[36px] max-w-[95px] sm:max-h-[46px] sm:max-w-[130px] w-auto h-auto object-contain transition-transform duration-300 ease-out group-hover/card:scale-105"
              />
            </div>
          </div>
        </div>

        <!-- Row 2: Moves Right-to-Left (Left Direction) -->
        <div class="marquee-row group relative flex overflow-hidden">
          <div class="marquee-track marquee-track-left flex shrink-0 items-center gap-3 sm:gap-4 py-1.5">
            <div
              v-for="(logo, idx) in row2Repeated"
              :key="`r2-${logo.id}-${idx}`"
              class="group/card flex h-[65px] w-[130px] sm:h-[84px] sm:w-[175px] shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] hover:border-[#16834A]/25"
            >
              <img
                :src="logo.image"
                :alt="logo.name"
                loading="lazy"
                class="max-h-[36px] max-w-[95px] sm:max-h-[46px] sm:max-w-[130px] w-auto h-auto object-contain transition-transform duration-300 ease-out group-hover/card:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* GPU-accelerated smooth infinite marquee tracks */
.marquee-track {
  will-change: transform;
}

/* Row 1: Right direction (moves left to right) */
.marquee-track-right {
  animation: marqueeRight 36s linear infinite;
}

/* Row 2: Left direction (moves right to left, slightly faster for depth) */
.marquee-track-left {
  animation: marqueeLeft 30s linear infinite;
}

/* Pause animation on hover */
.marquee-row:hover .marquee-track {
  animation-play-state: paused;
}

/* Mathematically seamless keyframes for 1 full set shift */
@keyframes marqueeRight {
  0% {
    transform: translate3d(-16.666667%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes marqueeLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-14.285714%, 0, 0);
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .marquee-track-right,
  .marquee-track-left {
    animation: none !important;
  }
}
</style>
