export type Category = 'enterprise' | 'service' | 'ecommerce'

export interface Product {
  slug: string
  code: string
  title: string
  category: Category
  audience: string
  summary: string
  highlights: string[]
  features: string[]
  /** แสดงในตารางเปรียบเทียบ */
  core?: boolean
  deploy?: string
}

export interface Post {
  slug: string
  title: string
  category: string
  excerpt: string
  body: string
  image: string
  publishedAt: string
}

export interface CaseStudy {
  tag: string
  product: string
  title: string
  text: string
  result: string
}

export interface SiteInfo {
  name: string
  legalName: string
  phone: string
  phoneHref: string
  email: string
  line: string
  address: string
  hours: string
}
