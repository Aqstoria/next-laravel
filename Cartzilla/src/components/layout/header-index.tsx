'use client'

import { Fragment, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import { useStickyElement } from '@/hooks/use-sticky-element'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Logo from '@/components/logo'
import Nav from 'react-bootstrap/Nav'
import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import ThemeSwitcher from '../theme-switcher'
import { mainNavigation } from '@/app/navigation'

const HeaderIndex = ({ logoHref }: { logoHref?: string }) => {
  const pathname = usePathname()
  const { stickyElementRef, isStuck } = useStickyElement<HTMLDivElement>()

  return (
    <Navbar
      ref={stickyElementRef}
      as="header"
      expand="lg"
      bg="body"
      className={`navbar-sticky sticky-top px-0${isStuck ? ' is-stuck' : ''}`}
    >
      <Container className="flex-nowrap">
        {/* Mobile offcanvas menu toggler (Hamburger) */}
        <Navbar.Toggle className="me-4 me-lg-0" aria-controls="navbarNav" />

        {/* Navbar brand (Logo) */}
        <Logo href={logoHref ? logoHref : '/'} icon="sm" className="py-1 py-md-2 py-xl-1">
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
                      <DropdownMenu as="ul" style={{ '--cz-dropdown-spacer': '.875rem' } as CSSProperties}>
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
                    <DropdownHover key={index} as="li" className="nav-item position-static py-lg-2 me-lg-n1 me-xl-0">
                      <DropdownToggle as={Nav.Link} className="with-focus" active={pathname.startsWith(href)}>
                        {title}
                      </DropdownToggle>
                      <DropdownMenu
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
                      </DropdownMenu>
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
        </Navbar.Offcanvas>

        {/* Button group */}
        <div className="d-flex gap-3 gap-sm-4">
          <ThemeSwitcher dropdownMenuCentered />
          <Button
            className="animate-slide-end"
            href="https://themes.getbootstrap.com/product/cartzilla-multipurpose-e-commerce-template-react"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ci-shopping-cart fs-base animate-target ms-n1 me-2" />
            Buy now
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default HeaderIndex
