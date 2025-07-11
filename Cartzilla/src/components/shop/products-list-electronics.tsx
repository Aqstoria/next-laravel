import { Suspense } from 'react'
import type { Product } from '@/types/product'
import Stack from 'react-bootstrap/Stack'
import ProductListElectronics from './product-list-electronics'
import StarRating from '../reviews/star-rating'
import { data } from '@/lib/data'

interface ProductsListElectronicsProps {
  dataUrl: string
  dataSlice?: [number, number]
  className?: string
}

const RenderProducts = async ({ dataUrl, dataSlice, className }: ProductsListElectronicsProps) => {
  const products = await data<Product[]>(dataUrl)
  if (!products || products.length === 0) {
    return null
  }

  return (
    <Stack gap={3} className={className}>
      {(dataSlice ? products.slice(dataSlice[0], dataSlice[1]) : products).map(
        ({ id, image, title, href, price, reviews, badge }: Product) => (
          <ProductListElectronics
            key={id}
            image={{ src: image as string, alt: title }}
            title={title}
            href={href}
            price={{
              current: price[0],
              original: price[1],
            }}
            reviews={
              reviews && {
                rating: reviews[0],
                count: reviews[1],
              }
            }
            badge={
              badge && {
                label: badge[1],
                bg: badge[0],
              }
            }
          />
        )
      )}
    </Stack>
  )
}

const Loading = ({ dataSlice, className }: { dataSlice?: [number, number]; className?: string }) => (
  <Stack gap={3} className={className}>
    {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 4 }, (_, index) => (
      <article key={index} className="d-flex align-items-center">
        <div className="position-relative placeholder-wave flex-shrink-0" style={{ width: 110 }}>
          <div className="placeholder rounded ratio ratio-1x1" />
          <i className="ci-image position-absolute top-50 start-50 translate-middle fs-2 opacity-40" />
        </div>
        <div className="w-100 min-w-0 ps-2 ps-sm-3">
          <StarRating rating={5} dark className="fs-xs opacity-50 mb-2" />
          <h4 className="placeholder-glow h6 mb-1">
            <span className="placeholder placeholder-xs col-10"></span>
          </h4>
          <div className="placeholder-glow mb-0">
            <span className="placeholder placeholder-sm col-6"></span>
          </div>
        </div>
      </article>
    ))}
  </Stack>
)

const ProductsListElectronics = ({ dataUrl, dataSlice, className }: ProductsListElectronicsProps) => (
  <Suspense fallback={<Loading dataSlice={dataSlice} className={className} />}>
    <RenderProducts dataUrl={dataUrl} dataSlice={dataSlice} className={className} />
  </Suspense>
)

export default ProductsListElectronics
