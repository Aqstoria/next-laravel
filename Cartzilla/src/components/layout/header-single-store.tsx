'use client'

import { Fragment, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import { useStickyElement } from '@/hooks/use-sticky-element'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '@/components/logo'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import ThemeSwitcher from '../theme-switcher'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import { mainNavigation } from '@/app/navigation'

const HeaderSingleStore = ({ logoHref }: { logoHref?: string }) => {
  const pathname = usePathname()
  const { stickyElementRef, isStuck } = useStickyElement<HTMLDivElement>()
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { cart, calculateTotal, removeFromCart, increaseQuantity, decreaseQuantity } = useCart('single-store')

  // Cart quantity badge (counter)
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)

  return (
    <Fragment>
      <Container
        as="header"
        ref={stickyElementRef}
        className={`navbar-sticky sticky-top z-fixed px-2 mt-3${isStuck ? ' is-stuck' : ''}`}
      >
        <Navbar expand="lg" className="flex-nowrap bg-body rounded-pill shadow ps-0 mx-1">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-pill z-0 d-none d-block-dark" />

          {/* Mobile offcanvas menu toggler (Hamburger) */}
          <Navbar.Toggle className="ms-3" aria-controls="navbarNav" />

          {/* Navbar brand (Logo) */}
          <Logo
            href={logoHref ? logoHref : '/'}
            icon={false}
            className="position-relative z-1 ms-4 ms-sm-5 ms-lg-4 me-2 me-sm-0 me-lg-3"
          >
            Cartzilla
          </Logo>

          {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Navbar.Offcanvas id="navbarNav" placement="start" aria-labelledby="navbarNavLabel">
            <Offcanvas.Header closeButton className="py-3">
              <Offcanvas.Title id="navbarNavLabel">Browse Cartzilla</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navbar align-items-start bg-transparent shadow-none pt-3 pb-4 py-lg-0 mx-lg-auto">
              <Nav as="ul" className="position-relative w-100">
                {mainNavigation.map(({ title, href, submenu, megamenu }, index) => (
                  <Fragment key={index}>
                    {submenu && (
                      <DropdownHover key={index} as="li" className={`nav-item me-lg-n1 me-xl-0`} autoClose="outside">
                        <DropdownToggle
                          as={Nav.Link}
                          className="with-focus fs-sm"
                          active={
                            pathname.startsWith(href) ||
                            (title === 'Pages' &&
                              ['about', 'blog', 'contact', 'help', '404', 'terms'].some((prefix) =>
                                pathname.startsWith(`/${prefix}`)
                              ))
                          }
                        >
                          {title}
                        </DropdownToggle>
                        <DropdownMenu as="ul" style={{ '--cz-dropdown-spacer': '1rem' } as CSSProperties}>
                          {submenu.map(({ title, subtitle, href, submenu, preview }, index) => (
                            <Fragment key={index}>
                              {submenu ? (
                                <DropdownHover key={index} as="li" drop="end">
                                  <DropdownToggle as={DropdownItem} className="with-focus">
                                    {title}
                                  </DropdownToggle>
                                  <DropdownMenu as="ul">
                                    {submenu.map(({ title, href }, index) => (
                                      <li key={index}>
                                        <DropdownItem as={Link} href={href}>
                                          {title}
                                        </DropdownItem>
                                      </li>
                                    ))}
                                  </DropdownMenu>
                                </DropdownHover>
                              ) : (
                                <li key={index} className={preview ? 'hover-effect-opacity px-2 mx-n2' : undefined}>
                                  <DropdownItem as={Link} href={href} className={subtitle ? 'd-block mb-0' : ''}>
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
                                  </DropdownItem>
                                </li>
                              )}
                            </Fragment>
                          ))}
                        </DropdownMenu>
                      </DropdownHover>
                    )}
                    {megamenu && (
                      <DropdownHover key={index} as="li" className="nav-item position-static me-lg-n1 me-xl-0">
                        <DropdownToggle as={Nav.Link} className="with-focus fs-sm" active={pathname.startsWith(href)}>
                          {title}
                        </DropdownToggle>
                        <DropdownMenu
                          className="rounded-4 p-4"
                          style={{ '--cz-dropdown-spacer': '1rem' } as CSSProperties}
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
                        </DropdownMenu>
                      </DropdownHover>
                    )}
                    {!submenu && !megamenu && (
                      <Nav.Item key={index} as="li" className="me-lg-n1 me-xl-0">
                        <Nav.Link as={Link} href={href} className="fs-sm" active={pathname.startsWith(href)}>
                          {title}
                        </Nav.Link>
                      </Nav.Item>
                    )}
                  </Fragment>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Button group */}
          <div className="d-flex gap-sm-1 position-relative z-1">
            {/* Theme switcher (light/dark/auto) */}
            <ThemeSwitcher
              ghostButton
              dropdownMenuCentered
              dropdownMenuOffset="1rem"
              style={{ '--cz-btn-size': '2.5rem' } as CSSProperties}
            />

            {/* Cart button */}
            <Button variant="warning" className="rounded-pill" onClick={() => openOffcanvas('cart')}>
              Cart ({cartCounter})
            </Button>
          </div>
        </Navbar>
      </Container>

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
            Shopping cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        {cart.length > 0 ? (
          <Fragment>
            <Offcanvas.Body className="pt-2">
              <div className="d-flex flex-column gap-4">
                {cart.map((item) => (
                  <ShoppingCartListItem
                    key={item.id}
                    image={{ src: item.image, alt: item.title }}
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
              <Link href="#" className="btn btn-lg btn-dark w-100 rounded-pill">
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

export default HeaderSingleStore
