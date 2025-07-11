'use client'

import { useState } from 'react'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Link from 'next/link'
import OrderSummarySidebar from '@/components/shop/order-summary-sidebar'
import SelectBox from '@/components/forms/select-box'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import FormCheck from 'react-bootstrap/FormCheck'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const DeliveryCheckout_V1 = () => {
  const [shippingPrice, setShippingPrice] = useState(16.5)
  const [courierTime, setCourierTime] = useState('Monday, 13 12:00 - 15:00')
  const [pickupTime, setPickupTime] = useState('Monday, 13 12:00 - 15:00')

  // Custom toggle that binds radion button to accordion button and updates state
  const ShippingToggle = ({ label, price, eventKey }: { label: string; price: number; eventKey: string }) => {
    const accordionToggle = useAccordionButton(eventKey)

    const handleClick = (e: React.SyntheticEvent) => {
      accordionToggle(e)
      setShippingPrice(price)
    }

    return (
      <FormCheck className="mb-0">
        <FormCheck.Label className="d-flex align-items-center text-dark-emphasis fw-semibold py-4">
          <FormCheck.Input
            type="radio"
            name="shippingMethod"
            onChange={handleClick}
            checked={price === shippingPrice}
            className="fs-base me-2 me-sm-3"
          />
          {label}
          <span className="fw-normal ms-auto">
            {price > 0 ? (
              <>
                $
                {price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </>
            ) : (
              'Free'
            )}
          </span>
        </FormCheck.Label>
      </FormCheck>
    )
  }

  return (
    <Container className="py-5">
      <Row className="pt-1 pt-sm-3 pt-lg-4 pb-2 pb-md-3 pb-lg-4 pb-xl-5">
        {/* Delivery info (Step 2) */}
        <Col lg={8} xl={7} className="position-relative z-2 mb-5 mb-lg-0">
          <div className="d-flex flex-column gap-5 pe-lg-4 pe-xl-0">
            <div className="d-flex align-items-start">
              <div
                className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fs-sm fw-semibold lh-1 flex-shrink-0"
                style={{ width: '2rem', height: '2rem', marginTop: '-.125rem' }}
              >
                1
              </div>
              <div className="flex-grow-0 flex-shrink-0 ps-3 ps-md-4" style={{ width: 'calc(100% - 2rem)' }}>
                <h1 className="h5 mb-md-4">Delivery information</h1>
                <div className="ms-n5 ms-sm-0">
                  <p className="fs-sm mb-2">
                    Add your Postcode to see the delivery and collection options available in your area.
                  </p>
                  <p className="fs-sm mb-4">
                    <span className="text-dark-emphasis fw-semibold me-1">15006</span>
                    <Link href="./delivery-1" className="text-body">
                      Edit
                    </Link>
                  </p>
                  <h3 className="h6 border-bottom pb-4 mb-0">Choose shipping method</h3>
                  <Accordion defaultActiveKey="courier" className="mb-lg-4">
                    {/* Courier delivery option */}
                    <div className="border-bottom">
                      <ShippingToggle label="Courier delivery" eventKey="courier" price={16.5} />
                      <Accordion.Collapse eventKey="courier">
                        <div className="pb-4 ps-3 ms-2 ms-sm-3">
                          <p className="fs-sm">Choose a courier delivery time convenient for you:</p>
                          <div className="d-flex justify-content-start">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="btn-icon border-0 ms-n2"
                              id="courierTimePrev"
                            >
                              <i className="ci-chevron-left fs-lg" />
                            </Button>
                            <Swiper
                              modules={[Navigation]}
                              slidesPerView={2}
                              spaceBetween={12}
                              allowTouchMove={false}
                              navigation={{
                                prevEl: '#courierTimePrev',
                                nextEl: '#courierTimeNext',
                              }}
                              breakpoints={{
                                600: {
                                  slidesPerView: 3,
                                  spaceBetween: 16,
                                },
                                768: {
                                  slidesPerView: 4,
                                  spaceBetween: 16,
                                },
                                991: {
                                  slidesPerView: 3,
                                  spaceBetween: 16,
                                },
                                1100: {
                                  slidesPerView: 4,
                                  spaceBetween: 12,
                                },
                                1250: {
                                  slidesPerView: 4,
                                  spaceBetween: 24,
                                },
                              }}
                              className="swiper-load pt-2"
                            >
                              {Object.entries({
                                'Monday, 13': ['12:00 - 15:00', '17:00 - 20:00'],
                                'Tuesday, 14': ['09:00 - 12:00', '14:00 - 19:00'],
                                'Wednesday, 15': ['09:00 - 12:00', '14:00 - 19:00'],
                                'Thursday, 16': ['12:00 - 15:00', '17:00 - 20:00'],
                                'Friday, 17': ['09:00 - 12:00', '14:00 - 19:00'],
                                'Saturday, 18': ['09:00 - 11:00', '13:00 - 15:00'],
                                'Sunday, 19': ['09:00 - 11:00', '13:00 - 15:00'],
                              }).map(([key, value], index) => (
                                <SwiperSlide key={index} className="text-center">
                                  <div className="h6 fs-sm pb-2 mb-0">{key}</div>
                                  {value.map((time, index) => (
                                    <div key={index} className="py-1 my-1">
                                      <ToggleButton
                                        key={index}
                                        type="radio"
                                        id={`courierTime-${key.toLowerCase().replace(/[^a-z0-9]/g, '')}-${index}`}
                                        variant="outline-secondary"
                                        name="courierTime"
                                        value={`${key} ${time}`}
                                        checked={courierTime === `${key} ${time}`}
                                        onChange={(e) => setCourierTime(e.currentTarget.value)}
                                        className="w-100 rounded-pill"
                                      >
                                        {time}
                                      </ToggleButton>
                                    </div>
                                  ))}
                                </SwiperSlide>
                              ))}
                            </Swiper>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="btn-icon border-0 me-n2"
                              id="courierTimeNext"
                            >
                              <i className="ci-chevron-right fs-lg" />
                            </Button>
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </div>

                    {/* Pickup from store option */}
                    <div className="border-bottom">
                      <ShippingToggle label="Pickup from store" eventKey="pickup" price={0} />
                      <Accordion.Collapse eventKey="pickup">
                        <div className="pb-4 ps-3 ms-2 ms-sm-3">
                          <p className="fs-sm mb-2">Choose a store nearby:</p>
                          <div className="w-100 mb-4" style={{ maxWidth: 300 }}>
                            <SelectBox
                              customTemplate
                              removeItemButton={false}
                              choices={[
                                {
                                  value: 'Cartzilla Supercenter',
                                  label: '<span class="text-dark-emphasis fw-medium">Cartzilla Supercenter</span>',
                                  customProperties: {
                                    address:
                                      '<span class="d-block text-body-secondary fs-xs fw-normal">755 Riverpoint Ct, West Sacramento</span>',
                                    selected: '<span class="text-dark-emphasis fw-medium">Cartzilla Supercenter</span>',
                                  },
                                },
                                {
                                  value: 'Cartzilla Electronics',
                                  label: '<span class="text-dark-emphasis fw-medium">Cartzilla Electronics</span>',
                                  customProperties: {
                                    address:
                                      '<span class="d-block text-body-secondary fs-xs fw-normal">8270 Delta Shores Cir S, Sacramento</span>',
                                    selected: '<span class="text-dark-emphasis fw-medium">Cartzilla Electronics</span>',
                                  },
                                },
                                {
                                  value: 'Cartzilla Great Mall',
                                  label: '<span class="text-dark-emphasis fw-medium">Cartzilla Great Mall</span>',
                                  customProperties: {
                                    address:
                                      '<span class="d-block text-body-secondary fs-xs fw-normal">10655 Folsom Blvd, Sacramento</span>',
                                    selected: '<span class="text-dark-emphasis fw-medium">Cartzilla Great Mall</span>',
                                  },
                                },
                              ]}
                            />
                          </div>
                          <p className="fs-sm">Choose a pickup time convenient for you:</p>
                          <div className="d-flex justify-content-start">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="btn-icon border-0 ms-n2"
                              id="pickupTimePrev"
                            >
                              <i className="ci-chevron-left fs-lg" />
                            </Button>
                            <Swiper
                              modules={[Navigation]}
                              slidesPerView={2}
                              spaceBetween={12}
                              allowTouchMove={false}
                              navigation={{
                                prevEl: '#pickupTimePrev',
                                nextEl: '#pickupTimeNext',
                              }}
                              breakpoints={{
                                600: {
                                  slidesPerView: 3,
                                  spaceBetween: 16,
                                },
                                768: {
                                  slidesPerView: 4,
                                  spaceBetween: 16,
                                },
                                991: {
                                  slidesPerView: 3,
                                  spaceBetween: 16,
                                },
                                1100: {
                                  slidesPerView: 4,
                                  spaceBetween: 12,
                                },
                                1250: {
                                  slidesPerView: 4,
                                  spaceBetween: 24,
                                },
                              }}
                              className="swiper-load pt-2"
                            >
                              {Object.entries({
                                'Monday, 13': ['12:00 - 15:00', '17:00 - 20:00'],
                                'Tuesday, 14': ['09:00 - 12:00', '14:00 - 19:00'],
                                'Wednesday, 15': ['09:00 - 12:00', '14:00 - 19:00'],
                                'Thursday, 16': ['12:00 - 15:00', '17:00 - 20:00'],
                                'Friday, 17': ['09:00 - 12:00', '14:00 - 19:00'],
                                'Saturday, 18': ['09:00 - 11:00', '13:00 - 15:00'],
                                'Sunday, 19': ['09:00 - 11:00', '13:00 - 15:00'],
                              }).map(([key, value], index) => (
                                <SwiperSlide key={index} className="text-center">
                                  <div className="h6 fs-sm pb-2 mb-0">{key}</div>
                                  {value.map((time, index) => (
                                    <div key={index} className="py-1 my-1">
                                      <ToggleButton
                                        key={index}
                                        type="radio"
                                        id={`pickupTime-${key.toLowerCase().replace(/[^a-z0-9]/g, '')}-${index}`}
                                        variant="outline-secondary"
                                        name="pickupTime"
                                        value={`${key} ${time}`}
                                        checked={pickupTime === `${key} ${time}`}
                                        onChange={(e) => setPickupTime(e.currentTarget.value)}
                                        className="w-100 rounded-pill"
                                      >
                                        {time}
                                      </ToggleButton>
                                    </div>
                                  ))}
                                </SwiperSlide>
                              ))}
                            </Swiper>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="btn-icon border-0 me-n2"
                              id="pickupTimeNext"
                            >
                              <i className="ci-chevron-right fs-lg" />
                            </Button>
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </div>

                    {/* Local shipping option */}
                    <div className="border-bottom">
                      <ShippingToggle label="Local shipping" eventKey="local" price={23.4} />
                      <Accordion.Collapse eventKey="local">
                        <div className="pb-4 ps-3 ms-2 ms-sm-3">
                          <Alert variant="info" className="d-flex align-items-center mb-3">
                            <i className="ci-info fs-lg me-2" />
                            <div className="fs-sm">
                              Local shipping can take up to <span className="text-info-emphasis fw-semibold">5</span>{' '}
                              business days.
                            </div>
                          </Alert>
                          <p className="fs-sm mb-0">
                            Estimated date of delivery -{' '}
                            <span className="text-body-emphasis fw-medium">March 15, 2025</span>
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>
                  <Link href="./shipping" className="btn btn-lg btn-primary w-100 d-none d-lg-flex">
                    Continue
                    <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                  </Link>
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
            shipping={shippingPrice}
            className="position-sticky top-0"
            style={{ paddingTop: 110 }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default DeliveryCheckout_V1
