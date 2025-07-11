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
import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ThemeSwitcher from '../theme-switcher'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import { mainNavigation, categoriesElectronics } from '@/app/navigation'
import axiosInstance from '@/utils/axiosInstance'
import axios from 'axios'
import { useBrands } from '@/contexts/BrandContext'
import CardListGroupDemo from '@/app/docs/card/card-list-group'

interface HeaderElectronicsProps {
  logoHref?: string
  isLoggedIn?: {
    name: string
    href: string
    bonuses?: number
  }
  expandedCategories?: boolean
  categories?: TransformedCategory[]
}
interface Category {
  id: number;
  name: string;
  slug: string;
  icon?: string | null;
  icon_image?: string | null;
  parent_id: number;
  [key: string]: any; // allows other dynamic fields
}

interface Subcategory {
  title: string;
  href: string;
  icon?: string | null;
  icon_image?: string | null;
}
interface TransformedCategory extends Category {
  href: string;
  subcategories: Subcategory[];
}

const HeaderElectronics = ({ logoHref, isLoggedIn, expandedCategories, categories: propCategories = [] }: HeaderElectronicsProps) => {
  const pathname = usePathname()
  const [categories, setCategories] = useState<TransformedCategory[]>(propCategories);

  const { navbarRef } = useStickyNavbar({ offset: 500 })
  const [stuckNavOpen, setStuckNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { cart, calculateTotal, removeFromCart, increaseQuantity, decreaseQuantity, reloadCart } =
    useCart('electronics')
  const { brands } = useBrands();
  console.log("That is a brands", brands)

  // Autofocus search input when it is open on mobile devices
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [searchOpen])

  // Cart quantity badge (counter)
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)

  // Account button tooltip container ref
  const tooltipContainer = useRef<HTMLInputElement>(null)

  // Only fetch categories if not provided as props
  useEffect(() => {
    if (propCategories.length === 0) {
      // Try to fetch categories, but don't fail if API is not available
      axiosInstance
        .get('/api/v1/ecommerce/product-categories')
        .then((res) => {
          const allCategories: Category[] = res.data.data;

          const parentCategories = allCategories.filter((cat) => cat.parent_id === 0);

          const finalCategories: TransformedCategory[] = parentCategories.map((parent) => {
            const children = allCategories.filter((cat) => cat.parent_id === parent.id);

            return {
              ...parent,
              href: `/shop/${parent.slug}`,
              subcategories: children.map((sub) => ({
                title: sub.name,
                href: `/shop/${sub.slug}`,
              })),
            };
          });

          setCategories(finalCategories);
        })
        .catch((err) => {
          console.warn("Categories API not available, using empty categories:", err.message);
          setCategories([]);
        });
    }
  }, [propCategories]);

  return (
    <Fragment>
      {/* Sticky navba (Header) */}
      <Navbar ref={navbarRef} as="header" variant="dark" expand="lg" bg="dark" className="d-block z-fixed p-0">
        <Container className="d-block py-1 py-lg-3" data-bs-theme="dark">
          <div className="navbar-stuck-hide pt-1" />
          <Row className="flex-nowrap align-items-center g-0">
            <Col xs={true} lg={3} className="d-flex align-items-center">
              {/* Mobile offcanvas menu toggler (Hamburger) */}
              <Navbar.Toggle className="me-4 me-lg-0" aria-controls="navbarNav" />

              {/* Navbar brand (Logo) */}
              <Logo href={logoHref ? logoHref : '/home'} icon="sm" className="me-0">
                Cartzilla
              </Logo>
            </Col>
            <Col xs={true} lg={9} className="d-flex align-items-center justify-content-end">
              {/* Search visible on screens > 991px wide (lg breakpoint) */}
              <div className="position-relative flex-fill d-none d-lg-block pe-4 pe-xl-5">
                <i className="ci-search position-absolute top-50 translate-middle-y d-flex fs-lg text-white ms-3" />
                <FormControl
                  type="search"
                  size="lg"
                  className="form-icon-start border-white rounded-pill"
                  placeholder="Search the products"
                />
              </div>

              {/* Sale link visible on screens > 1200px wide (xl breakpoint) */}
              <Link
                href="/shop/electronics"
                className="d-none d-xl-flex align-items-center text-decoration-none animate-shake navbar-stuck-hide me-3 me-xl-4 me-xxl-5"
              >
                <div className="btn btn-icon btn-lg fs-lg text-primary bg-body-secondary bg-opacity-75 pe-none rounded-circle">
                  <i className="ci-percent animate-target" />
                </div>
                <div className="ps-2 text-nowrap">
                  <div className="fs-xs text-body">Only this month</div>
                  <div className="fw-medium text-white">Super Sale 20%</div>
                </div>
              </Link>

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
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-controls="searchBar"
                  aria-expanded={searchOpen}
                  aria-label="Toggle search bar"
                >
                  <i className="ci-search animate-target" />
                </Button>

                {isLoggedIn ? (
                  <>
                    {/* Account button logged in state visible on screens > 768px wide (md breakpoint) */}
                    <div ref={tooltipContainer} className="position-relative">
                      <OverlayTrigger
                        container={tooltipContainer}
                        placement="bottom"
                        overlay={<Tooltip className="tooltip-sm text-nowrap">{isLoggedIn.name}</Tooltip>}
                      >
                        <Link
                          href={isLoggedIn.href}
                          className="btn btn-icon btn-lg btn-secondary animate-scale fs-5 fw-normal position-relative rounded-circle ms-2 d-none d-md-inline-flex"
                        >
                          <span className="animate-target">{isLoggedIn.name.charAt(0).toUpperCase()}</span>
                        </Link>
                      </OverlayTrigger>
                    </div>
                  </>
                ) : (
                  <>
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
                      href="/account/shop/wishlist"
                      className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-pulse d-none d-md-inline-flex"
                      aria-label="Wishlist"
                    >
                      <i className="ci-heart animate-target" />
                    </Link>
                  </>
                )}

                {/* Cart button */}
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openOffcanvas('cart')}
                  className="btn-icon position-relative rounded-circle ms-2"
                  aria-label="Shopping cart"
                >
                  {cartCounter > 0 && (
                    <Badge
                      pill
                      bg="success"
                      className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3 border-dark"
                      style={
                        {
                          minWidth: 24,
                          '--cz-badge-padding-y': '.25em',
                          '--cz-badge-padding-x': '.42em',
                        } as CSSProperties
                      }
                    >
                      {cartCounter}
                    </Badge>
                  )}
                  <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                    <i className="ci-shopping-cart animate-target ms-n1" />
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
          <div className="navbar-stuck-hide pb-1"></div>
        </Container>

        {/* Search visible on screens < 992px wide (lg breakpoint). It is hidden inside collapse by default */}
        <Collapse in={searchOpen} className="position-absolute top-100 z-2 w-100 bg-dark d-lg-none">
          <div id="searchBar">
            <Container className="position-relative my-3" data-bs-theme="dark">
              <i className="ci-search position-absolute top-50 translate-middle-y d-flex fs-lg text-white ms-3" />
              <FormControl
                ref={searchRef}
                type="search"
                className="form-icon-start border-white rounded-pill"
                placeholder="Search the products"
              />
            </Container>
          </div>
        </Collapse>

        {/* Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
        <Collapse in={stuckNavOpen} className="navbar-stuck-hide">
          <div id="stuckNav">
            <Navbar.Offcanvas id="navbarNav" placement="start" aria-labelledby="navbarNavLabel">
              <Offcanvas.Header closeButton className="py-3">
                <Offcanvas.Title id="navbarNavLabel">Browse Cartzilla</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="py-3 py-lg-0">
                <Container className="px-0 px-lg-3">
                  <Row>
                    {/* Categories mega menu */}
                    <Col lg={3}>
                      <Nav>
                        <DropdownHover autoClose="outside" className="w-100">
                          {/* Buttton visible on screens > 991px wide (lg breakpoint) */}
                          <DropdownToggle
                            as="div"
                            bsPrefix="cursor-pointer d-none d-lg-block"
                            className="with-focus"
                            data-bs-theme="dark"
                          >
                            <Link href="/shop" className="position-absolute top-0 start-0 w-100 h-100">
                              <span className="visually-hidden">Categories</span>
                            </Link>
                            <Button
                              variant="secondary"
                              size="lg"
                              className="dropdown-toggle w-100 rounded-bottom-0 justify-content-start pe-none"
                            >
                              <i className="ci-grid fs-lg" />
                              <span className="ms-2 me-auto">Categories</span>
                            </Button>
                          </DropdownToggle>
                          {/* Buttton visible on screens < 992px wide (lg breakpoint) */}
                          <DropdownToggle
                            variant="secondary"
                            size="lg"
                            className="with-focus w-100 justify-content-start d-lg-none mb-2"
                          >
                            <i className="ci-grid fs-lg" />
                            <span className="ms-2 me-auto">Categories</span>
                          </DropdownToggle>

                          {/* Mega menu */}
                          <DropdownMenu
                            as="ul"
                            renderOnMount
                            className={`w-100 rounded-top-0 rounded-bottom-4 py-1 p-lg-1${expandedCategories ? ' dropdown-menu-static' : ''}`}
                            style={
                              {
                                '--cz-dropdown-spacer': 0,
                                '--cz-dropdown-item-padding-y': '.625rem',
                                '--cz-dropdown-item-spacer': 0,
                              } as CSSProperties
                            }
                          >
                            <li className="d-lg-none pt-2">
                              <DropdownItem as={Link} href="/shop" className="fw-medium">
                                <i className="ci-grid fs-xl opacity-60 pe-1 me-2" />
                                All Categories 
                                <i className="ci-chevron-right fs-base ms-auto me-n1" />
                              </DropdownItem>
                            </li>
                         
                          {categories.map(({ name, href, icon, icon_image, subcategories }, index) => (
                            <DropdownHover key={index} as="li" drop="end" className="position-static">
                              <DropdownToggle
                                as="div"
                                className="with-focus"
                                bsPrefix={`position-relative rounded pb-1 px-lg-2${index === 0 ? ' pt-2' : ''}`}
                              >
                                <Link href={href} className="dropdown-item fw-medium stretched-link d-none d-lg-flex">
                                  {/* Parent icon */}
                                  {icon && <i className={`${icon} fs-xl opacity-60 pe-1 me-2`} />}
                                  {icon_image && (
                                    <img
                                      src={icon_image}
                                      alt={name}
                                      width={24}
                                      height={24}
                                      className="me-2"
                                      style={{ objectFit: 'contain' }}
                                    />
                                  )}
                                  <span className="text-truncate">{name}</span>
                                  <i className="ci-chevron-right fs-base ms-auto me-n1" />
                                </Link>

                                <DropdownItem as="div" className="fw-medium text-wrap stretched-link d-lg-none">
                                  {icon && <i className={`${icon} fs-xl opacity-60 pe-1 me-2`} />}
                                  {icon_image && (
                                    <img
                                      src={icon_image}
                                      alt={name}
                                      width={24}
                                      height={24}
                                      className="me-2"
                                      style={{ objectFit: 'contain' }}
                                    />
                                  )}
                                  {name}
                                  <i className="ci-chevron-down fs-base ms-auto me-n1" />
                                </DropdownItem>
                              </DropdownToggle>

                              {subcategories && subcategories.length > 0 && (
                                <DropdownMenu
                                  className="rounded-4 p-4"
                                  style={
                                    {
                                      top: '1rem',
                                      height: 'calc(100% - .1875rem)',
                                      animation: 'none',
                                      '--cz-dropdown-spacer': '.3125rem',
                                    } as React.CSSProperties
                                  }
                                >
                                  <div className="d-flex flex-column flex-lg-row h-100 gap-4">
                                    <div style={{ minWidth: 194 }}>
                                      <div className="h6 mb-2">Subcategories</div>
                                      <ul className="nav flex-column gap-2 mt-0">
                                        {subcategories.map(({ title, href, icon, icon_image }, subIndex) => (
                                          <li key={subIndex} className="d-flex w-100 pt-1">
                                            <Nav.Link
                                              as={Link}
                                              href={href}
                                              className="animate-underline animate-target d-inline fw-normal text-truncate p-0"
                                            >
                                              {icon && <i className={`${icon} me-2`} />}
                                              {icon_image && (
                                                <img
                                                  src={icon_image}
                                                  alt={title}
                                                  width={18}
                                                  height={18}
                                                  className="me-2"
                                                  style={{ objectFit: 'contain' }}
                                                />
                                              )}
                                              {title}
                                            </Nav.Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </DropdownMenu>
                              )}
                            </DropdownHover>
                          ))}

                          </DropdownMenu>
                        </DropdownHover>
                      </Nav>
                    </Col>

                    {/* Navbar nav */}
                    <Col
                      lg={9}
                      className="navbar flex-column flex-lg-row flex-nowrap align-items-stretch pt-3 pt-lg-0 pb-0 ps-lg-0"
                    >
                      <Nav as="ul" className="position-relative w-100">
                        {mainNavigation.map(({ title, href, submenu, megamenu }, index) => (
                          <Fragment key={index}>
                            {submenu && (
                              <DropdownHover
                                key={index}
                                as="li"
                                className="nav-item me-lg-n1 me-xl-0"
                                autoClose="outside"
                              >
                                <DropdownToggle
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
                                </DropdownToggle>
                                <DropdownMenu as="ul">
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
                                        <li
                                          key={index}
                                          className={preview ? 'hover-effect-opacity px-2 mx-n2' : undefined}
                                        >
                                          <DropdownItem
                                            as={Link}
                                            href={href}
                                            className={subtitle ? 'd-block mb-0' : ''}
                                          >
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
                                <DropdownToggle as={Nav.Link} className="with-focus" active={pathname.startsWith(href)}>
                                  {title}
                                </DropdownToggle>
                                <DropdownMenu className="rounded-4 p-4">
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
                                </DropdownMenu>
                              </DropdownHover>
                            )}
                            {!submenu && !megamenu && (
                              <Nav.Item key={index} as="li" className="me-lg-n1 me-xl-0">
                                <Nav.Link as={Link} href={href} active={pathname.startsWith(href)}>
                                  {title}
                                </Nav.Link>
                              </Nav.Item>
                            )}
                          </Fragment>
                        ))}
                      </Nav>
                      <hr className="d-lg-none my-3" />
                      <Nav as="ul">
                        <DropdownHover as="li" className="nav-item me-lg-n2 me-xl-n1">
                          <DropdownToggle as={Nav.Link} className="with-focus fs-sm px-3">
                            Eng
                          </DropdownToggle>
                          <DropdownMenu
                            as="ul"
                            className="fs-sm"
                            style={
                              { '--cz-dropdown-min-width': '7.5rem', '--cz-dropdown-spacer': '.25rem' } as CSSProperties
                            }
                          >
                            <li>
                              <DropdownItem href="#fr">Français</DropdownItem>
                              <DropdownItem href="#de">Deutsch</DropdownItem>
                              <DropdownItem href="#it">Italiano</DropdownItem>
                            </li>
                          </DropdownMenu>
                        </DropdownHover>
                        <DropdownHover as="li" className="nav-item me-lg-n1">
                          <DropdownToggle as={Nav.Link} className="with-focus fs-sm px-3">
                            USD ($)
                          </DropdownToggle>
                          <DropdownMenu
                            as="ul"
                            align="end"
                            className="fs-sm"
                            style={
                              { '--cz-dropdown-min-width': '7rem', '--cz-dropdown-spacer': '.25rem' } as CSSProperties
                            }
                          >
                            <li>
                              <DropdownItem href="#eur">€ EUR</DropdownItem>
                              <DropdownItem href="#ukp">£ UKP</DropdownItem>
                              <DropdownItem href="#jpy">¥ JPY</DropdownItem>
                            </li>
                          </DropdownMenu>
                        </DropdownHover>
                      </Nav>
                    </Col>
                  </Row>
                </Container>
              </Offcanvas.Body>
              {isLoggedIn ? (
                <>
                  {/* Account button logged in state visible on screens < 768px wide (md breakpoint) */}
                  <Offcanvas.Header className="w-100 border-top py-3 mt-3 d-md-none">
                    <Link
                      href="/account/shop"
                      className="d-flex align-items-center text-decoration-none cursor-pointer"
                      // onClick={() => closeOffcanvas('')}
                    >
                      <div
                        className="h5 d-flex justify-content-center align-items-center flex-shrink-0 text-primary bg-primary-subtle lh-1 rounded-circle mb-0"
                        style={{ width: '3rem', height: '3rem' }}
                      >
                        {isLoggedIn.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="ps-3">
                        <h5 className="h6 mb-0">{isLoggedIn.name}</h5>
                        {isLoggedIn.bonuses && (
                          <div className="d-flex flex-nowrap fs-sm text-body mt-1">
                            <svg
                              className="text-warning flex-shrink-0 me-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                            >
                              <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"></path>
                              <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"></path>
                              <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"></path>
                            </svg>
                            {isLoggedIn.bonuses} bonuses available
                          </div>
                        )}
                      </div>
                    </Link>
                  </Offcanvas.Header>
                </>
              ) : (
                <>
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
                </>
              )}
            </Navbar.Offcanvas>
          </div>
        </Collapse>
      </Navbar>

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
              {calculateTotal() >= 3000 ? (
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
                      {(3000 - calculateTotal()).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>{' '}
                    more to get <span className="text-dark-emphasis fw-semibold">Free Shipping</span>.
                  </p>
                  <ProgressBar
                    variant="warning"
                    now={(calculateTotal() / 3000) * 100}
                    className="w-100 rounded-pill"
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
                <Link
                  href="/shop/checkout-v1"
                  className="btn btn-lg btn-secondary w-100"
                  onClick={() => closeOffcanvas('cart')}
                >
                  View cart
                </Link>
                <Link
                  href="/shop/checkout-v1/delivery-1"
                  className="btn btn-lg btn-primary w-100"
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
            <Button onClick={() => closeOffcanvas('cart')}>Continue shopping</Button>
          </Offcanvas.Body>
        )}
      </Offcanvas>
    </Fragment>
  )
}

export default HeaderElectronics
