import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import OrderSummarySidebar from '@/components/shop/order-summary-sidebar'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

export const metadata: Metadata = {
  title: 'Cartzilla | Checkout v.1 - Delivery Info Step 1',
}

const Checkout_V1_Delivery1Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      <Container className="py-5">
        <Row className="pt-1 pt-sm-3 pt-lg-4 pb-2 pb-md-3 pb-lg-4 pb-xl-5">
          {/* Delivery info (Step 1) */}
          <Col lg={8} xl={7} className="position-relative z-2 mb-5 mb-lg-0">
            <div className="d-flex flex-column gap-5 pe-lg-4 pe-xl-0">
              <div className="d-flex align-items-start">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                  style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}
                >
                  1
                </div>
                <div className="w-100 ps-3 ps-md-4">
                  <h1 className="h5 mb-md-4">Delivery information</h1>
                  <div className="ms-n5 ms-sm-0">
                    <p className="fs-sm mb-md-4">
                      Add your Postcode to see the delivery and collection options available in your area.
                    </p>
                    <div className="d-flex flex-column flex-md-row align-items-md-end gap-3 gap-xl-4">
                      <div className="w-100">
                        <FormLabel htmlFor="postcode">Postcode</FormLabel>
                        <FormControl type="text" size="lg" id="postcode" placeholder="e.g. H1 1AG" />
                      </div>
                      <Link href="./delivery-2" className="btn btn-lg btn-primary">
                        Calculate cost and availability
                        <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div
                  className="d-flex align-items-center justify-content-center bg-body-secondary text-body-secondary rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                  style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}
                >
                  2
                </div>
                <h2 className="h5 text-body-secondary ps-3 ps-md-4 mb-0">Shipping address</h2>
              </div>
              <div className="d-flex align-items-start">
                <div
                  className="d-flex align-items-center justify-content-center bg-body-secondary text-body-secondary rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                  style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}
                >
                  3
                </div>
                <h2 className="h5 text-body-secondary ps-3 ps-md-4 mb-0">Payment</h2>
              </div>
            </div>
          </Col>

          {/* Order summary (sticky sidebar) */}
          <Col lg={4} className="offset-xl-1" style={{ marginTop: -110 }}>
            <OrderSummarySidebar
              cartSlug="electronics"
              editCartUrl="./"
              tax={73.4}
              shipping="Calculated at checkout"
              className="position-sticky top-0"
              style={{ paddingTop: 110 }}
            />
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterElectronics />
  </>
)

export default Checkout_V1_Delivery1Page
