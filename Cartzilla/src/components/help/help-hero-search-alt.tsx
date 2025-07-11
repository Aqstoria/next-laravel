import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

const HelpHeroSearchAlt = () => (
  <Container as="section" className="pt-3 pt-sm-4">
    <div className="position-relative">
      <span
        className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
        style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
      />
      <span
        className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
        style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
      />
      <Row className="align-items-center position-relative z-1">
        <Col lg={7} xl={5} className="offset-xl-1 py-5">
          <div className="px-4 px-sm-5 px-xl-0 pe-lg-4">
            <h1 className="text-center text-sm-start mb-4">How can we help?</h1>
            <form className="d-flex flex-column flex-sm-row gap-2">
              <FormControl
                type="search"
                size="lg"
                placeholder="What do you need help with?"
                aria-label="Search field"
              />
              <Button type="submit" size="lg" className="px-3">
                <i className="ci-search fs-lg ms-n2 ms-sm-0" />
                <span className="ms-2 d-sm-none">Search</span>
              </Button>
            </form>
            <Nav className="gap-2 pt-3 pt-sm-4 mt-1 mt-sm-0">
              <NavLink as="span" className="text-body-secondary pe-none p-0 me-1">
                Common topics:
              </NavLink>
              {[
                ['payments', 'help/v2/article'],
                ['refunds', 'help/v2/article'],
                ['delivery', 'help/v2/article'],
                ['dashboard', 'help/v2/article'],
              ].map((link, index) => (
                <NavLink
                  key={index}
                  as={Link}
                  href={link[1]}
                  className="text-body-emphasis text-decoration-underline p-0 me-1"
                >
                  {link[0]}
                </NavLink>
              ))}
            </Nav>
          </div>
        </Col>
        <Col lg={5} className="offset-xl-1 d-none d-lg-block">
          <Image
            priority
            src="/img/help/hero-light.png"
            width={1052}
            height={712}
            className="rtl-flip d-none-dark"
            alt="Image"
          />
          <Image
            priority
            src="/img/help/hero-dark.png"
            width={1052}
            height={712}
            className="rtl-flip d-none d-block-dark"
            alt="Image"
          />
        </Col>
      </Row>
    </div>
  </Container>
)

export default HelpHeroSearchAlt
