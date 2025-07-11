import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderFurniture from '@/components/layout/header-furniture'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Furniture Store - 404 Error',
}

const Furniture404ErrorPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture />

    {/* Page content */}
    <main className="content-wrapper position-relative d-flex" style={{ marginTop: -110, paddingTop: 110 }}>
      <Container className="position-relative z-2 flex-grow-1">
        <Row xs={1} md={2} className="h-100 g-0">
          {/* Content */}
          <Col className="d-flex flex-column align-items-center pt-5 pb-4 pb-sm-5 pe-md-5">
            <div className="mt-auto" style={{ maxWidth: 480 }}>
              <svg
                className="text-dark-emphasis mb-4"
                xmlns="http://www.w3.org/2000/svg"
                width="188"
                height="56"
                viewBox="0 0 188 56"
                fill="none"
              >
                <path
                  d="M38.768 54.984c-.677.82-1.76 1.185-2.795.941s-1.842-1.054-2.081-2.09l-.105-22.102H14.933c-2.062 0-3.733-1.671-3.733-3.733V.933c0-.515.418-.933.933-.933h2.8c.49-.001.897.376.933.865l1.524 20.602h16.618L40.169.668c.118-.397.483-.67.898-.669h2.8c.283 0 .551.128.729.349s.245.51.183.787L39.22 26.149l.133 26.527c.16.819-.054 1.665-.585 2.308zM14.067 1.867h-1V25.2h2.728L14.067 1.867zm3.463 21.467l.138 1.867h15.236l.553-1.867H17.529zM41.764 1.867l-6.16 20.795-.753 2.538h2.669l5.185-23.333h-.941zm-4.241 51.164l-.026-25.964h-24.43V28c0 1.031.836 1.867 1.867 1.867h19.6c.435 0 .813.3.91.723l.267 22.825c.119.486.602.79 1.092.686s.809-.577.72-1.07z"
                  fill="currentColor"
                ></path>
                <path
                  d="M171.768 54.984c-.677.82-1.761 1.185-2.796.941s-1.841-1.054-2.081-2.09l-1.104-22.102h-18.854c-2.061 0-3.733-1.671-3.733-3.733V.933c0-.515.418-.933.933-.933h2.8c.49-.001.898.376.934.865l1.523 20.602h16.619l6.16-20.798c.118-.397.483-.67.898-.669h2.8a.93.93 0 0 1 .911 1.136l-5.559 25.013 1.134 26.527c.16.819-.054 1.665-.585 2.308zM146.067 1.867h-1V25.2h2.728l-1.728-23.333zm3.462 21.467l.138 1.867h15.236l.553-1.867h-15.927zm24.235-21.467l-6.16 20.795-.753 2.538h2.669l5.185-23.333h-.941zm-3.241 51.164l-1.026-25.964h-24.43V28c0 1.031.836 1.867 1.866 1.867h19.6c.435 0 .813.3.91.723l1.267 22.825c.119.486.603.79 1.092.686s.809-.577.721-1.07z"
                  fill="currentColor"
                ></path>
                <g stroke="currentColor" strokeWidth="2">
                  <circle cx="94" cy="28" r="27"></circle>
                  <circle cx="94" cy="28" r="22"></circle>
                </g>
                <circle cx="94" cy="28" r="2" fill="currentColor"></circle>
              </svg>
              <h1 className="h2 mb-sm-4">We lost that page ...</h1>
              <p className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-5">
                The page you are looking for was moved, removed or might never existed. Here some helpful links:
              </p>
              <div className="position-relative">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
                <FormControl
                  type="search"
                  size="lg"
                  className="form-icon-start rounded-pill"
                  placeholder="What are you looking for..."
                  aria-label="Search"
                />
              </div>
              <ul className="list-unstyled gap-4 pt-4 pt-sm-5 mt-3 mt-sm-0 mt-xl-2 mb-0">
                {[
                  {
                    title: 'Go to homepage',
                    description: 'Continue shopping from the homepage',
                    href: '/home/furniture',
                  },
                  {
                    title: 'Trending products',
                    description: 'Check out the trending products',
                    href: '/shop/furniture',
                  },
                  {
                    title: 'Help and support',
                    description: 'Our friendly team here to help',
                    href: '#',
                  },
                ].map(({ title, description, href }, index) => (
                  <Nav key={index} as="li" className="flex-column mt-xl-2">
                    <NavLink
                      as={Link}
                      href={href}
                      className="animate-underline text-body-emphasis fw-semibold px-0 mb-1"
                    >
                      <span className="animate-target">{title}</span>
                      <i className="ci-chevron-right fs-base ms-1" />
                    </NavLink>
                    <span className="fs-sm">{description}</span>
                  </Nav>
                ))}
              </ul>
            </div>
            <footer className="w-100 mt-auto pt-5 pb-xl-2" style={{ maxWidth: 480 }}>
              <p className="fs-xs mb-0">
                &copy; All rights reserved. Made by{' '}
                <span className="animate-underline">
                  <a
                    className="animate-target text-dark-emphasis fw-medium text-decoration-none"
                    href="https://createx.studio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Createx Studio
                  </a>
                </span>
              </p>
            </footer>
          </Col>

          {/* Cover image visible on screens > 768px wide (md breakpoint) */}
          <Col className="d-none d-md-flex align-items-center justify-content-end">
            <div className="d-block w-100 px-4 px-lg-0 me-n4" style={{ maxWidth: 416 }}>
              <Image priority src="/img/404/furniture.png" width={832} height={1176} alt="Chair" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute top-0 end-0 w-50 h-100 bg-body-tertiary d-none d-md-block" />
    </main>
  </>
)

export default Furniture404ErrorPage
