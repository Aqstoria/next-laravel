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
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import FormControl from 'react-bootstrap/FormControl'
import ThemeSwitcher from '@/components/theme-switcher'

const NavbarContentDemo = () => {
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
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import FormControl from 'react-bootstrap/FormControl'
import ThemeSwitcher from '@/components/theme-switcher'

export default function NavbarContentDemo() {
  return (
    <>
      {/* Change to "container-fluid" for full width navbar */}

      {/* Navbar with multi-level dropdown + CTA button */}
      <Navbar as="header" expand="lg" bg="body" className="shadow px-0 mb-4">
        <Container className="py-1">
          <Logo href="#">Cartzilla</Logo>
          <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarCollapse1" />
          <NavbarCollapse as="nav" id="navbarCollapse1">
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
                  <DropdownHover as="li" drop="end">
                    <DropdownToggle as={DropdownItem} className="with-focus">
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu as="ul">
                      <li>
                        <DropdownItem href="#">Action link</DropdownItem>
                      </li>
                      <li>
                        <DropdownItem href="#">Another action</DropdownItem>
                      </li>
                      <li>
                        <DropdownItem href="#">Something else here</DropdownItem>
                      </li>
                      <li>
                        <DropdownItem href="#">Yet another link</DropdownItem>
                      </li>
                    </DropdownMenu>
                  </DropdownHover>
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
            <Button className="animate-shake mt-3 mt-lg-0">
              <i className="ci-user animate-target ms-n1 me-2"/>
              Sign up
            </Button>
          </NavbarCollapse>
        </Container>
      </Navbar>


      {/* Navbar with simple navigation + Action buttons group */}
      <Navbar as="header" expand="lg" bg="body" className="shadow px-0 mb-4">
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
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-sm-inline-flex"
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
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                    '--cz-border-color': ' var(--cz-body-bg)',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1"/>
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarCollapse2" />
          </div>
          <NavbarCollapse as="nav" id="navbarCollapse2">
            <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
              {[
                { href: '#home', label: 'Home' },
                { href: '#services', label: 'Services' },
                { href: '#about', label: 'About' },
              ].map(({ href, label }, index) => (
                <NavItem as="li" key={index}>
                  <NavLink as={Link} href={href}>
                    {label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <Link href="#" className="btn btn-secondary d-sm-none mt-3 mb-2 mt-lg-0">
              <i className="ci-user ms-n1 me-2"/>
              Sign up
            </Link>
          </NavbarCollapse>
        </Container>
      </Navbar>


      {/* Multi-level navbar with search bar, action buttons group, "Categories" dropdown button and navigation links */}
      <Navbar as="header" expand="lg" bg="body" className="d-block shadow px-0">

        {/* First level: Brand (logo) + search bar + action buttons group */}
        <Container className="flex-md-nowrap align-items-center justify-content-between">
          <Logo href="#" className="flex-shrink-0">
            <span className="d-none d-sm-inline">Cartzilla</span>
            <span className="d-sm-none">Cz</span>
          </Logo>
          <div className="position-relative w-100 d-none d-md-block mx-3 mx-lg-4">
            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"/>
            <FormControl type="search" className="form-icon-start" placeholder="Search" aria-label="Search" />
          </div>
          <div className="d-flex align-items-center py-lg-1">
            <ThemeSwitcher ghostButton />
            <Link
              href="#"
              className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-sm-inline-flex"
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
                className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                style={
                  {
                    '--cz-badge-padding-y': '.25em',
                    '--cz-badge-padding-x': '.42em',
                    '--cz-border-color': ' var(--cz-body-bg)',
                  } as React.CSSProperties
                }
              >
                3
              </Badge>
              <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                <i className="ci-shopping-cart animate-target ms-n1"/>
              </span>
            </Button>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarCollapse3" />
          </div>
        </Container>

        {/* Second level: Categories dropdown + collapsible navigation */}
        <Container>
          <NavbarCollapse as="nav" id="navbarCollapse3">
            <div className="position-relative d-md-none mt-3">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"/>
              <FormControl type="search" className="form-icon-start" placeholder="Search" aria-label="Search" />
            </div>
            <div className="d-lg-flex pt-3 pb-2">
              <Dropdown>
                <DropdownToggle variant="secondary" className="fs-base me-2">
                  <i className="ci-grid fs-lg ms-n1 me-2"/>
                  Categories
                </DropdownToggle>
                <DropdownMenu as="ul" style={{ '--cz-dropdown-spacer': '.5rem' } as React.CSSProperties}>
                  {[
                    { href: '#', label: 'TV, Video & Audio', icon: 'ci-monitor-2' },
                    { href: '#', label: 'Speakers & Home Music', icon: 'ci-speaker-2' },
                    { href: '#', label: 'Cameras, Photo & Video', icon: 'ci-camera-2' },
                    { href: '#', label: 'Charging Stations', icon: 'ci-battery-2' },
                    { href: '#', label: 'Headphones', icon: 'ci-headphones-2' },
                  ].map(({ href, label, icon }, index) => (
                    <li key={index}>
                      <DropdownItem as={Link} href={href} className="fw-medium d-flex pe-3">
                        <i className={\`\${icon} fs-xl opacity-60 pe-1 me-2\`}/>
                        <span className="text-truncate">{label}</span>
                      </DropdownItem>
                    </li>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#services', label: 'Services' },
                  { href: '#about', label: 'About' },
                  { href: '#contacts', label: 'Contacts' },
                ].map(({ href, label }, index) => (
                  <NavItem as="li" key={index}>
                    <NavLink as={Link} href={href}>
                      {label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Link href="#" className="btn btn-secondary d-sm-none mt-3 mb-2 mt-lg-0">
                <i className="ci-user ms-n1 me-2"/>
                Sign up
              </Link>
            </div>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}`

  return (
    <section id="navbar-content" className="docs-section pb-sm-2 pb-lg-3 mb-5">
      <h4 className="mb-4">Supported content</h4>
      <DocsComponentDemo flushed code={code}>
        <div className="bg-dotted rounded p-3 p-sm-4">
          <Navbar as="header" expand="lg" bg="body" className="rounded shadow p-3 mb-4">
            <Logo href="#">Cartzilla</Logo>
            <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarCollapse1" />
            <NavbarCollapse as="nav" id="navbarCollapse1">
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
                    <DropdownHover as="li" drop="end">
                      <DropdownToggle as={DropdownItem} className="with-focus">
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu as="ul">
                        <li>
                          <DropdownItem href="#">Action link</DropdownItem>
                        </li>
                        <li>
                          <DropdownItem href="#">Another action</DropdownItem>
                        </li>
                        <li>
                          <DropdownItem href="#">Something else here</DropdownItem>
                        </li>
                        <li>
                          <DropdownItem href="#">Yet another link</DropdownItem>
                        </li>
                      </DropdownMenu>
                    </DropdownHover>
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
              <Button className="animate-shake mt-3 mt-lg-0">
                <i className="ci-user animate-target ms-n1 me-2" />
                Sign up
              </Button>
            </NavbarCollapse>
          </Navbar>

          <Navbar as="header" expand="lg" bg="body" className="rounded shadow px-3 mb-4">
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
                className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-sm-inline-flex"
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
                  className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                  style={
                    {
                      '--cz-badge-padding-y': '.25em',
                      '--cz-badge-padding-x': '.42em',
                      '--cz-border-color': ' var(--cz-body-bg)',
                    } as React.CSSProperties
                  }
                >
                  3
                </Badge>
                <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                  <i className="ci-shopping-cart animate-target ms-n1" />
                </span>
              </Button>
              <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarCollapse2" />
            </div>
            <NavbarCollapse as="nav" id="navbarCollapse2">
              <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#services', label: 'Services' },
                  { href: '#about', label: 'About' },
                ].map(({ href, label }, index) => (
                  <NavItem as="li" key={index}>
                    <NavLink as={Link} href={href}>
                      {label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Link href="#" className="btn btn-secondary d-sm-none mt-3 mb-2 mt-lg-0">
                <i className="ci-user ms-n1 me-2" />
                Sign up
              </Link>
            </NavbarCollapse>
          </Navbar>

          <Navbar as="header" expand="lg" bg="body" className="d-block rounded shadow px-3">
            <div className="d-flex align-items-center justify-content-between">
              <Logo href="#" className="flex-shrink-0">
                <span className="d-none d-sm-inline">Cartzilla</span>
                <span className="d-sm-none">Cz</span>
              </Logo>
              <div className="position-relative w-100 d-none d-md-block mx-3 mx-lg-4">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                <FormControl type="search" className="form-icon-start" placeholder="Search" aria-label="Search" />
              </div>
              <div className="d-flex align-items-center py-lg-1">
                <ThemeSwitcher ghostButton />
                <Link
                  href="#"
                  className="btn btn-icon btn-lg fs-lg btn-outline-secondary border-0 rounded-circle animate-shake d-none d-sm-inline-flex"
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
                    className="position-absolute top-0 start-100 mt-n1 ms-n3 border border-3"
                    style={
                      {
                        '--cz-badge-padding-y': '.25em',
                        '--cz-badge-padding-x': '.42em',
                        '--cz-border-color': ' var(--cz-body-bg)',
                      } as React.CSSProperties
                    }
                  >
                    3
                  </Badge>
                  <span className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 rounded-circle animate-slide-end fs-lg">
                    <i className="ci-shopping-cart animate-target ms-n1" />
                  </span>
                </Button>
                <NavbarToggle className="animated-toggler ms-3" aria-controls="navbarCollapse3" />
              </div>
            </div>
            <NavbarCollapse as="nav" id="navbarCollapse3">
              <div className="position-relative d-md-none mt-3">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                <FormControl type="search" className="form-icon-start" placeholder="Search" aria-label="Search" />
              </div>
              <div className="d-lg-flex pt-3 pb-2">
                <Dropdown>
                  <DropdownToggle variant="secondary" className="fs-base me-2">
                    <i className="ci-grid fs-lg ms-n1 me-2" />
                    Categories
                  </DropdownToggle>
                  <DropdownMenu as="ul" style={{ '--cz-dropdown-spacer': '.5rem' } as React.CSSProperties}>
                    {[
                      { href: '#', label: 'TV, Video & Audio', icon: 'ci-monitor-2' },
                      { href: '#', label: 'Speakers & Home Music', icon: 'ci-speaker-2' },
                      { href: '#', label: 'Cameras, Photo & Video', icon: 'ci-camera-2' },
                      { href: '#', label: 'Charging Stations', icon: 'ci-battery-2' },
                      { href: '#', label: 'Headphones', icon: 'ci-headphones-2' },
                    ].map(({ href, label, icon }, index) => (
                      <li key={index}>
                        <DropdownItem as={Link} href={href} className="fw-medium d-flex pe-3">
                          <i className={`${icon} fs-xl opacity-60 pe-1 me-2`} />
                          <span className="text-truncate">{label}</span>
                        </DropdownItem>
                      </li>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <Nav as="ul" className="pt-2 pt-lg-0 me-auto" activeKey="#home">
                  {[
                    { href: '#home', label: 'Home' },
                    { href: '#services', label: 'Services' },
                    { href: '#about', label: 'About' },
                    { href: '#contacts', label: 'Contacts' },
                  ].map(({ href, label }, index) => (
                    <NavItem as="li" key={index}>
                      <NavLink as={Link} href={href}>
                        {label}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <Link href="#" className="btn btn-secondary d-sm-none mt-3 mb-2 mt-lg-0">
                  <i className="ci-user ms-n1 me-2" />
                  Sign up
                </Link>
              </div>
            </NavbarCollapse>
          </Navbar>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default NavbarContentDemo
