import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderElectronics from '@/components/layout/header-electronics'
import HelpHeroSearch from '@/components/help/help-hero-search'
import HelpArticlesSidebar from '@/components/help/help-articles-sidebar'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'

export const metadata: Metadata = {
  title: 'Cartzilla | Help Single Article v.1',
}

const HelpArticle_V1_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero search */}
      <HelpHeroSearch />

      {/* Article content */}
      <Container as="section" className="pb-5 mb-1 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Breadcrumb className="position-relative z-2 pt-3 my-3 my-md-4">
          <li className="breadcrumb-item">
            <Link href="/help">Help center</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#">Returns &amp; refunds</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            What is your returns policy?
          </li>
        </Breadcrumb>
        <Row>
          {/* Sticky sidebar with related articles */}
          <Col as="aside" lg={4} className="order-lg-2 pb-3 mb-3 mb-md-4" style={{ marginTop: -115 }}>
            <HelpArticlesSidebar
              heading="Articles in this section"
              links={[
                ['What is your returns policy?', '#'],
                ['I paid with Afterpay, how do returns work?', '#'],
                ['What happens to my refund if I return 45 days?', '#'],
                ['How do I return something to you?', '#'],
                ['Can I return an exchange instead of a refund?', '#'],
              ]}
            />
          </Col>

          {/* Article */}
          <Col lg={8} className="order-lg-1">
            <h2 className="pb-2 pb-sm-3 pb-lg-4">What is your returns policy?</h2>
            <p className="h6">
              <span className="text-body-secondary">Last Updated:</span> June 26, 2025
            </p>
            <p>
              At Cartzilla, we strive to ensure your complete satisfaction with every purchase. If, for any reason, you
              are not entirely pleased with your order, we&apos;ve got you covered with our Returns Policy. You may
              return eligible items within 30 days of the delivery date.
            </p>
            <h3 className="h4 pt-3 pt-sm-4">1. Pack the goods</h3>
            <ul>
              <li>Check if your product is eligible for return.</li>
              <li>
                Put the new product in its original packaging without any signs of use. If the product consists of
                several parts, you must return the entire set. Make sure that nothing is lost and that you return the
                product in the complete set in which you received it.
              </li>
              <li>
                If you purchased a product with a gift, you must return the entire set (product and gift). Otherwise,
                the nominal value of the gift will be deducted from the refund amount.
              </li>
              <li>It is not necessary to send a cheque.</li>
            </ul>
            <h3 className="h4 pt-3 pt-sm-4">2. Where to bring the goods</h3>
            <p>You can return the goods to the service department or Cartzilla return point.</p>
            <ul className="pb-3 pb-sm-4">
              <li>
                Service departments at Cartzilla points of delivery. Here, we will immediately check the goods and, if
                everything is in order, agree on a return policy on the spot. You can bring any goods here. Simple
                goods, such as clothes and shoes. Complex goods: smartphones, washing machines, microwaves, power tools.
                The examination is carried out by a technical specialist. If long-term diagnostics are required, the
                goods will be sent to a service centre.
              </li>
              <li>
                Returns acceptance points at Cartzilla pick-up points. Here, our employee will conduct a visual
                inspection of your goods. The decision regarding the goods is made after the goods are delivered to the
                service department. The details will be agreed with you. The examination is carried out within 14 days.
              </li>
            </ul>
            <Image
              src="/img/help/single.jpg"
              width={1000}
              height={750}
              className="d-block bg-body-tertiary rounded-5 mb-3"
              alt="Image"
            />
            <h3 className="h4 pt-3 pt-sm-4">3. How will I get a refund for the goods?</h3>
            <p>
              You can provide your bank card details for a refund when making a refund in your personal account on the
              website or in a paper return form. Please indicate the card number and full name of the bank card holder
              in English on the return form.
            </p>
            <p>Usually, the money is refunded in 3-5 days after the decision to refund is made.</p>
            <div className="py-2 py-sm-3 mt-n3">
              <hr />
            </div>
            <h4 className="h5 mb-4">Was this information helpful?</h4>
            <div className="d-flex gap-3 pb-3 mb-4">
              <Button variant="outline-secondary">
                <i className="ci-thumbs-up fs-base me-1 ms-n1" />
                Yes
              </Button>
              <Button variant="outline-secondary">
                <i className="ci-thumbs-down fs-base me-1 ms-n1" />
                No
              </Button>
            </div>
            <div className="border rounded-4 p-4">
              <div className="d-sm-flex align-items-center justify-content-between text-center text-sm-start p-md-3">
                <div className="me-sm-3 me-md-4">
                  <h3 className="h4 pb-1 mb-2">Can&apos;t find the answer to a question?</h3>
                  <p className="pb-2 pb-sm-0 mb-sm-0">Get in touch with our support team.</p>
                </div>
                <Link href="#" className="btn btn-lg btn-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default HelpArticle_V1_Page
