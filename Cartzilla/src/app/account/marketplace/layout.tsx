import HeaderMarketplace from '@/components/layout/header-marketplace'
import FooterMarketplace from '@/components/layout/footer-marketplace'
import AccountSidebarMarketplace from '@/components/account/account-sidebar-marketplace'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MarketplaceAccountLayout = ({ children }: React.PropsWithChildren) => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderMarketplace
      isLoggedIn={{
        avatar: '/img/account/avatar-sm.png',
        name: 'Createx Studio',
        dropdown: [
          ['ci-grid', 'Dashboard', '/account/marketplace'],
          ['ci-layers', 'Products (4)', '/account/marketplace/products'],
          ['ci-pie-chart', 'Sales', '/account/marketplace/sales'],
          ['ci-dollar-sign', 'Payouts', '/account/marketplace/payouts'],
          ['ci-shopping-bag', 'Purchases (6)', '/account/marketplace/purchases'],
          ['ci-heart', 'Favorites', '/account/marketplace/favorites'],
          ['ci-settings', 'Settings', '/account/marketplace/settings'],
        ],
      }}
      className="bg-body"
    />

    {/* Account page sidebar + content */}
    <main className="content-wrapper">
      <Container className="pt-4 pt-lg-5 pb-5">
        <Row className="pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
          {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Col as="aside" lg={3}>
            <AccountSidebarMarketplace
              avatar="/img/account/avatar.png"
              name="Createx Studio"
              bio="Digital products & bespoke development"
            />
          </Col>

          {/* Page content */}
          <Col lg={9} className="pt-2 pt-xl-3">
            {children}
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterMarketplace />
  </>
)

export default MarketplaceAccountLayout
