'use client'

import { useState, Fragment } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Link from 'next/link'
import ProductCardGrocery from '@/components/shop/product-card-grocery'
import CountInput from '@/components/forms/count-input'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const ProductDetailsSidebarGrocery = ({ product }: { product: Product }) => {
  const { data, error, isLoading } = useSWR<Product[]>('/data/grocery/related-products.json', fetcher)
  const [count, setCount] = useState(1)
  const { addToCart, decreaseQuantity } = useCart('grocery')
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state only
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[1],
      title: product.title,
      href: product.href,
      price: product.price,
      quantity: count || 1,
      description: product.description,
      badge: product.badge,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: ` ${count} x ${product.title}`,
      },
      'cart'
    )
  }

  // Handle remove from cart with toast
  const handleRemoveFromCart = (product: Product) => {
    decreaseQuantity(product.id)

    createToast(
      {
        action: 'Removed from cart:',
        product: ` ${product.title}`,
      },
      'cart'
    )
  }

  // Handle toggle wishlist with toast
  const handleToggleWishlist = (product: Product) => {
    const isCurrentlyInWishlist = wishlistItems[product.id] || false

    setWishlistItems((prev) => ({
      ...prev,
      [product.id]: !isCurrentlyInWishlist,
    }))

    if (isCurrentlyInWishlist) {
      createToast(
        {
          action: 'Removed from wishlist:',
          product: ` ${product.title}`,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist:',
          product: ` ${product.title}`,
        },
        'wishlist'
      )
    }
  }

  return (
    <Fragment>
      <div className="ps-xxl-3">
        <p className="fs-sm text-body-secondary">Cereals / Nestlé</p>
        <h1 className="h5 mb-2">{product.title}</h1>
        <div className="fs-sm fw-medium">{product.description}</div>
        <div className="border rounded-pill px-4 py-2 my-4">
          <div className="text-dark-emphasis fs-sm py-1">
            We will deliver your goods as soon as possible
            <Link href="#" className="text-dark-emphasis fw-medium ms-1">
              Check availability
            </Link>
          </div>
        </div>
        <div className="h3">
          ${product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
          {product.price[1] !== undefined && (
            <del className="fs-base fw-normal text-body-tertiary">
              $
              {product.price[1]?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </del>
          )}
        </div>
        <div className="d-flex gap-3 mb-4">
          <CountInput
            size="lg"
            value={count}
            min={1}
            onChange={(value) => {
              setCount(value)
            }}
            aria-label="Count input"
            className="flex-shrink-0 rounded-pill"
          />
          <Button size="lg" className="rounded-pill w-100" onClick={() => handleAddToCart(product)}>
            Add to cart
          </Button>
        </div>
        <p className="fs-sm mb-4">
          Muesli Fitness Nutritious Energy is a popular breakfast cereal that is a healthy and nutritious way to start
          your day. This delicious cereal is made up of a combination of whole grains, nuts, seeds, and dried fruits.
        </p>
        <div className="d-flex flex-wrap gap-3 gap-xxl-4 fs-sm text-dark-emphasis mb-2">
          {[
            ['ci-gluten-free', 'Gluten-free'],
            ['ci-broccoli', 'Plant based'],
            ['ci-leaf', 'Vegan'],
            ['ci-avocado', 'Keto'],
          ].map((item, index, arr) => (
            <div key={index} className={`d-flex align-items-center${index < arr.length - 1 ? ' me-3' : ''}`}>
              <i className={`${item[0]} fs-xl text-body-emphasis me-2`} />
              {item[1]}
            </div>
          ))}
        </div>

        {/* Related products */}
        <h2 className="h5 pt-5">Related products</h2>
        {isLoading ? (
          <div className="d-flex border rounded-5 px-3 mb-4">
            <div className="w-50 py-3">
              <Placeholder as="div" animation="wave" className="position-relative mb-2">
                <Placeholder
                  className="ratio rounded"
                  style={{ '--cz-aspect-ratio': 'calc(160 / 191 * 100%)' } as React.CSSProperties}
                />
                <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mb-0">
                <Placeholder xs={5} size="sm" />
              </Placeholder>
              <Placeholder as="h6" animation="glow" className="mb-0">
                <Placeholder xs={12} size="xs" />
                <Placeholder xs={8} size="xs" />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mb-0">
                <Placeholder xs={5} size="xs" />
              </Placeholder>
            </div>
            <hr className="vr my-0 mx-3" />
            <div className="w-50 py-3">
              <Placeholder as="div" animation="wave" className="position-relative mb-2">
                <Placeholder
                  className="ratio rounded"
                  style={{ '--cz-aspect-ratio': 'calc(160 / 191 * 100%)' } as React.CSSProperties}
                />
                <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mb-0">
                <Placeholder xs={5} size="sm" />
              </Placeholder>
              <Placeholder as="h6" animation="glow" className="mb-0">
                <Placeholder xs={12} size="xs" />
                <Placeholder xs={8} size="xs" />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mb-0">
                <Placeholder xs={5} size="xs" />
              </Placeholder>
            </div>
          </div>
        ) : error ? (
          <Alert variant="danger" className="d-inline-flex fs-sm mb-0">
            <i className="ci-alert-triangle fs-base pe-1 mt-1 me-2" />
            <div>
              <span className="fw-semibold">Error loading products:</span> {error.message}
            </div>
          </Alert>
        ) : (
          <div className="d-flex border rounded-5 px-2 mb-4">
            {(data || []).slice(0, 2).map((product, index) => (
              <Fragment key={product.id}>
                <div className="w-50">
                  <ProductCardGrocery
                    image={{ src: product.image[0], width: 282, height: 236, alt: product.title }}
                    title={product.title}
                    href={product.href}
                    price={{
                      current: product.price[0],
                      original: product.price[1],
                    }}
                    description={product.description}
                    badge={
                      product.badge && {
                        label: product.badge[1],
                        bg: product.badge[0],
                      }
                    }
                    cartButton={{
                      onIncrement: () => handleAddToCart(product),
                      onDecrement: () => handleRemoveFromCart(product),
                    }}
                    wishlistButton={{
                      active: wishlistItems[product.id] || false,
                      onClick: () => handleToggleWishlist(product),
                    }}
                  />
                </div>
                {index === 0 && <hr className="vr my-0 mx-2" />}
              </Fragment>
            ))}
          </div>
        )}

        {/* Product info accordion */}
        <Accordion className="accordion-alt-icon py-2 mb-4">
          <Accordion.Item eventKey="about">
            <Accordion.Header as="h3" className="animate-underline" id="aboutHeading">
              <span className="animate-target me-2">About this product</span>
            </Accordion.Header>
            <Accordion.Body aria-labelledby="aboutHeading">
              Muesli Fitness Nutritious Energy is a delicious and satisfying blend of gluten-free oats, crunchy nuts,
              nutritious seeds, and flavorful dried fruits. Packed with essential nutrients and fiber, this muesli is
              perfect for those looking to start their day with a nutritious breakfast or for a healthy snack on the go.
              Enjoy the goodness of natural ingredients without compromising on taste or quality. Ideal for individuals
              following a gluten-free diet or anyone seeking a wholesome and energizing option.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="ingredients">
            <Accordion.Header as="h3" className="animate-underline" id="ingredientsHeading">
              <span className="animate-target me-2">Ingredients</span>
            </Accordion.Header>
            <Accordion.Body aria-labelledby="ingredientsHeading">
              <ul className="m-0">
                {[
                  'Gluten-free oats',
                  'Almonds',
                  'Sunflower seeds',
                  'Pumpkin seeds',
                  'Dried cranberries (cranberries, sugar, sunflower oil)',
                  'Dried apricots (apricots, rice flour)',
                  'Coconut flakes',
                  'Flax seeds',
                  'Chia seeds',
                  'Cinnamon',
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="calories">
            <Accordion.Header as="h3" className="animate-underline" id="caloriesHeading">
              <span className="animate-target me-2">Calories</span>
            </Accordion.Header>
            <Accordion.Body aria-labelledby="caloriesHeading">
              Approximately <span className="text-body-emphasis fw-medium">400 kcal / 100g</span> of product
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="delivery">
            <Accordion.Header as="h3" className="animate-underline" id="deliveryHeading">
              <span className="animate-target me-2">Delivery info</span>
            </Accordion.Header>
            <Accordion.Body aria-labelledby="deliveryHeading">
              <ul className="m-0">
                <li>
                  Enjoy free delivery for orders <span className="text-body-emphasis fw-medium">over $50!</span>
                </li>
                <li>
                  For orders <span className="text-body-emphasis fw-medium">below $50</span>, a standard delivery fee of{' '}
                  <span className="text-body-emphasis fw-medium">$5</span> applies.
                </li>
                <li>We strive to deliver your order in a timely manner to ensure your satisfaction.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="d-flex align-items-center position-relative text-dark-emphasis">
          <i className="ci-edit fs-lg me-2" />
          <Link href="#" className="stretched-link fs-sm text-dark-emphasis">
            Report incorrect product information
          </Link>
        </div>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </Fragment>
  )
}

export default ProductDetailsSidebarGrocery
