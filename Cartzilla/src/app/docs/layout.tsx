import DocsHeader from '@/components/docs/docs-header'
import DocsSidebar from '@/components/docs/docs-sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DocsLayout = ({ children }: React.PropsWithChildren) => (
  <>
    {/* Docs header (top navbar) */}
    <DocsHeader version="1.0.0" />

    {/* Docs page container */}
    <Container className="pt-4">
      <Row className="pt-sm-2">
        {/* Docs sidebar with navigation */}
        <Col as="aside" lg={3} className="pt-1 pe-xl-4">
          <DocsSidebar />
        </Col>

        {/* Docs page content */}
        <Col as="main" lg={9} className="pt-1 pb-5 mb-sm-2 mb-md-3">
          {children}
        </Col>
      </Row>
    </Container>
  </>
)

export default DocsLayout
