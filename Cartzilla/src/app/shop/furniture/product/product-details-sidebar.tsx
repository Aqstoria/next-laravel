'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import SelectBox from '@/components/forms/select-box'
import Dropdown from 'react-bootstrap/Dropdown'
import Stack from 'react-bootstrap/Stack'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'

const ProductDetailsSidebarFurniture = ({ product }: { product: Product }) => {
  const [colorValue, setColorValue] = useState('Viridian')
  const { addToCart } = useCart('furniture')
  const [wishlist, setWishlist] = useState(false)
  const { createToast, ToastRenderer } = useToast()

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image as string,
      title: product.title,
      href: product.href,
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

  // Handle toggle wishlist with toast
  const handleToggleWishlist = () => {
    setWishlist(!wishlist)

    if (wishlist) {
      createToast(
        {
          action: 'Removed from wishlist: ',
          product: product.title,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist: ',
          product: product.title,
        },
        'wishlist'
      )
    }
  }

  return (
    <>
      <div className="d-none d-md-block" style={{ marginTop: -90 }} />
      <div className="sticky-md-top ps-md-2 ps-xl-4">
        <div className="d-none d-md-block" style={{ paddingTop: 90 }} />
        <div className="fs-xs text-body-secondary mb-3">V00273124</div>
        <h1 className="fs-xl fw-medium">{product.title}</h1>
        <div className="h4 fw-bold mb-4">
          ${product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
          {product.price[1] !== undefined && (
            <del className="fs-sm fw-normal text-body-tertiary">
              $
              {product.price[1]?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </del>
          )}
        </div>
        <ul className="list-unstyled fs-sm text-body-emphasis mb-4">
          <li>
            <span className="me-1">
              Pay 4 interest-free payments of{' '}
              <span className="fw-semibold">
                $
                {Math.round(product.price[0] / 4).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>{' '}
              with
            </span>
            <a href="#" className="d-inline-block" aria-label="Afterpay">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 360 129.6">
                <path
                  d="M297.4 127.4H62.7C28 127.4 0 99.4 0 64.8h0C0 30.2 28 2.1 62.7 2.1h234.7c34.6 0 62.6 28 62.6 62.6h0c0 34.7-28 62.7-62.6 62.7z"
                  fill="#b2fce4"
                ></path>
                <path d="M306.8 49.8l-7.9-4.5-8-4.6c-5.3-3-11.9.8-11.9 6.9v1c0 .6.3 1.1.8 1.4l3.7 2.1c1 .6 2.3-.2 2.3-1.3v-2.4c0-1.2 1.3-2 2.3-1.4l7.3 4.2 7.3 4.2c1.1.6 1.1 2.1 0 2.7l-7.3 4.2-7.3 4.2c-1 .6-2.3-.2-2.3-1.4v-1.2c0-6.1-6.6-9.9-11.9-6.9l-8 4.6-7.9 4.5c-5.3 3-5.3 10.7 0 13.8l7.9 4.5 8 4.6c5.3 3 11.9-.8 11.9-6.9v-1c0-.6-.3-1.1-.8-1.4l-3.7-2.1c-1-.6-2.3.2-2.3 1.3v2.4c0 1.2-1.3 2-2.3 1.4l-7.3-4.2-7.3-4.2c-1.1-.6-1.1-2.1 0-2.7l7.3-4.2 7.3-4.2c1-.6 2.3.2 2.3 1.4v1.2c0 6.1 6.6 9.9 11.9 6.9l8-4.6 7.9-4.5c5.4-3.1 5.4-10.7 0-13.8zm-51.6 1.5l-18.5 38.1H229l6.9-14.2-10.8-23.9h7.9l7 16 7.6-16h7.6zM70.8 64.9c0-4.5-3.3-7.7-7.4-7.7S56 60.4 56 64.9c0 4.4 3.3 7.7 7.4 7.7s7.4-3.2 7.4-7.7m.1 13.5v-3.5c-2 2.4-5 3.9-8.5 3.9-7.4 0-13-5.9-13-14 0-8 5.8-14 13.2-14 3.5 0 6.4 1.5 8.4 3.9v-3.4h6.7v27h-6.8zm38.9-6c-2.3 0-3-.9-3-3.1v-12h4.3v-5.9h-4.3v-6.6H100v6.6h-8.8v-2.7c0-2.3.9-3.1 3.2-3.1H96v-5.2h-3.3c-5.6 0-8.3 1.8-8.3 7.5v3.6h-3.8v5.9h3.8v21.1h6.8V57.2h8.8v13.3c0 5.5 2.1 7.9 7.6 7.9h3.5v-6h-1.3zm24.5-10c-.5-3.5-3.4-5.6-6.7-5.6-3.4 0-6.1 2.1-6.8 5.6h13.5zm-13.6 4.2c.5 4 3.4 6.3 7 6.3 2.9 0 5.1-1.4 6.4-3.5h7c-1.6 5.7-6.8 9.4-13.5 9.4-8.2 0-13.9-5.7-13.9-13.9s6.1-14.1 14.1-14.1c8.1 0 13.9 5.9 13.9 14.1 0 .6-.1 1.2-.2 1.7h-20.8zm64.2-1.7c0-4.4-3.3-7.7-7.4-7.7s-7.4 3.2-7.4 7.7c0 4.4 3.3 7.7 7.4 7.7s7.4-3.4 7.4-7.7m-21.4 24.5V51.3h6.7v3.5c2-2.5 5-4 8.5-4 7.3 0 13 6 13 14s-5.8 14-13.2 14c-3.4 0-6.2-1.4-8.2-3.6v14.2h-6.8zm52.2-24.5c0-4.5-3.3-7.7-7.4-7.7s-7.4 3.2-7.4 7.7c0 4.4 3.3 7.7 7.4 7.7s7.4-3.2 7.4-7.7m.1 13.5v-3.5c-2 2.4-5 3.9-8.5 3.9-7.4 0-13-5.9-13-14 0-8 5.8-14 13.2-14 3.5 0 6.4 1.5 8.4 3.9v-3.4h6.7v27h-6.8zM151.5 54s1.7-3.1 5.8-3.1c1.8 0 2.9.6 2.9.6v6.9s-2.5-1.5-4.8-1.2-3.8 2.4-3.7 5.2v16h-6.9v-27h6.7V54z"></path>
              </svg>
            </a>
          </li>
          <li>
            <span className="me-1">
              We provide a <span className="fw-semibold">3-year warranty</span>
            </span>
            <svg
              className="text-body-emphasis"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M22.287 10.967l-1.7-2c-.215-.254-.346-.568-.373-.9L20 5.46c-.029-.379-.193-.734-.462-1.002s-.625-.43-1.004-.458l-2.607-.213c-.332-.027-.646-.158-.9-.373l-2-1.7c-.288-.247-.654-.383-1.033-.383s-.746.136-1.033.383l-2 1.7c-.254.215-.568.346-.9.373L5.467 4c-.38.028-.737.191-1.006.461s-.433.626-.46 1.006l-.213 2.607c-.027.332-.158.646-.373.9l-1.7 2c-.247.288-.383.654-.383 1.033s.136.746.383 1.033l1.7 2c.215.254.346.568.373.9L4 18.547c.031.377.196.731.465.998s.624.428 1.002.456l2.607.213c.332.027.646.158.9.373l2 1.7c.288.247.654.383 1.033.383s.746-.136 1.033-.383l2-1.7c.254-.215.568-.346.9-.373L18.534 20c.38-.028.737-.191 1.006-.46s.433-.626.46-1.006l.213-2.607c.027-.332.158-.646.373-.9l1.7-2c.245-.287.38-.652.38-1.03s-.135-.743-.38-1.03zm-11.08 4.153l-2.96-2.96 1.127-1.127 1.833 1.827 3.42-3.42 1.127 1.127-4.547 4.553z"
              ></path>
            </svg>
          </li>
        </ul>

        {/* Color options */}
        <div className="mb-4">
          <FormLabel className="pb-1 mb-2">
            Color: <span className="text-body fw-normal">{colorValue}</span>
          </FormLabel>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {[
              { image: '/img/shop/furniture/product/colors/color01.png', color: 'Viridian' },
              { image: '/img/shop/furniture/product/colors/color02.png', color: 'Green' },
              { image: '/img/shop/furniture/product/colors/color03.png', color: 'Blue' },
            ].map(({ image, color }, index) => (
              <ToggleButton
                key={index}
                type="radio"
                id={`color-image-${index}`}
                variant="image p-0"
                name="color-image-options"
                value={color}
                checked={colorValue === color}
                onChange={(e) => setColorValue(e.currentTarget.value)}
              >
                <Image src={image} width={56} height={56} alt={color} />
                <span className="visually-hidden">{color}</span>
              </ToggleButton>
            ))}
          </Stack>
        </div>

        {/* Material select */}
        <div className="mb-4">
          <FormLabel className="fw-semibold pb-1 mb-2">Material of the cover:</FormLabel>
          <SelectBox
            choices={[
              { value: 'natural', label: 'Natural fabric' },
              { value: 'synthetic', label: 'Synthetic fabric' },
              { value: 'leather', label: 'Leather' },
              { value: 'cotton', label: 'Cotton' },
            ]}
            inputClassName="form-select-lg rounded-pill"
            placeholder="Choose a material"
          />
        </div>

        {/* Add to cart + Wishlist buttons */}
        <div className="d-flex gap-3 pb-4 mb-2 mb-lg-3">
          <Button variant="dark" size="lg" className="w-100 rounded-pill" onClick={() => handleAddToCart(product)}>
            Add to cart
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="btn-icon rounded-circle animate-pulse"
            onClick={handleToggleWishlist}
          >
            <i className={`ci-heart${wishlist ? '-filled' : ''} fs-lg animate-target`} />
          </Button>
        </div>

        {/* Shipping info */}
        <div className="mb-4">
          <h6 className="d-flex align-items-center fs-sm mb-2">
            <i className="ci-delivery fs-lg me-2" />
            Free shipping
          </h6>
          <div className="fs-sm">
            <span className="me-1">Get it between May 24 - May 27 to</span>
            <Dropdown align="end" className="d-inline-block">
              <Dropdown.Toggle className="animate-underline bg-transparent border-0 fs-sm fw-semibold text-body-emphasis text-decoration-none p-0">
                <span className="animate-target">Preston - 06365</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end text-body p-3">
                Blackpool Road, 15
                <br />
                06365, Preston, UK
                <div className="h6 fs-sm pt-1 mb-0">Susan Gardner</div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Contact */}
        <div className="d-flex align-items-center justify-content-between bg-body-tertiary rounded p-3">
          <div className="me-3">
            <h6 className="fs-sm mb-1">Have a question?</h6>
            <p className="fs-sm mb-0">Contact us if you have questions</p>
          </div>
          <Link href="/contact/v2" className="btn btn-sm btn-outline-dark rounded-pill">
            Contact us
          </Link>
        </div>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductDetailsSidebarFurniture
