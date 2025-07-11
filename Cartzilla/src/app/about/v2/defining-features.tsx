'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const DefiningFeatures = () => (
  <section className="bg-dark py-5 mt-n2 mt-sm-0" data-bs-theme="dark">
    <Container className="pt-1 pt-sm-2 pt-md-3 pb-md-2 pt-lg-4 pb-lg-3 pb-xl-4 pt-xl-5 pb-xxl-5 mt-xxl-3">
      <Row>
        <Col
          lg={3}
          className="d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-lg-start pb-3 mb-3 mb-md-4"
        >
          <h2 className="h1 text-center text-sm-start mb-sm-0 mb-lg-5 me-sm-4 me-lg-0">Three defining features</h2>
          <Link href="/shop/furniture" className="btn btn-lg btn-outline-light rounded-pill ms-sm-auto ms-lg-0">
            View catalog
          </Link>
        </Col>
        <Col lg={9}>
          <SimpleBar>
            <div className="d-flex gap-4">
              {[
                {
                  image: '/img/about/v2/feature01.jpg',
                  title: 'Customer focus',
                  text: 'We give each client as much attention and time as necessary to understand their wishes and get the perfect result that will satisfy the client in full.',
                },
                {
                  image: '/img/about/v2/feature02.jpg',
                  title: 'Attention to the details',
                  text: 'We are convinced that the devil is in the details, and there are no insignificant details, so we carefully monitor everything - from the supply and selection of high-quality wood to the finest work during the furniture finishing.',
                },
                {
                  image: '/img/about/v2/feature03.jpg',
                  title: 'Betting on reputation',
                  text: 'Responsible for the integrity, quality and adherence to deadlines in the production of orders, because the professional reputation of the workshop is crucial.',
                },
              ].map(({ image, title, text }, index) => (
                <div key={index} className="w-100" style={{ minWidth: 230 }}>
                  <Image src={image} width={400} height={400} className="d-block rounded-4 mb-4" alt="Image" />
                  <h3 className="h5 pb-1 mb-2">{title}</h3>
                  <p className="text-body fs-sm mb-4">{text}</p>
                </div>
              ))}
            </div>
          </SimpleBar>
        </Col>
      </Row>
    </Container>
  </section>
)

export default DefiningFeatures
