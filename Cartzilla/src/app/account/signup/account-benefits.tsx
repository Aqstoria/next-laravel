'use client'

import { useOffcanvas } from '@/contexts/offcanvas-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

export const AccountBenefitsToggle = () => {
  const { openOffcanvas } = useOffcanvas()
  return (
    <Nav className="fs-sm mb-4 d-lg-none">
      <span className="me-2">Uncertain about creating an account?</span>
      <NavLink className="text-decoration-underline p-0" onClick={() => openOffcanvas('benefits')}>
        Explore the Benefits
      </NavLink>
    </Nav>
  )
}

export const AccountBenefitsOffcanvas = () => {
  const { closeOffcanvas, isOpen } = useOffcanvas()

  return (
    <Offcanvas
      show={isOpen('benefits')}
      onHide={() => closeOffcanvas('benefits')}
      responsive="lg"
      placement="end"
      className="w-100 py-lg-4 ms-auto"
      style={{ maxWidth: 1034 }}
    >
      <OffcanvasHeader className="justify-content-end position-relative z-2 p-3">
        <Button
          variant="outline-dark"
          className="btn-icon text-dark border-dark bg-transparent rounded-circle d-none-dark"
          aria-label="Close"
          onClick={() => closeOffcanvas('benefits')}
        >
          <i className="ci-close fs-lg" />
        </Button>
        <Button
          variant="outline-dark"
          className="btn-icon text-light border-light bg-transparent rounded-circle d-none d-inline-flex-dark"
          aria-label="Close"
          onClick={() => closeOffcanvas('benefits')}
        >
          <i className="ci-close fs-lg" />
        </Button>
      </OffcanvasHeader>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-lg-none">
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
          style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
        ></span>
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
          style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
        ></span>
      </div>
      <OffcanvasBody className="position-relative z-2 d-lg-flex flex-column align-items-center justify-content-center h-100 pt-2 px-3 p-lg-0">
        <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
          <span
            className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
            style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
          ></span>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
            style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
          ></span>
        </div>
        <div className="position-relative z-2 w-100 text-center px-md-2 p-lg-5">
          <h2 className="h4 pb-3">Cartzilla account benefits</h2>
          <div className="mx-auto" style={{ maxWidth: 790 }}>
            <Row xs={1} sm={2} className="g-3 g-md-4 g-lg-3 g-xl-4">
              {[
                { icon: 'ci-mail', title: 'Subscribe to your favorite products' },
                { icon: 'ci-settings', title: 'View and manage your orders and wishlist' },
                { icon: 'ci-gift', title: 'Earn rewards for future purchases' },
                { icon: 'ci-percent', title: 'Receive exclusive offers and discounts' },
                { icon: 'ci-heart', title: 'Create multiple wishlists' },
                { icon: 'ci-pie-chart', title: 'Pay for purchases by installments' },
              ].map(({ icon, title }, index) => (
                <Col key={index}>
                  <Card className="h-100 bg-transparent border-0">
                    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-25 border border-white border-opacity-50 rounded-4 d-none-dark" />
                    <span
                      className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded-4 d-none d-block-dark"
                      style={{ '--cz-bg-opacity': 0.05 } as React.CSSProperties}
                    />
                    <CardBody className="position-relative z-2">
                      <div className="d-inline-flex position-relative text-info p-3">
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-pill d-none-dark" />
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-secondary rounded-pill d-none d-block-dark" />
                        <i className={`${icon} position-relative z-2 fs-4 m-1`} />
                      </div>
                      <h3 className="h6 pt-2 my-2">{title}</h3>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  )
}
