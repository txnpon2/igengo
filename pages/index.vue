<script setup lang="ts">
import type { Category, Product } from '~/types/content'

const { getProducts, getPosts } = useContent()
const { locale, t } = useLocale()

const { data: news } = await useAsyncData('home-news', () => getPosts())

useSeoMeta({
  title: 'ซอฟต์แวร์องค์กรครบวงจร สำหรับภาครัฐและเอกชน | IGENCO',
  description: 'IGENCO พัฒนา Regist.ai, HR.ai, iGenQ, i-FinSoft, i-SmartSoft, i-SmartFlow และระบบตามความต้องการ ภายใต้มาตรฐานสากล ISO/IEC 29110',
})

onMounted(() => {
  if (import.meta.client && !window.location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
})
</script>

<template>
  <div class="overflow-x-hidden">
    
    <!-- 1. HERO SECTION: Full-Width Background with Green Overlay, Carousel & Locale Support -->
    <HeroSlider />

    <!-- 2. PRODUCT & SERVICE: 6 Core Products Suite with New Modern App Icons (Placed Directly Above Client Logos) -->
    <ProductSuiteSection />

    <!-- 3. CLIENT LOGO MARQUEE: 2-Row Infinite Counter-Directional Logo Strip (Apple Store Style) -->
    <ClientLogoMarquee />

    <!-- 4. NEWS & UPDATES: Bento Grid / Editorial Card Layout with Bottom-Right Navigation Controls -->
    <NewsBentoSection :posts="news || []" />

    <!-- 5. CTA BAND: Black & Green Background -->
    <CtaBand />

  </div>
</template>
