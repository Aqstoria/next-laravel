export interface Product {
  id: string
  image: [string, string] | string
  title: string
  href: string
  price: [number] | [number, number]
  reviews?: [number, number]
  badge?: [string, string]
  specs?: Record<string, string>
  sizes?: string[]
  colors?: { value: string; hex: string }[]
  description?: string
  quantity?: number
  stock?: [number, number]
  outOfStock?: boolean
}
