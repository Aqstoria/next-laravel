import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import AccountSidebarShop from '@/components/account/account-sidebar-shop'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ShopAccountLayout = ({ children }: React.PropsWithChildren) => (
  <>
    <HeaderElectronics
      isLoggedIn={{
        name: 'Susan Gardner',
        href: '/account/shop',
        bonuses: 100,
      }}
    />

    {/* Account page sidebar + content */}
    <main className="content-wrapper">
      <Container className="py-5 mt-n2 mt-sm-0">
        <Row className="pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
          {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Col as="aside" lg={3}>
            <AccountSidebarShop name="Susan Gardner" bonuses={{ available: 100, inprogress: 0 }} />
          </Col>

          {/* Page content */}
          <Col lg={9}>
            <div className="ps-lg-3 ps-xl-0">{children}</div>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterElectronics className="border-top" />
  </>
)

export default ShopAccountLayout
