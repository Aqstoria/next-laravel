'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import { useModal } from '@/contexts/modal-context'
import type { Product } from '@/types/product'
import Image from 'next/image'
import StarRating from '@/components/reviews/star-rating'
import SelectBox from '@/components/forms/select-box'
import CountInput from '@/components/forms/count-input'
import Collapse from 'react-bootstrap/Collapse'
import Stack from 'react-bootstrap/Stack'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProductDetailsSidebarFashion = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false)
  const [colorValue, setColorValue] = useState('Dark blue')
  const { openModal, closeModal, isShown } = useModal()
  const [count, setCount] = useState(1)
  const { addToCart } = useCart('fashion')
  const { createToast, ToastRenderer } = useToast()

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[1],
      title: product.title,
      href: product.href,
      price: product.price,
      quantity: count || 1,
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

  return (
    <>
      <div className="ps-md-4 ps-xl-5">
        <div className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3">
          <StarRating rating={4} className="fs-sm" />
          <span className="text-body-tertiary fs-sm">23 reviews</span>
        </div>
        <h1 className="h3">{product.title}</h1>
        <p className="fs-sm mb-0">
          Made from high-quality denim fabric, this midi skirt offers durability and comfort for all-day wear. The
          mid-length design strikes the perfect balance between casual and chic, making it suitable for various
          occasions, from casual outings to semi-formal events.
        </p>
        <Collapse in={open}>
          <div id="moreDescription">
            <div className="fs-sm pt-3">
              <p>
                One of the standout features of this skirt is its functional pockets. With two spacious pockets at the
                front, you can conveniently carry your essentials such as keys, phone, or wallet without the need for a
                bulky bag. The pockets also add a touch of utility and flair to the overall look.
              </p>
              <p className="mb-0">
                The skirt&apos;s classic denim color and timeless design make it easy to pair with a variety of tops,
                blouses, and footwear, allowing you to create endless stylish ensembles. Whether you prefer a laid-back
                look with a graphic tee and sneakers or a more polished ensemble with a blouse and heels, this skirt
                effortlessly adapts to your style.
              </p>
            </div>
          </div>
        </Collapse>
        <a
          className={`d-inline-block fs-sm fw-medium text-dark-emphasis mt-1 cursor-pointer${!open ? ' collapsed' : ''} `}
          aria-expanded="false"
          aria-controls="moreDescription"
          data-label-collapsed="Read more"
          data-label-expanded="Show less"
          aria-label="Show / hide description"
          onClick={() => setOpen(!open)}
        />
        <div className="h4 d-flex align-items-center my-4">
          ${product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
          {product.price[1] !== undefined && (
            <del className="fs-sm fw-normal text-body-tertiary ms-2">
              ${product.price[1]?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </del>
          )}
        </div>

        {/* Color options */}
        <div className="mb-4">
          <FormLabel className="pb-1 mb-2">
            Color: <span className="text-body fw-normal">{colorValue}</span>
          </FormLabel>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {[
              { image: '/img/shop/fashion/product/colors/color01.png', color: 'Dark blue' },
              { image: '/img/shop/fashion/product/colors/color02.png', color: 'Pink' },
              { image: '/img/shop/fashion/product/colors/color03.png', color: 'Light blue' },
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

        {/* Size select */}
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <FormLabel className="fw-semibold mb-0">Size</FormLabel>
            <Nav>
              <Nav.Link className="animate-underline fw-normal px-0" onClick={() => openModal('sizeGuide')}>
                <i className="ci-ruler fs-lg me-2" />
                <span className="animate-target">Size guide</span>
              </Nav.Link>
            </Nav>
          </div>
          <SelectBox
            choices={[
              { value: 'xs', label: '6-8 (XS)' },
              { value: 's', label: '8-10 (S)' },
              { value: 'm', label: '10-12 (M)' },
              { value: 'l', label: '12-14 (L)' },
              { value: 'xl', label: '14-16 (XL)' },
            ]}
            inputClassName="form-select-lg"
            placeholder="Choose a size"
          />
        </div>

        {/* Count input + Add to cart button */}
        <div className="d-flex gap-3 mb-4">
          <CountInput
            size="lg"
            value={count}
            min={1}
            onChange={(value) => {
              setCount(value)
            }}
            aria-label="Count input"
            className="flex-shrink-0"
          />
          <Button variant="dark" size="lg" className="w-100" onClick={() => handleAddToCart(product)}>
            Add to cart
          </Button>
        </div>

        {/* Info list */}
        <ul className="list-unstyled gap-3 pb-3 pb-lg-4 mb-3">
          <li className="d-flex flex-wrap fs-sm">
            <span className="d-flex align-items-center fw-medium text-dark-emphasis me-2">
              <i className="ci-clock fs-base me-2" />
              Estimated delivery:
            </span>
            15 - 27 Mar, 2025
          </li>
          <li className="d-flex flex-wrap fs-sm">
            <span className="d-flex align-items-center fw-medium text-dark-emphasis me-2">
              <i className="ci-delivery fs-base me-2" />
              Free shipping &amp; returns:
            </span>
            On all orders over $100.00
          </li>
        </ul>

        {/* Stock status */}
        <div className="d-flex flex-wrap justify-content-between fs-sm mb-3">
          <span className="fw-medium text-dark-emphasis me-2">🔥 Hurry up! The sale is coming to an end</span>
          <span>
            <span className="fw-medium text-dark-emphasis">6</span> items in stock!
          </span>
        </div>
        <ProgressBar now={25} style={{ height: 4 }} aria-label="Left in stock" />
      </div>

      {/* Size chart (guide) modal */}
      <Modal
        show={isShown('sizeGuide')}
        onHide={() => closeModal('sizeGuide')}
        scrollable={true}
        centered={true}
        aria-labelledby="sizeGuideLabel"
      >
        <TabContainer defaultActiveKey="women">
          <Modal.Header className="modal-header bg-body-tertiary border-0 py-2 ps-2 pe-4">
            <Nav as="ul" variant="tabs" className="flex-nowrap text-nowrap py-2">
              <Nav.Item as="li">
                <Nav.Link eventKey="women">Women&apos;s size</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="men">Men&apos;s size</Nav.Link>
              </Nav.Item>
            </Nav>
            <CloseButton onClick={() => closeModal('sizeGuide')} />
          </Modal.Header>
          <Modal.Body className="p-0">
            <TabContent>
              <TabPane eventKey="women">
                <Table responsive className="fs-sm text-center mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="align-middle">
                        US
                        <br />
                        Sizes
                      </th>
                      <th scope="col" className="align-middle">
                        Euro
                        <br />
                        Sizes
                      </th>
                      <th scope="col" className="align-middle">
                        UK
                        <br />
                        Sizes
                      </th>
                      <th scope="col" className="align-middle">
                        Inches
                      </th>
                      <th scope="col" className="align-middle">
                        CM
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['4', '35', '2', '8.1875"', '20.8'],
                      ['4.5', '35', '2.5', '8.375"', '21.3'],
                      ['5', '35-36', '3', '8.5"', '21.6'],
                      ['5.5', '36', '3.5', '8.75"', '22.2'],
                      ['6', '36-37', '4', '8.875"', '22.5'],
                      ['6.5', '37', '4.5', '9.0625"', '23'],
                      ['7', '37-38', '5', '9.25"', '23.5'],
                      ['7.5', '38', '5.5', '9.375"', '23.8'],
                      ['8', '38-39', '6', '9.5"', '24.1'],
                      ['8.5', '39', '6.5', '9.6875"', '24.6'],
                      ['9', '39-40', '7', '9.875"', '25.1'],
                      ['9.5', '40', '7.5', '10"', '25.4'],
                      ['10', '40-41', '8', '10.1875"', '25.9'],
                      ['10.5', '41', '8.5', '10.3125"', '26.2'],
                      ['11', '41-42', '9', '10.5"', '26.7'],
                      ['11.5', '42', '9.5', '10.6875"', '27.1'],
                      ['12', '42-43', '10', '10.875"', '27.6'],
                    ].map((sizes, index) => (
                      <tr key={index}>
                        {sizes.map((size, index) => (
                          <td key={index} className={index === 0 ? 'fw-medium' : undefined}>
                            {size}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TabPane>
              <TabPane eventKey="men">
                <Table responsive className="fs-sm text-center mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="align-middle">
                        US
                        <br />
                        Sizes
                      </th>
                      <th scope="col" className="align-middle">
                        Euro
                        <br />
                        Sizes
                      </th>
                      <th scope="col" className="align-middle">
                        UK
                        <br />
                        Sizes
                      </th>
                      <th scope="col" className="align-middle">
                        Inches
                      </th>
                      <th scope="col" className="align-middle">
                        CM
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['6', '39', '5.5', '9.25"', '23.5'],
                      ['6.5', '39', '6', '9.5"', '24.1'],
                      ['7', '40', '6.5', '9.625"', '24.4'],
                      ['7.5', '40-41', '7', '9.75"', '24.8'],
                      ['8', '41', '7.5', '9.9375"', '25.4'],
                      ['8.5', '41-42', '8', '10.125"', '25.7'],
                      ['9', '42', '8.5', '10.25"', '26'],
                      ['9.5', '42-43', '9', '10.4375"', '26.7'],
                      ['10', '43', '9.5', '10.5625"', '27'],
                      ['10.5', '43-44', '10', '10.75"', '27.3'],
                      ['11', '44', '10.5', '10.9375"', '27.9'],
                      ['11.5', '44-45', '11', '11.125"', '28.3'],
                      ['12', '45', '11.5', '11.25"', '28.6'],
                      ['13', '46', '12.5', '11.5625"', '29.4'],
                      ['14', '47', '13.5', '11.875"', '30.2'],
                      ['15', '48', '14.5', '12.1875"', '31'],
                      ['16', '49', '15.5', '12.5"', '31.8'],
                    ].map((sizes, index) => (
                      <tr key={index}>
                        {sizes.map((size, index) => (
                          <td key={index} className={index === 0 ? 'fw-medium' : undefined}>
                            {size}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TabPane>
            </TabContent>
          </Modal.Body>
        </TabContainer>
      </Modal>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductDetailsSidebarFashion
