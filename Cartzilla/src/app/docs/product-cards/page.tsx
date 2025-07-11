import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ElectronicsProductCardDemo from './product-card-electronics'
import ElectronicsProductListDemo from './product-list-electronics'
import FashionProductCardDemo from './product-card-fashion'
import FurnitureProductCardDemo from './product-card-furniture'
import GroceryProductCardDemo from './product-card-grocery'
import MarketplaceProductCardDemo from './product-card-marketplace'
import ShoppingCartListItemDemo from './shopping-cart-list-items'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Product cards',
}

const ProductCardsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Product cards</h1>
      <p className="text-body-secondary mb-4">
        Display essential information about individual products, such as images, names, prices, and brief descriptions.
      </p>
    </section>
    <ElectronicsProductCardDemo />
    <ElectronicsProductListDemo />
    <FashionProductCardDemo />
    <FurnitureProductCardDemo />
    <GroceryProductCardDemo />
    <MarketplaceProductCardDemo />
    <ShoppingCartListItemDemo />
  </>
)

export default ProductCardsDocsPage
