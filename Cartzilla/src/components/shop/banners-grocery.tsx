import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import MarketButton from '@/components/market-button'

const BannersGrocery = ({ className }: { className?: string }) => (
  <Row className={className}>
    <Col lg={7} className="mb-4 mb-lg-0">
      <div className="d-flex flex-column flex-sm-row align-items-center h-100 bg-body-tertiary rounded-5 overflow-hidden">
        <div className="order-sm-2 text-center text-sm-start pt-4 px-4 pb-2 pb-sm-4 mt-3 mt-sm-0">
          <h2 className="h4 mb-4">Make online shop easier with our Cartzilla App</h2>
          <div className="d-flex flex-sm-wrap justify-content-center justify-content-sm-start gap-2 gap-sm-3">
            <MarketButton
              href="#"
              market="google"
              variant="light"
              large
              className="rounded-pill"
              aria-label="Download on Google Play"
            />
            <MarketButton
              href="#"
              market="apple"
              variant="light"
              large
              className="rounded-pill"
              aria-label="Download on App Store"
            />
          </div>
        </div>
        <div className="align-self-sm-end order-sm-1 rtl-flip" style={{ maxWidth: 330 }}>
          <Image src="/img/home/grocery/banner01.png" width={660} height={568} alt="Image" />
        </div>
      </div>
    </Col>
    <Col lg={5}>
      <div className="d-flex align-items-center h-100 bg-body-tertiary rounded-5 overflow-hidden">
        <div className="align-self-end rtl-flip" style={{ maxWidth: 244 }}>
          <Image src="/img/home/grocery/banner02.png" width={488} height={568} alt="Image" />
        </div>
        <div className="p-4">
          <h2 className="h4 mb-sm-4">We&apos;d love to hear what you think!</h2>
          <Nav className="mt-n2 mt-sm-n1 mt-lg-0">
            <NavLink as={Link} href="#" className="animate-underline px-0 py-2">
              <span className="animate-target text-nowrap">Give a feedback</span>
              <i className="ci-chevron-right fs-base ms-1" />
            </NavLink>
          </Nav>
        </div>
      </div>
    </Col>
  </Row>
)

export default BannersGrocery
