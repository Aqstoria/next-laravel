'use client'

import { useState, type FormEvent, useEffect } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import { useModal } from '@/contexts/modal-context'
import type { Product } from '@/types/product'
import ProductCardElectronics from '@/components/shop/product-card-electronics'
import SelectBox from '@/components/forms/select-box'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const AccountWishlist = () => {
  const { data, error, isLoading, mutate } = useSWR<Product[]>('/data/account/shop/wishlist.json', fetcher)
  const { addToCart } = useCart('electronics')
  const { createToast, ToastRenderer } = useToast()
  const { openModal, closeModal, isShown } = useModal()
  const [validated, setValidated] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [masterCheckboxLabel, setMasterCheckboxLabel] = useState('Select all')
  const [masterChecked, setMasterChecked] = useState(false)

  // Track selection status and update UI accordingly
  useEffect(() => {
    if (!data || data.length === 0) return

    const allSelected = selectedItems.length === data.length
    const someSelected = selectedItems.length > 0

    setMasterChecked(someSelected)
    setMasterCheckboxLabel(allSelected ? 'Unselect all' : 'Select all')
  }, [selectedItems, data])

  // Handle master checkbox toggle
  const handleMasterCheckboxToggle = () => {
    if (selectedItems.length === data?.length) {
      // Unselect all
      setSelectedItems([])
    } else {
      // Select all
      setSelectedItems(data?.map((product) => product.id) || [])
    }
  }

  // Handle individual checkbox toggle
  const handleItemSelection = (productId: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, productId])
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== productId))
    }
  }

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[1],
      title: product.title,
      href: product.href,
      price: product.price,
      specs: product.specs,
      quantity: 1,
      badge: product.badge,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: ` ${product.title}`,
      },
      'cart'
    )
  }

  // Handle add selected items to cart
  const handleAddSelectedToCart = () => {
    if (!data) return

    const selectedProducts = data.filter((product) => selectedItems.includes(product.id))

    selectedProducts.forEach((product) => {
      addToCart({
        id: product.id,
        image: product.image[1],
        title: product.title,
        href: product.href,
        price: product.price,
        specs: product.specs,
        quantity: 1,
        badge: product.badge,
      })
    })

    // Create a toast with the list of added products
    if (selectedProducts.length > 0) {
      createToast(
        {
          action: 'Added to cart:',
          product:
            selectedProducts.length === 1
              ? ` ${selectedProducts[0].title}`
              : ` ${selectedProducts.length} products (${selectedProducts.map((p) => p.title).join(', ')})`,
        },
        'cart'
      )
    }
  }

  // Handle remove selected items
  const handleRemoveSelected = () => {
    if (!data) return

    // Filter out selected items
    const updatedData = data.filter((product) => !selectedItems.includes(product.id))

    // Update local data with mutate
    mutate(updatedData, false)

    // Clear selection
    setSelectedItems([])

    // Show toast notification
    createToast(
      {
        action: 'Removed from wishlist:',
        product: ` ${selectedItems.length} ${selectedItems.length === 1 ? 'product' : 'products'}`,
      },
      'wishlist'
    )
  }

  // Handle wishlist form validation
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  if (isLoading)
    return (
      <>
        <h1 className="h2 pb-3">Wishlist</h1>
        <Row xs={2} md={3} className="g-4">
          {Array.from({ length: 4 }, (_, index) => {
            const colClasses = ['', '', '', 'd-md-none']
            return (
              <Col key={index} className={index === 3 ? 'd-md-none' : undefined}>
                <Placeholder as="div" animation="wave" className="position-relative mb-3">
                  <Placeholder
                    className="ratio rounded"
                    style={{ '--cz-aspect-ratio': 'calc(282 / 306 * 100%)' } as React.CSSProperties}
                  />
                  <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
                </Placeholder>
                <Placeholder as="p" animation="glow" className="mb-1">
                  <Placeholder xs={5} size="xs" />
                </Placeholder>
                <Placeholder as="h6" animation="glow" className="mb-2">
                  <Placeholder xs={12} size="sm" />
                </Placeholder>
                <Placeholder as="p" animation="glow" className="mb-0">
                  <Placeholder xs={5} />
                </Placeholder>
              </Col>
            )
          })}
        </Row>
      </>
    )

  if (error)
    return (
      <>
        <h1 className="h2 pb-3">Wishlist</h1>
        <Alert variant="danger" className="d-inline-flex">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading products from wishlist:</span> {error.message}
          </div>
        </Alert>
      </>
    )

  // Empty wishlist state
  if (!data || data.length === 0) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
          <h1 className="h2 me-3 mb-0">Wishlist</h1>
          <Nav>
            <Nav.Link className="animate-underline px-0 py-1 py-ms-2" onClick={() => openModal('createWishlist')}>
              <i className="ci-plus fs-base me-1" />
              <span className="animate-target">Add wishlist</span>
            </Nav.Link>
          </Nav>
        </div>

        <div className="text-center py-5 my-5">
          <i className="ci-heart d-block fs-1 text-muted mb-4" />
          <h3 className="h4 mb-2">Your wishlist is empty</h3>
          <p className="text-muted mb-4">
            Add items to your wishlist to keep track of products you&apos;re interested in.
          </p>
          <Button variant="primary" size="lg" href="/shop/electronics">
            Continue shopping
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Page title + Add list button */}
      <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
        <h1 className="h2 me-3 mb-0">Wishlist</h1>
        <Nav>
          <Nav.Link className="animate-underline px-0 py-1 py-ms-2" onClick={() => openModal('createWishlist')}>
            <i className="ci-plus fs-base me-1" />
            <span className="animate-target">Add wishlist</span>
          </Nav.Link>
        </Nav>
      </div>

      {/* Wishlist selector */}
      <div className="border-bottom pb-4 mb-3">
        <Row className="align-items-center justify-content-between">
          <Col sm={7} md={8} xxl={9} className="d-flex align-items-center mb-3 mb-sm-0">
            <h5 className="me-2 mb-0">Interesting offers</h5>
            <Dropdown align="end" className="ms-auto ms-sm-0">
              <Dropdown.Toggle variant="secondary" className="btn-icon btn-ghost border-0" aria-label="Select wishlist">
                <i className="ci-more-vertical fs-xl" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <div className="d-flex flex-column gap-1 mb-2">
                  {[
                    { id: 'offers', label: 'Interesting offers' },
                    { id: 'topPicks', label: 'Top picks collection' },
                    { id: 'family', label: 'Family stuff' },
                    { id: 'mustHaves', label: 'My must-haves' },
                    { id: 'husband', label: 'For my husband' },
                  ].map(({ id, label }: { id: string; label: string }, index) => (
                    <Form.Check key={id}>
                      <Form.Check.Input type="radio" id={id} name="wishlist" defaultChecked={index === 0} />
                      <Form.Check.Label htmlFor={id} className="text-body">
                        {label}
                      </Form.Check.Label>
                    </Form.Check>
                  ))}
                </div>
                <Button variant="dark" size="sm" className="w-100">
                  Select wishlist
                </Button>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={5} md={4} xxl={3}>
            <SelectBox
              choices={[
                { value: 'By date added', label: 'By date added' },
                { value: 'By price ascending', label: 'By price ascending' },
                { value: 'By price descending', label: 'By price descending' },
                { value: 'By rating', label: 'By rating' },
              ]}
              removeItemButton={false}
              aria-label="Sort wishlist select"
            />
          </Col>
        </Row>
      </div>

      {/* Master checkbox + Action buttons */}
      <Nav className="align-items-center mb-4">
        <Form.Check bsPrefix="d-flex align-items-center animate-underline fs-lg pe-2 py-2 me-4">
          <Form.Check.Input id="wishlistMaster" checked={masterChecked} onChange={handleMasterCheckboxToggle} />
          <Form.Check.Label htmlFor="wishlistMaster" className="nav-link animate-target p-0 mt-1 ms-2">
            {masterCheckboxLabel}
          </Form.Check.Label>
        </Form.Check>
        <div className={`d-flex flex-wrap ${selectedItems.length > 0 ? '' : 'd-none'}`}>
          <Nav.Link className="animate-underline px-0 pe-sm-2 py-2 me-4" onClick={handleAddSelectedToCart}>
            <i className="ci-shopping-cart fs-base me-2" />
            <span className="animate-target d-none d-md-inline">Add to cart</span>
          </Nav.Link>
          <Nav.Link className="animate-underline px-0 pe-sm-2 py-2 me-4">
            <i className="ci-repeat fs-base me-2" />
            <span className="animate-target d-none d-md-inline">Relocate</span>
          </Nav.Link>
          <Nav.Link className="animate-underline px-0 py-2" onClick={handleRemoveSelected}>
            <i className="ci-trash fs-base me-1" />
            <span className="animate-target d-none d-md-inline">Remove selected</span>
          </Nav.Link>
        </div>
      </Nav>

      {/* Wishlist items (Grid) */}
      <Row xs={2} md={3} className="g-4">
        {data.map((product) => (
          <Col key={product.id}>
            <div className="position-relative">
              <div className="position-absolute top-0 end-0 z-3 fs-lg p-3">
                <Form.Check>
                  <Form.Check.Input
                    id={product.id}
                    checked={selectedItems.includes(product.id)}
                    onChange={(e) => handleItemSelection(product.id, e.target.checked)}
                  />
                </Form.Check>
              </div>
              <ProductCardElectronics
                image={{ src: product.image[0], width: 516, height: 480, alt: product.title }}
                title={product.title}
                href={product.href}
                price={{
                  current: product.price[0],
                  original: product.price[1],
                }}
                reviews={
                  product.reviews && {
                    rating: product.reviews[0],
                    count: product.reviews[1],
                  }
                }
                badge={
                  product.badge && {
                    label: product.badge[1],
                    bg: product.badge[0],
                  }
                }
                cartButton={{
                  onClick: () => handleAddToCart(product),
                }}
                wishlistButton={false}
                compareButton={false}
                active={selectedItems.includes(product.id)}
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Create new wishlist modal */}
      <Modal
        show={isShown('createWishlist')}
        onHide={() => closeModal('createWishlist')}
        centered
        backdrop="static"
        aria-labelledby="createWishlistModalLabel"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="createWishlistModalLabel">
            Create new wishlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="wishlistName" className="mb-3">
              <Form.Label>
                Wishlist name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">Please enter the wishlist name!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="wishlistDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Privacy</Form.Label>
              <SelectBox
                choices={[
                  { value: 'Private', label: 'Private' },
                  { value: 'Public', label: 'Public' },
                  { value: 'Shared', label: 'Shared' },
                ]}
                removeItemButton={false}
                aria-label="Wishlist privacy setting select"
              />
            </Form.Group>
            <div className="d-flex gap-3">
              <Button type="reset" variant="secondary" className="w-100" onClick={() => closeModal('createWishlist')}>
                Cancel
              </Button>
              <Button type="submit" className="w-100">
                Create wishlist
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default AccountWishlist
