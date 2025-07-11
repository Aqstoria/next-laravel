export interface DigitalProduct {
  id: string
  image: string
  title: string
  href: string
  price: [number] | [number, number]
  author: {
    avatar: string
    name: string
    href: string
  }
  category: {
    label: string
    href: string
  }
  license?: string
  sales: number
  badge?: [string, string]
  quantity?: number
}
