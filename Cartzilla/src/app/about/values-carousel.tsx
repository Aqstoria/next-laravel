'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const ValuesCarousel = () => (
  <Container as="section" bsPrefix="container-start pt-5">
    <Row className="align-items-center g-0 pt-2 pt-sm-3 pt-md-4 pt-lg-5">
      <Col md={4} lg={3} className="pb-1 pb-md-0 pe-3 ps-md-0 mb-4 mb-md-0">
        <div className="d-flex flex-md-column align-items-end align-items-md-start">
          <div className="mb-md-5 me-3 me-md-0">
            <h2 className="text-body fs-sm fw-normal">Values</h2>
            <h3 className="h1 mb-0">Simple values to achieve goals</h3>
          </div>
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-start rounded-circle me-1"
              id="prev-values"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-end rounded-circle"
              id="next-values"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </Stack>
        </div>
      </Col>
      <Col md={8} lg={9}>
        <div className="ps-md-4 ps-lg-5">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: '#prev-values',
              nextEl: '#next-values',
            }}
          >
            {[
              {
                icon: 'ci-user-plus',
                title: 'People',
                text: 'The most important value of the Company is people (employees, partners, clients). Behind any success there is, first and foremost, a specific person. It is he who creates the product, technology, and innovation.',
              },
              {
                icon: 'ci-shopping-bag',
                title: 'Service',
                text: 'Care, attention, desire and ability to be helpful (to a colleague in his department, other departments, clients, customers and all other people who surround us).',
              },
              {
                icon: 'ci-trending-up',
                title: 'Responsibility',
                text: "Responsibility is our key quality. We don't shift it to external circumstances or other people. If we see something that could be improved, we don't just criticize, but offer our own options.",
              },
              {
                icon: 'ci-rocket',
                title: 'Innovation',
                text: 'We foster a culture of continuous improvement and innovation. Embracing change and staying ahead of the curve are essential for our success. We encourage creative thinking, experimentation, and the pursuit of new ideas.',
              },
              {
                icon: 'ci-star',
                title: 'Leadership',
                text: 'Cartzilla people are young, ambitious and energetic individuals. With identified leadership qualities, with a desire to be the best at what they do.',
              },
              {
                icon: 'ci-leaf',
                title: 'Sustainability',
                text: 'We are committed to minimizing our environmental impact and promoting sustainable practices. From responsible sourcing to eco-friendly packaging, we aim to make a positive contribution to the well-being of our planet.',
              },
            ].map(({ icon, title, text }, index) => (
              <SwiperSlide key={index} className="w-auto h-auto">
                <Card className="h-100 rounded-4 px-3" style={{ maxWidth: 306 }}>
                  <Card.Body className="py-5 px-3">
                    <div className="h4 h5 d-flex align-items-center">
                      <i className={`${icon} fs-4 me-3`} />
                      {title}
                    </div>
                    <p className="mb-0">{text}</p>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
    </Row>
  </Container>
)

export default ValuesCarousel
