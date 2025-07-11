import Link from 'next/link'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '@/components/logo'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const NavbarColorSchemesDemo = () => {
  const code = `import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from '@/components/logo'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import DropdownHover from '@/components/dropdown-hover'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export default function NavbarColorSchemesDemo() {
  return (
    <>
      {/* Change to "container-fluid" for full width navbar */}

      {/* Dark navbar */}
      <Navbar as="header" expand="lg" variant="dark" bg="dark" className="px-0 mb-4" data-bs-theme="dark">
        <Container>
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target"/>
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target"/>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3 border-dark"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1"/>
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarDarkCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarDarkCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>


      {/* Info navbar */}
      <Navbar as="header" expand="lg" variant="dark" bg="info" className="px-0 mb-4">
        <Container>
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1" data-bs-theme="dark">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target"/>
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target"/>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon bg-white bg-opacity-10 border-0 position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3 border-info"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1"/>
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarInfoCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarInfoCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>


      {/* Gray navbar */}
      <Navbar as="header" expand="lg" bg="body-secondary" className="px-0 mb-4">
        <Container>
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target"/>
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target"/>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon bg-body border-0 position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                    '--cz-border-color': ' var(--cz-secondary-bg)',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1"/>
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarGrayCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarGrayCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>


      {/* Subtle primary navbar */}
      <Navbar as="header" expand="lg" bg="primary-subtle" className="px-0">
        <Container>
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target"/>
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target"/>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon bg-primary bg-opacity-10 border-0 position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                    '--cz-border-color': ' var(--cz-primary-bg-subtle)',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1"/>
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarPrimaryCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarPrimaryCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}`

  return (
    <section id="navbar-colors" className="docs-section pb-sm-2 pb-lg-3 mb-5">
      <h4 className="mb-4">Color schemes</h4>
      <DocsComponentDemo flushed code={code}>
        <Navbar as="header" expand="lg" variant="dark" bg="dark" className="rounded px-3 mb-4" data-bs-theme="dark">
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target" />
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3 border-dark"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1" />
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarDarkCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarDarkCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        <Navbar as="header" expand="lg" variant="dark" bg="info" className="rounded px-3 mb-4">
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1" data-bs-theme="dark">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target" />
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon bg-white bg-opacity-10 border-0 position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3 border-info"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1" />
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarInfoCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarInfoCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        <Navbar as="header" expand="lg" bg="body-secondary" className="rounded px-3 mb-4">
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target" />
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon bg-body border-0 position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                    '--cz-border-color': ' var(--cz-secondary-bg)',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1" />
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarGrayCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarGrayCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        <Navbar as="header" expand="lg" bg="primary-subtle" className="rounded px-3">
          <Logo href="#">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="d-flex align-items-center order-lg-2 py-lg-1">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon fs-xl border-0 rounded-circle animate-scale"
              aria-label="Toggle search bar"
            >
              <i className="ci-search animate-target" />
            </Button>
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake"
              aria-label="Account"
            >
              <i className="ci-user animate-target" />
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="btn-icon bg-primary bg-opacity-10 border-0 position-relative rounded-circle ms-2"
              aria-label="Shopping cart"
            >
              <Badge
                pill
                bg="success"
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                    '--cz-border-color': ' var(--cz-primary-bg-subtle)',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1" />
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarPrimaryCollapse" />
          </div>
          <NavbarCollapse as="nav" id="navbarPrimaryCollapse">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#link">
                  Link
                </NavLink>
              </NavItem>
              <DropdownHover as="li" className="nav-item" autoClose="outside">
                <DropdownToggle as={NavLink} className="with-focus">
                  Dropdown
                </DropdownToggle>
                <DropdownMenu as="ul">
                  <li>
                    <DropdownItem href="#">Action link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Yet another link</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="#">Another action</DropdownItem>
                  </li>
                  <DropdownDivider as="li" />
                  <li>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </li>
                </DropdownMenu>
              </DropdownHover>
              <NavItem as="li">
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </DocsComponentDemo>
    </section>
  )
}

export default NavbarColorSchemesDemo
