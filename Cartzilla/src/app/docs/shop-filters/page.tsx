import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import ShopFiltersCheckboxesDemo from './shop-filters-checkboxes'
import ShopFiltersButtonTogglesDemo from './shop-filters-button-toggles'
import ShopFiltersLinksDemo from './shop-filters-links'
import ShopFiltersRangeSliderDemo from './shop-filters-range-slider'
import ShopFiltersSelectedDemo from './shop-filters-selected'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Shop filters',
}

const ShopFiltersDocsPage = () => {
  return (
    <>
      <section className="py-2 pb-sm-3">
        <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
          Cartzilla component
        </Badge>
        <h1 className="pt-1">Shop filters</h1>
        <p className="text-body-secondary mb-4">
          Filter widgets for the sidebar, allowing users to refine product listings based on various attributes like
          price, brand, size, etc.
        </p>
      </section>
      <ShopFiltersCheckboxesDemo />
      <ShopFiltersButtonTogglesDemo />
      <ShopFiltersLinksDemo />
      <ShopFiltersRangeSliderDemo />
      <ShopFiltersSelectedDemo />
    </>
  )
}

export default ShopFiltersDocsPage
