'use client'

import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface Post {
  id: string
  image: string
  title: string
  href: string
}

const BlogSidebar = () => {
  const { data, error, isLoading } = useSWR<Post[]>('/data/blog/trending-posts.json', fetcher)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

  return (
    <>
      <Offcanvas
        show={isOpen('blogSidebar')}
        onHide={() => closeOffcanvas('blogSidebar')}
        responsive="lg"
        placement="end"
        className="sticky-lg-top ps-lg-4 ps-xl-0"
        aria-labelledby="blogSidebar"
      >
        <div className="d-none d-lg-block" style={{ height: 115 }} />
        <Offcanvas.Header closeButton className="py-3">
          <Offcanvas.Title as="h5" id="blogSidebar">
            Sidebar
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-block pt-2 py-lg-0">
          <h4 className="h6 mb-4">Blog categories</h4>
          <div className="d-flex flex-wrap gap-3">
            {[
              ['Gadget reviews', '#'],
              ['Tech news', '#'],
              ['Industry trends', '#'],
              ['Buying guides', '#'],
              ['Tech tips', '#'],
              ['Gaming', '#'],
              ['IoT', '#'],
            ].map((item, index) => (
              <Link key={index} href={item[1]} className="btn btn-outline-secondary px-3">
                {item[0]}
              </Link>
            ))}
          </div>
          <h4 className="h6 pt-5 mb-0">Trending posts</h4>
          {isLoading ? (
            <>
              {Array.from({ length: 3 }, (_, index) => (
                <article key={index} className="position-relative d-flex align-items-center border-bottom py-4">
                  {/* <div className="w-100 pe-3"></div> */}
                  <Placeholder as="h6" animation="glow" className="w-100 pe-3 mb-0">
                    <Placeholder xs={12} size="sm" />
                    <Placeholder xs={8} size="sm" />
                  </Placeholder>
                  <div className="w-100" style={{ maxWidth: 86 }}>
                    <Placeholder as="div" animation="wave" className="position-relative">
                      <Placeholder
                        className="ratio rounded-2"
                        style={{ '--cz-aspect-ratio': 'calc(64 / 86 * 100%)' } as React.CSSProperties}
                      />
                      <i className="ci-image position-absolute top-50 start-50 translate-middle fs-3 opacity-40" />
                    </Placeholder>
                  </div>
                </article>
              ))}
            </>
          ) : error ? (
            <Alert variant="danger" className="d-inline-flex fs-sm mt-3 mb-0">
              <i className="ci-alert-triangle fs-base pe-1 mt-1 me-2" />
              <div>
                <span className="fw-semibold">Error loading posts:</span> {error.message}
              </div>
            </Alert>
          ) : (
            <>
              {(data || []).map(({ id, image, title, href }) => (
                <article key={id} className="position-relative d-flex align-items-center border-bottom py-4">
                  <div className="w-100 pe-3">
                    <h3 className="h6 lh-base fs-sm mb-0">
                      <Link href={href} className="hover-effect-underline stretched-link">
                        {title}
                      </Link>
                    </h3>
                  </div>
                  <div className="w-100" style={{ maxWidth: 86 }}>
                    <Image src={image} width={172} height={128} className="bg-body-tertiary rounded-2" alt="Image" />
                  </div>
                </article>
              ))}
            </>
          )}
          <h4 className="h6 pt-4">Follow us</h4>
          <div className="d-flex gap-2 pb-2">
            {[
              { name: 'Instagram', icon: 'ci-instagram', href: '#' },
              { name: 'X (Twitter)', icon: 'ci-x', href: '#' },
              { name: 'Facebook', icon: 'ci-facebook', href: '#' },
              { name: 'Telegram', icon: 'ci-telegram', href: '#' },
            ].map(({ name, icon, href }, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={<Tooltip className="tooltip-transparent fs-xs mb-n2">{name}</Tooltip>}
              >
                <Button
                  href={href}
                  variant="outline-secondary"
                  className="btn-icon fs-base border-0"
                  aria-label={`Follow us on ${name}`}
                >
                  <i className={icon} />
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar offcanvas toggle that is visible on screens < 992px wide (lg breakpoint) */}
      <Button
        variant="dark"
        size="lg"
        className="fixed-bottom z-sticky w-100 border-0 border-top border-light border-opacity-10 rounded-0 pb-4 d-lg-none"
        onClick={() => openOffcanvas('blogSidebar')}
      >
        <i className="ci-sidebar fs-base me-2" />
        Sidebar
      </Button>
    </>
  )
}

export default BlogSidebar
