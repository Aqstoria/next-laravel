import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import HelpHeroSearch from '@/components/help/help-hero-search'
import HelpArticlesCarousel from '@/components/help/help-articles-carousel'
import HelpFaq from '@/components/help/help-faq'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import CardFooter from 'react-bootstrap/CardFooter'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Help Topics v.1',
}

const HelpTopics_V1_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero search */}
      <HelpHeroSearch />

      {/* Category cards */}
      <Container as="section" className="pt-4">
        <Row xs={1} sm={2} lg={3} className="g-4 g-sm-3 g-md-4">
          {[
            {
              icon: 'ci-delivery',
              title: 'Delivery',
              href: '#',
              links: [
                ['Can I track my order in real-time?', '/help/article'],
                ['Is there an option for express delivery?', '/help/article'],
                ['Will my parcel be charged customs charges?', '/help/article'],
                ['Do you offer international delivery?', '/help/article'],
                ['Why does my statement have a recurring charge?', '/help/article'],
              ],
            },
            {
              icon: 'ci-refresh-cw',
              title: 'Returns & refunds',
              href: '#',
              links: [
                ['What is your returns policy?', '/help/article'],
                ['I paid with Afterpay, how do returns work?', '/help/article'],
                ['What happens to my refund if I return 45 days?', '/help/article'],
                ['How do I return something to you?', '/help/article'],
                ['Can I return an exchange instead of a refund?', '/help/article'],
              ],
            },
            {
              icon: 'ci-credit-card',
              title: 'Payment options',
              href: '#',
              links: [
                ['How do I place an order?', '/help/article'],
                ['My payment was declined, what should I do?', '/help/article'],
                ['When will I be charged for my order?', '/help/article'],
                ['How do I pay using Google Pay?', '/help/article'],
                ['How do I use my Gift Voucher to pay for an order?', '/help/article'],
              ],
            },
            {
              icon: 'ci-shopping-bag',
              title: 'Order issues',
              href: '#',
              links: [
                ["Can I amend my order after I've placed it?", '/help/article'],
                ["I've received a faulty item, what should I do?", '/help/article'],
                ["I've received an incorrect item, what do I do?", '/help/article'],
                ["I've bought a gift voucher, can I cancel or return it?", '/help/article'],
                ["What if isn't right on my customs invoice?", '/help/article'],
              ],
            },
            {
              icon: 'ci-archive',
              title: 'Products & stock',
              href: '#',
              links: [
                ['Where can I find your size guide?', '/help/article'],
                ['Where can I find your care instructions?', '/help/article'],
                ['Can you tell me more about Collusion?', '/help/article'],
                ['How do I change my Fit Assistant Information?', '/help/article'],
                ['What are your adhesive product guidelines?', '/help/article'],
              ],
            },
            {
              icon: 'ci-settings',
              title: 'Managing account',
              href: '#',
              links: [
                ['How do I create an account?', '/help/article'],
                ["I'm having trouble signing into my account.", '/help/article'],
                ["I'm having problems using your App.", '/help/article'],
                ['Do I need to create an account to shop with you?', '/help/article'],
                ["I'd like to delete my account what should I do?", '/help/article'],
              ],
            },
          ].map(({ icon, title, href, links }, index) => (
            <Col key={index}>
              <Card className="h-100 bg-body-tertiary border-0 p-md-2">
                <CardBody>
                  <h3 className="h5 d-flex mb-4">
                    <i className={`${icon} fs-xl pe-1 mt-1 me-2`} />
                    {title}
                  </h3>
                  <Nav as="ul" className="flex-column gap-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <NavLink as={Link} href={link[1]} className="hover-effect-underline fw-normal p-0">
                          {link[0]}
                        </NavLink>
                      </li>
                    ))}
                  </Nav>
                </CardBody>
                <CardFooter as={Nav} className="bg-transparent border-0 pt-0">
                  <NavLink as={Link} href={href} className="animate-underline px-0 py-2">
                    <span className="animate-target">View all</span>
                    <i className="ci-chevron-right fs-base ms-1" />
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popular articles */}
      <HelpArticlesCarousel heading="Popular articles" className="mt-1 my-sm-2 my-md-3 my-lg-4 mt-xl-5 pb-xl-2" />

      {/* FAQ accordion */}
      <HelpFaq className="border-top" />
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default HelpTopics_V1_Page
