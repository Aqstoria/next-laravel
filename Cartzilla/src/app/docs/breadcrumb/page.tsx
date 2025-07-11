import type { Metadata } from 'next'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Badge from 'react-bootstrap/Badge'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Breadcrumb',
}

const BreadcrumbDocsPage = () => {
  const code = `import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

export default function BreadcrumbDocsPage() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Products list</BreadcrumbItem>
        <BreadcrumbItem active>Single product</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb listProps={{ className: 'align-items-center' }}>
        <BreadcrumbItem href="#" linkProps={{ className: 'd-flex' }}>
          <i className="ci-home fs-base"/>
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Products list</BreadcrumbItem>
        <BreadcrumbItem active>Single product</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem href="#" linkProps={{ className: 'd-flex align-items-center' }}>
          <i className="ci-home fs-base me-2"/>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Products list</BreadcrumbItem>
        <BreadcrumbItem active>Single product</BreadcrumbItem>
      </Breadcrumb>
    </>
  )
}`

  return (
    <>
      <section className="pt-2 pb-lg-1">
        <Badge
          as="a"
          bg="info-subtle"
          text="info"
          pill
          className="d-inline-flex align-items-center fw-semibold text-decoration-none py-2 px-3 mb-2"
          href="https://react-bootstrap.netlify.app/docs/components/breadcrumb"
          target="_blank"
          rel="noreferrer"
        >
          React Bootstrap docs
          <i className="ci-external-link fs-sm ms-1" />
        </Badge>
        <h1 className="pt-1">Breadcrumb</h1>
        <p className="text-body-secondary mb-4">
          Indicate the current page&apos;s location within a navigational hierarchy.
        </p>
      </section>
      <DocsComponentDemo code={code}>
        <Breadcrumb>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Products list</BreadcrumbItem>
          <BreadcrumbItem active>Single product</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb listProps={{ className: 'align-items-center' }}>
          <BreadcrumbItem href="#" linkProps={{ className: 'd-flex' }}>
            <i className="ci-home fs-base" />
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Products list</BreadcrumbItem>
          <BreadcrumbItem active>Single product</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb listProps={{ className: 'mb-2' }}>
          <BreadcrumbItem href="#" linkProps={{ className: 'd-flex align-items-center' }}>
            <i className="ci-home fs-base me-2" />
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Products list</BreadcrumbItem>
          <BreadcrumbItem active>Single product</BreadcrumbItem>
        </Breadcrumb>
      </DocsComponentDemo>
    </>
  )
}

export default BreadcrumbDocsPage
