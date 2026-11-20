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
  image?: string
  icon?: string
  adminFeatures?: string[]
  userFeatures?: string[]
  gallery?: { title: string; image: string; caption?: string; link?: string }[]
  externalUrl?: string
  contact?: { name: string; phone: string; email: string }
  brochures?: { title: string; url: string }[]
  subModules?: {
    code: string
    title: string
    description: string
    features: string[]
    images?: { title: string; image: string; caption?: string }[]
  }[]
}

export type ModalType = 'info' | 'success' | 'warning' | 'notice'

export interface InfoModalOptions {
  type?: ModalType
  badge?: string
  title: string
  message: string
  details?: string[]
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void | Promise<void>
  onCancel?: () => void
}

export interface PostDiagram {
  title: string
  caption?: string
  image: string
  figureNumber?: string
  highlights?: string[]
}

export interface Post {
  slug: string
  title: string
  subtitle?: string
  category: string
  badge?: string
  author?: string
  authorRole?: string
  excerpt: string
  body: string
  image: string
  imagePosition?: string
  imageCaption?: string
  publishedAt: string
  gallery?: string[]
  diagrams?: PostDiagram[]
  certBadge?: {
    image: string
    title: string
    organization: string
    standard: string
    details: string
  }
  highlights?: string[]
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

export interface ServedCompany {
  name: string
  shortName: string
  logo: string
  tag?: string
}

export interface HeroSlide {
  id: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  highlight: string
  description: string
  primaryCta: { text: string; to: string }
  secondaryCta: { text: string; to: string }
}
