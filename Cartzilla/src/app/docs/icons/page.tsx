import type { Metadata } from 'next'
import Badge from 'react-bootstrap/Badge'
import IconsUIDemo from './icons-ui'
import IconsBrandDemo from './icons-brand'
import IconsAnimationDemo from './icons-animation'
import IconsWithTextDemo from './icons-text'

export const metadata: Metadata = {
  title: 'Cartzilla Docs | Icons',
}

const IconsDocsPage = () => (
  <>
    <section className="py-2 pb-sm-3">
      <Badge bg="info-subtle" text="info" pill className="fw-semibold py-2 px-3 mb-2">
        Cartzilla component
      </Badge>
      <h1 className="pt-1">Icons</h1>
      <p className="text-body-secondary mb-4">
        A collection of vector icons available in font format. The respective CSS class is listed below each icon.
      </p>
    </section>
    <IconsUIDemo />
    <IconsBrandDemo />
    <IconsAnimationDemo />
    <IconsWithTextDemo />
  </>
)

export default IconsDocsPage
