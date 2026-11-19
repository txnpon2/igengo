import type { CaseStudy, Post, Product } from '~/types/content'
import { about, cases, categories, heroSlides, posts, products, servedCompanies, site } from '~/data/mock'

/**
 * จุดเดียวที่หน้าเว็บดึงข้อมูล
 * - ไม่มี NUXT_PUBLIC_STRAPI_URL -> ใช้ data/mock.ts
 * - มี NUXT_PUBLIC_STRAPI_URL    -> ดึงจาก Strapi v5 (response แบบ flat: { data: [...] })
 * ทำหลังบ้านเสร็จแล้วแก้เฉพาะไฟล์นี้ หน้าอื่นไม่ต้องแตะ
 */
export const useContent = () => {
  const { strapiUrl } = useRuntimeConfig().public

  async function list<T>(endpoint: string, fallback: T[], query: Record<string, string> = {}): Promise<T[]> {
    if (!strapiUrl) return fallback
    const res = await $fetch<{ data: T[] }>(`${strapiUrl}/api/${endpoint}`, { query })
    return res.data
  }

  const getProducts = (): Promise<Product[]> => list('products', products)
  const getCases = (): Promise<CaseStudy[]> => list('case-studies', cases)
  const getPosts = async (): Promise<Post[]> =>
    [...(await list('posts', posts, { sort: 'publishedAt:desc' }))].sort((a, b) =>
      b.publishedAt.localeCompare(a.publishedAt),
    )

  const getProduct = async (slug: string) => (await getProducts()).find((p) => p.slug === slug) ?? null
  const getPost = async (slug: string) => {
    const list = await getPosts()
    return (
      list.find((p) => p.slug === slug) ??
      (slug === 'iso-29110-renewal'
        ? list.find((p) => p.slug === 'genco-iso-iec-29110-certification')
        : null) ??
      null
    )
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' })

  return { site, categories, about, heroSlides, servedCompanies, getProducts, getProduct, getCases, getPosts, getPost, formatDate }
}
