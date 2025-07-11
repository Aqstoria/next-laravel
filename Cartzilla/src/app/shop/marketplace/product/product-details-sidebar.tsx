'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { DigitalProduct } from '@/types/digital-product'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Link from 'next/link'
import SelectBox from '@/components/forms/select-box'
import Accordion from 'react-bootstrap/Accordion'
import FormCheck from 'react-bootstrap/FormCheck'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

interface ProductDetailsSidebarMarketplaceProps {
  standardPrice: number
  extendedPrice: number
  productInfo: Record<string, string | React.ReactNode>
  productTags: [string, string][]
}

interface Product {
  id: string
  image: string
  title: string
  href: string
  license: string
  price: [number] | [number, number]
  badge?: [string, string]
}

const ProductDetailsSidebarMarketplace = ({
  standardPrice,
  extendedPrice,
  productInfo,
  productTags,
}: ProductDetailsSidebarMarketplaceProps) => {
  const { addToCart } = useCart('marketplace')
  const { createToast, ToastRenderer } = useToast()
  const [license, setLicense] = useState('standard')
  const [price, setPrice] = useState(standardPrice)

  const product: Product = {
    id: 'productMarketplace06',
    image: '/img/shop/marketplace/06.jpg',
    title: 'A stunning set of tablet pro mockups',
    href: '/shop/marketplace/product',
    license: license,
    price: [price],
  }

  // Custom toggle that binds radion button to accordion button and updates state
  const LicenseToggle = ({
    id,
    label,
    price,
    eventKey,
  }: {
    id: string
    label: string
    price: number
    eventKey: string
    defaultChecked?: boolean
  }) => {
    const accordionToggle = useAccordionButton(eventKey)

    const handleClick = (e: React.SyntheticEvent) => {
      accordionToggle(e)
      setLicense(eventKey)
      setPrice(price)
    }

    return (
      <div className="accordion-header d-flex justify-content-between align-items-center py-3">
        <FormCheck className="m-0">
          <FormCheck.Input type="radio" name="license" id={id} onChange={handleClick} checked={license === eventKey} />
          <FormCheck.Label htmlFor={id} className="fw-medium text-dark-emphasis">
            {label}
          </FormCheck.Label>
        </FormCheck>
        <div className="h6 mb-0">${price}</div>
      </div>
    )
  }

  // Licenses select change handler
  const handleSelectChange = (value: string | string[]) => {
    setLicense(value as string)
    value === 'extended' ? setPrice(extendedPrice) : setPrice(standardPrice)
  }

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    // Add suffix to product.id to avoid collision with other products.
    // For standard license, it will be `product.id-std`
    // For extended license, it will be `product.id-ext`
    const suffix = license === 'standard' ? 'std' : 'ext'
    const productId = `${product.id}-${suffix}`
    addToCart({
      id: productId,
      image: product.image,
      title: product.title,
      href: product.href,
      license: product.license.charAt(0).toUpperCase() + product.license.slice(1),
      price: product.price,
      quantity: 1,
      badge: product.badge,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: product.title,
      },
      'cart'
    )
  }

  return (
    <>
      <div className="d-none d-lg-block" style={{ marginTop: -110 }} />
      <div className="sticky-lg-top d-none d-lg-block">
        <div className="d-none d-lg-block" style={{ paddingTop: 110 }}></div>

        {/* License selection + Add to cart button */}
        <div className="border rounded-4 py-2 px-4 mb-4">
          <Accordion defaultActiveKey={license} className="accordion-flush">
            <div className="accordion-item">
              <LicenseToggle
                id="standard"
                label="Standard license"
                price={standardPrice}
                eventKey="standard"
                defaultChecked
              />
              <Accordion.Collapse eventKey="standard">
                <div className="accordion-body py-0 pb-2">
                  <ul className="list-unstyled fs-sm">
                    {['Quality verified', 'Use for a single project', 'Non-paying users only'].map((item, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <i className="ci-check-circle text-info me-2" />
                        <span className="fs-ms">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="accordion-item">
              <LicenseToggle id="extended" label="Extended license" price={extendedPrice} eventKey="extended" />
              <Accordion.Collapse eventKey="extended">
                <div className="accordion-body py-0 pb-2">
                  <ul className="list-unstyled fs-sm">
                    {['Quality verified', 'Use for a single project', 'Paying users allowed'].map((item, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <i className="ci-check-circle text-info me-2" />
                        <span className="fs-ms">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
          <Button
            variant="dark"
            size="lg"
            className="w-100 rounded-pill animate-scale mt-1 mb-3"
            onClick={() => handleAddToCart(product)}
          >
            <i className="ci-shopping-bag fs-lg animate-target me-2 ms-n1" />
            Add to cart
          </Button>
        </div>

        {/* Product info */}
        <div className="ps-4 pe-3 mb-4">
          <h4 className="h6 pb-2 mb-1">Product info</h4>
          <table className="table table-borderless table-sm fs-sm mb-0">
            <tbody>
              {Object.entries(productInfo).map(([key, value], index) => (
                <tr key={index}>
                  <td className="text-body-secondary ps-0">{key}</td>
                  <td className="text-dark-emphasis pe-0">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tags */}
        <div className="ps-4 pe-3">
          <h4 className="h6 pb-2 mb-1">Tags</h4>
          <div className="d-flex flex-wrap gap-2 mt-n1">
            {productTags.map((tag, index) => (
              <Badge
                key={index}
                as={Link}
                href={tag[1]}
                bg="body-secondary"
                text="body-emphasis"
                className="text-decoration-none mt-1 me-1"
              >
                {tag[0]}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky bottom bar with license selection and "Add to cart" button that is visible on screens < 992px wide (lg breakpoint) */}
      <div className="fixed-bottom z-sticky d-flex d-lg-none w-100 gap-2 bg-dark border-top border-light border-opacity-10 p-3 pb-4">
        <div className="w-100" style={{ minWidth: 175 }} data-bs-theme="dark">
          <FormLabel className="m-0">License</FormLabel>
          <SelectBox
            choices={[
              { value: 'standard', label: `Standard - $${standardPrice}` },
              { value: 'extended', label: `Extended - $${extendedPrice}` },
            ]}
            value={license}
            onChange={(value) => handleSelectChange(value)}
            removeItemButton={false}
            inputClassName="border-0 rounded-0 p-0"
            aria-label="License select"
          />
        </div>
        <Button
          variant="light"
          className="bg-white w-100 rounded-pill animate-scale"
          onClick={() => handleAddToCart(product)}
        >
          <i className="ci-shopping-bag fs-base animate-target me-2 ms-n1" />
          Add to cart
        </Button>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductDetailsSidebarMarketplace
