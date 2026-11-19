export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  typescript: { strict: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  // เว้นว่าง = ใช้ข้อมูลจำลองใน data/mock.ts
  // ตั้ง NUXT_PUBLIC_STRAPI_URL=http://strapi:1337 เมื่อหลังบ้านพร้อม
  runtimeConfig: { public: { strapiUrl: '' } },

  routeRules: {
    '/index.php/**': { redirect: { to: '/', statusCode: 301 } },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      titleTemplate: (t?: string) => (t ? `${t} | IGENCO` : 'บริษัท ไอเจนโก้ จำกัด | Enterprise Software & IT Consulting'),
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
