'use client'

import { useState, useEffect, useRef, Fragment, type CSSProperties } from 'react'
import { useStickyElement } from '@/hooks/use-sticky-element'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useCart } from '@/contexts/cart-context'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '@/components/logo'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Collapse from 'react-bootstrap/Collapse'
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ThemeSwitcher from '../theme-switcher'
import SelectBox from '../forms/select-box'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import { mainNavigation, categoriesGrocery, featuredCategoriesGrocery } from '@/app/navigation'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const HeaderGrocery = ({
  logoHref,
  featuredCategories = true,
}: {
  logoHref?: string
  featuredCategories?: boolean
}) => {
  const { stickyElementRef, isStuck } = useStickyElement<HTMLDivElement>()
  const [searchOpen, setSearchOpen] = useState(false)
  const [deliveryCollapseOpen, setDeliveryCollapseOpen] = useState(true)
  const [pickupCollapseOpen, setPickupCollapseOpen] = useState(true)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { cart, calculateTotal, removeFromCart, increaseQuantity, decreaseQuantity } = useCart('grocery')

  const pathname = usePathname()
  const lastSegment = pathname.split('/').filter(Boolean).pop()

  // Autofocus search input when it is open on mobile devices
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [searchOpen])

  // Cart quantity badge (counter)
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)

  return (
    <Fragment>
      <Navbar
        ref={stickyElementRef}
        as="header"
        expand={true}
        bg="body"
        className={`navbar-sticky sticky-top d-block z-fixed py-1 py-lg-0 py-xl-1 px-0${isStuck ? ' is-stuck' : ''}`}
      >
        <Container className="justify-content-start py-2 py-lg-3">
          {/* Offcanvas menu toggler (Hamburger) */}
          <Navbar.Toggle className="d-block flex-shrink-0 me-3 me-sm-4" onClick={() => openOffcanvas('navbarNav')} />

          {/* Navbar brand (Logo) */}
          <Logo
            href={logoHref ? logoHref : '/home/grocery'}
            icon={false}
            className="fs-2 p-0 pe-lg-2 pe-xxl-0 me-0 me-sm-3 me-md-4 me-xxl-5"
          >
            Cartzilla
          </Logo>

          {/* Categories dropdown visible on screens > 991px wide (lg breakpoint) */}
          <Dropdown className="d-none d-lg-block w-100 me-4" style={{ maxWidth: 200 }}>
            {categoriesGrocery.map(({ icon, title, megamenu }, index) => (
              <Fragment key={index}>
                <Dropdown.Toggle bsPrefix="btn btn-lg btn-secondary w-100 border-0 rounded-pill">
                  <i className={`${icon} fs-lg me-2 ms-n1`} />
                  {title}
                  <i className="ci-chevron-down fs-lg me-2 ms-auto me-n1" />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="rounded-4 p-4"
                  style={{ '--cz-dropdown-spacer': '.75rem', marginLeft: -75 } as CSSProperties}
                >
                  <div className="d-flex gap-4">
                    {megamenu?.map((group, i) => (
                      <div key={i} style={{ minWidth: 170 }}>
                        {group.group?.map(({ title, links }, j) => (
                          <Fragment key={j}>
                            <div className={`h6${j > 0 ? ' pt-4' : ''}`}>{title}</div>
                            <Nav as="ul" navbar={false} className="flex-column gap-2 mt-n2">
                              {links?.map(({ title, href }, k) => (
                                <li key={k} className="d-flex w-100 pt-1">
                                  <Nav.Link
                                    as={Link}
                                    href={href}
                                    className="animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                  >
                                    {title}
                                  </Nav.Link>
                                </li>
                              ))}
                            </Nav>
                          </Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Fragment>
            ))}
          </Dropdown>

          {/* Search bar visible on screens > 768px wide (md breakpoint) */}
          <div className="position-relative w-100 d-none d-md-block me-3 me-xl-4">
            <FormControl
              type="search"
              size="lg"
              className="rounded-pill"
              placeholder="Search for products"
              aria-label="Search"
            />
            <Button
              variant="secondary"
              className="btn-icon btn-ghost fs-lg border-0 position-absolute top-0 end-0 rounded-circle mt-1 me-1"
              aria-label="Search button"
            >
              <i className="ci-search" />
            </Button>
          </div>

          {/* Delivery options toggle visible on screens > 1200px wide (xl breakpoint) */}
          <Nav navbar={false} className="me-4 me-xxl-5 d-none d-xl-block">
            <Nav.Link
              className="flex-column align-items-start animate-underline p-0"
              onClick={() => openOffcanvas('deliveryOptions')}
            >
              <div className="h6 fs-sm mb-0">Delivery</div>
              <div className="d-flex align-items-center fs-sm fw-normal text-body">
                <span className="animate-target text-nowrap">Set your address</span>
                <i className="ci-chevron-down fs-base ms-1" />
              </div>
            </Nav.Link>
          </Nav>

          {/* Button group */}
          <div className="d-flex align-items-center gap-md-1 gap-lg-2 ms-auto">
            {/* Theme switcher (light/dark/auto) */}
            <ThemeSwitcher ghostButton style={{ '--cz-btn-size': '2.5rem' } as CSSProperties} />

            {/* Search toggle button visible on screens < 768px wide (md breakpoint) */}
            <Button
              variant="outline-secondary"
              className="btn-icon fs-xl border-0 rounded-circle animate-shake d-md-none"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-controls="searchBar"
              aria-expanded={searchOpen}
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>

            {/* Delivery options button visible on screens < 1200px wide (xl breakpoint) */}
            <Button
              variant="outline-secondary"
              className="btn-icon fs-lg border-0 rounded-circle animate-scale d-xl-none"
              onClick={() => openOffcanvas('deliveryOptions')}
              aria-label="Toggle delivery options offcanvas"
            >
              <i className="ci-map-pin animate-target" />
            </Button>

            {/* Account button visible on screens > 768px wide (md breakpoint) */}
            <Link
              href="/account"
              className="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
            >
              <i className="ci-user animate-target" />
              <span className="visually-hidden">Account</span>
            </Link>

            {/* Cart button */}
            <Button
              variant="outline-secondary"
              onClick={() => openOffcanvas('cart')}
              className="btn-icon fs-xl position-relative border-0 rounded-circle animate-scale"
              aria-label="Shopping cart"
            >
              {cartCounter > 0 && (
                <Badge
                  pill
                  bg="primary"
                  className="position-absolute top-0 start-100 fs-xs rounded-pill ms-n3 z-2"
                  style={
                    {
                      minWidth: 18,
                      '--cz-badge-padding-y': '.25em',
                      '--cz-badge-padding-x': '.42em',
                    } as CSSProperties
                  }
                >
                  {cartCounter}
                </Badge>
              )}
              <i className="ci-shopping-cart animate-target" />
            </Button>
          </div>
        </Container>

        {/* Search collapse available on screens < 768px wide (md breakpoint) */}
        <Collapse in={searchOpen} className="d-md-none">
          <div id="searchBar">
            <Container className="pt-2 pb-3">
              <div className="position-relative">
                <i className="ci-search position-absolute top-50 translate-middle-y d-flex fs-lg ms-3" />
                <FormControl
                  ref={searchRef}
                  type="search"
                  className="form-icon-start rounded-pill"
                  placeholder="Search the products"
                />
              </div>
            </Container>
          </div>
        </Collapse>
      </Navbar>

      {/* Site menu offcanvas */}
      <Offcanvas
        show={isOpen('navbarNav')}
        onHide={() => closeOffcanvas('navbarNav')}
        placement="start"
        aria-labelledby="navbarNavLabel"
      >
        <Offcanvas.Header closeButton className="py-3">
          <Offcanvas.Title as="h5" id="navbarNavLabel">
            Browse Cartzilla
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-0 pb-3">
          <Accordion>
            {/* Categories collapse visible on screens < 992px wide (lg breakpoint) */}
            <Accordion.Item eventKey="categories" className="border-0 d-lg-none">
              {categoriesGrocery.map(({ icon, title, megamenu }, index) => (
                <Fragment key={index}>
                  <div className="accordion-header">
                    <Accordion.Button className="animate-underline fw-medium py-2">
                      <i className={`${icon} fs-lg me-2`} />
                      <span className="d-block animate-target py-1">{title}</span>
                    </Accordion.Button>
                  </div>
                  <Accordion.Body className="pb-3">
                    <Dropdown.Menu
                      renderOnMount
                      show
                      className="position-static d-flex flex-column gap-4 shadow-none p-4"
                    >
                      {megamenu?.map((group, i) => (
                        <div key={i}>
                          {group.group?.map(({ title, links }, j) => (
                            <Fragment key={j}>
                              <div className={`h6${j > 0 ? ' pt-4' : ''}`}>{title}</div>
                              <Nav as="ul" navbar={false} className="flex-column gap-2 mt-n2">
                                {links?.map(({ title, href }, k) => (
                                  <li key={k} className="d-flex w-100 pt-1">
                                    <Nav.Link
                                      href={href}
                                      className="animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                      onClick={() => closeOffcanvas('navbarNav')}
                                    >
                                      {title}
                                    </Nav.Link>
                                  </li>
                                ))}
                              </Nav>
                            </Fragment>
                          ))}
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Accordion.Body>
                </Fragment>
              ))}
            </Accordion.Item>

            {/* Rest of the menu */}
            {mainNavigation.map(({ title, href, submenu, megamenu }, index) => (
              <Fragment key={index}>
                {submenu && (
                  <Accordion.Item key={index} eventKey={title} className="border-0">
                    <div className="accordion-header">
                      <Accordion.Button className="animate-underline fw-medium py-2">
                        <span className="d-block animate-target py-1">{title}</span>
                      </Accordion.Button>
                    </div>
                    <Accordion.Body className="pb-3">
                      <Accordion className="dropdown-menu show position-static shadow-none">
                        {submenu.map(({ title, subtitle, href, submenu }, index) => (
                          <Fragment key={index}>
                            {submenu ? (
                              <Accordion.Item key={index} eventKey={title} className="border-0">
                                <Accordion.Button bsPrefix="dropdown-item dropdown-toggle">{title}</Accordion.Button>
                                <Accordion.Body className="dropdown-menu show position-static shadow-none p-2 mb-1">
                                  {submenu.map(({ title, href }, index) => (
                                    <Dropdown.Item
                                      key={index}
                                      as={Link}
                                      href={href}
                                      onClick={() => closeOffcanvas('navbarNav')}
                                    >
                                      {title}
                                    </Dropdown.Item>
                                  ))}
                                </Accordion.Body>
                              </Accordion.Item>
                            ) : (
                              <Dropdown.Item
                                key={index}
                                as={Link}
                                href={href}
                                className={subtitle ? 'd-block mb-0' : ''}
                                onClick={() => closeOffcanvas('navbarNav')}
                              >
                                {subtitle ? (
                                  <>
                                    <span className="fw-medium">{title}</span>
                                    <span className="d-block fs-xs text-body-secondary">{subtitle}</span>
                                  </>
                                ) : (
                                  title
                                )}
                              </Dropdown.Item>
                            )}
                          </Fragment>
                        ))}
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                )}
                {megamenu && (
                  <Accordion.Item key={index} eventKey={title} className="border-0">
                    <div className="accordion-header">
                      <div className="accordion-header">
                        <Accordion.Button className="animate-underline fw-medium py-2">
                          <span className="d-block animate-target py-1">{title}</span>
                        </Accordion.Button>
                      </div>
                    </div>
                    <Accordion.Body className="pb-3">
                      <Dropdown.Menu renderOnMount show className="position-static shadow-none p-4">
                        <Stack gap={4}>
                          {[megamenu.slice(0, 3), megamenu.slice(3, 5), megamenu.slice(5, 7)].map(
                            (column, colIndex) => (
                              <Stack key={colIndex} gap={4}>
                                {column.map(({ title, links }, index) => (
                                  <div key={index}>
                                    <div className="h6 mb-2">{title}</div>
                                    <Nav as="ul" navbar={false} className="flex-column gap-2 mt-0">
                                      {links?.map(({ title, href }, index) => (
                                        <li key={index} className="d-flex w-100 pt-1">
                                          <Nav.Link
                                            as={Link}
                                            href={href}
                                            className="animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                            onClick={() => closeOffcanvas('navbarNav')}
                                          >
                                            {title}
                                          </Nav.Link>
                                        </li>
                                      ))}
                                    </Nav>
                                  </div>
                                ))}
                              </Stack>
                            )
                          )}
                        </Stack>
                      </Dropdown.Menu>
                    </Accordion.Body>
                  </Accordion.Item>
                )}
                {!submenu && !megamenu && (
                  <div className="h6 fw-medium py-1 mb-0">
                    <Link
                      href={href}
                      className="d-block animate-underline py-1"
                      onClick={() => closeOffcanvas('navbarNav')}
                    >
                      <span className="d-inline-block animate-target py-1">{title}</span>
                    </Link>
                  </div>
                )}
              </Fragment>
            ))}
          </Accordion>
        </Offcanvas.Body>

        {/* Account button visible on screens < 768px wide (md breakpoint) */}
        <Offcanvas.Header className="flex-column align-items-start d-md-none">
          <Link href="/account" className="btn btn-lg btn-outline-secondary w-100 rounded-pill">
            <i className="ci-user fs-lg ms-n1 me-2" />
            Account
          </Link>
        </Offcanvas.Header>
      </Offcanvas>

      {/* Shopping cart offcanvas */}
      <Offcanvas
        show={isOpen('cart')}
        onHide={() => closeOffcanvas('cart')}
        placement="end"
        className="pb-sm-2 px-sm-2"
        style={{ width: 500 }}
        aria-labelledby="shoppingCartLabel"
      >
        <Offcanvas.Header className="flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <Offcanvas.Title as="h4" id="shoppingCartLabel">
              Shopping cart
            </Offcanvas.Title>
            <CloseButton onClick={() => closeOffcanvas('cart')} />
          </div>
          {cart.length > 0 && (
            <Fragment>
              {calculateTotal() >= 50 ? (
                <div className="alert alert-success py-2 fs-sm mb-0">
                  <div className="text-body-emphasis fw-medium py-1">
                    Congratulations 🎉 You have added more than <span className="fw-semibold">$50</span> to your cart.{' '}
                    <span className="fw-semibold">Delivery is free</span> for you!
                  </div>
                </div>
              ) : (
                <Fragment>
                  <p className="fs-sm">
                    Buy{' '}
                    <span className="text-dark-emphasis fw-semibold">
                      $
                      {(50 - calculateTotal()).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>{' '}
                    more to get <span className="text-dark-emphasis fw-semibold">Free Shipping</span>.
                  </p>
                  <ProgressBar
                    variant="warning"
                    now={(calculateTotal() / 50) * 100}
                    className="w-100"
                    style={{ height: 4 }}
                    aria-label="Free shipping progress"
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </Offcanvas.Header>
        {cart.length > 0 ? (
          <>
            <Offcanvas.Body className="pt-2">
              <div className="d-flex flex-column gap-4">
                {cart.map((item) => (
                  <ShoppingCartListItem
                    key={item.id}
                    image={{ src: item.image, alt: item.title }}
                    title={item.title}
                    multilineTitle
                    href={item.href}
                    price={{
                      current: item.price[0],
                      original: item.price[1],
                    }}
                    badge={{
                      label: item.badge?.[1] ?? '',
                      bg: item.badge?.[0] ?? '',
                    }}
                    countInput={{
                      pill: true,
                      value: item.quantity,
                      onIncrement: () => {
                        increaseQuantity(item.id)
                      },
                      onDecrement: () => {
                        decreaseQuantity(item.id)
                      },
                    }}
                    removeButton={{
                      onClick: () => {
                        removeFromCart(item.id)
                      },
                    }}
                    onClick={() => closeOffcanvas('cart')}
                  />
                ))}
              </div>
            </Offcanvas.Body>
            <Offcanvas.Header className="flex-column align-items-start">
              <Stack direction="horizontal" className="justify-content-between w-100 mb-3 mb-md-4">
                <span className="text-light-emphasis">Subtotal:</span>
                <span className="h6 mb-0">
                  $
                  {calculateTotal().toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </Stack>
              <Stack direction="horizontal" gap={3} className="w-100">
                <Link
                  href="/shop/checkout-v2"
                  className="btn btn-lg btn-secondary w-100 rounded-pill"
                  onClick={() => closeOffcanvas('cart')}
                >
                  View cart
                </Link>
                <Link
                  href="/shop/checkout-v2/delivery"
                  className="btn btn-lg btn-primary w-100 rounded-pill"
                  onClick={() => closeOffcanvas('cart')}
                >
                  Checkout
                </Link>
              </Stack>
            </Offcanvas.Header>
          </>
        ) : (
          <Offcanvas.Body className="text-center pt-2">
            <svg className="d-block mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 29.5 30">
              <path
                className="text-body-tertiary"
                d="M17.8 4c.4 0 .8-.3.8-.8v-2c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v2c0 .4.3.8.8.8zm3.2.6c.4.2.8 0 1-.4l.4-.9c.2-.4 0-.8-.4-1s-.8 0-1 .4l-.4.9c-.2.4 0 .9.4 1zm-7.5-.4c.2.4.6.6 1 .4s.6-.6.4-1l-.4-.9c-.2-.4-.6-.6-1-.4s-.6.6-.4 1l.4.9z"
                fill="currentColor"
              ></path>
              <path
                className="text-body-emphasis"
                d="M10.7 24.5c-1.5 0-2.8 1.2-2.8 2.8S9.2 30 10.7 30s2.8-1.2 2.8-2.8-1.2-2.7-2.8-2.7zm0 4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.5 1.2-1.2 1.2zm11.1-4c-1.5 0-2.8 1.2-2.8 2.8a2.73 2.73 0 0 0 2.8 2.8 2.73 2.73 0 0 0 2.8-2.8c0-1.6-1.3-2.8-2.8-2.8zm0 4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.6 1.2-1.2 1.2zM8.7 18h16c.3 0 .6-.2.7-.5l4-10c.2-.5-.2-1-.7-1H9.3c-.4 0-.8.3-.8.8s.4.7.8.7h18.3l-3.4 8.5H9.3L5.5 1C5.4.7 5.1.5 4.8.5h-4c-.5 0-.8.3-.8.7s.3.8.8.8h3.4l3.7 14.6a3.24 3.24 0 0 0-2.3 3.1C5.5 21.5 7 23 8.7 23h16c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-16a1.79 1.79 0 0 1-1.8-1.8c0-1 .9-1.6 1.8-1.6z"
                fill="currentColor"
              ></path>
            </svg>
            <h6 className="mb-2">Your shopping cart is currently empty!</h6>
            <p className="fs-sm mb-4">Add item(s) to the cart to proceed with your purchase.</p>
            <Button className="rounded-pill" onClick={() => closeOffcanvas('cart')}>
              Continue shopping
            </Button>
          </Offcanvas.Body>
        )}
      </Offcanvas>

      {/* Delivey options offcanvas */}
      <Offcanvas
        show={isOpen('deliveryOptions')}
        onHide={() => closeOffcanvas('deliveryOptions')}
        placement="end"
        className="pb-sm-2 px-sm-2"
        style={{ width: 500 }}
        aria-labelledby="deliveryOptionsLabel"
      >
        <TabContainer defaultActiveKey={lastSegment === 'pickup' ? 'pickup' : 'delivery'}>
          <Offcanvas.Header className="flex-column align-items-start py-3 pt-lg-4">
            <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
              <Offcanvas.Title as="h4" id="deliveryOptionsLabel">
                Delivery options
              </Offcanvas.Title>
              <CloseButton onClick={() => closeOffcanvas('deliveryOptions')} />
            </div>
            <Nav as="ul" variant="pills" justify className="w-100">
              <Nav.Item as="li">
                <Nav.Link eventKey="delivery">
                  <i className="ci-shopping-bag fs-base ms-n1 me-2" />
                  Delivery
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="pickup">
                  <i className="ci-box fs-base ms-n1 me-2" />
                  Pickup
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Header>
          <Offcanvas.Body as={TabContent} className="py-2 py-sm-3">
            {/* Delivery tab */}
            <TabPane eventKey="delivery">
              <Collapse in={deliveryCollapseOpen}>
                <div id="deliveryAddressOptions">
                  <div className="mt-n3">
                    {[
                      '567 Cherry Lane Apt B12 Sacramento, 95829',
                      '1901 Thornridge Cir. Shiloh, Hawaii, 81063',
                      '3517 W. Gray St. Utica, Pennsylvania, 57867',
                    ].map((address, index) => (
                      <div key={index} className="form-check border-bottom py-4 m-0">
                        <input
                          type="radio"
                          id={`delivery-address-${index}`}
                          className="form-check-input"
                          name="delivery-address"
                          value={address}
                          defaultChecked={index === 0}
                        />
                        {index === 0 ? (
                          <label
                            htmlFor={`delivery-address-${index}`}
                            className="form-check-label text-dark-emphasis fw-semibold"
                          >
                            {address}
                          </label>
                        ) : (
                          <div className="d-flex justify-content-between w-100 gap-2">
                            <label
                              htmlFor={`delivery-address-${index}`}
                              className="form-check-label text-dark-emphasis"
                            >
                              {address}
                            </label>
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-sm">Remove</Tooltip>}>
                              <CloseButton />
                            </OverlayTrigger>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Collapse>
              <Collapse in={!deliveryCollapseOpen}>
                <div id="deliveryAddressAdd">
                  <Nav className="mb-4">
                    <Nav.Link
                      className="animate-underline p-0"
                      onClick={() => setDeliveryCollapseOpen((prev) => !prev)}
                    >
                      <i className="ci-chevron-left fs-lg ms-n1 me-1" />
                      <span className="animate-target">Back to my addresses</span>
                    </Nav.Link>
                  </Nav>
                  <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
                    <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
                    <Button variant="outline-primary" size="sm" className="rounded-pill">
                      <i className="ci-map-pin fs-base ms-n1 me-1" />
                      Find on map
                    </Button>
                  </div>
                  <div className="mb-3 mb-lg-4">
                    <FormLabel>State *</FormLabel>
                    <SelectBox
                      choices={[
                        { value: 'Arizona', label: 'Arizona' },
                        { value: 'California', label: 'California' },
                        { value: 'Montana', label: 'Montana' },
                        { value: 'Nevada', label: 'Nevada' },
                        { value: 'New Mexico', label: 'New Mexico' },
                        { value: 'Texas', label: 'Texas' },
                      ]}
                      inputClassName="form-select-lg rounded-pill"
                      placeholder="Select state"
                      aria-label="Select state"
                    />
                  </div>
                  <div className="mb-3 mb-lg-4">
                    <FormLabel htmlFor="my-postcode">Postcode *</FormLabel>
                    <FormControl type="text" size="lg" className="rounded-pill" id="my-postcode" />
                  </div>
                  <div className="mb-3 mb-lg-4">
                    <FormLabel>City *</FormLabel>
                    <SelectBox
                      choices={[
                        { value: 'Austin', label: 'Austin' },
                        { value: 'Helena', label: 'Helena' },
                        { value: 'Sacramento', label: 'Sacramento' },
                        { value: 'Santa Fe', label: 'Santa Fe' },
                        { value: 'Las Vegas', label: 'Las Vegas' },
                        { value: 'Phoenix', label: 'Phoenix' },
                      ]}
                      inputClassName="form-select-lg rounded-pill"
                      placeholder="Select city"
                      aria-label="Select city"
                    />
                  </div>
                  <FormLabel htmlFor="my-address">Street address *</FormLabel>
                  <FormControl type="text" size="lg" className="rounded-pill" id="my-address" />
                </div>
              </Collapse>
              <Nav>
                <Nav.Link
                  className={`hiding-collapse-toggle animate-underline px-0 mt-4${deliveryCollapseOpen ? ' collapsed' : ''}`}
                  onClick={() => setDeliveryCollapseOpen((prev) => !prev)}
                >
                  <span className="animate-target">Add delivery address</span>
                  <i className="ci-plus fs-base ms-1" />
                </Nav.Link>
              </Nav>
            </TabPane>

            {/* Pickup tab */}
            <TabPane eventKey="pickup">
              <Collapse in={pickupCollapseOpen}>
                <div id="pickupAddressOptions">
                  <div className="mt-n3">
                    {[
                      {
                        name: 'Sacramento Supercenter',
                        address: '8270 Delta Shores Cir S, Sacramento, CA 95832',
                        open: '07:00 - 22:00',
                      },
                      {
                        name: 'West Sacramento Supercenter',
                        address: '755 Riverpoint Ct, West Sacramento, CA 95605',
                        open: '07:00 - 21:00',
                      },
                      {
                        name: 'Rancho Cordova Supercenter',
                        address: '10655 Folsom Blvd, Rancho Cordova, CA 95670',
                        open: '08:00 - 23:00',
                      },
                    ].map(({ name, address, open }, index) => (
                      <div key={index} className="form-check border-bottom py-4 m-0">
                        <input
                          type="radio"
                          id={`pickup-address-${index}`}
                          className="form-check-input"
                          name="pickup-address"
                          value={name}
                          defaultChecked={index === 0}
                        />
                        <div>
                          <div className="d-flex justify-content-between w-100 gap-2 pb-2 mb-1">
                            <label
                              htmlFor={`pickup-address-${index}`}
                              className="form-check-label text-dark-emphasis fw-semibold"
                            >
                              {name}
                            </label>
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-sm">Remove</Tooltip>}>
                              <CloseButton />
                            </OverlayTrigger>
                          </div>
                          <div className="fs-xs mb-2">{address}</div>
                          <div className="fs-xs">
                            Open: <span className="text-dark-emphasis fw-medium">{open}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Collapse>
              <Collapse in={!pickupCollapseOpen}>
                <div id="pickupAddressAdd">
                  <Nav className="mb-4">
                    <Nav.Link className="animate-underline p-0" onClick={() => setPickupCollapseOpen((prev) => !prev)}>
                      <i className="ci-chevron-left fs-lg ms-n1 me-1" />
                      <span className="animate-target">Back to my stores</span>
                    </Nav.Link>
                  </Nav>
                  <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
                    <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
                    <Button variant="outline-primary" size="sm" className="rounded-pill">
                      <i className="ci-map-pin fs-base ms-n1 me-1" />
                      Find on map
                    </Button>
                  </div>
                  <div className="mb-3 mb-lg-4">
                    <FormLabel>State *</FormLabel>
                    <SelectBox
                      choices={[
                        { value: 'Arizona', label: 'Arizona' },
                        { value: 'California', label: 'California', selected: true },
                        { value: 'Montana', label: 'Montana' },
                        { value: 'Nevada', label: 'Nevada' },
                        { value: 'New Mexico', label: 'New Mexico' },
                        { value: 'Texas', label: 'Texas' },
                      ]}
                      inputClassName="form-select-lg rounded-pill"
                      placeholder="Select state"
                      aria-label="Select state"
                    />
                  </div>
                  <div className="mb-4">
                    <FormLabel>City *</FormLabel>
                    <SelectBox
                      choices={[
                        { value: 'Austin', label: 'Austin' },
                        { value: 'Helena', label: 'Helena' },
                        { value: 'Sacramento', label: 'Sacramento', selected: true },
                        { value: 'Santa Fe', label: 'Santa Fe' },
                        { value: 'Las Vegas', label: 'Las Vegas' },
                        { value: 'Phoenix', label: 'Phoenix' },
                      ]}
                      inputClassName="form-select-lg rounded-pill"
                      placeholder="Select city"
                      aria-label="Select city"
                    />
                  </div>
                  <div className="fs-xs fw-medium text-uppercase text-body-secondary">Found stores:</div>
                  {[
                    {
                      name: 'Sacramento Supercenter',
                      address: '8270 Delta Shores Cir S, Sacramento, CA 95832',
                      open: '07:00 - 22:00',
                    },
                    {
                      name: 'West Sacramento Supercenter',
                      address: '755 Riverpoint Ct, West Sacramento, CA 95605',
                      open: '07:00 - 21:00',
                    },
                    {
                      name: 'Rancho Cordova Supercenter',
                      address: '10655 Folsom Blvd, Rancho Cordova, CA 95670',
                      open: '08:00 - 23:00',
                    },
                  ].map(({ name, address, open }, index) => (
                    <div key={index} className="form-check border-bottom py-4 m-0">
                      <input
                        type="radio"
                        id={`found-stores-${index}`}
                        className="form-check-input"
                        name="found-stores"
                        value={name}
                        defaultChecked={index === 0}
                      />
                      <div>
                        <label
                          htmlFor={`found-stores-${index}`}
                          className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
                        >
                          {name}
                        </label>
                        <div className="fs-xs mb-2">{address}</div>
                        <div className="fs-xs">
                          Open: <span className="text-dark-emphasis fw-medium">{open}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Collapse>
              <Nav>
                <Nav.Link
                  className={`hiding-collapse-toggle animate-underline px-0 mt-4${pickupCollapseOpen ? ' collapsed' : ''}`}
                  onClick={() => setPickupCollapseOpen((prev) => !prev)}
                >
                  <span className="animate-target">Add store address</span>
                  <i className="ci-plus fs-base ms-1" />
                </Nav.Link>
              </Nav>
            </TabPane>
          </Offcanvas.Body>
          <Offcanvas.Header>
            <Button size="lg" className="w-100 rounded-pill">
              Confirm address
            </Button>
          </Offcanvas.Header>
        </TabContainer>
      </Offcanvas>

      {/* Featured categories */}
      {featuredCategories && (
        <section className="border-top">
          <Container className="py-lg-1">
            <SimpleBar className="overflow-auto">
              <Nav className="flex-nowrap justify-content-between gap-4 py-2">
                {featuredCategoriesGrocery.map(({ icon, image, title, href }, index) => (
                  <Nav.Link
                    key={index}
                    as={Link}
                    href={href}
                    active={false}
                    className="align-items-center animate-underline gap-2 px-0"
                  >
                    <span
                      className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle"
                      style={{ width: 40, height: 40 }}
                    >
                      {icon && <i className={`${icon} text-primary fs-xl`} />}
                      {image && (
                        <span style={{ width: 30 }}>
                          <Image src={image} width={60} height={60} alt={title} />
                        </span>
                      )}
                    </span>
                    <span className="d-block animate-target fw-semibold text-nowrap ms-1">{title}</span>
                  </Nav.Link>
                ))}
              </Nav>
            </SimpleBar>
          </Container>
        </section>
      )}
    </Fragment>
  )
}

export default HeaderGrocery
