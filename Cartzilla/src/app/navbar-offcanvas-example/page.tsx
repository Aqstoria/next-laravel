import Link from 'next/link'
import Logo from '@/components/logo'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarOffcanvas from 'react-bootstrap/NavbarOffcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const NavbarOffcanvasDemo = () => (
  <>
    <Navbar as="header" expand="lg" className="bg-body sticky-top p-0">
      <Container className="py-3 px-4">
        <Logo href="#" className="fs-2">
          Cartzilla
        </Logo>
        <NavbarToggle aria-controls="navbarOffcanvas" />
        <NavbarOffcanvas id="navbarOffcanvas" placement="end" aria-labelledby="navbarOffcanvasLabel">
          <OffcanvasHeader closeButton className="w-100">
            <OffcanvasTitle id="navbarOffcanvasLabel">Menu</OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody className="navbar align-items-start w-100 pt-0">
            <Nav as="ul" defaultActiveKey="#home" className="w-100 ms-lg-4">
              <NavItem as="li">
                <NavLink as={Link} href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#works">
                  Our works
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#about">
                  About us
                </NavLink>
              </NavItem>
              <NavItem as="li">
                <NavLink as={Link} href="#contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </Container>
    </Navbar>
    <Container className="p-4">
      <h1 className="h3">Offcanvas menu example</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
        maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </Container>
  </>
)

export default NavbarOffcanvasDemo
