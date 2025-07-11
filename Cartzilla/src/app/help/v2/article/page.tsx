import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import HelpHeroSearchAlt from '@/components/help/help-hero-search-alt'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'

export const metadata: Metadata = {
  title: 'Cartzilla | Help Single Article v.2',
}

const HelpArticle_V2_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero search */}
      <HelpHeroSearchAlt />

      {/* Help topics */}
      <Container as="section" className="py-5">
        <Row className="g-0 pt-md-2 pt-xl-4">
          {/* Topics sidebar */}
          <Col as="aside" md={4} lg={3} className="pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
            <h2 className="h5 border-bottom pb-3 pb-sm-4 mb-0">Help topics</h2>
            <ListGroup as="nav" variant="borderless" className="pt-4 pe-md-4">
              {[
                {
                  icon: 'ci-delivery',
                  title: 'Delivery',
                },
                {
                  icon: 'ci-refresh-cw',
                  title: 'Returns & refunds',
                },
                {
                  icon: 'ci-credit-card',
                  title: 'Payment options',
                },
                {
                  icon: 'ci-shopping-bag',
                  title: 'Order issues',
                },
                {
                  icon: 'ci-archive',
                  title: 'Products & stock',
                },
                {
                  icon: 'ci-settings',
                  title: 'Managing account',
                },
              ].map(({ icon, title }, index) => (
                <ListGroupItem
                  key={index}
                  as={Link}
                  href={`/help/v2#${title.toLowerCase().replace(/\s+/g, '-')}`}
                  action
                  className="d-flex align-items-center"
                  active={index === 0}
                >
                  {icon && <i className={`${icon} fs-base opacity-75 me-2`} />}
                  {title}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md={8} lg={9}>
            <div className="d-flex align-items-start border-bottom ps-md-4 pb-3 pb-sm-4">
              <Link
                href="./"
                className="btn btn-sm btn-outline-secondary border-0 p-0 pe-2"
                aria-label="Back to main topic"
              >
                <i className="ci-chevron-left fs-4" />
              </Link>
              <h2 className="h5 d-flex min-w-0 mb-0">
                <span className="d-md-none">How does courier delivery work?</span>
                <span className="text-truncate d-none d-md-inline">How does courier delivery work?</span>
              </h2>
            </div>
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 h-100 border-start d-none d-md-block" />
              <Row className="g-0">
                <Col xl={11} xxl={10} className="pt-4 ps-md-4">
                  <p className="fs-sm">
                    To avail of the convenience of Cartzilla courier delivery, please note that this service is
                    currently available exclusively in specific cities and regions. To check whether Cartzilla courier
                    delivery is an option for your location, refer to the information provided on the product page
                    (don&apos;t forget to specify the settlement) or find details in the delivery block when confirming
                    your order on the website.
                  </p>
                  <p className="fs-sm">
                    It&apos;s crucial to ensure that the recipient of the order is available to answer the
                    courier&apos;s call during the specified delivery time. In case of unsuccessful communication or
                    unavailability, the order will be returned to the warehouse. This step is taken to maintain the
                    efficiency of the delivery process and minimize any inconvenience caused.
                  </p>
                  <p className="fs-sm">
                    The cost of Cartzilla courier delivery varies based on factors such as location, total weight, and
                    dimensions of the order. Typically, the delivery fee falls within the range of $5 to $15. It&apos;s
                    important to note that the exact cost of delivery is calculated at the time of placing your order.
                    Therefore, it&apos;s advisable to exercise caution and ensure that the delivery city is specified
                    accurately to avoid any discrepancies.
                  </p>
                  <p className="fs-sm">
                    When opting for Cartzilla courier delivery, you have the flexibility to choose between paying for
                    your order in cash or using a payment card. However, please be aware that payment by card upon
                    receipt may have certain restrictions or conditions that you should be mindful of. These details are
                    typically outlined during the checkout process, providing you with transparency and clarity
                    regarding your payment options for a seamless delivery experience.
                  </p>
                  <div className="pt-4">
                    <h4 className="fs-sm pb-1">Was this information helpful?</h4>
                    <div className="d-flex gap-3">
                      <Button variant="outline-secondary">
                        <i className="ci-thumbs-up fs-base me-1 ms-n1" />
                        Yes
                      </Button>
                      <Button variant="outline-secondary">
                        <i className="ci-thumbs-down fs-base me-1 ms-n1" />
                        No
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className="pt-4 pb-1 pb-sm-3 pb-md-4 pb-xl-5 mt-2 mt-sm-3">
          <h3 className="fs-sm pb-sm-1">Can&apos;t find an answer to your question?</h3>
          <Link href="#" className="btn btn-lg btn-primary">
            Contact us
          </Link>
        </div>
      </Container>
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default HelpArticle_V2_Page
