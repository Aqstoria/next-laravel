'use client'

import { useEffect, useRef, Fragment, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import { useStickyElement } from '@/hooks/use-sticky-element'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '@/components/logo'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownHover from '@/components/dropdown-hover'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import ThemeSwitcher from '../theme-switcher'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import { mainNavigation } from '@/app/navigation'

interface HeaderMarketplaceProps {
  logoHref?: string
  isLoggedIn?: {
    avatar?: string
    name: string
    dropdown: [string, string, string][]
  }
  className?: string
}

const HeaderMarketplace = ({ logoHref, isLoggedIn, className }: HeaderMarketplaceProps) => {
  const pathname = usePathname()
  const { stickyElementRef, isStuck } = useStickyElement<HTMLDivElement>()
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { cart, calculateTotal, removeFromCart } = useCart('marketplace')

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
      <Navbar
        ref={stickyElementRef}
        as="header"
        expand="lg"
        className={`navbar-sticky sticky-top z-fixed px-0${isStuck ? ' is-stuck' : ''}${className ? ` ${className}` : ''}`}
      >
        <Container className="flex-nowrap">
          {/* Mobile offcanvas menu toggler (Hamburger) */}
          <Navbar.Toggle className="me-4 me-lg-0" aria-controls="navbarNav" />

          {/* Navbar brand (Logo) */}
          <Logo href={logoHref ? logoHref : '/home/marketplace'} icon="sm" className="py-1 py-md-2 py-xl-1">
            Cartzilla
          </Logo>

          {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Navbar.Offcanvas id="navbarNav" placement="start" aria-labelledby="navbarNavLabel">
            <Offcanvas.Header closeButton className="py-3">
              <Offcanvas.Title id="navbarNavLabel">Browse Cartzilla</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navbar align-items-start pt-3 pb-4 py-lg-0 mx-lg-auto">
              <Nav as="ul" className="position-relative w-100">
                {mainNavigation.map(({ title, href, submenu, megamenu }, index) => (
                  <Fragment key={index}>
                    {submenu && (
                      <DropdownHover
                        key={index}
                        as="li"
                        className={`nav-item py-lg-2 me-lg-n1 me-xl-0`}
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
                        <Dropdown.Menu as="ul" style={{ '--cz-dropdown-spacer': '.875rem' } as CSSProperties}>
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
                                <li key={index} className={preview ? 'hover-effect-opacity px-2 mx-n2' : undefined}>
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
                                          style={{ boxShadow: '.875rem .5rem 2rem -.5rem #676f7b', opacity: 0.1 }}
                                        ></span>
                                        <span
                                          className="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark"
                                          style={{ boxShadow: '.875rem .5rem 1.875rem -.5rem #080b12', opacity: 0.25 }}
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
                      <DropdownHover key={index} as="li" className="nav-item position-static py-lg-2 me-lg-n1 me-xl-0">
                        <Dropdown.Toggle as={Nav.Link} className="with-focus" active={pathname.startsWith(href)}>
                          {title}
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="rounded-4 p-4"
                          style={{ '--cz-dropdown-spacer': '.875rem' } as CSSProperties}
                        >
                          <div className="d-flex flex-column flex-lg-row gap-4">
                            {[megamenu.slice(0, 3), megamenu.slice(3, 5), megamenu.slice(5, 7)].map(
                              (column, colIndex) => (
                                <Stack key={colIndex} gap={4} style={{ minWidth: 190 }}>
                                  {column.map(({ title, links }, index) => (
                                    <div key={index}>
                                      <div className="h6 mb-2">{title}</div>
                                      <ul className="nav flex-column gap-2 mt-0">
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
                                      </ul>
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
                      <Nav.Item key={index} as="li" className="py-lg-2 me-lg-n1 me-xl-0">
                        <Nav.Link as={Link} href={href} active={pathname.startsWith(href)}>
                          {title}
                        </Nav.Link>
                      </Nav.Item>
                    )}
                  </Fragment>
                ))}
              </Nav>
            </Offcanvas.Body>
            <Offcanvas.Header className="nav border-top px-0 py-3 mt-3 d-md-none">
              {isLoggedIn ? (
                <Fragment>
                  {/* Account button (logged in state) visible on screens < 768px wide (md breakpoint) */}
                  <Nav.Link
                    as={Link}
                    href="/account/marketplace"
                    className="hover-effect-scale justify-content-center w-100 gap-2 cursor-pointer py-0"
                  >
                    <div className="btn btn-icon position-relative border rounded-circle overflow-hidden">
                      {isLoggedIn.avatar ? (
                        <Image
                          fill
                          src={isLoggedIn.avatar}
                          sizes="76px"
                          className="hover-effect-target object-fit-cover"
                          alt={isLoggedIn.name}
                        />
                      ) : (
                        <i className="ci-user fs-lg position-absolute" />
                      )}
                    </div>
                    {isLoggedIn.name}
                  </Nav.Link>
                </Fragment>
              ) : (
                <Fragment>
                  {/* Account button visible on screens < 768px wide (md breakpoint) */}
                  <Nav.Link as={Link} href="/account" className="justify-content-center w-100">
                    <i className="ci-user fs-lg opacity-60 ms-n2 me-2" /> Account
                  </Nav.Link>
                </Fragment>
              )}
            </Offcanvas.Header>
          </Navbar.Offcanvas>

          {/* Button group */}
          <div className="d-flex align-items-center">
            {/* Theme switcher (light/dark/auto) */}
            <ThemeSwitcher ghostButton />

            {/* Search toggle button visible on screens < 992px wide (lg breakpoint) */}
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-shake"
              onClick={() => openOffcanvas('search')}
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>

            {isLoggedIn ? (
              <Fragment>
                {/* Account button (logged in state) with dropdown visible on screens > 768px wide (md breakpoint) */}
                <Dropdown align="end" className="d-none d-md-block mx-1">
                  <Dropdown.Toggle
                    as="a"
                    bsPrefix="btn btn-icon hover-effect-scale position-relative border rounded-circle overflow-hidden"
                    aria-label="My account"
                  >
                    {isLoggedIn.avatar ? (
                      <Image
                        fill
                        src={isLoggedIn.avatar}
                        sizes="76px"
                        className="hover-effect-target object-fit-cover"
                        alt={isLoggedIn.name}
                      />
                    ) : (
                      <i className="ci-user fs-lg position-absolute" />
                    )}
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" style={{ '--cz-dropdown-spacer': '.625rem' } as CSSProperties}>
                    <li>
                      <span className="h6 dropdown-header">{isLoggedIn.name}</span>
                    </li>
                    {isLoggedIn.dropdown.map((item, index) => (
                      <li key={index}>
                        <Dropdown.Item as={Link} href={item[2]}>
                          <i className={`${item[0]} fs-base opacity-75 me-2`} /> {item[1]}
                        </Dropdown.Item>
                      </li>
                    ))}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Dropdown.Item as={Link} href="/account">
                        <i className="ci-log-out fs-base opacity-75 me-2" /> Sign out
                      </Dropdown.Item>
                    </li>
                  </Dropdown.Menu>
                </Dropdown>
              </Fragment>
            ) : (
              <Fragment>
                {/* Account button visible on screens > 768px wide (md breakpoint) */}
                <Link
                  href="/account"
                  className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-md-inline-flex"
                  aria-label="Account"
                >
                  <i className="ci-user animate-target" />
                </Link>
              </Fragment>
            )}

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
        <Offcanvas.Header closeButton className="py-3 pt-lg-4">
          <Offcanvas.Title as="h4" id="shoppingCartLabel">
            Cart {cartCounter > 0 && `(${cartCounter})`}
          </Offcanvas.Title>
        </Offcanvas.Header>
        {cart.length > 0 ? (
          <Fragment>
            <Offcanvas.Body className="pt-2">
              <Stack gap={4}>
                {cart.map((item) => (
                  <ShoppingCartListItem
                    key={item.id}
                    image={{ large: true, src: item.image, alt: item.title }}
                    title={item.title}
                    href={item.href}
                    price={{
                      current: item.price[0],
                      original: item.price[1],
                      decimals: false,
                    }}
                    license={item.license}
                    badge={{
                      label: item.badge?.[1] ?? '',
                      bg: item.badge?.[0] ?? '',
                    }}
                    quantity={item.quantity}
                    countInput={false}
                    removeButton={{
                      icon: 'ci-trash',
                      onClick: () => {
                        removeFromCart(item.id)
                      },
                    }}
                    onClick={() => closeOffcanvas('cart')}
                  />
                ))}
              </Stack>
            </Offcanvas.Body>
            <Offcanvas.Header className="flex-column align-items-start">
              <Stack direction="horizontal" className="justify-content-between w-100 mb-3 mb-md-4">
                <span className="text-light-emphasis">Subtotal:</span>
                <span className="h6 mb-0">${calculateTotal()}</span>
              </Stack>
              <Link
                href="/shop/marketplace/checkout"
                className="btn btn-lg btn-dark w-100 rounded-pill"
                onClick={() => closeOffcanvas('cart')}
              >
                Checkout
              </Link>
            </Offcanvas.Header>
          </Fragment>
        ) : (
          <Offcanvas.Body className="text-center">
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
            <Button variant="dark" className="rounded-pill" onClick={() => closeOffcanvas('cart')}>
              Continue shopping
            </Button>
          </Offcanvas.Body>
        )}
      </Offcanvas>
    </Fragment>
  )
}

export default HeaderMarketplace
