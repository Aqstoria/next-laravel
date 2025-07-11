'use client'

import Link from 'next/link'
import ProductsCarouselElectronics from '@/components/shop/products-carousel-electronics'
import Nav from 'react-bootstrap/Nav'
import { Timezz } from 'timezz/react'

const demoDate = () => {
  const currentDate = new Date()

  currentDate.setDate(currentDate.getDate() + 13)

  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  const hours = '12'
  const minutes = '00'
  const seconds = '00'

  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`

  return formattedDate
}

const SpecialOffersElectronics = () => (
  <>
    <div className="d-flex align-items-start align-items-md-center justify-content-between border-bottom pb-3 pb-md-4">
      <div className="d-md-flex align-items-center">
        <h2 className="h3 pe-3 me-3 mb-md-0">Special offers for you</h2>

        {/* Replace "demoDate" inside data-countdown-date attribute with the real date, ex: "10/15/2025 12:00:00" */}
        <Timezz
          date={demoDate()}
          pause={false}
          stopOnZero={true}
          onUpdate={() => {}}
          className="d-flex align-items-center"
        >
          <div className="btn btn-primary pe-none px-2">
            <span data-days />
            <span>d</span>
          </div>
          <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
          <div className="btn btn-primary pe-none px-2">
            <span data-hours />
            <span>h</span>
          </div>
          <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
          <div className="btn btn-primary pe-none px-2">
            <span data-minutes />
            <span>m</span>
          </div>
        </Timezz>
      </div>
      <Nav className="ms-3">
        <Nav.Link as={Link} href="/shop/electronics" className="animate-underline px-0 py-2">
          <span className="animate-target text-nowrap">View all</span>
          <i className="ci-chevron-right fs-base ms-1" />
        </Nav.Link>
      </Nav>
    </div>
    <ProductsCarouselElectronics />
  </>
)

export default SpecialOffersElectronics
