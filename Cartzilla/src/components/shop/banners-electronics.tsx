import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BannersElectronics = ({ className }: { className?: string }) => (
  <Row className={`g-3 g-lg-4${className ? ` ${className}` : ''}`}>
    <Col md={7}>
      <div className="position-relative d-flex flex-column flex-sm-row align-items-center h-100 rounded-5 overflow-hidden px-5 px-sm-0 pe-sm-4">
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none-dark rtl-flip"
          style={{ background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)' }}
        />
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark rtl-flip"
          style={{ background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)' }}
        />
        <div className="position-relative z-1 text-center text-sm-start pt-4 pt-sm-0 ps-xl-4 mt-2 mt-sm-0 order-sm-2">
          <h2 className="h3 mb-2">iPhone 14</h2>
          <p className="fs-sm text-light-emphasis mb-sm-4">Apple iPhone 14 128GB Blue</p>
          <Link href="/shop/electronics/product" className="btn btn-primary">
            From $899
            <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
          </Link>
        </div>
        <div className="position-relative z-1 w-100 align-self-end order-sm-1" style={{ maxWidth: 416 }}>
          <Image priority src="/img/shop/electronics/banners/iphone-1.png" width={832} height={640} alt="iPhone 14" />
        </div>
      </div>
    </Col>
    <Col md={5}>
      <div className="position-relative d-flex flex-column align-items-center justify-content-between h-100 rounded-5 overflow-hidden pt-3">
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none-dark rtl-flip"
          style={{ background: 'linear-gradient(90deg, #fdcbf1 0%, #fdcbf1 1%, #ffecfa 100%)' }}
        />
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark rtl-flip"
          style={{ background: 'linear-gradient(90deg, #362131 0%, #322730 100%)' }}
        />
        <div className="position-relative z-1 text-center pt-3 mx-4">
          <i className="ci-apple text-body-emphasis fs-3 mb-3" />
          <p className="fs-sm text-light-emphasis mb-1">Deal of the week</p>
          <h2 className="h3 mb-4">iPad Pro M1</h2>
        </div>
        <Link href="/shop/electronics/product" className="position-relative z-1 d-block w-100">
          <Image priority src="/img/shop/electronics/banners/ipad.png" width={1050} height={318} alt="iPad" />
        </Link>
      </div>
    </Col>
  </Row>
)

export default BannersElectronics
