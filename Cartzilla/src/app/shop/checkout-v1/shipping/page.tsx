import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import DeliveryInfoOverviewCheckout_V1 from './delivery-info-overview'
import OrderSummarySidebar from '@/components/shop/order-summary-sidebar'
import SelectBox from '@/components/forms/select-box'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'

export const metadata: Metadata = {
  title: 'Cartzilla | Checkout v.1 - Shipping Address',
}

const Checkout_V1_ShippingPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      <Container className="py-5">
        <Row className="pt-1 pt-sm-3 pt-lg-4 pb-2 pb-md-3 pb-lg-4 pb-xl-5">
          <Col lg={8} xl={7} className="position-relative z-2 mb-5 mb-lg-0">
            <Accordion className="d-flex flex-column gap-5 pe-lg-4 pe-xl-0">
              {/* Delivery info overview + Edit button */}
              <DeliveryInfoOverviewCheckout_V1 />

              {/* Shipping address form */}
              <div className="d-flex align-items-start">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                  style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}
                >
                  2
                </div>
                <div className="w-100 ps-3 ps-md-4">
                  <h1 className="h5 mb-md-4">Shipping address</h1>
                  <Form>
                    <Row xs={1} sm={2} className="g-3 g-sm-4 mb-4">
                      <Col>
                        <FormLabel htmlFor="shippingFn">
                          First name <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="text" size="lg" id="shippingFn" required />
                      </Col>
                      <Col>
                        <FormLabel htmlFor="shippingLn">
                          Last name <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="text" size="lg" id="shippingLn" required />
                      </Col>
                      <Col>
                        <FormLabel htmlFor="shippingEmail">
                          Email address <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="email" size="lg" id="shippingEmail" required />
                      </Col>
                      <Col>
                        <FormLabel htmlFor="shippingMobile">Mobile number</FormLabel>
                        <FormControl type="text" size="lg" id="shippingMobile" />
                      </Col>
                      <Col>
                        <FormLabel>
                          City <span className="text-danger">*</span>
                        </FormLabel>
                        <SelectBox
                          choices={[
                            { value: 'New York City', label: 'New York City' },
                            { value: 'Los Angeles', label: 'Los Angeles' },
                            { value: 'Chicago', label: 'Chicago' },
                            { value: 'Houston', label: 'Houston' },
                            { value: 'Phoenix', label: 'Phoenix' },
                            { value: 'Philadelphia', label: 'Philadelphia' },
                            { value: 'San Antonio', label: 'San Antonio' },
                            { value: 'San Diego', label: 'San Diego' },
                            { value: 'Dallas', label: 'Dallas' },
                            { value: 'San Jose', label: 'San Jose' },
                            { value: 'Austin', label: 'Austin' },
                            { value: 'Seattle', label: 'Seattle' },
                          ]}
                          searchEnabled
                          inputClassName="form-select-lg"
                          placeholder="Select your city"
                          required
                          aria-label="City select"
                        />
                      </Col>
                      <Col>
                        <FormLabel htmlFor="shippingPostcode">
                          Postcode <span className="text-danger">*</span>
                        </FormLabel>
                        <FormControl type="text" size="lg" id="shippingPostcode" required />
                      </Col>
                    </Row>
                    <div className="mb-3">
                      <FormLabel htmlFor="shippingAddress">
                        House / apartment number and street address <span className="text-danger">*</span>
                      </FormLabel>
                      <FormControl type="text" size="lg" id="shippingAddress" required />
                    </div>
                    <Nav className="mb-4">
                      <NavLink href="#" className="px-0">
                        Add address line
                        <i className="ci-plus fs-base ms-1" />
                      </NavLink>
                    </Nav>
                    <h3 className="h6">
                      Billing address
                      <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="right"
                        overlay={
                          <Popover className="popover-sm">
                            <PopoverBody>
                              Uncheck the checkbox below if your Billing address should be different from your Shipping
                              address.
                            </PopoverBody>
                          </Popover>
                        }
                      >
                        <i className="ci-info text-body-secondary align-middle ms-2" />
                      </OverlayTrigger>
                    </h3>
                    <FormCheck id="sameAddress" label="Same as delivery address" className="mb-lg-4" defaultChecked />
                    <Link href="./payment" className="btn btn-lg btn-primary w-100 d-none d-lg-flex">
                      Continue
                      <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                    </Link>
                  </Form>
                </div>
              </div>

              {/* Payment */}
              <div className="d-flex align-items-start">
                <div
                  className="d-flex align-items-center justify-content-center bg-body-secondary text-body-secondary rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                  style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}
                >
                  3
                </div>
                <h2 className="h5 text-body-secondary ps-3 ps-md-4 mb-0">Payment</h2>
              </div>
            </Accordion>
          </Col>

          {/* Order summary (sticky sidebar) */}
          <Col lg={4} className="offset-xl-1" style={{ marginTop: -110 }}>
            <OrderSummarySidebar
              cartSlug="electronics"
              editCartUrl="./"
              tax={73.4}
              shipping={16.5}
              className="position-sticky top-0"
              style={{ paddingTop: 110 }}
            />
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterElectronics />

    {/* Fixed positioned pay button that is visible on screens < 992px wide (lg breakpoint) */}
    <div className="fixed-bottom z-sticky w-100 py-2 px-3 bg-body border-top shadow d-lg-none">
      <Link href="./payment" className="btn btn-lg btn-primary w-100">
        Continue
        <i className="ci-chevron-right fs-lg ms-1 me-n1" />
      </Link>
    </div>
  </>
)

export default Checkout_V1_ShippingPage
