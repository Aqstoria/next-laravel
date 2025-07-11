'use client'

import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const OpenPositions = () => (
  <Container as="section" className="py-5 mt-2 mb-1 my-sm-3 my-md-4 my-lg-5">
    <div className="d-flex align-items-end justify-content-between pb-3 mb-1 mb-md-3">
      <div className="me-4">
        <h2 className="text-body fs-sm fw-normal">Career</h2>
        <h3 className="h1 mb-0">Open positions</h3>
      </div>
      <Stack direction="horizontal" gap={2}>
        <Button
          variant="outline-secondary"
          className="btn-icon animate-slide-start rounded-circle me-1"
          id="prev-positions"
          aria-label="Prev"
        >
          <i className="ci-chevron-left fs-lg animate-target" />
        </Button>
        <Button
          variant="outline-secondary"
          className="btn-icon animate-slide-end rounded-circle"
          id="next-positions"
          aria-label="Next"
        >
          <i className="ci-chevron-right fs-lg animate-target" />
        </Button>
      </Stack>
    </div>
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={24}
      loop={true}
      navigation={{
        prevEl: '#prev-positions',
        nextEl: '#next-positions',
      }}
      breakpoints={{
        '500': {
          slidesPerView: 2,
        },
        '800': {
          slidesPerView: 3,
        },
        '1080': {
          slidesPerView: 4,
        },
      }}
      className="py-2"
    >
      {[
        {
          badge: ['info', 'Full time'],
          title: 'Supply Chain and Logistics Coordinator',
          location: 'New York',
          href: '#',
        },
        {
          badge: ['success', 'Part time'],
          title: 'Content Manager for Social Networks',
          location: 'Remote',
          href: '#',
        },
        {
          badge: ['info', 'Full time'],
          title: 'Customer Service Representative',
          location: 'London',
          href: '#',
        },
        {
          badge: ['warning', 'Freelance'],
          title: 'Data Analyst/Analytics Specialist',
          location: 'Remote',
          href: '#',
        },
        {
          badge: ['info', 'Full time'],
          title: 'E-commerce Manager/Director',
          location: 'In house',
          href: '#',
        },
      ].map(({ badge, title, location, href }, index) => (
        <SwiperSlide key={index} className="h-auto">
          <Card
            as={Link}
            href={href}
            className="btn btn-outline-secondary w-100 h-100 align-items-start text-wrap text-start rounded-4 px-0 px-xl-2 py-4 py-xl-5"
          >
            <Card.Body className="pb-0 pt-3 pt-xl-0">
              <Badge pill bg={badge[0]} className="fs-xs">
                {badge[1]}
              </Badge>
              <h4 className="h5 py-3 my-2 my-xl-3">{title}</h4>
            </Card.Body>
            <Card.Footer className="w-100 bg-transparent border-0 text-body fs-sm fw-normal pt-0 pb-3 pb-xl-0">
              {location}
            </Card.Footer>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
)

export default OpenPositions
