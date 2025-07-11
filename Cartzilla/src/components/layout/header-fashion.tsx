'use client'

import { useState, useEffect, useRef, Fragment, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import { useStickyNavbar } from '@/hooks/use-sticky-navbar'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '@/components/logo'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownHover from '@/components/dropdown-hover'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'
import ThemeSwitcher from '../theme-switcher'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import { mainNavigation, categoriesFashion } from '@/app/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

const HeaderFashion = ({ logoHref }: { logoHref?: string }) => {
  const pathname = usePathname()

  const [topbarShow, setTopbarShow] = useState(true)
  const { navbarRef } = useStickyNavbar({ offset: 500 })
  const [stuckNavOpen, setStuckNavOpen] = useState(false)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { cart, calculateTotal, removeFromCart, increaseQuantity, decreaseQuantity } = useCart('fashion')

  // Autofocus search input when it is open on mobile devices
  const searchRef = useRef<HTMLInputElement>(null)
  const isOpenSearch = isOpen('search')
  useEffect(() => {
    if (isOpenSearch) {
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [isOpenSearch])

  // Cart quantity badge (counter)
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)

  return (
    <Fragment>
      {/* Topbar */}
      {topbarShow && (
        <div className="bg-dark text-white rounded-0 py-2 px-0 m-0" data-bs-theme="dark">
          <Container className="position-relative d-flex min-w-0">
            <div
              className="d-flex flex-nowrap align-items-center g-2 w-100 min-w-0 mx-auto mt-n1"
              style={{ maxWidth: 460 }}
            >
              <Nav className="me-2">
                <Nav.Link as="button" type="button" className="fs-lg p-0" id="topbarPrev" aria-label="Prev">
                  <i className="ci-chevron-left" />
                </Nav.Link>
              </Nav>
              <Swiper
                className="fs-sm text-white"
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: '#topbarPrev',
                  nextEl: '#topbarNext',
                }}
              >
                <SwiperSlide className="text-truncate text-center">
                  🎉 Free Shipping on orders over $250.{' '}
                  <span className="d-none d-sm-inline">Don&apos;t miss a discount!</span>
                </SwiperSlide>
                <SwiperSlide className="text-truncate text-center">
                  💰 Money back guarantee. <span className="d-none d-sm-inline">We return money within 30 days.</span>
                </SwiperSlide>
                <SwiperSlide className="text-truncate text-center">
                  💪 Friendly 24/7 customer support.{' '}
                  <span className="d-none d-sm-inline">We&apos;ve got you covered!</span>
                </SwiperSlide>
              </Swiper>
              <Nav className="ms-2">
                <Nav.Link as="button" type="button" className="fs-lg p-0" id="topbarNext" aria-label="Next">
                  <i className="ci-chevron-right" />
                </Nav.Link>
              </Nav>
            </div>
            <CloseButton
              className="position-static flex-shrink-0 p-1 ms-3 ms-md-n4"
              onClick={() => setTopbarShow(false)}
            />
          </Container>
        </div>
      )}

      {/* Sticky navbar (Header) */}
      <Navbar ref={navbarRef} as="header" expand="lg" bg="body" className="navbar-sticky d-block z-fixed p-0">
        <Container className="py-2 py-lg-3">
          <div className="d-flex align-items-center gap-3">
            {/* Mobile offcanvas menu toggler (Hamburger) */}
            <Navbar.Toggle className="me-4 me-md-2" aria-controls="navbarNav" />

            {/* Country slect visible on screens > 768px wide (md breakpoint) */}
            <Dropdown className="d-none d-md-block nav">
              <Dropdown.Toggle as={Nav.Link} className="py-1 px-0" aria-label="Country select: USA">
                <div className="ratio ratio-1x1" style={{ width: 20 }}>
                  <Image priority src="/img/flags/en-us.png" width={40} height={40} alt="USA" />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul" className="fs-sm" style={{ '--cz-dropdown-spacer': '.5rem' } as CSSProperties}>
                {[
                  { href: '#uk', flag: '/img/flags/en-uk.png', country: 'United Kingdom' },
                  { href: '#fr', flag: '/img/flags/fr.png', country: 'France' },
                  { href: '#de', flag: '/img/flags/de.png', country: 'Deutschland' },
                  { href: '#it', flag: '/img/flags/it.png', country: 'Italia' },
                ].map(({ href, flag, country }, index) => (
                  <li key={index}>
                    <Dropdown.Item as={Link} href={href}>
                      <span className="d-block ratio ratio-1x1 flex-shrink-0 me-2" style={{ width: 20 }}>
                        <Image src={flag} width={40} height={40} alt={country} />
                      </span>
                      {country}
                    </Dropdown.Item>
                  </li>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* City slect visible on screens > 768px wide (md breakpoint) */}
            <Dropdown className="d-none d-md-block nav">
              <Dropdown.Toggle as={Nav.Link} className="animate-underline dropdown-toggle fw-normal py-1 px-0">
                <span className="animate-target">Washington</span>
              </Dropdown.Toggle>
              <Dropdown.Menu as="ul" className="fs-sm" style={{ '--cz-dropdown-spacer': '.5rem' } as CSSProperties}>
                {[
                  { href: '#', city: 'Chicago' },
                  { href: '#', city: 'Los Angeles' },
                  { href: '#', city: 'New York' },
                  { href: '#', city: 'Philadelphia' },
                ].map(({ href, city }, index) => (
                  <li key={index}>
                    <Dropdown.Item as={Link} href={href}>
                      {city}
                    </Dropdown.Item>
                  </li>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Navbar brand (Logo) */}
          <Logo href={logoHref ? logoHref : '/home/fashion-v1'} icon={false} className="fs-2 py-0 m-0 me-auto me-sm-n5">
            Cartzilla
          </Logo>

          {/* Button group */}
          <div className="d-flex align-items-center">
            {/* Navbar stuck nav toggler */}
            <button
              type="button"
              className="navbar-toggler animated-toggler d-none navbar-stuck-show collapsed me-3"
              onClick={() => setStuckNavOpen(!stuckNavOpen)}
              aria-controls="stuckNav"
              aria-expanded={stuckNavOpen}
              aria-label="Toggle navigation in navbar stuck state"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Theme switcher (light/dark/auto) */}
            <ThemeSwitcher ghostButton />

            {/* Search toggle button visible on screens < 992px wide (lg breakpoint) */}
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-shake d-lg-none"
              onClick={() => openOffcanvas('search')}
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>

            {/* Account button visible on screens > 768px wide (md breakpoint) */}
            <Link
              href="/account"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
              aria-label="Account"
            >
              <i className="ci-user animate-target" />
            </Link>

            {/* Wishlist button visible on screens > 768px wide (md breakpoint) */}
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"
              aria-label="Wishlist"
            >
              <i className="ci-heart animate-target" />
            </Link>

            {/* Cart button */}
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={() => openOffcanvas('cart')}
              className="btn-icon fs-xl position-relative border-0 rounded-circle animate-scale"
              aria-label="Shopping cart"
            >
              {cartCounter > 0 && (
                <Badge
                  pill
                  bg="primary"
                  className="position-absolute top-0 start-100 fs-xs rounded-pill mt-1 ms-n4 z-2"
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
              <i className="ci-shopping-bag animate-target me-1" />
            </Button>
          </div>
        </Container>

        {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
        <Collapse in={stuckNavOpen} className="navbar-stuck-hide">
          <div id="stuckNav">
            <Navbar.Offcanvas id="navbarNav" placement="start" aria-labelledby="navbarNavLabel">
              <Offcanvas.Header closeButton className="py-3">
                <Offcanvas.Title id="navbarNavLabel">Browse Cartzilla</Offcanvas.Title>
              </Offcanvas.Header>

              {/* Country and City slects visible on screens < 768px wide (md breakpoint) */}
              <Offcanvas.Header className="gap-3 d-md-none pt-0 pb-3">
                <Dropdown className="nav">
                  <Dropdown.Toggle as={Nav.Link} className="py-1 px-0" aria-label="Country select: USA">
                    <div className="ratio ratio-1x1" style={{ width: 20 }}>
                      <Image priority src="/img/flags/en-us.png" width={40} height={40} alt="USA" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" className="fs-sm" style={{ '--cz-dropdown-spacer': '.5rem' } as CSSProperties}>
                    {[
                      { href: '#uk', flag: '/img/flags/en-uk.png', country: 'United Kingdom' },
                      { href: '#fr', flag: '/img/flags/fr.png', country: 'France' },
                      { href: '#de', flag: '/img/flags/de.png', country: 'Deutschland' },
                      { href: '#it', flag: '/img/flags/it.png', country: 'Italia' },
                    ].map(({ href, flag, country }, index) => (
                      <li key={index}>
                        <Dropdown.Item as={Link} href={href}>
                          <span className="d-block ratio ratio-1x1 flex-shrink-0 me-2" style={{ width: 20 }}>
                            <Image src={flag} width={40} height={40} alt={country} />
                          </span>
                          {country}
                        </Dropdown.Item>
                      </li>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="nav">
                  <Dropdown.Toggle as={Nav.Link} className="animate-underline dropdown-toggle fw-normal py-1 px-0">
                    <span className="animate-target">Washington</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" className="fs-sm" style={{ '--cz-dropdown-spacer': '.5rem' } as CSSProperties}>
                    {[
                      { href: '#', city: 'Chicago' },
                      { href: '#', city: 'Los Angeles' },
                      { href: '#', city: 'New York' },
                      { href: '#', city: 'Philadelphia' },
                    ].map(({ href, city }, index) => (
                      <li key={index}>
                        <Dropdown.Item as={Link} href={href}>
                          {city}
                        </Dropdown.Item>
                      </li>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Offcanvas.Header>
              <Offcanvas.Body className="pt-1 pb-3 py-lg-0">
                <Container className="pb-lg-2 px-0 px-lg-3">
                  <div className="navbar position-relative d-block d-lg-flex flex-lg-nowrap align-items-center justify-content-between shadow-none p-0">
                    {/* Categories mega menu */}
                    <Nav>
                      <DropdownHover className="position-static pb-lg-2" autoClose="outside">
                        <Dropdown.Toggle
                          as={Nav.Link}
                          bsPrefix="animate-underline fw-semibold text-uppercase ps-0"
                          className="with-focus"
                        >
                          <i className="ci-menu fs-lg me-2"></i>
                          <span className="animate-target">Categories</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="w-100 p-4 px-xl-5"
                          style={{ '--cz-dropdown-spacer': '.75rem' } as CSSProperties}
                        >
                          <TabContainer defaultActiveKey={categoriesFashion[0].href}>
                            <Nav
                              as="ul"
                              variant="underline"
                              navbar={false}
                              className="justify-content-lg-center mt-n2 mt-lg-0 mb-4"
                            >
                              {categoriesFashion.map(({ title, href }, index) => (
                                <Nav.Item key={index} as="li">
                                  <Nav.Link as="button" type="button" eventKey={href} className="text-uppercase">
                                    {title}
                                  </Nav.Link>
                                </Nav.Item>
                              ))}
                            </Nav>
                            <TabContent className="pb-xl-4">
                              {categoriesFashion.map(({ href, megamenu }, index) => (
                                <TabPane key={index} eventKey={href}>
                                  <Row className="g-4">
                                    {megamenu?.map(({ title, href, links, banner }, index) => (
                                      <Fragment key={index}>
                                        {links && (
                                          <Col lg={2}>
                                            {href ? (
                                              <Link
                                                href={href}
                                                className="d-inline-flex animate-underline h6 text-dark-emphasis text-decoration-none mb-2"
                                              >
                                                <span className="animate-target">{title}</span>
                                              </Link>
                                            ) : (
                                              <h6 className="mb-2">{title}</h6>
                                            )}
                                            <Nav as="ul" navbar={false} className="flex-column gap-2 mt-0">
                                              {links.map(({ title, href }, index) => (
                                                <li key={index} className="d-flex w-100 pt-1">
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
                                          </Col>
                                        )}
                                        {!links && banner && (
                                          <Col lg={4} className="d-none d-lg-block" data-bs-theme={banner.mode}>
                                            <div className="position-relative d-flex flex-column h-100 rounded-4 overflow-hidden p-4">
                                              <div className="position-relative d-flex flex-column justify-content-between h-100 z-2 pt-xl-2 ps-xl-2">
                                                <div className="h4 lh-base">{banner.title}</div>
                                                <div>
                                                  <Link
                                                    href={banner.href}
                                                    className="btn btn-sm btn-dark stretched-link"
                                                    data-bs-theme={banner.mode}
                                                  >
                                                    Shop now
                                                  </Link>
                                                </div>
                                              </div>
                                              <Image
                                                fill
                                                src={banner.image[0]}
                                                sizes="(min-resolution: 2dppx) 716px, 400px"
                                                className="object-fit-cover"
                                                alt={banner.image[1]}
                                              />
                                            </div>
                                          </Col>
                                        )}
                                      </Fragment>
                                    ))}
                                  </Row>
                                </TabPane>
                              ))}
                            </TabContent>
                          </TabContainer>
                        </Dropdown.Menu>
                      </DropdownHover>
                    </Nav>

                    {/* Navbar nav */}
                    <Nav as="ul" className="position-relative me-xl-n5">
                      {mainNavigation.map(({ title, href, submenu, megamenu }, index) => (
                        <Fragment key={index}>
                          {submenu && (
                            <DropdownHover
                              key={index}
                              as="li"
                              className="nav-item pb-lg-2 me-lg-n1 me-xl-0"
                              autoClose="outside"
                            >
                              <Dropdown.Toggle
                                as={Nav.Link}
                                className="with-focus"
                                active={
                                  pathname.startsWith(href) ||
                                  (title === 'Pages' &&
                                    ['about', 'blog', 'contact', 'help', '404', 'terms'].some((prefix) =>
                                      pathname.startsWith(`/${prefix}`)
                                    ))
                                }
                              >
                                {title}
                              </Dropdown.Toggle>
                              <Dropdown.Menu as="ul" style={{ '--cz-dropdown-spacer': '.75rem' } as CSSProperties}>
                                {submenu.map(({ title, subtitle, href, submenu, preview }, index) => (
                                  <Fragment key={index}>
                                    {submenu ? (
                                      <DropdownHover key={index} as="li" drop="end">
                                        <Dropdown.Toggle as={Dropdown.Item} className="with-focus">
                                          {title}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                          {submenu.map(({ title, href }, index) => (
                                            <li key={index}>
                                              <Dropdown.Item as={Link} href={href}>
                                                {title}
                                              </Dropdown.Item>
                                            </li>
                                          ))}
                                        </Dropdown.Menu>
                                      </DropdownHover>
                                    ) : (
                                      <li
                                        key={index}
                                        className={preview ? 'hover-effect-opacity px-2 mx-n2' : undefined}
                                      >
                                        <Dropdown.Item as={Link} href={href} className={subtitle ? 'd-block mb-0' : ''}>
                                          {subtitle ? (
                                            <>
                                              <span className="fw-medium">{title}</span>
                                              <span className="d-block fs-xs text-body-secondary">{subtitle}</span>
                                            </>
                                          ) : (
                                            title
                                          )}
                                          {preview && (
                                            <div
                                              className="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2"
                                              style={{ width: 212, height: 'calc(100% + 2px)', marginTop: -1 }}
                                            >
                                              <Image
                                                priority
                                                src={preview[0]}
                                                className="position-relative z-2 d-none-dark"
                                                width={388}
                                                height={796}
                                                alt={title}
                                              />
                                              <Image
                                                priority
                                                src={preview[1]}
                                                className="position-relative z-2 d-none d-block-dark"
                                                width={388}
                                                height={796}
                                                alt={title}
                                              />
                                              <span
                                                className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark"
                                                style={{
                                                  boxShadow: '.875rem .5rem 2rem -.5rem #676f7b',
                                                  opacity: 0.1,
                                                }}
                                              ></span>
                                              <span
                                                className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark"
                                                style={{
                                                  boxShadow: '.875rem .5rem 1.875rem -.5rem #080b12',
                                                  opacity: 0.25,
                                                }}
                                              ></span>
                                            </div>
                                          )}
                                        </Dropdown.Item>
                                      </li>
                                    )}
                                  </Fragment>
                                ))}
                              </Dropdown.Menu>
                            </DropdownHover>
                          )}
                          {megamenu && (
                            <DropdownHover
                              key={index}
                              as="li"
                              className="nav-item position-static pb-lg-2 me-lg-n1 me-xl-0"
                            >
                              <Dropdown.Toggle as={Nav.Link} className="with-focus" active={pathname.startsWith(href)}>
                                {title}
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                className="p-4"
                                style={{ '--cz-dropdown-spacer': '.75rem' } as CSSProperties}
                              >
                                <div className="d-flex flex-column flex-lg-row gap-4">
                                  {[megamenu.slice(0, 3), megamenu.slice(3, 5), megamenu.slice(5, 7)].map(
                                    (column, colIndex) => (
                                      <Stack key={colIndex} gap={4} style={{ minWidth: 190 }}>
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
                                </div>
                              </Dropdown.Menu>
                            </DropdownHover>
                          )}
                          {!submenu && !megamenu && (
                            <Nav.Item key={index} as="li" className="pb-lg-2 me-lg-n2 me-xl-0">
                              <Nav.Link as={Link} href={href} active={pathname.startsWith(href)}>
                                {title}
                              </Nav.Link>
                            </Nav.Item>
                          )}
                        </Fragment>
                      ))}
                    </Nav>

                    {/* Search toggle visible on screens > 991px wide (lg breakpoint) */}
                    <Button
                      variant="outline-secondary"
                      className="justify-content-start w-100 px-3 mb-lg-2 ms-3 d-none d-lg-inline-flex"
                      onClick={() => openOffcanvas('search')}
                      aria-label="Toggle search bar"
                      style={{ maxWidth: 240 }}
                    >
                      <i className="ci-search fs-base ms-n1 me-2" />
                      <span className="text-body-tertiary fw-normal">Search</span>
                    </Button>
                  </div>
                </Container>
              </Offcanvas.Body>

              {/* Account and Wishlist buttons visible on screens < 768px wide (md breakpoint) */}
              <Offcanvas.Header className="w-100 border-top px-0 py-3 mt-3 d-md-none">
                <Nav navbar={false} className="nav-justified w-100 w-100">
                  <Nav.Link as={Link} href="/account" className="border-end">
                    <i className="ci-user fs-lg opacity-60 me-2" />
                    Account
                  </Nav.Link>
                  <Nav.Link as={Link} href="/account/shop/wishlist">
                    <i className="ci-heart fs-lg opacity-60 me-2" />
                    Wishlist
                  </Nav.Link>
                </Nav>
              </Offcanvas.Header>
            </Navbar.Offcanvas>
          </div>
        </Collapse>
      </Navbar>

      {/* Search offcanvas */}
      <Offcanvas show={isOpenSearch} onHide={() => closeOffcanvas('search')} placement="top" backdrop="static">
        <Offcanvas.Header className="border-bottom p-0 py-lg-1">
          <Container as="form" className="d-flex align-items-center">
            <FormControl
              ref={searchRef}
              type="search"
              size="lg"
              className="fs-lg border-0 rounded-0 py-3 ps-0"
              placeholder="Search the products"
            />
            <CloseButton type="reset" onClick={() => closeOffcanvas('search')} />
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <Container className="text-center">
            <svg
              className="text-body-tertiary opacity-60 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M340.115,361.412l-16.98-16.98c-34.237,29.36-78.733,47.098-127.371,47.098C87.647,391.529,0,303.883,0,195.765S87.647,0,195.765,0s195.765,87.647,195.765,195.765c0,48.638-17.738,93.134-47.097,127.371l16.98,16.98l11.94-11.94c5.881-5.881,15.415-5.881,21.296,0l112.941,112.941c5.881,5.881,5.881,15.416,0,21.296l-45.176,45.176c-5.881,5.881-15.415,5.881-21.296,0L328.176,394.648c-5.881-5.881-5.881-15.416,0-21.296L340.115,361.412z M195.765,361.412c91.484,0,165.647-74.163,165.647-165.647S287.249,30.118,195.765,30.118S30.118,104.28,30.118,195.765S104.28,361.412,195.765,361.412z M360.12,384l91.645,91.645l23.88-23.88L384,360.12L360.12,384z M233.034,233.033c5.881-5.881,15.415-5.881,21.296,0c5.881,5.881,5.881,15.416,0,21.296c-32.345,32.345-84.786,32.345-117.131,0c-5.881-5.881-5.881-15.415,0-21.296c5.881-5.881,15.416-5.881,21.296,0C179.079,253.616,212.45,253.616,233.034,233.033zM135.529,180.706c-12.475,0-22.588-10.113-22.588-22.588c0-12.475,10.113-22.588,22.588-22.588c12.475,0,22.588,10.113,22.588,22.588C158.118,170.593,148.005,180.706,135.529,180.706z M256,180.706c-12.475,0-22.588-10.113-22.588-22.588c0-12.475,10.113-22.588,22.588-22.588s22.588,10.113,22.588,22.588C278.588,170.593,268.475,180.706,256,180.706z" />
            </svg>
            <h6 className="mb-2">Your search results will appear here</h6>
            <p className="fs-sm mb-0">Start typing in the search field above to see instant search results.</p>
          </Container>
        </Offcanvas.Body>
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
              {calculateTotal() >= 250 ? (
                <Fragment>
                  <div className="alert alert-success py-2 fs-sm mb-0">
                    <div className="text-body-emphasis fw-medium py-1">
                      🎉 Congratulations! You qualify for Free Shipping!
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <p className="fs-sm">
                    Buy{' '}
                    <span className="text-dark-emphasis fw-semibold">
                      $
                      {(250 - calculateTotal()).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>{' '}
                    more to get <span className="text-dark-emphasis fw-semibold">Free Shipping</span>.
                  </p>
                  <ProgressBar
                    variant="dark"
                    now={(calculateTotal() / 250) * 100}
                    className="w-100 d-none-dark"
                    style={{ height: 4 }}
                    aria-label="Free shipping progress"
                  />
                  <ProgressBar
                    variant="light"
                    now={(calculateTotal() / 250) * 100}
                    className="w-100 d-none d-flex-dark"
                    style={{ height: 4 }}
                    aria-label="Free shipping progress"
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </Offcanvas.Header>
        {cart.length > 0 ? (
          <Fragment>
            <Offcanvas.Body className="pt-2">
              <div className="d-flex flex-column gap-4">
                {cart.map((item) => (
                  <ShoppingCartListItem
                    key={item.id}
                    image={{ src: item.image, alt: item.title, bg: 'body-tertiary' }}
                    title={item.title}
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
                <Link href="#" className="btn btn-lg btn-secondary w-100">
                  View cart
                </Link>
                <Link href="#" className="btn btn-lg btn-dark w-100">
                  Checkout
                </Link>
              </Stack>
            </Offcanvas.Header>
          </Fragment>
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
            <Button variant="dark" onClick={() => closeOffcanvas('cart')}>
              Continue shopping
            </Button>
          </Offcanvas.Body>
        )}
      </Offcanvas>
    </Fragment>
  )
}

export default HeaderFashion
