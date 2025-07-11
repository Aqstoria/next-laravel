import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import CategoryCardVariantOneDemo from './category-card-one'
import CategoryCardVariantTwoDemo from './category-card-two'
import CategoryCardVariantThreeDemo from './category-card-three'
import CategoryCardVariantFoutDemo from './category-card-four'
import CategoryCardVariantFiveDemo from './category-card-five'
import CategoryCardVariantSixDemo from './category-card-six'
import CategoriesListDemo from './categories-list'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Shop categories',
}

const ShopCategoriesDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Shop categories</h1>
      <p className="text-body-secondary mb-4">
        Provide a navigational structure with links to different product categories for easy access and exploration.
      </p>
    </section>
    <CategoryCardVariantOneDemo />
    <CategoryCardVariantTwoDemo />
    <CategoryCardVariantThreeDemo />
    <CategoryCardVariantFoutDemo />
    <CategoryCardVariantFiveDemo />
    <CategoryCardVariantSixDemo />
    <CategoriesListDemo />
  </>
)

export default ShopCategoriesDocsPage
