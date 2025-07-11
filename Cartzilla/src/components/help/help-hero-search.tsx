import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'

const HelpHeroSearch = () => (
  <Container as="section" className="pt-3 pt-sm-4">
    <div className="position-relative px-4 px-sm-5 px-xl-0 py-5">
      <span
        className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
        style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
      />
      <span
        className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
        style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
      />
      <div className="position-relative z-1">
        <h1 className="h2 text-center pt-md-2 pt-lg-3 pt-xl-4 mb-4">How can we help?</h1>
        <div className="position-relative mx-auto mb-4" style={{ maxWidth: 545 }}>
          <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-body fs-lg ms-3" />
          <FormControl
            type="search"
            size="lg"
            className="form-icon-start"
            placeholder="What do you need help with?"
            aria-label="Search field"
          />
        </div>
        <Row className="justify-content-center g-4 pt-2 pt-sm-3 pb-md-2 pb-lg-3 pb-xl-4">
          {[
            { icon: 'ci-delivery', title: 'Track your order', href: '/help/article' },
            { icon: 'ci-shopping-bag', title: 'Edit or cancel order', href: '/help/article' },
            { icon: 'ci-refresh-cw', title: 'Returns & refunds', href: '/help/article' },
            { icon: 'ci-gift', title: 'My bonus account', href: '/help/article' },
          ].map(({ icon, title, href }, index) => (
            <Col key={index} xs={6} md={3} xl={2} className="text-center">
              <div className="position-relative d-inline-block">
                <div
                  className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis"
                  style={{ width: 48, height: 48 }}
                >
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                  <i className={`${icon} position-relative z-1 fs-xl`} />
                </div>
                <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                  <Link href={href} className="hover-effect-underline stretched-link text-decoration-none">
                    {title}
                  </Link>
                </h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </Container>
)

export default HelpHeroSearch
